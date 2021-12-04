import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'
import EmployeeProfile from './EmployeeProfile'

const Applicants = (props) => {
    
    const matches = () => {
        if (!!props.contractor) {
            let applicants = []
            props.jobs.map(function(job) {
                if(!applicants.some(apple => apple.id == job.id)) {
                    applicants.push(job.applicants)  
                }
            })
            debugger
            return applicants
        } else {
            return props.job.applicants.sort(applicant => applicant.rating)
        }
    }
    
    const applications = () => {
        if (!!props.contractor) {
            let application = []
            props.jobs.map(function(job) {
                job.profiles.map(function(applicant) {
                    if (!application.some(apple => apple.id == applicant.id)) {
                        application.push(applicant)
                    }
                })
            })
            return application
        } else {
            return props.job.profiles
        }
    }
    
    
    const [applicants, setApplicants] = useState(matches())
    const [jobs, setJob] = useState(props.job?props.job:props.jobs)
    const [profiles, setProfiles] = useState(applications())

    debugger 

    const original = profiles.map(profile => {
        let oObj = {
            info: '',
            rating: '',
            distance: '',
        }
        for (let i = 0; i<applicants.length;i++) {
                if (profile.id == applicants[i].employee_id) {
                    oObj.info = profile,
                    oObj.rating = applicants[i].rating,
                    oObj.distance = applicants[i].distance
                }
        }
        debugger
        return oObj
    })

    const [show, setShow] = useState(false)
    const [applicant, setApplicant] = useState("")
    const [candidates, setCandidates] = useState(original)
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = (candidate) => {
        setApplicant(candidate)
        setShow(true);
    }
    
    // useEffect(() => {
    //     setJob(props.job) 
    //     setApplicants(props.job.applicants.sort(applicant=>applicant.rating))
    //     setProfiles(props.job.profiles)
    //     setCandidates(original)
    // })

    const handleMatches = (profile) => {
        let matches = {}
        if (jobs.length < 1) {
            debugger
            jobs.map(function(job) {

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
            })}
        return matches
    }

    const jobMatch = (profile) => {
        if (jobs.length==1) {
            handleMatches(profile, jobs[0])
        } else if (jobs.length>1) {
            jobs.map(job => handleMatches(profile, job))
        }
    }

    
    const [state, setState] = useState({
        jobtype: false,
        schedule: false,
        shifts: false,
    })
    
    const handleSearch = (e) => {
        e.preventDefault()
        let filtered = []
        Object.entries(state).map(function([k, v]) {
            if (v == true) {
                original.map(function(profile) {
                    job[k].map(function(i) {
                        if (profile.info[k].includes(i) && !filtered.includes(profile)) {
                                filtered.push(profile)
                        }
                    })
                })
            }
        })
        setCandidates(filtered)
    }

    const handleChange = (e) => {
        const {name, checked}  = e.target
        setState( prevState => ({
            ...prevState,
            [name] : checked
        }))
    }

    const handleLocation = (e) => {
        const candidates = original.map(function(profile) {
            if (profile.distance <= e.target.value) {
                return profile
            }
        })
        setCandidates(candidates)
    }

    const handleClear = () => {
        setCandidates(original)
    }
    
    return (
        <div className="applicants">
        <div className="search">
            <Form onSubmit={handleSearch}>
            <label htmlFor="search">Search Candidates: </label>
        <Form.Check inline name="jobtype" id="jobtype" label="Job Type" value={state.jobtype} onChange={handleChange}/> 
        <Form.Check inline name="schedule" id="schedule" value={state.schedule} label="Schedule" onChange={handleChange}/> 
        <Form.Check inline name="shifts" id="shifts" label="Shifts" value={state.shifts} label="Shifts" onChange={handleChange}/>
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
        <Form.Control as="select" name="proximity" id="proximity" onChange={handleLocation}> Proximity
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
        </div>
        {/* <Form.Label>
            Minimum Pay Rate: 
        </Form.Label>
        <Form.Control type="text" name="minpay" onChange={props.handleChange} />
        <Form.Label>
            Maximum Pay Rate: 
        </Form.Label>
        <Form.Control type="text" name="maxpay" onChange={props.handleChange} /> */}
        <div className="candidates">
        {candidates.map(candidate => 
            <Card id={candidate.info.id} key={candidate.info.id} >
                <Card.Title>
                    {/* <Link to={`/contractors/${props.job.employer_id}/jobs/${props.job.id}/employees/${candidate.info.employee_id}`}> */}
                        <h3>{candidate.info.fname} {candidate.info.lname}</h3>
                    {/* </Link> */}
                </Card.Title>
                    <Card.Subtitle>{candidate.info.city}, {candidate.info.state}</Card.Subtitle>
                      <Card.Text>Match Score: {candidate.rating}</Card.Text>
                      <div className="matches">
                        {Object.entries(jobMatch(candidate.info)).map(([key, value]) =>
                            <Card.Text style={{ marginBlockEnd: 1 + `px`}}>{key}: {value}</Card.Text>
                            )}
                        </div>
                      <Button onClick={() => handleShow(candidate)}>View Profile</Button>
                {/* <Card.Body>
                </Card.Body> */}
                </Card>
                )}
                <EmployeeProfile 
                show={show}
                candidate={applicant}
                handleClose={handleClose}
                />
        </div>
                </div>
    )
    
}

export default Applicants