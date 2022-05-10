import { match } from 'assert'
import React, { useState, useEffect } from 'react'
import { Card, Button, Table, Accordion, useAccordionButton } from 'react-bootstrap'
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

    const saved = () => {
        let savedJobs = []
        props.applicants.forEach(function(applicant) {
            if (applicant.savedJob == true) {
                savedJobs.push(props.jobs.find(job => job.id == applicant.job_id))
            }
        })
        return savedJobs
    }

    const [jobs, setJobs] = useState(props.jobs)
    const [employee, setEmployee] = useState(props.employee)
    const [currentStep, setStep] = useState(props.currentStep)
    // const [listing, setListing] = useState("")
    const [applicants, setApplicants] = useState(props.applicants)
    const [profile, setProfle] = useState(props.profile)
    const handleClose = () => setShow(false);
    const handleShow = (job) => {
        setListing(job)
        setStep(2);
    }

    if(currentStep !== 1) {
        return null
    }

    useEffect(() => {
        if (props.savedJobs == true && saved != jobs) {
            setJobs(saved)
        } else if (props.savedJobs == false && props.jobs != jobs) {
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

    const handleHeading = () => {
        if (props.savedJobs == false) {
            <h1>My Matches</h1>
        } else {
            <h1>Saved Jobs</h1>
        }
    }

    return (
        <div className="employees-jobs">
            {/* <h1>My Matches</h1> */}
            {handleHeading()}
            {jobs.map(job =>
            <Card id={job.id} key={job.id} > 
                {/* <Card.Header>
                </Card.Header> */}
                <Card.Body className="d-flex">
                    <Table style={{ "marginBottom": 2.5 + "px"}}>
                {/* <div className="d-flex justify-content-between"> */}
                    {/* <Card.Title className="mb-2">{job.company}</Card.Title> */}
                    <tbody>
                    <tr>
                        <td id="table-header" style={{ "border-bottom-width": 0 + "px", "border-right": 2 + "px solid white"}}>
                            Company: {job.company}
                        </td>
                            {/* Distance: */}
                        {/* </td>  */}
                        {/* <td id="table-value-top" style={{ "border-bottom-width": 0 + "px", }}> */}
                            
                            {/* {Math.round(applicants.find(applicant => applicant.job_id == job.id).distance)} Miles */}
                        
                        <td id="table-header-location" style={{ "border-bottom-width": 0 + "px"}}>
                            Distance: {Math.round(applicants.find(applicant => applicant.job_id == job.id).distance)} Miles
                            {/* Location: */}
                        {/* </td>
                        <td id="table-value-top" style={{ "border-bottom-width":  0 + "px"}}>  */}
                            
                        </td>
                    </tr>
                {/* //    as="h2" */}
                    <tr>
                        <td id="table-header-title" style={{ "border-bottom-width": 0 + "px", "border-right": 2 + "px solid white"}}>Job Title: {job.title}<span></span>
                        {/* </td> */}
                        {/* <td id="table-value-bottom" style={{ "border-bottom-width": 0 + "px", "border-right": 2 + "px solid white"}}> */}
                        </td>
                            {/* as="h5" */}
                        <td id="table-header-rating" style={{ "border-bottom-width": 0 + "px"}}>Rating: {rate(applicants.find(applicant => applicant.job_id == job.id).rating)}<span></span>  
                        {/* <td id="table-value-bottom" style={{ "border-bottom-width": 0 + "px"}}>  */}
                            
                        </td>
                        {/* </td> */}
                            {/* {job.city}, {job.state} */}
                    </tr>
                    {/* <tr>
                    </tr> */}
                     </tbody>
                    {/* </div> */}
                    </Table>
                        <div className="employee-jobs-buttons">
                                <Button id="details" onClick={() => props.handleJob(job)}>Details</Button>
                                {props.handleApply(job)}
                        </div>
                    {/* <div className="matches">
                        {Object.values(jobMatch(job)).map(match =>
                            <Card.Text style={{ marginBlockEnd: 1 + `px`}}>{match[0]}: {match[1]}</Card.Text>
                            )}
                        </div> */}
                    {/* <Card.Text style={{ height: 63 + 'px', overflow: "clip", paddingBlock: 10 + 'px' }}>Description: {job.description} </Card.Text> */}
                </Card.Body>
            </Card>
            )}
            {/* <Job show={show} job={listing} employee={employee} applicants={applicants} handleClose={handleClose} /> */}
        </div>
    )
}

export default Jobs