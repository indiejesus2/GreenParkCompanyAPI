import React, { useState, useEffect } from 'react'

export default function Profile(props) {

    // debugger

    // First Name, Last Name, Location(Zipcode), Phone, Job Type(FT, PT, ...etc), Schedule (M-F, WKND), Job History, Education, Skills, Military Service, Certficates

    const [state, setState] = useState({
        id: props.profile.id,
        employee_id: props.profile.employee_id,
        fname: props.profile.fname,
        lname: props.profile.lname,
        zipcode: props.profile.zipcode,
        phone: props.profile.phone,
        status: props.profile.status,
        jobType: props.profile.jobType,
        schedule: props.profile.schedule,
        education: props.profile.education,
        history: props.profile.history,
        skills: props.profile.skills,
        military: props.profile.military,
        certificates: props.profile.certificates,
        description: props.profile.description
    })

    // const [
        // jobType, setJobType] = useState([
    //     {id: 1, value: 'ft', isChecked: false},
    //     {id: 2, value: 'pt', isChecked: false},
    //     {id: 3, value: 'contract', isChecked: false},
    //     {id: 4, value: 'temporary', isChecked: false},
    // ])

    const handleChange = (event) => {
        const {name, value}  = event.target
        console.log(event.target)
        setState( prevState => ({
            ...prevState,
            [name] : value
        }))
        console.log(state)
    }

    const handleJob = (e) => {
        if (e.target.checked === true) {
            setState( prevState => ({
                ...prevState,
                jobType: [...state.jobType, {[e.target.id]: e.target.value}]
            }))
            // setJobType([...jobType, e.target.value])
        } else {
            let group = state.jobType
            let deleted = group.findIndex(job => Object.keys(job)[0] == e.target.id)
            group.splice(deleted, 1)
            debugger
            setState( prevState => ({
                ...prevState,
                jobType: [...state.jobType, ...group]
            }))
            // debugger
        }
        // debugger
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // let state = {email: email, password: password}
        props.updateProfile(state)
        props.history.push('/employees')
    }

    return (
        <div className="profile">
            <h1>Complete Profile</h1>
            <div className="input">
                <form onSubmit={handleSubmit} className="profile-form">
                    <div className="basic-info">
                        <label htmlFor="first name">First Name: </label>
                        <input type="text" name="fname" value={state.fname} onChange={handleChange} />
                        <br />
                        <label htmlFor="last name">Last Name: </label>
                        <input type="text" name="lname" value={state.lname} onChange={handleChange} />
                        <br />
                        <label htmlFor="zipcode">Zipcode: </label>
                        <input type="text" name="zipcode" value={state.zipcode} onChange={handleChange} />
                        <br />
                        <label htmlFor="phone">Phone: </label>
                        <input type="text" name="phone" value={state.phone} onChange={handleChange} />
                        <br />
                        <label htmlFor="status">Status: </label>
                        <input type="radio" name="status" id="status" value="authorized" onChange={handleChange} /> Authorized to work in the US for any employer
                        <br />
                        <input type="radio" name="status" id="status" value="sponsorship" onChange={handleChange} /> Sponsorship required to work in the US
                        <br />
                        <input type="radio" name="status" id="status" value="unknown" onChange={handleChange} /> Not specified
                        <br />
                    </div>
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
                    <div className="education">
                        <label htmlFor="education">Education: </label>
                        <select name="education" id="education" onChange={handleChange}>
                            <option value="">--</option>
                            <option value="hs">High-School</option>
                            <option value="ged">GED</option>
                            <option value="sc">Some College</option>
                            <option value="BA">BA</option>
                            <option value="BS">BS</option>
                            <option value="MA">MA</option>
                            <option value="MS">MS</option>
                        </select>    
                    </div>
                    <div className="history">
                        <h5>Work History</h5>
                    </div>
                    <div className="submit">
                        <input type="submit" value="Edit Profile" />
                    </div>
                </form>
            </div>
        </div>
    )

}