import React, { Component } from 'react'

export default class Job extends Component {

    render() {
        const job = this.props.jobs.find(job => job.id == this.props.match.params.job_id)
        return (
            <div className="job">
                <h1>{job.title}</h1>
            </div>
        )
    }
}