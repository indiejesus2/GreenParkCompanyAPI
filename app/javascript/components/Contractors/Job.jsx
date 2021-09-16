import React, { Component } from 'react'

export default class Job extends Component {

    
    componentDidMount() {
        let job = this.props.jobs.find(job => job.id == this.props.match.params.job_id)
        debugger
        this.props.fetchJob(job)
    }

    render() {
        return (
            <div className="job">
                <h1>{job.title}</h1>
            </div>
        )
    }
}