import React, { useState, useEffect } from 'react'
import { Card, Accordion, useAccordionButton } from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'

const Jobs = (props) => {

        const [jobs, setJobs] = useState(props.jobs)
        useEffect(() => {
            if (props.jobs && props.jobs != jobs) {
                setJobs(props.jobs)
            }
        })

        function CustomToggle({ children, eventKey }) {
            return (
              <button type="button" className="btn btn-primary" onClick={useAccordionButton(eventKey)}>
                {children}
              </button>
            );
          }

        return (
            <div className="employees-jobs">
                {jobs.map(job =>
                    <Accordion>
                <Card id={job.id} key={job.id} > 
                    <Card.Title className="mb-2">{job.title}</Card.Title>
                    <Card.Subtitle>Location: {job.city}, {job.state}</Card.Subtitle>
                    <Card.Text>Description: {job.description} </Card.Text>
                    <div className="employee-jobs-buttons">
                        <CustomToggle eventKey="0">More Info</CustomToggle>
                    </div>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Card.Text>Pay Range: {job.minpay} - {job.maxpay}</Card.Text>
                                <Card.Text>Job Type: {job.jobtype.join(', ')}</Card.Text>
                                <Card.Text>Job Shifts: {job.shifts.join(", ")}</Card.Text>
                                <Card.Text>Schedule: {job.schedule.join(", ")}</Card.Text>
                                <Card.Text>Season: {job.seasonstart} - {job.seasonend}</Card.Text>
                            </Card.Body>
                            </Accordion.Collapse>
                </Card>
                    </Accordion>
                )}
            </div>
        )

}

export default Jobs