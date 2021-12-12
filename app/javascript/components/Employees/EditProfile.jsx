import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar'
import { useFormik } from 'formik'
import { Form, FloatingLabel, Button, Row, Col, InputGroup } from 'react-bootstrap'
import EmployeeFile from './EmployeeFile'

export default function EditProfile(props) {

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

    const industries = [
        "--",
        "Plumbing",
        "Painting",
        "Maintenance",
        "Electric",
        "Landscape",   
        "Other/None"
    ]

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        if (props.fileLoading == false) {
            handleClose()
        }
    }, [props.fileLoading])

    const employee = props.profile

    const formik = useFormik({      
        initialValues: {
            employee_id: props.match.params.id,
            fname: employee.fname,
            lname: employee.lname,
            city: employee.city,
            state: employee.state,
            zipcode: employee.zipcode,
            phone: employee.phone,
            description: employee.description,
            license: employee.license,
            jobtype: employee.jobtype,
            schedule: employee.schedule,
            shifts: employee.shifts,
            seasonstart: employee.seasonstart,
            seasonend: employee.seasonend,
            minpay: employee.minpay,
            paytype: employee.paytype,
            industry: employee.industry,
        },
        onSubmit: values => {
            props.updateProfile(values)
            props.history.push(`/employees/${values.employee_id}/profile`)
        }
    })

    return (
        <div className="profile">
                <NavBar handleSignout={props.signOut} profile={props.profile} user="employee" />

            <h1>Edit Profile</h1>
            <div className="input">
                <Form onSubmit={formik.handleSubmit} className="profile-form">
                    <Row className="mb-3">

                    <Form.Group as={Col}>
                        <FloatingLabel label="First Name">
                            <Form.Control type="text" name="fname" value={formik.values.fname} onChange={formik.handleChange} />
                        </FloatingLabel>
                    </Form.Group> 
                    <Form.Group as={Col}>

                        <FloatingLabel label="Last Name">
                            <Form.Control type="text" name="lname" value={formik.values.lname} onChange={formik.handleChange} />
                        </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">

                    <Form.Group as={Col}>
                        <FloatingLabel label="City">
                            <Form.Control type="text" name="city" value={formik.values.city} onChange={formik.handleChange} />
                        </FloatingLabel>
                        </Form.Group> 
                    <Form.Group as={Col}>
                        <FloatingLabel label="State">
                        <Form.Select name="state" onChange={formik.handleChange} value={formik.values.state}>
                            {states.map(state => 
                                <option defaultValue={formik.initialValues.state == state}>{state}</option>
                            )}
                        </Form.Select>
                        </FloatingLabel>
                        </Form.Group>
                    <Form.Group as={Col}>
                        <FloatingLabel label="Zip-Code">
                            <Form.Control type="text" name="zipcode" value={formik.values.zipcode} onChange={handlePostal} />
                        </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">

                    <Form.Group as={Col}>
                        <FloatingLabel label="Phone">
                            <Form.Control type="text" name="phone" value={formatPhoneNumber(formik.values.phone)} onChange={formik.handleChange} />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                <FloatingLabel label="Industry">
                <Form.Select name="industry" id="industry" onChange={formik.handleChange} defaultValue={formik.initialValues.industry}>
                        {industries.map(industry => 
                            <option key={industry}>{industry}</option>
                            )}
                            </Form.Select>
                </FloatingLabel>
                </Form.Group> 
                </Row>

                    <Form.Group>
                        <FloatingLabel label="Experience">
                            <Form.Control as="textarea" name="description" style={{ height: '100px'}} value={formik.initialValues.description} onChange={formik.handleChange} />
                        </FloatingLabel>
                    </Form.Group>
                    <Row className="desired">
                    <Form.Group as={Col}>
                    <div className="jobtype">
                        <Form.Label htmlFor="job type"> Job-Type: </Form.Label>
                        {jobtypes.map(job => 
                            <Form.Check name="jobtype" label={job} value={job} id={job} key={job} onChange={formik.handleChange} defaultChecked={formik.values.jobtype.includes(job)}/>
                        )}
                    </div>
                    </Form.Group>
                    <Form.Group as={Col}>

                    <div className="schedule">
                        <Form.Label htmlFor="schedule">Schedule: </Form.Label>
                        {schedule.map(day => 
                            <Form.Check name="schedule" id={day} label={day} value={day} key={day} onChange={formik.handleChange} 
                            defaultChecked={formik.values.schedule.includes(day)}
                            />
                            )}
                    </div>
                            </Form.Group>
                            <Form.Group as={Col}>

                <div className="shifts">
                    <Form.Label>Shifts: </Form.Label>
                    {shifts.map(shift =>                             
                        <Form.Check name="shifts" label={shift} value={shift} key={shift} onChange={formik.handleChange} defaultChecked={formik.values.shifts.includes(shift)} />
                        )}
                </div>
                        </Form.Group>
                </Row>

                    <Form.Label>Season Availability: </Form.Label>
                <Row className="mb-3">
                <Form.Group as={Col}>
                {/* <div className="seasonal"> */}
                    <FloatingLabel label="Seasonal Start">

                    <Form.Select name="seasonstart" onChange={formik.handleChange} defaultValue={formik.values.seasonstart}> 
                        {months.map(month =>
                                <option>{month}</option>
                        )}
                    </Form.Select>
                        </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col}>
                        <FloatingLabel label="Seasonal End">

                    <Form.Select name="seasonend" onChange={formik.handleChange} defaultValue={formik.values.seasonend}> 
                        {months.map(month => 
                        <option >{month}</option>
                        )}
                    </Form.Select>
                    </FloatingLabel>
                {/* </div> */}
                </Form.Group>

                </Row>
                <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>
                        Pay Type:
                    </Form.Label>
                    <Form.Select name="paytype" label="paytype" value={formik.values.paytype} onChange={formik.handleChange} defaultValue={formik.values.paytype}>
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
                    <Form.Control type="text" name="minpay" onChange={formik.handleChange} value={formik.values.minpay}/>
                    </InputGroup>
                </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Check name="license" label="Driver's License" value={formik.values.license} onChange={formik.handleChange} defaultChecked={formik.values.license} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Button onClick={handleShow} className="d-flex justify-content-right">
                            Upload Resume/CV
                            <EmployeeFile 
                            show={show} 
                            employee={employee}
                            uploadFile={props.uploadFile}
                            fileLoading={props.fileLoading}
                            // uploadFile={} 
                            />
                        </Button>
                    </Form.Group>
                </Row>
                <div className="submit">
                    <Button type="submit" value="Save Changes" onClick={formik.handleSubmit}>Save Changes</Button>
                </div>
                    </Form>
            </div>
        </div>
    )

}