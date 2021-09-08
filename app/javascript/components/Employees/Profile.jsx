import React, { useState, useEffect } from 'react'

export default function Profile(props) {

    // First Name, Last Name, Location(Zipcode), Phone, Job Type(FT, PT, ...etc), Schedule (M-F, WKND), Job History, Education, Skills, Military Service, Certficates

    const [fname, setFname] = useState()
    const [lname, setlname] = useState()
    const [location, setLocation] = useState()
    const [phone, setPhone] = useState()
    const [jobType, setJobType] = useState()
    const [schedule, setSchedule] = useState()
    const [education, setEducation] = useState()
    const [history, setHistory] = useState()
    const [skills, setSkills] = useState()
    const [military, setMilitary] = useState()
    const [certificates, setCertificates] = useState()

    const handleChange = (event) => {
        return (
            // event.target.name==="name"?setName(event.target.value):
            event.target.name==="email"?setEmail(event.target.value):
            event.target.name==="password"?setPassword(event.target.value):
            ()=>{}
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let state = {email: email, password: password}
        props.signUpEmployee(state)
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
                    </div>
                </form>
            </div>
        </div>
    )

}