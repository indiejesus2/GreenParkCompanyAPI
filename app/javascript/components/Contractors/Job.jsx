import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

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
        const applicants = job.applicants.sort(applicant => applicant.rating)
        const profiles = job.profiles.length > 0 ? job.profiles : []
        const sort = () => {
            let sorted = profiles.map(profile => {
            for (let i = 0; i<applicants.length;i++) {
                    if (profile.id == applicants[i].employee_id) {
                        return profile
                    }
                }
            })
            return sorted
        }
        if (props.loading === true) {
            return (
            <div className="spinner">
                <span className="sr-only">Loading...</span>
            </div>
            )
        } else {
            return (
                <div className="job">
                    <Card.Header>
                    <img src="/images/noun_electric_3108716.png" alt="Electric" />
                        <h1>{job.title}</h1>
                        <br />
                    <Link to={`/contractors/${job.employer_id}/jobs/${job.id}/editjob`}>Edit Job</Link>
                    </Card.Header>
                    <Card.Subtitle>{job.city}, {job.state}</Card.Subtitle>
                    <Card.Text>Job Type: {job.jobtype.join(", ")}</Card.Text>
                    <Card.Text>Schedule: {job.schedule.join(", ")}</Card.Text>
                    <Card.Text>Shifts: {job.shifts.join(", ")}</Card.Text>
                    <Card.Text>Season: {job.seasonstart} - {job.seasonend} </Card.Text>
                    <Card.Text>Pay Range: {job.minpay} - {job.maxpay}</Card.Text>
                    <Card.Text>{job.description}</Card.Text>
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
                        {sort().map(candidate => 
                            <div id={candidate.id} key={candidate.id}>
                                <Link to={`/contractors/${job.employer_id}/jobs/${job.id}/employees/${candidate.employee_id}`}>
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