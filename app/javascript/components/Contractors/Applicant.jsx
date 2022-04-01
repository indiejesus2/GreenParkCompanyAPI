import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Card, Table } from 'react-bootstrap'

const Applicant = (props) => {
       
    const [applicants, setApplicants] = useState(props.applicants)
    const [currentStep, setStep] = useState(props.currentStep)
    const [jobs, setJob] = useState(props.jobs)

    useEffect(() => {
        if (applicants != props.applicants){
            setApplicants(props.applicants)
        }
    });
    
    const applications = () => {
        let profiles = []
        jobs.map(job => {
            job.profiles.map(function(profile) {
                if (!profiles.some(apple => apple.id == profile.id)) {
                    profiles.push(profile)
                } 
            })
        })
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
    
    const [show, setShow] = useState(false)
    const [applicant, setApplicant] = useState("")
    const [candidates, setCandidates] = useState(original)
    const handleClose = () => {
        setShow(false);
    }
    const handleApplicant = (candidate) => {
        setApplicant(candidate)
        setStep(2);
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
                <div className="newemployer">
                    <h1>Future Applicants</h1>
                    <h3>We're working hard to find applicants.</h3>
                </div>
            )
        } else {
            return (
                <div className="newemployer">
                    <h1>{candidates.length} {candidates.length<=1?"Applicant":"Applicants!"}</h1>
                    {handleApplications()}
                </div>
            )
        }
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

    if(currentStep !== 1) {
        return null
    }
    
    
    return (
        <div className="applicants">
            {header()}
            
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
    <div className="employees-jobs">
        {candidates.map(candidate => 
            <Card id={candidate.info.id} key={candidate.info.id} >

            <Card.Body className="d-flex">
                        <Table style={{ "marginBottom": 2.5 + "px"}}>

                    {/* <div className="d-flex justify-content-between"> */}
                        {/* <Card.Title className="mb-2">{job.company}</Card.Title> */}
                        <tbody>

                        <tr>
                            <td id="table-header" style={{ "border-bottom-width": 0 + "px", "border-right": 2 + "px solid white"}}>
                                Name: {candidate.info.fname} {candidate.info.lname}
                                {/* Distance: */}
                            {/* </td>  */}
                            {/* <td id="table-value-top" style={{ "border-bottom-width": 0 + "px", }}> */}
                                
                                {/* {Math.round(applicants.find(applicant => applicant.job_id == job.id).distance)} Miles */}
                            </td>
                            <td id="table-header-rating" style={{ "border-bottom-width": 0 + "px"}}>Rating: 
                            {/* <td id="table-value-bottom" style={{ "border-bottom-width": 0 + "px"}}>  */}
                                {rate(candidate.application.rating)}
                            </td>
                        </tr>
                    {/* //    as="h2" */}
                        <tr>
                            <td id="table-header-title" style={{ "border-bottom-width": 0 + "px", "border-right": 2 + "px solid white"}}>Location: <span></span>
                            {/* </td> */}
                            {/* <td id="table-value-bottom" style={{ "border-bottom-width": 0 + "px", "border-right": 2 + "px solid white"}}> */}
                                {candidate.info.city}, {candidate.info.state}
                            </td>
                                {/* as="h5" */}
                            <td id="table-header-location" style={{ "border-bottom-width": 0 + "px"}}>
                                Distance: {Math.round(candidate.application.distance)} Miles
                                {/* Location: */}
                            {/* </td>
                            <td id="table-value-top" style={{ "border-bottom-width":  0 + "px"}}>  */}
                                
                            </td>

                            {/* </td> */}
                                {/* {job.city}, {job.state} */}
                        </tr>
                        {/* <tr>
                        </tr> */}
                         </tbody>
                        {/* </div> */}
                        </Table>
                {/* <Card.Title>
                    <h3 style={{ marginBottom: 0+"px"}}>{candidate.info.fname} {candidate.info.lname} </h3> 
                    <h4>{handleInterest(candidate.application)}</h4>
                </Card.Title> */}
                    {/* <Card.Subtitle>{candidate.info.city}, {candidate.info.state}</Card.Subtitle>
                    <Card.Subtitle as="h5">Rating: {rate(candidate.application.rating)}</Card.Subtitle>
                      <div className="matches">
                        {Object.entries(jobMatch(candidate.info)).map(([key, value]) =>
                            <Card.Text style={{ marginBlockEnd: 1 + `px`}}>{key}: {value}</Card.Text>
                            )}
                        </div> */}
                    <div className="employee-jobs-buttons">
                      <Button onClick={() => props.handleApplicant(candidate)}>Details</Button>
                      <Button onClick={() => handleShow(candidate)}>Contact</Button>
                    </div>
                      </Card.Body>
                </Card>
                )}

        </div>
                </div>
    )
    
}

export default Applicant