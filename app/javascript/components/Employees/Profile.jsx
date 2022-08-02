import React, {useState, useEffect} from 'react'
import NavBar from '../NavBar'
import SideNavBar from '../SideNavBar'
import {Link} from 'react-router-dom'
// import FilePreview from 'react-preview-file'
// import FileViewer from 'react-file-viewer'
import { Button, Table, Row, Col, Toast, Card, CloseButton } from 'react-bootstrap'

const Profile = props => {

    const size = useWindowSize();

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined
        });

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            
            window.addEventListener("resize", handleResize);
            
            handleResize();
            
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return windowSize;
    }

    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState(false)
    const [applications, setApplications] = useState([])
    const files = props.files ? Object.entries(props.files) : []
    const file = files.filter(file => file[0] == props.employee.id)

    const handleResume = () => {
        if (file.length>0) {
            return (
                <Button onClick={() => handleDownload()}>View Resume</Button>
            )
        }
    }

    const handleDownload = () => {
        window.location.href = file[0][1]
    }

    const handlePreview = () => setPreview(true)

    const handleProfile = () => {
        props.history.push(`/employees/${props.employee.id}/edit_profile`)
    }

    const handleExperience = () => {
        props.history.push(`/employees/${employee.id}/experience/add_experience`)
    }
    
    const handleEdit = (history) => {
        props.history.push(`/employees/${props.employee.id}/experience/${history.id}`)
    }

    const handleClose = () => {
        props.history.push('/employees')
    }

    // useEffect(() => {
    //     debugger
    //     if (props.employee.applicants.length !== applications.length) {
    //         setApplications(props.employee.applicants)
    //         setShow(true)
    //     }
    // }, [props.employee.applicants])

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

    const handleTable = (history) => {
        if (size.width > 580) {
            return (
                <Table style={{ "marginBottom": 2.5 + "px"}}>
                <tbody>
                    <tr>
                        <td id="table-header" style={{ "border-bottom-width": 0 + "px", "border-right": 2 + "px solid white"}}>
                            Company: {history.company}
                        </td>
                        <td id="table-header" style={{ "border-bottom-width": 0 + "px"}}>
                            Location: {history.city}, {history.state}
                        </td>
                    </tr>
                    <tr>
                        <td id="table-header" style={{ "border-bottom-width": 0 + "px", "border-right": 2 + "px solid white"}}>
                            Title: {history.title}
                            
                        </td>
                        <td id="table-header" style={{ "border-bottom-width": 0 + "px"}}>
                            From {history.startdate} to {history.current?"Present":history.enddate}
                        </td>
                    </tr>
                </tbody>                                   
            </Table>
            )
        } else {
            return (
                <Table style={{ "marginBottom": 2.5 + "px", "maxWidth": 65 + "%"}}>
                <tbody>
                    <tr>
                        <td id="table-header" style={{ "border-bottom-width": 0 + "px"}}>
                            Company: {history.company}
                        </td>
                    </tr>
                    <tr>
                        <td id="table-header" style={{ "border-bottom-width": 0 + "px"}}>
                            Location: {history.city}, {history.state}
                        </td>
                    </tr>
                    <tr>
                        <td id="table-header" style={{ "border-bottom-width": 0 + "px"}}>
                            Title: {history.title}    
                        </td>
                    </tr>
                    <tr>
                        <td id="table-header" style={{ "border-bottom-width": 0 + "px"}}>
                            From {history.startdate} to {history.current?"Present":history.enddate}
                        </td>
                    </tr>
                </tbody>                                   
            </Table>
            )
            
        }
    }

    return (
        <div className="employees">
            <NavBar handleSignout={props.signOut} profile={props.profile} loggedIn={props.loggedIn} user="employee" />
            <div className="page">
                <SideNavBar profile={props.profile} user="employee"/>
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
        <div className="dashboard">

            <div className="employee-job">   

                <h1>Profile</h1>
                <Card id={employee.id} key={employee.id}>
                <CloseButton variant="white" onClick={handleClose} style={{color: "#3fa1fc", position: "relative", top: 10+"px", right: 10+"px", alignSelf:"end"}}/> 
            <Card.Body style={{"padding-top": "10px"}}>
                <div className="job-body"
                        // style={{"width": 50 + "%"}}
                    >
                    <div className="job-table">

                    <Table>
                        <tbody>
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
                        </tbody>                
                    </Table>
                    </div>
                    </div>
                    <div className="description">
                        <div id="description-details">
                            <h2>Employee Information</h2>
                        </div>
                        <div className="description-box">
                            <p>
                                {employee.description}
                            </p>
                            </div>
                        </div>
                </Card.Body>
                    <div className="job-buttons">
                        <Button onClick={handleProfile}>                            
                                Edit Profile
                        </Button>
                        <Button onClick={handleExperience}>
                            Add/Edit Experience
                        </Button>
                        {handleResume()}
                    </div>
            </Card>
                </div>
                <div className="employees-jobs">
                <h3 style={{ "fontWeight": "bold"}}>Past Experience: </h3>
                    {props.experience.map(history => 
                        <Card id={history.id} key={history.id}>
                            <Card.Body className='d-flex'>
                                {handleTable(history)}
                                <div className='d-flex align-items-center'>
                                    <Button id="editExperience" onClick={() => handleEdit(history)}>
                                        Edit Experience
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    )}
            </div>
        </div>
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