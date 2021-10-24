import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardGroup, Button } from 'react-bootstrap/'

const Jobs = (props) => {

const [jobs, setJobs] = useState(props.jobs ? props.jobs : [])

    useEffect(() => {
        if (props.jobs || props.jobs != jobs) {
            setJobs(props.jobs)
        }

    })

    const handleClick = (job) => {
        props.deleteJob(job)
    }


        return (
            <div className="employer-jobs">
                         {jobs.map(job =>
                        <Card id={job.id} key={job.id} text="white" style={{width: '18rem'}}>
                            <Card.Title>
                            <Link to={`/contractors/${props.contractor.id}/jobs/${job.id}`} >
                                {job.title}
                            </Link>
                            </Card.Title>
                        <Card.Subtitle>{job.city}, {job.state} </Card.Subtitle>
                        <Card.Text>Description: {job.description} </Card.Text>
                        <Card.Text>Number of Applicants: {job.profiles.length} </Card.Text>
                        <div className="employee-jobs-buttons">
                            <Button href={`/contractors/${props.contractor.id}/jobs/${job.id}`}>View Job</Button>
                            <Button href={`/contractors/${props.contractor.id}/jobs/${job.id}/editjob`}>Edit Job</Button>
                            <Button onClick={() => handleClick(job)}>Delete</Button>
                        </div>
                </Card>
                    )}
                {/* </CardGroup> */}
                {/* </ul> */}
            </div>
        )
    
}

export default Jobs