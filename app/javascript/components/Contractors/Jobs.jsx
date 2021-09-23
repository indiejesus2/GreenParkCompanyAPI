import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
            <div className="employer-jobs">
                         {this.props.jobs.map(job =>
                        <Card id={job.id} key={job.id} >
                            <Card.Header as="h2">
                            <Link to={`/contractors/${this.props.contractor.id}/jobs/${job.id}`} >
                                {job.title}
                            </Link>
                            </Card.Header>
                        <Card.Title>Location: {job.city}, {job.state} </Card.Title>
                        <Card.Subtitle>Description: {job.description} </Card.Subtitle>
                        <Card.Subtitle>Number of Applicants: {job.employees.length} </Card.Subtitle>
                        <Button onClick={() => this.handleClick(job)}>Delete</Button>
                </Card>
                    )}
                {/* </ul> */}
            </div>
        )
    }
}