import React, { useState, useEffect } from 'react'

export default function EditProfile(props) {


    // First Name, Last Name, Location(Zipcode), Phone, Job Type(FT, PT, ...etc), Schedule (M-F, WKND), Job History, Education, Skills, Military Service, Certficates

    const [state, setState] = useState({
        id: props.profile.id,
        employee_id: props.profile.employee_id,
        fname: props.profile.fname,
        lname: props.profile.lname,
        city: props.profile.city,
        state: props.profile.state,
        phone: props.profile.phone,
        status: props.profile.status,
        jobType: props.profile.jobType,
        schedule: props.profile.schedule,
        skills: props.profile.shifts,
        description: props.profile.description,
        work_histories: props.work_histories ? props.work_histories : []
    })

    const handleChange = (event) => {
        const {name, value}  = event.target
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
            setState( prevState => ({
                ...prevState,
                [e.target.name]: group
            }))
        }
    }

    const handleHistory = (e) => {
        let work_histories = state.work_histories
        work_histories[e.target.name] = e.target.value
        setState( prevState => ({
            ...prevState,
            work_histories : work_histories
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateProfile(state)
        props.history.push('/employees')
    }

    const handleSelection = (event) => {
        debugger
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
                        <label htmlFor="city">City: </label>
                        <input type="text" name="city" value={state.city} onChange={handleChange} />
                        <br />
                        <label htmlFor="state">State: </label>
                        <input type="text" name="state" value={state.state} onChange={handleChange} />
                        <br />
                        <label htmlFor="phone">Phone: </label>
                        <input type="text" name="phone" value={state.phone} onChange={handleChange} />
                        <br />
                        <label htmlFor="Description">Description: </label>
                        <input type="textarea" name="description" value={state.description} value={state.description} onChange={handleChange} />
                        <br />
                    </div>
                    <div className="work-schedule">
                        <label htmlFor="job type">Job Type: </label>
                        {/* {state.jobType.map(work => 
                    
                    
                    )} */}
                    <input type="checkbox" label="Full Time" name="jobType" value="ft" id='1' onChange={handleJob} />
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
                        <div >

                        <label htmlFor="Job Title">Job Title: </label>
                        <input type="text" name="title" id={state.work_histories.id} value={state.work_histories.title} onChange={handleHistory} />
                        <br />
                        <label htmlFor="Company">Company: </label>
                        <input type="text" name="company" id={state.work_histories.id} value={state.work_histories.company} onChange={handleHistory} />
                        <br />
                        <label htmlFor="city">City: </label>
                        <input type="text" name="city" id={state.work_histories.id} value={state.work_histories.city} onChange={handleHistory} />
                        <br />
                        <label htmlFor="state">State: </label>
                        <input type="text" name="state" id={state.work_histories.id} value={state.work_histories.state} onChange={handleHistory} />
                        <br />
                        <label htmlFor="phone">Phone: </label>
                        <input type="text" name="phone" id={state.work_histories.id} value={state.work_histories.phone} onChange={handleHistory} />
                        <br />
                        <label htmlFor="startdate">Start Date: </label>
                        <input type="text" name="startdate" id={state.work_histories.id} value={state.work_histories.startdate} onChange={handleHistory} />
                        <br />
                        <label htmlFor="enddate">End Date: </label>
                        <input type="text" name="enddate" id={state.work_histories.id} value={state.work_histories.enddate} onChange={handleHistory} />
                        <label htmlFor="current">Current Job: </label>
                        <input type="checkbox" name="current" id={state.work_histories.id} value={state.work_histories.current} onChange={handleHistory} />
                        <br />
                        <label htmlFor="Description">Description: </label>
                        <input type="text" name="description" id={state.work_histories.id} value={state.work_histories.description} onChange={handleHistory} />
                        <br />

                        </div>
                        
                        <button onClick={handleHistory}>Add Experience</button>
                    </div>
                    <div className="submit">
                        <input type="submit" value="Edit Profile" />
                    </div>
                </form>
            </div>
        </div>
    )

}