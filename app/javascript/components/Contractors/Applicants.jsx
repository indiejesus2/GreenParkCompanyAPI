import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'

const Applicants = (props) => {
    
    const [job, setJob] = useState(props.job)
    
    useEffect(() => {
        setJob(props.job)
    })
    
    const [state, setState] = useState({
        jobtype: false,
        schedule: false,
        shifts: false,
        applicants: job.applicants.sort(applicant => applicant.rating),
        profiles: job.profiles.length > 0 ? props.job.profiles : []
    })

    const original = state.profiles.map(profile => {
        let oObj = {
            info: '',
            rating: '',
            distance: '',
        }
        for (let i = 0; i<state.applicants.length;i++) {
                if (profile.id == state.applicants[i].employee_id) {
                    oObj.info = profile,
                    oObj.rating = state.applicants[i].rating,
                    oObj.distance = state.applicants[i].distance
                }
        }
        return oObj
    })


    const [candidates, setCandidates] = useState(original)
    
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
        <div className="candidates">
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
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={75}>75</option>
            <option value={100}>100</option>
        </Form.Control>
        <Button onClick={handleClear}> Clear </Button>
        <Button type="submit"> Search </Button>
        {/* <Form.Label>
            Minimum Pay Rate: 
        </Form.Label>
        <Form.Control type="text" name="minpay" onChange={props.handleChange} />
        <Form.Label>
            Maximum Pay Rate: 
        </Form.Label>
        <Form.Control type="text" name="maxpay" onChange={props.handleChange} /> */}
            </Form>
        <div>
        {candidates.map(candidate => 
            <Card id={candidate.info.id} key={candidate.info.id} bg="info" style={{width: '18rem'}}>
                <Card.Title>
                    <Link to={`/contractors/${props.job.employer_id}/jobs/${props.job.id}/employees/${candidate.info.employee_id}`}>
                        <h3>{candidate.info.fname} {candidate.info.lname}</h3>
                    </Link>

                </Card.Title>
                <Card.Body>
                      <Card.Subtitle>{candidate.info.city}, {candidate.info.state}</Card.Subtitle>
                      <Card.Text>{candidate.rating}</Card.Text>
                </Card.Body>
                </Card>
        )}
        </div>
        </div>
                </div>
    )
    
}

export default Applicants