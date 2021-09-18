import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Job extends Component {

    
    // componentDidMount() {
    //     let job = this.props.jobs.find(job => job.id == this.props.match.params.job_id)
    //     this.props.fetchJob(job)
    // }

    handleSearch = (e) => {

    }

    handleChange = (e) => {

    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        const job = this.props.jobs.find(job => job.id == this.props.match.params.job_id)
        const profiles = this.props.profiles.length > 0 ? this.props.profiles : []
        const candidates = profiles.map(profile => profile.attributes)
        if (this.props.loading === true) {
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
                    <p>{job.jobtype} {job.schedule} {job.skills} </p>
                    <p>{job.description}</p>
                    <div className="candidates">
                        <div className="search">
                            <label htmlFor="search">Search Candidates</label>
                        <input type="checkbox" name="jobtype" id="jobtype" value="jobtype" onChange={this.handleSearch}/> Job Type
                        <input type="checkbox" name="schedule" id="schedule" value="schedule" onChange={this.handleSearch}/> Schedule
                        <input type="checkbox" name="skills" id="skills" value="skills" onChange={this.handleSearch}/> Skills
                        <input type="checkbox" name="certificates" id="certificates" value="certificates" onChange={this.handleSearch}/> Certificates
                        <select name="address" id="address" onChange={this.handleChange}> Address
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="75">75</option>
                            <option value="100">100</option>
                        </select>
                        {candidates.map(candidate => 
                            <div id={candidate.id} key={candidate.id}>
                                <Link to={`/contractors/employees/${candidate.employee_id}`}>
                                    <h3>{candidate.fname} {candidate.lname}</h3>
                                </Link>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            )
        }
    }
}