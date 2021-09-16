import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Job extends Component {

    
    componentDidMount() {
        let job = this.props.jobs.find(job => job.id == this.props.match.params.job_id)
        this.props.fetchJob(job)
    }

    render() {
        const job = this.props.jobs.find(job => job.id == this.props.match.params.job_id)
        const candidates = this.props.candidates.length > 0 ? this.props.candidates : []
        debugger
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
                        {candidates.map(candidate => 
                            <li id={candidate.id} key={candidate.id}>
                                <Link to={`/employees/${candidate.id}`}>
                                    <h3>{candidate.fname} {candidate.lname}</h3>
                                </Link>
                            </li>
                        )}
                    </div>
                </div>
            )
        }
    }
}