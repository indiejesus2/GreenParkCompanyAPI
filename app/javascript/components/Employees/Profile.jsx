import React, {useState, useEffect} from 'react'
import NavBar from '../NavBar'
import {Link} from 'react-router-dom'
// import FilePreview from 'react-preview-file'
// import FileViewer from 'react-file-viewer'
import { Button, Table, Row, Col, Toast, Modal } from 'react-bootstrap'

const Profile = props => {

    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState(false)
    const [applications, setApplications] = useState([])

    const handlePreview = () => setPreview(true)

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
        <div className="employee">
            <NavBar handleSignout={props.signOut} profile={props.profile} user="employee" />
        <div className="update">
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
        </div>
            <div className="employee-profile">

                    <div className="d-flex justify-content-between">

                        <h5>{employee.city}, {employee.state}</h5>
                        <h5>{employee.trade}</h5>
                    </div>
                    <div className="employee-description">
                        <p>{employee.description}</p>
                    </div>
                {/* <Button variant="link" onClick={handlePreview}>
                    View Resume
                </Button>
                <div>
                    <Modal show={preview}>
                        <Modal.Body>
                            <FileViewer filePath={file} fileType={type} />
                        </Modal.Body>
                    </Modal>
                </div> */}
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
            </div>
        </div>
    )
}

export default Profile

