import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Card, Table } from 'react-bootstrap'
import NavBar from '../NavBar'
import SideNavBar from '../SideNavBar'
import EmployeeProfile from './EmployeeProfile'

const Applicant = (props) => {
       
    const [applicants, setApplicants] = useState(props.applicants)
    const [jobs, setJobs] = useState(props.jobs)
    const [job, setJob] = useState([])
    const [currentStep, setStep] = useState(1)

    const size = useWindowSize();

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined
        });

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            
            window.addEventListener("resize", handleResize);
            
            handleResize();
            
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return windowSize;
    }

    useEffect(() => {
        if (applicants != props.applicants){
            setApplicants(props.applicants)
        }
    });
    
    const applications = () => {
        let profiles = []
        if (!!jobs) {
            jobs.map(job => {
                job.profiles.map(function(profile) {
                    if (!profiles.some(apple => apple.id == profile.id)) {
                        profiles.push(profile)
                    } 
                })
            })
        }
        return profiles
    }
    
    const [profiles, setProfiles] = useState(applications())

    const original = profiles.map(profile => {
        let oObj = {
            info: '',
            application: ''
            // rating: '',
            // distance: '',
            // interested: false
        }
        let candidate = applicants.find(applicant => applicant.employee_id == profile.employee_id)
        let applied = applicants.filter(applicant => applicant.interested == true)
            if (!!candidate && applied.some(applicant => applicant.employee_id == candidate.employee_id)) {
                oObj.info = profile,
                oObj.application = candidate
                // oObj.rating = candidate.rating,
                // oObj.distance = candidate.distance
                // oObj.interested = true
            } else if (!!candidate) {
                oObj.info = profile,
                oObj.application = candidate
                // oObj.info = profile,
                // oObj.rating = candidate.rating,
                // oObj.distance = candidate.distance
                // oObj.interested = candidate.interested
            }
        return oObj
    })
    
    const [applicant, setApplicant] = useState("")
    const [candidates, setCandidates] = useState(original)
    
    const handleClose = () => {
        setStep(1)
    }

    const handleApplicant = (candidate) => {
        setApplicant(candidate)
        setJob(jobs.filter(job => job.id == candidate.application.job_id))
        setStep(2);
    }

    const handleApplicants = () => {
        if (currentStep == 1) {
            return (
                <div className="employees-jobs">
                    {header()}
                    {candidates.map(candidate => 
                    <Card id={candidate.info.id} key={candidate.info.id} >

                        <Card.Body className="d-flex">
                            {handleTable(candidate)}
                    <div className="employee-jobs-buttons">
                        <Button onClick={() => handleApplicant(candidate)}>Details</Button>
                        <Button onClick={() => handleContact(candidate)}>Contact</Button>                                        
                    </div>
                      </Card.Body>
                </Card>
                )}
                </div>
                // <Applicants job={job} contractor={props.contractor} editApplicant={props.editApplicant} handleApplicant={handleApplicant} />
            )
        } else if (currentStep == 2) {
            return (
                <EmployeeProfile 
                candidate={applicant.info}
                application={applicant.application}
                editApplicant={props.editApplicant}
                handleClose={handleClose}
                handleContact={handleContact}
                currentStep={currentStep}
                contractor={props.contractor}
                files={props.files}
                job={job}
                />
            )
        }
    }

    const handleMatches = (profile) => {
        let matches = {}
            let job = jobs.filter(job=>job.employees.filter(employee=>employee.id==profile.employee_id))[0]
                job.jobtype.map(function(type) {
                    if (profile.jobtype.includes(type)) {
                        matches["Jobtype"] = profile.jobtype.join(", ")
                    }
                })
                job.schedule.map(function(day) {
                    if (profile.schedule.includes(day)) {
                        matches["Schedule"] = profile.schedule.join(", ")
                    }
                })
                job.shifts.map(function(shift) {
                    if (profile.shifts.includes(shift)) {
                        matches["Shifts"] = profile.shifts.join(", ")
                    }
                })
                if (job.minpay < profile.minpay) {
                    matches[`Starting ${profile.paytype == "Hourly" ? "Pay":"Salary"}`] = `${profile.minpay}`
                }
                if (job.seasonstart == profile.seasonstart || job.seasonend == profile.seasonend) {
                    matches["Season"] = `${profile.seasonstart} - ${profile.seasonend}`
                }
                if (job.license == profile.license) {
                    matches["License"] = "Yes"
                } 
        return matches
    }

    const rate = (rating) => {
        if (rating == 6 || rating == 5) {
            return (
                <span>
                    {String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734)}
                </span>
            )
        } else if (rating == 4) {
            return (
                <span>
                    {String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734)}
                </span>
            )
        } else if (rating == 3) {
            return (
                <span>
                    {String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734)}
                </span>
            )
        } else if (rating == 2) {
            return (
                <span>
                    {String.fromCharCode(9734) + String.fromCharCode(9734)}
                </span>
            )
        } else if (rating == 1) {
            return (
                <span>
                    {String.fromCharCode(9734)}
                </span>
            )
        }
    }
    
    const [state, setState] = useState({
        jobtype: false,
        schedule: false,
        shifts: false,
    })

    const handleApplied = (e) => {
        let filtered = []
        Object.entries(candidates).map(function([info, applicant]) {
            if(applicant.application.interested == true) {
                filtered.push(applicant)
            }
        })
        if (e.currentTarget.checked == true) {
            setCandidates(filtered)
        } else {
            setCandidates(original)
        }
    }
    
    // const handleSearch = (e) => {
    //     e.preventDefault()
    //     let filtered = []
    //     Object.entries(state).map(function([k, v]) {
    //         if (v == true) {
    //             original.map(function(profile) {
    //                 job[k].map(function(i) {
    //                     if (profile.info[k].includes(i) && !filtered.includes(profile)) {
    //                             filtered.push(profile)
    //                     }
    //                 })
    //             })
    //         }
    //     })
    //     setCandidates(filtered)
    // }

    // const handleChange = (e) => {
    //     const {name, checked}  = e.target
    //     setState( prevState => ({
    //         ...prevState,
    //         [name] : checked
    //     }))
    // }

    // const handleLocation = (e) => {
    //     const candidates = original.map(function(profile) {
    //         if (profile.distance <= e.target.value) {
    //             return profile
    //         }
    //     })
    //     setCandidates(candidates)
    // }

    // const handleClear = () => {
    //     setCandidates(original)
    // }
    const header = () => {
        if (candidates.length==0) {
            return (
                <div className="newemployer" style={{paddingInline: 15+"px"}}>
                    <h1>Future Applicants</h1>
                    <h3>We're working hard to find applicants.</h3>
                </div>
            )
        } else {
            return (
                <div className="newemployer" style={{paddingInline: 15+"px"}}>
                    <h2>{candidates.length} {candidates.length<=1?"Applicant":"Applicants!"}</h2>
                    {handleApplications()}
                </div>
            )
        }
    }

    const handleContact = (candidate) => {
        let job = jobs.find(job=>job.id == candidate.application.job_id)
        let person = job.employees.find(employee => employee.id == candidate.info.employee_id)
        window.location.href = ("mailto:" + person.email + "?subject=" + job.title + " - " + props.contractor.name)        
    }

    const handleApplications = () => {
        let filtered = []
        Object.entries(candidates).map(function([info, applicant]) {
            if(applicant.application.interested == true) {
                filtered.push(applicant)
            }
        })
        if (filtered.length > 0) {
            return (
                    <div className='homeApplied'>
                        <input type="checkbox" id="applied" name="applied" value="applied" onChange={handleApplied}/>
                        <label htmlFor="applied">Applied Candidates</label>
                    </div>
            )
        }
    }

    const handleInterest = (candidate) => {
        if (candidate.interested == true) {
            return (
                <div style={{ display: "contents"}}>
                    {String.fromCharCode(9989)} Applied!
                </div>
            )
        }
    }

    const handleJob = (application) => {
        let job = jobs.find(job=>job.id==application.job_id)
        return (
            <span>
                Job Title: {job.title}
            </span>
        )
    }

    const handleTable = (candidate) => {
        if (size.width > 580) {
            return (
                <Table style={{ "marginBottom": 2.5 + "px"}}>
                    <tbody>
                        <tr>
                            <td id="table-header" style={{ "border-bottom-width": 0 + "px", "border-right": 2 + "px solid white"}}>
                                Name: {candidate.info.fname} {candidate.info.lname}
                            </td>
                            <td id="table-header-rating" style={{ "border-bottom-width": 0 + "px"}}>Rating:
                                {rate(candidate.application.rating)}
                            </td>
                        </tr>
                        <tr>
                            <td id="table-header-title" style={{ "border-bottom-width": 0 + "px", "border-right": 2 + "px solid white"}}>Job Title:<span></span>
                                {handleJob(candidate.application)}
                            </td>
                            <td id="table-header-location" style={{ "border-bottom-width": 0 + "px"}}>
                                Distance:{Math.round(candidate.application.distance)} Miles
                            </td>
                        </tr>
                     </tbody>
                </Table>
            )
        } else {
            return (
                <Table style={{ "marginBottom": 2.5 + "px"}}>
                    <tbody>
                        <tr>
                            <td id="table-header" style={{ "border-bottom-width": 0 + "px"}}>
                                Name: {candidate.info.fname} {candidate.info.lname}
                            </td>
                        </tr>
                        <tr>
                            <td id="table-header-rating" style={{ "border-bottom-width": 0 + "px"}}>Rating:
                                {rate(candidate.application.rating)}
                            </td>
                        </tr>
                        <tr>
                            <td id="table-header-title" style={{ "border-bottom-width": 0 + "px"}}>Job Title:<span></span>
                                {handleJob(candidate.application)}
                            </td>
                        </tr>                        
                        <tr>
                            <td id="table-header-location" style={{ "border-bottom-width": 0 + "px"}}>
                                Distance:{Math.round(candidate.application.distance)} Miles
                            </td>
                        </tr>
                     </tbody>
                </Table>
            )
        }
    }

    // if(currentStep !== 1) {
    //     return null
    // }
    
    
    return (
        <div className="employees">
            <NavBar handleSignout={props.signOut} contractor={props.contractor} loggedIn={props.loggedIn} user="contractor" />
                <div className="page">
                <SideNavBar contractor={props.contractor} user="contractor"/>
                    <div className="dashboard">
                        <div className="applicants">
                                {handleApplicants()}
            
        {/* <div className="search">
            <Form onSubmit={handleSearch}>
            <label htmlFor="search">Search Candidates: </label>
        <Form.Check inline name="jobtype" id="jobtype" label="Job Type" value={state.jobtype} onChange={handleChange}/> 
        <Form.Check inline name="schedule" id="schedule" value={state.schedule} label="Schedule" onChange={handleChange}/> 
        <Form.Check inline name="shifts" id="shifts" label="Shifts" value={state.shifts} label="Shifts" onChange={handleChange}/> */}
        {/* <Form.Control name="seasonstart" id="seasonstart" value="seasonstart" label="Season Start" onChange={handleChange}> 
            {months.map(month => 
                <option value={month}>{month}</option>
            )}
        </Form.Control>
        <Form.Control name="seasonend" id="seasonend" value="seasonend" label="Season End" onChange={handleChange}> 
            {months.map(month => 
                <option value={month}>{month}</option>
            )}
        </Form.Control> */}
        {/* <Form.Control as="select" name="proximity" id="proximity" onChange={handleLocation}> Proximity
            <option value={25}>25 Miles</option>
            <option value={50}>50 Miles</option>
            <option value={75}>75 Miles</option>
            <option value={100}>100 Miles</option>
        </Form.Control>
        <div className="search-buttons">
            <Button onClick={handleClear}> Clear </Button>
            <Button type="submit"> Search </Button>
        </div>
        </Form>
        </div> */}
        {/* <Form.Label>
            Minimum Pay Rate: 
        </Form.Label>
        <Form.Control type="text" name="minpay" onChange={props.handleChange} />
        <Form.Label>
            Maximum Pay Rate: 
        </Form.Label>
        <Form.Control type="text" name="maxpay" onChange={props.handleChange} /> */}

{/* <div className="candidates">
 */}
    
                
                </div>
            </div>
        </div>
    </div>
    )
    
}

export default Applicant