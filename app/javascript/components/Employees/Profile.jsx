import React, { useState, useEffect } from 'react'

export default function Profile(props) {

    // First Name, Last Name, Location(Zipcode), Phone, Job Type(FT, PT, ...etc), Schedule (M-F, WKND), Job History, Education, Skills, Military Service, Certficates

    const [state, setState] = useState({
        fname : "",
        lname: "",
        location: "",
        phone: "",
        status: "",
        jobType: "",
        schedule: "",
        education: "",
        history: "",
        skills: "",
        military: "",
        certificates: "",
        description: ""
    })

    const handleChange = (event) => {
        const {name, value}  = event.target
        setState( prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // let state = {email: email, password: password}
        props.updateEmployee(state)
        props.history.push('/employees/profile')
    }

    return (
        <div className="profile">
            <h1>Complete Profile</h1>
            <div className="input">
                <form onSubmit={handleSubmit} className="profile-form">
                    <div className="basic-info">
                        <label htmlFor="first name">First Name: </label>
                        <input type="text" name="fname" id="fname" onChange={handleChange} />
                        <br />
                        <label htmlFor="last name">Last Name: </label>
                        <input type="text" name="lname" id="lname" onChange={handleChange} />
                        <br />
                        <label htmlFor="location">Zipcode: </label>
                        <input type="text" name="location" id="location" onChange={handleChange} />
                        <br />
                        <label htmlFor="phone">Phone: </label>
                        <input type="text" name="phone" id="phone" onChange={handleChange} />
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
                        <input type="checkbox" name="jobType" value="ft" onChange={handleChange} /> Full-time
                        <input type="checkbox" name="jobType" value="pt" onChange={handleChange} /> Part-time
                        <input type="checkbox" name="jobType" value="contract" onChange={handleChange} /> Contract
                        <input type="checkbox" name="jobType" value="temporary" onChange={handleChange} /> Temporary
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
                        <select name="education" id="education">
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
                </form>
            </div>
        </div>
    )

}