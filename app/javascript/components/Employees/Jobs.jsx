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
        const [listing, setListing] = useState("")
        const [applicants, setApplicants] = useState(props.applicants)
        const [profile, setProfle] = useState(props.profile)
        const handleClose = () => setShow(false);
        const handleShow = (job) => {
            setListing(job)
            setShow(true);
        }

        useEffect(() => {
            if (props.jobs && props.jobs != jobs) {
                setJobs(props.jobs)
            } else if (props.applicants && props.applicants != applicants) {
                setApplicants(props.applicants)
            }
        })

        const jobMatch = (job) => {
            let matches = {}
            
                job.jobtype.map(function(type) {
                    if (profile.jobtype.includes(type)) {
                        matches["Jobtype"] = job.jobtype.join(", ")
                    }
                })
                job.schedule.map(function(day) {
                    if (profile.schedule.includes(day)) {
                        matches["Schedule"] = job.schedule.join(", ")
                    }
                })
                job.shifts.map(function(shift) {
                    if (profile.shifts.includes(shift)) {
                        matches["Shifts"] = job.shifts.join(", ")
                    }
                })
                if (profile.minpay < job.minpay) {
                    matches[`Starting ${job.paytype == "Hourly" ? "Pay":"Salary"}`] = `${job.minpay}`
                }
                if (profile.seasonstart == job.seasonstart || profile.seasonend == job.seasonend) {
                    matches["Season"] = `${job.seasonstart} - ${job.seasonend}`
                }
                if (profile.license == job.license) {
                    matches["License"] = "Yes"
                }
                
            return Object.entries(matches).splice(0, 3)
        }

        const handleApply = (job) => {
            let application = applicants.find(applicant => applicant.job_id == job.id)
            if (application.interested == false) {
                return (
                    <Button onClick={() => props.handleInterest(application)}>Apply</Button>
                )
            } else {
                return (
                    <Button disabled>Applied!</Button>
                )
            }
        }

        return (
            <div className="employees-jobs">
                {jobs.map(job =>
                <Card id={job.id} key={job.id} > 
                    <Card.Header>
                        <Card.Title className="mb-2">{job.company}</Card.Title>
                       <Card.Title className="mb-2" as="h2">{job.title}</Card.Title>
                        <Card.Subtitle>Location: {job.city}, {job.state}</Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                    <div className="d-flex justify-content-between">
                            <Card.Subtitle as="h5">Rating: {rate(applicants.find(applicant => applicant.job_id == job.id).rating)}</Card.Subtitle>
                            <Card.Subtitle as="h5">Distance: {Math.round(applicants.find(applicant => applicant.job_id == job.id).distance)} Miles</Card.Subtitle>
                        </div>
                        <div className="matches">
                            {Object.values(jobMatch(job)).map(match =>
                                <Card.Text style={{ marginBlockEnd: 1 + `px`}}>{match[0]}: {match[1]}</Card.Text>
                                )}
                        </div>
                        <Card.Text style={{ height: 63 + 'px', overflow: "clip", paddingBlock: 10 + 'px' }}>Description: {job.description} </Card.Text>
                    <div className="employee-jobs-buttons">
                        <Button onClick={() => handleShow(job)}>More Info</Button>
                        {handleApply(job)}
                    </div>
                    </Card.Body>
                </Card>
                )}
                <Job show={show} job={listing} employee={employee} applicants={applicants} handleClose={handleClose} />
            </div>
        )

}

export default Jobs