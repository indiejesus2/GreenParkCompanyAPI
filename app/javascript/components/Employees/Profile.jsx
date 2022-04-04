import React, {useState, useEffect} from 'react'
import NavBar from '../NavBar'
import SideNavBar from '../SideNavBar'
import {Link} from 'react-router-dom'
// import FilePreview from 'react-preview-file'
// import FileViewer from 'react-file-viewer'
import { Button, Table, Row, Col, Toast, Card, CloseButton } from 'react-bootstrap'

const Profile = props => {

    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState(false)
    const [applications, setApplications] = useState([])

    const handlePreview = () => setPreview(true)

    const handleProfile = () => {
        props.history.push(`/employees/${props.employee.id}/edit_profile`)
    }

    const handleExperience = () => {
        props.history.push(`/employees/${employee.id}/experience/add_experience`)
    }

    useEffect(() => {
        if (props.employee.applicants.length !== applications.length) {
            setApplications(props.employee.applicants)
            setShow(true)
        }
    }, [props.employee.applicants])

    const handleToast = () => {
        return (
            <Row>
                <Col>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000}>
                        <Toast.Header>
                            New Potential Jobs!
                        </Toast.Header>
                        <Toast.Body>
                            Looks like you've been matched to some new jobs. Let's check them out!
                            {/* <Link></Link> */}
                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>
        )
    }

    const employee = props.profile
    const license = props.profile.license == true ? "Yes" : "No"
    const jobtype = employee.jobtype.length > 0 ? employee.jobtype : []
    const schedule = employee.schedule.length > 0 ? employee.schedule : []
    const shifts = employee.shifts.length > 0 ? employee.shifts : []
    // const file = props.employee.file
    // const type = props.document?props.document.split("/")[1] : []

    return (
        <div>
        {/* <div className="update">
        <Row>
                <Col>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000}>
                        <Toast.Header>
                            New Potential Jobs!
                        </Toast.Header>
                        <Toast.Body>
                            Looks like you've been matched to some new jobs. Let's check them out!
                            <Link></Link>
                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </div> */}
            <div className="employee-job"
                 style={{ "paddingInlineStart": 150 + "px", "paddingInlineEnd": 25 + "px"}}
            >
                <Card id={employee.id} key={employee.id}>
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
                            {employee.fname} {employee.lname}
                        </td>
                        </tr>                    
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                        <td style={{"padding": "0px" }}>
                            Trade:                         
                        </td>
                        <td style={{"padding": "0px" }}>
                            {employee.trade}
                        </td>
                        </tr>                    
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                        <td style={{"padding": "0px" }}>
                            Location:                         
                        </td>
                        <td style={{"padding": "0px" }}>
                            {employee.city}, {employee.state} {employee.zipcode}
                        </td>
                        </tr>
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                        <td style={{"padding": "0px" }}>
                            Commute:                         
                        </td>
                        <td style={{"padding": "0px" }}>
                            {employee.commute}
                        </td>
                        </tr>
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                        <td style={{"padding": "0px" }}>
                            Phone Number:                         
                        </td>
                        <td style={{"padding": "0px" }}>
                            {employee.phone}
                        </td>
                        </tr>
                        {/* <tr style={{ "border-bottom-width": 0 + "px"}}>
                        <td style={{"padding": "0px" }}>
                            Email:                  
                        </td>
                        <td style={{"padding": "0px" }}>
                            {employee.commute}
                        </td>
                        </tr> */}
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                        <td style={{"padding": "0px" }}>
                            Job Type:                         
                        </td>
                        <td style={{"padding": "0px" }}>
                            {employee.jobtype.join(', ')}
                        </td>
                        </tr>
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                        <td style={{"padding": "0px" }}>
                            Job Shifts: 
                        </td>
                        <td style={{"padding": "0px" }}>
                            {employee.shifts.join(", ")}
                        </td>
                        </tr>
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                        <td style={{"padding": "0px" }}>
                            Schedule:
                        </td>
                        <td style={{"padding": "0px" }}>
                        {employee.schedule.join(", ")}
                        </td>
                        </tr>
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                            <td style={{"padding": "0px" }}>
                                Pay: 
                            </td>
                            <td style={{"padding": "0px" }}>
                                ${employee.minpay} {employee.paytype}
                            </td>
                        </tr>
                    </Table>
                    </div>
                    <div className="job-buttons">
                        <Button onClick={handleProfile}>                            
                                Edit Profile
                        </Button>
                        <Button onClick={handleExperience}>
                            Add/Edit Experience
                        </Button>
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
                                {props.experience.map(history => 
                                <div>
                                    <h5>{history.company}</h5>
                                    <h6>{history.title}: {history.city}, {history.state}</h6>
                                    <p>{history.startdate} to {history.current?"Present":history.enddate}</p>
                                    <p>{history.description}</p>
                                    <Link to={`/employees/${props.employee.id}/experience/${history.id}`}>
                                        Edit Experience
                                    </Link>
                                </div>
                                )}
                            </div>
                        </div>
            </Card.Body>
            </Card>
            </div>
        </div>
    )
}
                        {/* <h5>{employee.city}, {employee.state}</h5>
                        <h5>{employee.trade}</h5>
                    <div className="employee-description">
                        <p>{employee.description}</p>
                    </div>
                <Button variant="link" onClick={handlePreview}>
                    View Resume
                </Button>
                <div>
                    <Modal show={preview}>
                        <Modal.Body>
                            <FileViewer filePath={file} fileType={type} />
                        </Modal.Body>
                    </Modal>
                </div>
            <div className="work-schedule">
                <Table>
                    <tbody>
                    <tr>
                        <td>Job Type:</td>
                        <td>{jobtype.join(", ")}</td>
                    </tr>
                    <tr>
                        <td>Schedule:</td>
                        <td>{schedule.join(", ")}</td>
                    </tr>
                    <tr>
                        <td>Shifts:</td>
                        <td>{shifts.join(", ")}</td>
                    </tr>
                    <tr>
                        <td>Season Availability:</td>
                        <td>{employee.seasonstart} - {employee.seasonend} </td>
                    </tr>
                    <tr>
                        <td>Desired Pay:</td>
                        <td>${employee.minpay} {employee.paytype}</td>
                    </tr>
                    <tr>
                        <td>Driver's License:</td>
                        <td>{license}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
                <div className="work-history">
                <h4>Experience:</h4>
                    {props.experience.map(history => 
                <div>
                    <h5>{history.company}</h5>
                    <h6>{history.title}: {history.city}, {history.state}</h6>
                    <p>{history.startdate} to {history.current?"Present":history.enddate}</p>
                    <p>{history.description}</p>
                    <Link to={`/employees/${props.employee.id}/experience/${history.id}`}>
                        Edit Experience
                    </Link>
                </div>
                    )}
                </div>
                <br />
                <div className="d-flex justify-content-between">
                    <Link to={`/employees/${employee.id}/experience/add_experience`}>
                        Add Experience
                    </Link>
                    <Link to={`/employees/${employee.id}/edit_profile`}>
                        Edit Profile
                    </Link>
                </div>
            </div> */}

export default Profile