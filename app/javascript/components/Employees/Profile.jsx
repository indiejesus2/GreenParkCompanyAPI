import React, {useState, useEffect} from 'react'
import NavBar from '../NavBar'
import { Button, Table, Row, Col, Toast } from 'react-bootstrap'

const Profile = props => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true)
    }, [applications])
    
    const handleClick = () => {
        props.history.push(`/employees/${props.employee.id}/edit_profile`)
    }

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

    const applications = props.employee.applicants
    const employee = props.profile
    const license = props.profile.license == true ? "Yes" : "No"
    const jobtype = employee.jobtype.length > 0 ? employee.jobtype : []
    const schedule = employee.schedule.length > 0 ? employee.schedule : []
    const shifts = employee.shifts.length > 0 ? employee.shifts : []

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

                <div className="employee-title">
                    <h4>{employee.city}, {employee.state}</h4>
                    <h4>{employee.industry}</h4>
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
                </div>
                    )}
                </div>
                <br />
                <div className="edit-button">
                    <Button variant="link" onClick={handleClick}>Edit Profile</Button>
                </div>
            </div>
        </div>
    )
}

export default Profile

