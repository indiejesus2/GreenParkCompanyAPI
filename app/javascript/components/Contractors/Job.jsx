import React, { Component } from 'react'

export default class Job extends Component {

    
    componentDidMount() {
        let job = this.props.jobs.find(job => job.id == this.props.match.params.job_id)
        this.props.fetchJob(job)
    }

    render() {
        const job = this.props.jobs.find(job => job.id == this.props.match.params.job_id)
        return (
            <div className="job">
                <h1>{job.title}</h1>
                <p>{job.city}, {job.state}</p>
                <p>{job.jobtype} {job.schedule} {job.skills} </p>
                <p>{job.description}</p>
                <div className="candidates">
                    {this.props.candidates}
                </div>
            </div>
        )
    }
}