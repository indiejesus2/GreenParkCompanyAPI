import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Jobs extends Component {

    


    handleClick = () => {
        
    }

    render() {
        debugger
        return (
            <div className="jobs">
                <h2>Jobs</h2>
                <ul>
                    {this.props.jobs.map(job =>
                    <li id={job.id} key={job.id} >
                        <Link to={`/contractors/${this.props.contractor.id}/jobs/${job.id}`} >
                            <h4>{job.title}</h4>
                        </Link>
                        <p>Location: {job.location}</p>
                        <p>Description: {job.description} </p>
                        {/* <button onClick={this.handleClick}>Apply</button> */}
                    </li>
                    )}
                </ul>
            </div>
        )
    }
}