import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const Applicants = (props) => {

    const [state, setState] = useState({
        jobtype: false,
        schedule: false,
        shifts: false,
        applicants: props.job.applicants.sort(applicant => applicant.rating),
        profiles: props.job.profiles.length > 0 ? props.job.profiles : []
    })

    const original = state.profiles.map(profile => {
        for (let i = 0; i<state.applicants.length;i++) {
                if (profile.id == state.applicants[i].employee_id) {
                    return profile
                }
        }
    })

    const [candidates, setCandidates] = useState(original)
    
    const handleSearch = (e) => {
        e.preventDefault()
        let filtered = []
        Object.entries(state).map(function([k, v]) {
            if (v == true) {
                state.profiles.map(function(profile) {
                    props.job[k].map(function(i) {
                        if (profile[k].includes(i)) {
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

    const handleClear = (e) => {
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
        <Form.Control as="select" name="proximity" id="proximity" onChange={handleChange}> Proximity
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
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
            <div id={candidate.id} key={candidate.id}>
            <Link to={`/contractors/${props.job.employer_id}/jobs/${props.job.id}/employees/${candidate.employee_id}`}>
            <h3>{candidate.fname} {candidate.lname}</h3>
            </Link>
            </div>
        )}
        </div>
        </div>
                </div>
    )
    
}

export default Applicants