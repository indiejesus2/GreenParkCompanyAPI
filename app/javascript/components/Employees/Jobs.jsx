import React, { useState, useEffect } from 'react'
import { Card, Button, Accordion, useAccordionButton } from 'react-bootstrap'
import Job from './Job'

const Jobs = (props) => {

        const [jobs, setJobs] = useState(props.jobs)
        const [employee, setEmployee] = useState(props.employee)
        const [show, setShow] = useState(false)
        const [job, setJob] = useState("")
        const handleClose = () => setShow(false);
        const handleShow = (job) => {
            setJob(job)
            setShow(true);
        }

        useEffect(() => {
            if (props.jobs && props.jobs != jobs) {
                setJobs(props.jobs)
            }
        })

        const jobMatch = (job) => {
            for (let i = 0; i<3; i++) {
                if (job.jobtype.includes(employee.profile.jobtype[0])) {

                }

            }
        }

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
                <Card id={job.id} key={job.id} > 
                    <Card.Title className="mb-2">{job.title}</Card.Title>
                    <Card.Subtitle>Location: {job.city}, {job.state}</Card.Subtitle>
                    <Card.Text style={{ height: 55 + 'px', overflow: "clip" }}>Description: {job.description} </Card.Text>
                    <div className="employee-jobs-buttons">
                        <Button onClick={() => handleShow(job)}>More Info</Button>
                    </div>
                </Card>
                )}
                <Job show={show} job={job} employee={employee} handleClose={handleClose} />
            </div>
        )

}

export default Jobs