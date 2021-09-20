import React, { Component } from 'react'

export default class Jobs extends Component {

    // componentDidMount() {
    //     this.props.fetchJobs(this.props.employee)
    // }

    handleClick = () => {
        
    }

    render() {
        return (
            <div className="jobs">
                <h2>Jobs</h2>
                <ul>
                    {this.props.jobs.map(job =>
                    <li id={job.id} key={job.id} >
                        <h4>{job.title}</h4>
                        <p>Location: {job.city}, {job.state}</p>
                        <p>Description: {job.description} </p>
                        <button onClick={this.handleClick}>Apply</button>
                    </li>
                    )}
                </ul>
            </div>
        )
    }
}