import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Jobs extends Component {

    
    // componentDidMount() {
    //     this.props.fetchJobs(this.props.contractor)
    // }

    handleClick = (job) => {
        // e.preventDefault()
        this.props.deleteJob(job)
    }

    render() {
        return (
            <div className="jobs">
                <h2>Jobs</h2>
                {/* <ul> */}
                    {this.props.jobs.map(job =>
                    <div id={job.id} key={job.id} >
                        <Link to={`/contractors/${this.props.contractor.id}/jobs/${job.id}`} >
                            <h4>{job.title}</h4>
                        </Link>
                        <p>Location: {job.city}, {job.state} </p>
                        <p>Description: {job.description} </p>
                        <p>Number of Applicants: {job.employees.length} </p>
                        <button onClick={() => this.handleClick(job)}>Delete</button>
                    </div>
                    )}
                {/* </ul> */}
            </div>
        )
    }
}