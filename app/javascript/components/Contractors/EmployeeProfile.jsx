import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar'
import { useFormik } from 'formik'
import { Modal, Button, Card, Table, CloseButton } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const EmployeeProfile = props => {

    const candidate = props.candidate ? props.candidate : []
    const application = props.application ? props.application : []
    // const [application, setApplication] = useState(props.candidate.application)
    const display = props.show == true ? "employee-profile" : "employee-profile d-none"
    const history = useHistory();
    const [currentStep, setStep] = useState(props.currentStep)
    
    // const interested = () => {
    //     if (candidate.interested) {
    //         return (
    //             <div>
    //                 <h5>Interested</h5>
    //             </div>
    //         )
    //     }
    // }
    // useEffect(() => {
    //     if (application != props.candidate.application) {
    //         setApplication(props.candidate.application)
    //     }
    // }, [props.candidate])

    const formik = useFormik({
        initialValues:
         {
            id: application.id, 
            employee_id: application.employee_id,
            employer_id: application.employer_id,
            job_id: application.job_id,
            acceptance: application.acceptance
        },
        onSubmit: values => {
            props.editApplicant(values)
            history.push(`/contractors/${values.employer_id}/jobs/${values.job_id}`)
        }
    })

    const handleInterest = (application) => {
        if (application.interested == true) {
            return (
                <div style={{ display: "contents"}}>
                    {String.fromCharCode(9989)} Applied!
                </div>
            )
        }
    }

    const handleApplicant = (status) => {
        formik.setValues(application)
        formik.setFieldValue('acceptance', status)
        formik.handleSubmit(formik.values)
    }
    
    if (candidate == "") {
        return null
    }

    if(currentStep !== 2) {
        return null
    }

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
    
        return (
            <div className={"employee-job"}
                style={{ "paddingInlineStart": 150 + "px", "paddingInlineEnd": 25 + "px"}}
            >
            <Card id={candidate.id} key={candidate.id}>
            <CloseButton onClick={props.handleClose}/>
            <Card.Body style={{"padding-top": "10px", "display": "flex"}}>
                <div className="job-body"
                        style={{"width": 50 + "%"}}
                    >
                    <div className="job-table">

                    <Table>                
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                        <td style={{"padding": "0px" }}>
                            Name:                         
                        </td>
                        <td style={{"padding": "0px" }}>
                            {candidate.fname} {candidate.lname}
                        </td>
                        </tr>
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                        <td style={{"padding": "0px" }}>
                            Job Applied:                         
                        </td>
                        <td style={{"padding": "0px" }}>
                            {props.job.title}
                        </td>
                        </tr>
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                        <td style={{"padding": "0px" }}>
                            Location:                         
                        </td>
                        <td style={{"padding": "0px" }}>
                            {candidate.city}, {candidate.state} {candidate.zipcode}
                        </td>
                        </tr>
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                        <td style={{"padding": "0px" }}>
                            Job Type:                         
                        </td>
                        <td style={{"padding": "0px" }}>
                            {candidate.jobtype.join(', ')}
                        </td>
                        </tr>
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                        <td style={{"padding": "0px" }}>
                            Job Shifts: 
                        </td>
                        <td style={{"padding": "0px" }}>
                            {candidate.shifts.join(", ")}
                        </td>
                        </tr>
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                        <td style={{"padding": "0px" }}>
                            Schedule:
                        </td>
                        <td style={{"padding": "0px" }}>
                        {candidate.schedule.join(", ")}
                        </td>
                        </tr>
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                            <td style={{"padding": "0px" }}>
                                Pay: 
                            </td>
                            <td style={{"padding": "0px" }}>
                                ${candidate.minpay} {candidate.paytype}
                            </td>
                        </tr>
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                            <td style={{"padding": "0px" }}>
                                Match Rating: 
                            </td>
                            <td style={{"padding": "0px" }}>
                                {rate(application.rating)}        
                            </td>
                        </tr>
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                            <td style={{"padding": "0px" }}>
                                Distance: 
                            </td>
                            <td style={{"padding": "0px" }}>
                                {Math.round(application.distance)} Miles        
                            </td>
                        </tr>
                    </Table>
                    </div>
                    <div className="job-buttons">
                        <Button>Accept Application</Button>
                        <Button>Download Resume</Button>
                    </div>
                    <div className="job-buttons">
                        <Button>Decline Applicant</Button>
                        <Button>Contact Applicant</Button>
                    </div>
                    </div>
                    <div className="description"
                        style={{"width": 50 + "%"}}
                    >
                        {/* <span>{job.description}</span> */}
                        <div id="description-details">
                            <h2>Employee Information</h2>
                        </div>
                        <div className="description-box">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <h3 style={{ "fontWeight": "bold"}}>Past Experience: </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
            </Card.Body>
            </Card>
            {/* <Modal show={props.show}>
                <Modal.Header>

                <Modal.Title>
                    <h2>{candidate.fname} {candidate.lname} - {candidate.city}, {candidate.state}</h2>
                    <h5>{candidate.trade}</h5>
                    <h6>{handleInterest(application)}</h6>

                </Modal.Title>
                </Modal.Header>
            <Modal.Body>
            <span>{candidate.description}</span>
            <div className="work-schedule">
                Job Type: {candidate.jobtype.join(', ')}
                <br />
                Work Schedule: {candidate.schedule.join(', ')}
                <br />
                Shifts: {candidate.shifts.join(', ')}
                <br />
                Season Availability: {candidate.seasonstart} - {candidate.seasonend}
                <br />
                Minimum Pay: ${candidate.minpay} {candidate.paytype == "Hourly"?"per hour":"per year"}
                <br />
                Description: {candidate.description}
            </div>
            <Modal.Footer>
                <Button onClick={() => handleApplicant(true)}>Accept</Button>
                <Button onClick={() => handleApplicant(false)}>Decline</Button>
                <Button onClick={props.handleClose}>Close</Button>
            </Modal.Footer>
            </Modal.Body>
                {props.work_history.map(history => 
            <div className="work-history" key={history.id}>
            Experience:
            <p>{history.title}</p>
            <p>{history.company}</p>
            </div>
            )}
        <button onClick={handleClick}>Edit Profile</button>
        </Modal>  */}
        </div>
        )
        // else {
        //     return (
        //         <div>
        //             Loading...
        //         </div>
        //     )
        // }
    
}

export default EmployeeProfile