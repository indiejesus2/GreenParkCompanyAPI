import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Form, Button, Table, CloseButton } from 'react-bootstrap'
import Applicants from './Applicants'
import NavBar from '../NavBar'
import SideNavBar from '../SideNavBar'
import EmployeeProfile from './EmployeeProfile'

const Job = props => {

    const job = props.jobs.find(job => job.id == props.match.params.job_id)
    const [currentStep, setStep] = useState(1)
    const [applicant, setApplicant] = useState("")

    const handleContact = (candidate) => {
        let person = job.employees.find(employee => employee.id == candidate.employee_id)
        window.location.href = ("mailto:" + person.email + "?subject=" + job.title + " - " + props.contractor.name)
    }


    const handleApplicants = () => {
        if (currentStep == 1) {
            return (
                <Applicants job={job} contractor={props.contractor} editApplicant={props.editApplicant} handleApplicant={handleApplicant} />
            )
        } else if (currentStep == 2) {
            return (
                <EmployeeProfile 
                candidate={applicant.info}
                application={applicant.application}
                editApplicant={props.editApplicant}
                handleClose={handleClose}
                job={job}
                currentStep={currentStep}
                contractor={props.contractor}
                handleContact={handleContact}
                files={props.files}
                />
            )
        }
    }

    const handleJob = () => {
        // props.history.push(`/contractors/${props.contractor.id}/jobs`)
        props.history.push(`/contractors`)
    }

    const handleEdit = () => {
        props.history.push(`/contractors/${props.contractor.id}/jobs/${job.id}/editjob`)
    }

    const handleDelete = () => {
        props.deleteJob(job)
        handleJob()
    }

    const handlePause = () => {
        if (job.status == false) {
            job.status = false
        } else {
            job.status = true
        }
        props.editJob(job)
    }

    const handleActivation = () => {
        // debugger
        if (job.status == true) {
            <Button onClick={() => handlePause()}>Pause Job</Button>
        } else {
            <Button onClick={() => handlePause()}>Activate Job</Button>
        }
    }

    const handleApplicant = (candidate) => {
        setApplicant(candidate)
        setStep(2)
    }

    const handleClose = () => {
        setStep(1)
    }

        return (
                <div className="employees">
                    <NavBar handleSignout={props.signOut} contractor={props.contractor} loggedIn={props.loggedIn} user="contractor" />
                        <div className="page">
                            <SideNavBar contractor={props.contractor} user="contractor"/>
                            <div className="dashboard">

                            <div className="employee-job">
                                <h2>Job Listing</h2>
                                <Card id={job.id} key={job.id}>
                                <CloseButton variant="white" onClick={() => handleJob()} style={{color: "#3fa1fc", position: "relative", top: 15+"px", right: 15+"px", alignSelf:"end"}}/> 
                                    <Card.Body style={{"padding-top": "10px"}}>
                                        <div className="job-body"
                                                // style={{"width": 50 + "%"}}
                                            >
                                            <div className="job-table">

                                            <Table>
                                                <tbody>
                                                <tr style={{ "border-bottom-width": 0 + "px"}}>
                                                <td style={{"padding": "0px" }}>
                                                    Title:                         
                                                </td>
                                                <td style={{"padding": "0px" }}>
                                                    {job.title}
                                                </td>
                                                </tr>
                                                <tr style={{ "border-bottom-width": 0 + "px"}}>
                                                <td style={{"padding": "0px" }}>
                                                    Location:                         
                                                </td>
                                                <td style={{"padding": "0px" }}>
                                                    {job.city}, {job.state} {job.zipcode}
                                                </td>
                                                </tr>
                                                <tr style={{ "border-bottom-width": 0 + "px"}}>
                                                <td style={{"padding": "0px" }}>
                                                    Date Posted:                         
                                                </td>
                                                <td style={{"padding": "0px" }}>
                                                    {job.createdDate}
                                                </td>
                                                </tr>
                                                <tr style={{ "border-bottom-width": 0 + "px"}}>
                                                <td style={{"padding": "0px" }}>
                                                    Job Type:                         
                                                </td>
                                                <td style={{"padding": "0px" }}>
                                                    {job.jobtype.join(', ')}
                                                </td>
                                                </tr>
                                                <tr style={{ "border-bottom-width": 0 + "px"}}>
                                                <td style={{"padding": "0px" }}>
                                                    Job Shifts: 
                                                </td>
                                                <td style={{"padding": "0px" }}>
                                                    {job.shifts.join(", ")}
                                                </td>
                                                </tr>
                                                <tr style={{ "border-bottom-width": 0 + "px"}}>
                                                <td style={{"padding": "0px" }}>
                                                    Schedule:
                                                </td>
                                                <td style={{"padding": "0px" }}>
                                                {job.schedule.join(", ")}
                                                </td>
                                                </tr>
                                                <tr style={{ "border-bottom-width": 0 + "px"}}>
                                                    <td style={{"padding": "0px" }}>
                                                        Pay: 
                                                    </td>
                                                    <td style={{"padding": "0px" }}>
                                                        ${job.minpay} {job.paytype}
                                                    </td>
                                                </tr>
                                                </tbody>                
                                            </Table>
                                            </div>
                                            <div className="job-buttons">
                                                <Button onClick={() => handleEdit()}>Edit Job</Button>
                                                {handleActivation()}
                                                <Button onClick={() => handleDelete()}>Delete Job</Button>
                                            </div>
                                            </div>
                                            <div className="description"
                                                // style={{"maxWidth": 50 + "%"}}
                                            >
                                                {/* <span>{job.description}</span> */}
                                                <div id="description-details">
                                                    <h2>Job Details</h2>
                                                </div>
                                                <div className="description-box">
                                                    {job.description}
                                                </div>
                                            </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="mt-3">
                                {/* <h2>Applicants</h2> */}
                                {handleApplicants()}
                            </div>
                            </div>
                        </div>
                    </div>
                )
}

export default Job