import React, {useState } from 'react'
import { Link } from 'react-router-dom'

const Job = props => {

    // handleSearch = (e) => {

    // }

    // handleChange = (e) => {

    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    // }

    const [state] = useState({

    })

        const job = props.jobs.find(job => job.id == props.match.params.job_id)
        const profiles = job.profiles.length > 0 ? job.profiles : []
        if (props.loading === true) {
            return (
            <div className="spinner">
                <span className="sr-only">Loading...</span>
            </div>
            )
        } else {
            return (
                <div className="job">
                    <h1>{job.title}</h1>
                    <p>{job.city}, {job.state}</p>
                    <p>{job.jobtype.join(", ")} {job.schedule.join(", ")} {job.skills.join(", ")} </p>
                    <p>{job.description}</p>
                    <div className="candidates">
                        {/* <div className="search">
                            <label htmlFor="search">Search Candidates</label>
                        <input type="checkbox" name="jobtype" id="jobtype" value="jobtype" onChange={handleSearch}/> Job Type
                        <input type="checkbox" name="schedule" id="schedule" value="schedule" onChange={handleSearch}/> Schedule
                        <input type="checkbox" name="skills" id="skills" value="skills" onChange={handleSearch}/> Skills
                        <input type="checkbox" name="certificates" id="certificates" value="certificates" onChange={handleSearch}/> Certificates
                        <select name="address" id="address" onChange={handleChange}> Address
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="75">75</option>
                            <option value="100">100</option>
                        </select> */}
                        {profiles.map(candidate => 
                            <div id={candidate.id} key={candidate.id}>
                                <Link to={`/contractors/employees/${candidate.employee_id}`}>
                                    <h3>{candidate.fname} {candidate.lname}</h3>
                                </Link>
                            </div>
                        )}
                        {/* </div> */}
                    </div>
                </div>
            )
        }
}

export default Job