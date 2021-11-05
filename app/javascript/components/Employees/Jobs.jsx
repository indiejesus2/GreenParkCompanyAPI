import { match } from 'assert'
import React, { useState, useEffect } from 'react'
import { Card, Button, Accordion, useAccordionButton } from 'react-bootstrap'
import Job from './Job'

const Jobs = (props) => {

    const rate = (rating) => {
        if (rating == 6 || rating == 5) {
            return (
                <span>
                    {String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734)}
                </span>
            )
        } else if (rating == 4) {
            return (
                <span>
                    {String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734)}
                </span>
            )
        } else if (rating == 3) {
            return (
                <span>
                    {String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734)}
                </span>
            )
        } else if (rating == 2) {
            return (
                <span>
                    {String.fromCharCode(9734) + String.fromCharCode(9734)}
                </span>
            )
        } else if (rating == 1) {
            return (
                <span>
                    {String.fromCharCode(9734)}
                </span>
            )
        }
    }

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
            let matches = {}
            let payrange = (start, end) => Array.from({length: (end - start + 1)}, (v , k) => k + start)
            employee.profile.jobtype.map(function(type) {
                if (job.jobtype.includes(type)) {
                    matches["Jobtype"] = job.jobtype.join(", ")
                }
            })
            employee.profile.schedule.map(function(day) {
                if (job.schedule.includes(day)) {
                    matches["Schedule"] = job.schedule.join(", ")
                }
            })
            employee.profile.shifts.map(function(shift) {
                if (job.shifts.includes(shift)) {
                    matches["Shifts"] = job.shifts.join(", ")
                }
            })
            if (payrange(employee.profile.minpay, employee.profile.maxpay).includes(Math.round(job.minpay)) || payrange(employee.profile.minpay, employee.profile.maxpay).includes(Math.round(job.maxpay))) {
                matches["Payrange"] = `${job.minpay} - ${job.maxpay}`
            }
            if (employee.profile.seasonstart == job.seasonstart || employee.profile.seasonend == job.seasonend) {
                matches["Season"] = `${seasonstart} - ${seasonend}`
            }
            if (employee.profile.license == job.license) {
                matches["License"] = "Yes"
            }
            // Object.entries(matches).map(function([k,v]) {
            //     debugger
            // })
            return matches
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
                    <Card.Header>
                    {/* // className="d-grid justify-content-center"> */}
                       <Card.Title className="mb-2" as="h2">{job.title}</Card.Title>
                        <Card.Subtitle>Location: {job.city}, {job.state}</Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <div className="d-flex justify-content-between">
                            <Card.Subtitle as="h5">Rating: {rate(employee.applicants.find(applicant => applicant.job_id == job.id).rating)}</Card.Subtitle>
                            <Card.Subtitle as="h5">Distance: {Math.round(employee.applicants.find(applicant => applicant.job_id == job.id).distance)}</Card.Subtitle>
                        </div>
                        <div className="matches">
                        {Object.entries(jobMatch(job)).map(([key, value]) =>
                            <Card.Text style={{ marginBlockEnd: 1 + `px`}}>{key}: {value}</Card.Text>
                            )}
                        </div>
                        <Card.Text style={{ height: 63 + 'px', overflow: "clip", paddingBlock: 10 + 'px' }}>Description: {job.description} </Card.Text>
                    <div className="employee-jobs-buttons">
                        <Button onClick={() => handleShow(job)}>More Info</Button>
                    </div>
                    </Card.Body>
                </Card>
                )}
                <Job show={show} job={job} employee={employee} handleClose={handleClose} />
            </div>
        )

}

export default Jobs