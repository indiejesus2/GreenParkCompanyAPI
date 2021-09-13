import React, { Component } from 'react'

export default class Jobs extends Component {

    render() {
        return (
            <div className="jobs">
                <h2>Jobs</h2>
                <ul>
                    {this.props.jobs.map(job =>
                    <li id={job.id} key={job.id}>
                        <h4>{job.title}</h4>
                        <p>Location: {job.location}</p>
                        <p>Description: {job.description} </p>
                    </li>
                    )}
                </ul>
            </div>
        )
    }
}