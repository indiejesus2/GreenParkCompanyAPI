import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'

const Jobs = (props) => {

        const [jobs, setJobs] = useState(props.jobs)
        useEffect(() => {
            if (props.jobs && props.jobs != jobs) {
                setJobs(props.jobs)
            }
        })
        return (
            
            // <CardGroup> 
            // <br />   
            <div className="employees-jobs">

                {jobs.map(job =>
                <Card id={job.id} key={job.id} > 
                {/* // style={{ : '18rem'}}> */}
                    <Card.Title className="mb-2 text-muted">{job.title}</Card.Title>
                    <Card.Subtitle>Location: {job.city}, {job.state}</Card.Subtitle>
                    <Card.Text>Description: {job.description} </Card.Text>
                        <Button onClick={props.handleClick}>Apply</Button>
                </Card>
                )}
            {/* </CardGroup> */}
                </div>
            
        )
    
}

export default Jobs