import React, { useState } from 'react'

export default function AddJob(props) {

    const [state, setState] = useState({
        employer_id: props.contractor.id,
        title: "",
        location: "",
        jobType: [],
        schedule: [],
        skills: [],
        certificates: [],
        description: []
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setState( prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleJob = (e) => {
        if (e.target.checked === true) {
            setState( prevState => ({
                ...prevState,
                jobType: [...state.jobType, {id: e.target.id, value: e.target.value}]
            }))
        } else {
            let group = state.jobType
            let deleted = group.findIndex(job => Object.keys(job)[0] == e.target.id)
            group.splice(deleted, 1)
            setState( prevState => ({
                ...prevState,
                jobType: group
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // props.addJob()
        // props.history.push('/jobs')
    }

    return (
        <div className="addJob">
            <h1>New Job</h1>
            <div className="input">
                <form onSubmit={handleSubmit} className="addJob-form">
                    <label>Title: </label>
                    <input type="text" name="title" id="title" onChange={handleChange} />
                    <br />
                    <label>Location: </label>
                    <input type="text" name="location" id="location" onChange={handleChange} />
                    <br />
                    <div className="work-schedule">
                        <label htmlFor="job-type">Job-Type: </label>
                        <input type="checkbox" name="jobType" value="ft" id='1' onChange={handleJob} /> Full-time
                        <input type="checkbox" name="jobType" value="pt" id='2' onChange={handleJob} /> Part-time
                        <input type="checkbox" name="jobType" value="contract" id='3' onChange={handleJob} /> Contract
                        <input type="checkbox" name="jobType" value="temporary" id='4' onChange={handleJob} /> Temporary
                        <br />
                        <label htmlFor="schedule">Schedule: </label>
                        <input type="checkbox" name="schedule" value="M-F" onChange={handleChange}/>
                        M-F
                        <input type="checkbox" name="schedule" value="Weekends" onChange={handleChange}/>
                        Weekends
                        <input type="checkbox" name="schedule" value="Overnight" onChange={handleChange}/>
                        Overnight
                        <input type="checkbox" name="schedule" value="Holidays" onChange={handleChange}/>
                        Holidays
                    </div>
                    <div className="submit">
                        <input type="submit" value="Add Job" />
                    </div>
                </form>
            </div>
        </div>
    )

}