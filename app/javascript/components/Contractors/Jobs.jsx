import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardGroup, Button } from 'react-bootstrap/'

const Jobs = (props) => {

const [jobs, setJobs] = useState(props.jobs ? props.jobs : [])

    useEffect(() => {
        if (props.jobs && props.jobs != jobs) {
            setJobs(props.jobs)
        }

    })
    // componentDidMount() {
    //     props.fetchJobs(props.contractor)
    // }

    const handleClick = (job) => {
        // e.preventDefault()
        props.deleteJob(job)
    }


        return (
            <div className="employer-jobs">
                {/* <CardGroup> */}

                         {jobs.map(job =>
                        <Card id={job.id} key={job.id} bg="info" text="white" style={{width: '18rem'}}>
                            <Card.Header as="h2">
                            <Link to={`/contractors/${props.contractor.id}/jobs/${job.id}`} >
                                {job.title}
                            </Link>
                            </Card.Header>
                        <Card.Subtitle>{job.city}, {job.state} </Card.Subtitle>
                        <Card.Text>Description: {job.description} </Card.Text>
                        <Card.Text>Number of Applicants: {job.employees.length} </Card.Text>
                        <Card.Footer>
                            <Button onClick={() => handleClick(job)}>Delete</Button>
                        </Card.Footer>
                </Card>
                    )}
                {/* </CardGroup> */}
                {/* </ul> */}
            </div>
        )
    
}

export default Jobs