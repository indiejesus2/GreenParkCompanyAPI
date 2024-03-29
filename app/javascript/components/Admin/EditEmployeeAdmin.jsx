import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { Form, FloatingLabel, Button, Row, Col, InputGroup, Toast, ToastContainer, CloseButton } from 'react-bootstrap'
import {Link, Redirect} from 'react-router-dom'
// import EmployeeFile from './EmployeeFile'
import NavBar from '../NavBar'
// import SideNavBar from '../SideNavBar'

const EditEmployeeAdmin = (props) => {

    const formatPhoneNumber = (value) => {

        if (!value) return value;
    
        const phoneNumber = value.replace(/[^\d]/g, "");
    
        const phoneNumberLength = phoneNumber.length;
    
        if (phoneNumberLength < 4) return phoneNumber;
    
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`
        }
    
        return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6, 10)}`;
    
    }

    const handlePostal = (e) => {
        let postal = e.target.value
        if (postal.length == 5) {
            findCity(postal)
            formik.setFieldValue('zipcode', postal)
        } else {
            formik.setFieldValue('zipcode', postal)
        }
    }

    const handleExperience = () => {
        props.history.push(`/employees/${employee.id}/experience/add_experience`)
    }

    const findCity = async (postal) => {
        const configObj = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(postal)
        };
        const resp = await fetch(`/api/v1/findcity/${postal}`, { configObj })
        const data = await resp.json()
        if (data.town) {
            formik.setFieldValue('city', data.town)
            formik.setFieldValue('state', data.state)
        }
    }

    const months = [
        "Jan", 
        "Feb", 
        "Mar", 
        "Apr", 
        "May", 
        "Jun", 
        "Jul", 
        "Aug", 
        "Sept", 
        "Oct", 
        "Nov",
        "Dec"
    ]

    const states = [
        "--",
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Lousiana",
        "Maine",
        "Maryland",
        "Massachussetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ]

    const jobtypes = [
        "Full Time",
        "Part Time",
        "Contract",
        "Temporary"
    ]

    const schedule = [
        "Weekdays",
        "Weekends",
        "Overnight",
        "Holidays"
    ]

    const shifts = [
        "AM",
        "PM",
        "Evening"
    ]

    const trades = [
        "--",
        "Plumbing",
        "Painting",
        "Maintenance",
        "Electric",
        "Landscape",   
        "Other/None"
    ]

    const commute = [
        "5",
        "10",
        "15",
        "25",
        "50",
        "75",
        "100"
    ]

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);
    const [msg, setMsg] = useState(false)
    const [fileLoading, setFileLoading] = useState(false)
    const handleMsg = () => setMsg(true)
    const handleCloseMsg = () => setMsg(false)

    useEffect(() => {
        if (fileLoading == false && show == true) {
            handleClose()
            handleMsg()
        }
    }, [props.fileLoading])

    const employee = props.employees.find(employee => employee.id == props.match.params.employee_id).profile
    
    const formik = useFormik({      
        initialValues: {
            employee_id: !!employee ? employee.id : 1,
            fname: !!employee ? employee.fname : '',
            lname: !!employee ? employee.lname : '',
            city: !!employee ? employee.city : '',
            state: !!employee ? employee.state : '',
            zipcode: !!employee ? employee.zipcode : '',
            phone: !!employee ? employee.phone : '',
            description: !!employee ? employee.description : '',
            commute: !!employee ? employee.commute : 25,
            license: !!employee ? employee.license : false,
            jobtype: !!employee ? employee.jobtype : [],
            schedule: !!employee ? employee.schedule : [],
            shifts: !!employee ? employee.shifts : [],
            seasonstart: !!employee ? employee.seasonstart : '',
            seasonend: !!employee ? employee.seasonend : '',
            minpay: !!employee ? employee.minpay : '',
            paytype: !!employee ? employee.paytype : 'Hourly',
            trade: !!employee ? employee.trade : '',
        },
        onSubmit: values => {
            props.updateProfile(values)
            // props.history.push(`/employees/${values.employee_id}/profile`)
        }
    })

    const handleDelete = () => {
        props.deleteEmployee(employee)
        props.history.push('/admin/employees')
    }

    const handleTable = () => {
            return (
                <div>
                    <Row className="mb-3">

                    <Form.Group as={Col}>
                        <FloatingLabel label="First Name">
                            <Form.Control type="text" name="fname" value={formik.values.fname} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} onChange={formik.handleChange} />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>

                        <FloatingLabel label="Last Name">
                            <Form.Control type="text" name="lname" value={formik.values.lname} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} onChange={formik.handleChange} />
                        </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">

                    <Form.Group as={Col}>
                        <FloatingLabel label="City">
                            <Form.Control type="text" name="city" value={formik.values.city} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} onChange={formik.handleChange} />
                        </FloatingLabel>
                        </Form.Group> 
                    <Form.Group as={Col}>
                        <FloatingLabel label="State">
                        <Form.Select name="state" onChange={formik.handleChange} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} value={formik.values.state}>
                            {states.map(state => 
                                <option defaultValue={formik.initialValues.state == state}>{state}</option>
                                )}
                        </Form.Select>
                        </FloatingLabel>
                        </Form.Group>
                    <Form.Group as={Col}>
                        <FloatingLabel label="Zip-Code">
                            <Form.Control type="text" name="zipcode" value={formik.values.zipcode} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} onChange={handlePostal} />
                        </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">

                    <Form.Group as={Col}>
                        <FloatingLabel label="Phone">
                            <Form.Control type="text" name="phone" value={formatPhoneNumber(formik.values.phone)} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} onChange={formik.handleChange} />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                <FloatingLabel label="Trade">
                <Form.Select name="trade" id="trade" onChange={formik.handleChange} defaultValue={formik.initialValues.trade} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}>
                        {trades.map(trade => 
                            <option key={trade}>{trade}</option>
                            )}
                            </Form.Select>
                </FloatingLabel>
                </Form.Group> 
                <Form.Group as={Col}>
                    <FloatingLabel label="Commute">

                        <Form.Select name="commute" id="commute" onChange={formik.handleChange} value={formik.values.commute} defaultValue={formik.values.commute} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}>
                            {commute.map(miles => 
                                <option key={miles} value={miles}>{miles} Miles</option>    
                                )}
                        </Form.Select>
                    </FloatingLabel>
                    </Form.Group>
                </Row>

                    <Form.Group>
                        <FloatingLabel label="Description">
                            <Form.Control as="textarea" name="description" style={{ height: '100px', backgroundColor: '#2f2f2f', color: '#fff'}} value={formik.values.description} onChange={formik.handleChange} />
                        </FloatingLabel>
                    </Form.Group>
                    <Row className="mb-3 mt-3">
                    <Form.Group as={Col} style={{ backgroundColor: "#2f2f2f", color: "#fff", border: "1px solid white", paddingTop: "0.625rem", paddingBottom: ".625rem", paddingInline: ".75rem", marginInline: "10px"}}>
                        <Form.Label style={{ opacity: ".65", transform: "scale(.85) translateY(-.5rem) translateX(.15rem)"}} htmlFor="job type"> Job-Type: </Form.Label>
                        {jobtypes.map(job => 
                            <Form.Check name="jobtype" label={job} value={job} id={job} key={job} onChange={formik.handleChange} defaultChecked={formik.values.jobtype.includes(job)}/>
                            )}
                    </Form.Group>
                    <Form.Group as={Col} style={{ backgroundColor: "#2f2f2f", color: "#fff", border: "1px solid white", paddingTop: "0.625rem", paddingBottom: ".625rem", paddingInline: ".75rem", marginInline: "10px"}}>

                        <Form.Label style={{ opacity: ".65", transform: "scale(.85) translateY(-.5rem) translateX(.15rem)"}} htmlFor="schedule">Schedule: </Form.Label>
                        {schedule.map(day => 
                            <Form.Check name="schedule" id={day} label={day} value={day} key={day} onChange={formik.handleChange} 
                            defaultChecked={formik.values.schedule.includes(day)}
                            />
                            )}
                            </Form.Group>
                            <Form.Group as={Col} style={{ backgroundColor: "#2f2f2f", color: "#fff", border: "1px solid white", paddingTop: "0.625rem", paddingBottom: ".625rem", paddingInline: ".75rem", marginInline: "10px"}}>
                    <Form.Label style={{ opacity: ".65", transform: "scale(.85) translateY(-.5rem) translateX(.15rem)"}}>Shifts: </Form.Label>
                    {shifts.map(shift =>                             
                        <Form.Check name="shifts" label={shift} value={shift} key={shift} onChange={formik.handleChange} defaultChecked={formik.values.shifts.includes(shift)} />
                        )}
                        </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>
                        Pay Type:
                    </Form.Label>
                    <Form.Select name="paytype" label="paytype" value={formik.values.paytype} onChange={formik.handleChange} defaultValue={formik.values.paytype} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}>
                            <option>Hourly</option>
                            <option>Annually</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col}>
                {/* <div className="payrate"> */}
                    <Form.Label>
                        Minimum Pay Rate: 
                    </Form.Label>
                    <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control type="text" name="minpay" onChange={formik.handleChange} value={formik.values.minpay} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}/>
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Valid Driver's License:
                    </Form.Label>
                    <Form.Select style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} name="license" label="license" value={formik.values.license} onChange={formik.handleChange} defaultValue={formik.values.license}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </Form.Select>
                </Form.Group>
                </Row>
                {/* <Row className="mb-3">
                </Row> */}
                </div>
            )
    }

    return (
        <div className="admin">
        <NavBar handleSignout={props.signOut} loggedIn={props.loggedIn} user="admin" />
        <div className="adminDashboard">
            {/* <SideNavBar profile={props.profile} user="employee"/> */}

            {/* <div className="dashboard">
                <div className="employee-job"> */}

            <h1>Edit Profile</h1>
            <div className="input">
                <Form onSubmit={formik.handleSubmit} className="profile-form">
                    {handleTable()}
                {/* <div className="d-flex justify-content-around">
                        <Button onClick={handleShow} className="d-flex justify-content-right">
                            Upload Resume/CV
                            <EmployeeFile 
                            show={show} 
                            // employee={employee}
                            id={employee.employee_id}
                            uploadFile={props.uploadFile}
                            fileLoading={props.fileLoading}
                            handleMsg={handleMsg}
                            // handleShow={handleShow}
                            handleClose={handleClose}
                            // uploadFile={} 
                            />
                        </Button>
                    <Button value="Add Experience" onClick={handleExperience}>
                        Add Experience
                    </Button> */}
                    <Button type="submit" value="Save Changes" onClick={formik.handleSubmit}>Save Changes</Button>
                    <Button type="secondary" value="Delete Employee" onClick={() => handleDelete()}>Delete Employee</Button>
                    </Form>
                {/* </div> */}
            </div>
            {/* {handleFileLoading()} */}
            {/* <ToastContainer position="middle-center">
                <Toast show={msg} onClose={handleCloseMsg}>
                    <Toast.Header style={{justifyContent: "right"}} closeButton>
                    </Toast.Header>
                        <Toast.Body style={{backgroundColor: "black"}}>
                        <h2>Your resume has been successfully uploaded.</h2>
                        </Toast.Body>
                </Toast>
            </ToastContainer> */}
            </div>
        {/* </div>
        </div> */}
    </div>
    )

}

export default EditEmployeeAdmin