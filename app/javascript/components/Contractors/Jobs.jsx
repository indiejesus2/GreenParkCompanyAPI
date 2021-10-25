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
                            <Card.Title className="d-flex justify-content-between">
                            <Link to={`/contractors/${props.contractor.id}/jobs/${job.id}`} >
                                {job.title}
                            </Link>
                            {job.city}, {job.state} 
                            </Card.Title>
                        <Card.Text style={{ height: 55 + 'px', overflow: "clip" }}> Description: {job.description} </Card.Text>
                        <Card.Text>Number of Applicants: {job.profiles.length} </Card.Text>
                        <div className="employee-jobs-buttons">
                        <Link to={`/contractors/${props.contractor.id}/jobs/${job.id}`} >
                            <Button>View Job</Button>
                        </Link>
                        <Link to={`/contractors/${props.contractor.id}/jobs/${job.id}/editjob`} >    
                            <Button>Edit Job</Button>
                        </Link>
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