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
                        <Card id={job.id} key={job.id} bg="info" text="white" style={{width: '18rem'}}>
                            <Card.Header as="h2">
                            <Link to={`/contractors/${this.props.contractor.id}/jobs/${job.id}`} >
                                {job.title}
                            </Link>
                            </Card.Header>
                        <Card.Subtitle>{job.city}, {job.state} </Card.Subtitle>
                        <Card.Text>Description: {job.description} </Card.Text>
                        <Card.Text>Number of Applicants: {job.employees.length} </Card.Text>
                        <Card.Footer>
                            <Button onClick={() => this.handleClick(job)}>Delete</Button>
                        </Card.Footer>
                </Card>
                    )}
                {/* </ul> */}
            </div>
        )
    }
}