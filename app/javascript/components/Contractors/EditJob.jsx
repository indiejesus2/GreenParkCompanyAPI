import React, { useState, useEffect } from 'react'

export default function EditJob(props) {


    const job = props.jobs.find(job => job.id == props.match.params.job_id)

    const [state, setState] = useState({
        id: job.id,
        employer_id: job.employer_id,
        title: job.title,
        city: job.city,
        state: job.state,
        jobType: job.jobType,
        schedule: job.schedule,
        skills: job.skills,
        certificates: job.certificates,
        description: job.description
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
                    [e.target.name]: [...state[e.target.name], e.target.value]
                }))
        } else {
            let group = state[e.target.name]
            let deleted = group.findIndex(job => Object.keys(job)[0] == e.target.id)
            group.splice(deleted, 1)
            if (e.target.name === "jobType") {
                setState( prevState => ({
                    ...prevState,
                    [e.target.name] : group
                }))
            }
        }
    }

    const handleSkills = (e) => {
        e.preventDefault()
        let skill = e.target.previousElementSibling.value
        setState( prevState => ({
            ...prevState,
            skills: [...state.skills, skill]
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.editJob(state)
        props.history.push(`/contractors/${state.employer_id}/jobs/${state.id}`)
    }

    return (
        <div className="addJob">
            <h1>New Job</h1>
            <div className="input">
                <form onSubmit={handleSubmit} className="addJob-form">
                    <label>Title: </label>
                    <input type="text" name="title" id="title" onChange={handleChange} value={state.title}/>
                    <br />
                    <label>City: </label>
                    <input type="text" name="city" id="city" onChange={handleChange} value={state.city}/>
                    <br />
                    <label>State: </label>
                    <input type="text" name="state" id="state" onChange={handleChange} value={state.state} />
                    <br />
                    <label>Description: </label>
                    <input type="textarea" name="description" id="description" onChange={handleChange} value={state.description} />
                    <br />
                    <div className="work-schedule">
                        <label htmlFor="job-type">Job-Type: </label>
                        <input type="checkbox" name="jobType" value="ft" id='1' onChange={handleJob} /> Full-time
                        <input type="checkbox" name="jobType" value="pt" id='2' onChange={handleJob} /> Part-time
                        <input type="checkbox" name="jobType" value="contract" id='3' onChange={handleJob} /> Contract
                        <input type="checkbox" name="jobType" value="temporary" id='4' onChange={handleJob} /> Temporary
                        <br />
                        <label htmlFor="schedule">Schedule: </label>
                        <input type="checkbox" name="schedule" value="M-F" onChange={handleJob}/>
                        M-F
                        <input type="checkbox" name="schedule" value="Weekends" onChange={handleJob}/>
                        Weekends
                        <input type="checkbox" name="schedule" value="Overnight" onChange={handleJob}/>
                        Overnight
                        <input type="checkbox" name="schedule" value="Holidays" onChange={handleJob}/>
                        Holidays
                    </div>
                    <div className="skills">
                    <label>Skills: </label>
                    {state.skills.map(skill =>
                    <span key={skill.id}>{skill} </span>
                    )}
                    <input type="text" name="skills" id="skills"/>
                    <button onClick={handleSkills}>Add Skill</button>
                    <br />
                    </div>
                    <div className="submit">
                        <input type="submit" value="Add Job" />
                    </div>
                </form>
            </div>
        </div>
    )
}