import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar'
import { useFormik } from 'formik'
import { Form, FloatingLabel, Button, Row, Col } from 'react-bootstrap'


export default function EditProfile(props) {

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
        "AL",
        "AK",
        "AZ",
        "AR",
        "CA",
        "CO",
        "CT",
        "DE",
        "FL",
        "GA",
        "HI",
        "ID",
        "IL",
        "IN",
        "IA",
        "KS",
        "KY",
        "LA",
        "ME",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT",
        "NE",
        "NV",
        "NH",
        "NJ",
        "NM",
        "NY",
        "NC",
        "ND",
        "OH",
        "OK",
        "OR",
        "PA",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VT",
        "VA",
        "WA",
        "WV",
        "WI",
        "WY"
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
            maxpay: employee.maxpay,
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
                            <Form.Control type="text" name="fname" value={formik.initialValues.fname} onChange={formik.handleChange} />
                        </FloatingLabel>
                    </Form.Group> 
                    <Form.Group as={Col}>

                        <FloatingLabel label="Last Name">
                            <Form.Control type="text" name="lname" value={formik.initialValues.lname} onChange={formik.handleChange} />
                        </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">

                    <Form.Group as={Col}>
                        <FloatingLabel label="City">
                            <Form.Control type="text" name="city" value={formik.initialValues.city} onChange={formik.handleChange} />
                        </FloatingLabel>
                        </Form.Group> 
                    <Form.Group as={Col}>
                        <FloatingLabel label="State">
                        <Form.Select name={`experience.state`} onChange={props.handleChange}>
                            {states.map(state => 
                                <option defaultValue="--">{state}</option>
                            )}
                        </Form.Select>
                        </FloatingLabel>
                        </Form.Group>
                    <Form.Group as={Col}>
                        <FloatingLabel label="Zip-Code">
                            <Form.Control type="text" name="zipcode" value={formik.initialValues.zipcode} onChange={formik.handleChange} />
                        </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Form.Group>
                        <FloatingLabel label="Phone">
                            <Form.Control type="text" name="phone" value={formik.initialValues.phone} onChange={formik.handleChange} />
                        </FloatingLabel>
                        <FloatingLabel label="Description">
                            <Form.Control as="textarea" name="description" value={formik.initialValues.description} onChange={formik.handleChange} />
                        </FloatingLabel>
                    </Form.Group>
                    <Row className="align-items-center">
                    <Form.Group as={Col}>
                <FloatingLabel label="Industry">

                <Form.Select name="industry" id="industry" onChange={formik.handleChange} defaultValue={formik.initialValues.industry == industry} >
                        {industries.map(industry => 
                            <option key={industry}>{industry}</option>
                        )}
            </Form.Select>
                </FloatingLabel>
                </Form.Group> 
                    <Form.Group as={Col}>
                    <div className="job type">
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
                {/* <div className="payrate"> */}
                    <Form.Label>
                        Minimum Pay Rate: 
                    </Form.Label>
                    <Form.Control type="text" name="minpay" onChange={formik.handleChange} value={formik.values.minpay}/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>
                        Maximum Pay Rate: 
                    </Form.Label>
                    <Form.Control type="text" name="maxpay" onChange={formik.handleChange} value={formik.values.maxpay}/>
                </Form.Group>
                </Row>
                <div className="submit">
                    <Button type="submit" value="Edit Profile" onClick={formik.handleSubmit}>Edit Profile</Button>
                </div>
                    {/* <div className="history">
                        <h5>Work History</h5>
                        <div >

                        <label htmlFor="Job Title">Job Title: </label>
                        <input type="text" name="title" id={state.work_histories.id} value={state.work_histories.title} onChange={handleHistory} />
                        <br />
                        <label htmlFor="Company">Company: </label>
                        <input type="text" name="company" id={state.work_histories.id} value={state.work_histories.company} onChange={handleHistory} />
                        <br />
                        <label htmlFor="city">City: </label>
                        <input type="text" name="city" id={state.work_histories.id} value={state.work_histories.city} onChange={handleHistory} />
                        <br />
                        <label htmlFor="state">State: </label>
                        <input type="text" name="state" id={state.work_histories.id} value={state.work_histories.state} onChange={handleHistory} />
                        <br />
                        <label htmlFor="phone">Phone: </label>
                        <input type="text" name="phone" id={state.work_histories.id} value={state.work_histories.phone} onChange={handleHistory} />
                        <br />
                        <label htmlFor="startdate">Start Date: </label>
                        <input type="text" name="startdate" id={state.work_histories.id} value={state.work_histories.startdate} onChange={handleHistory} />
                        <br />
                        <label htmlFor="enddate">End Date: </label>
                        <input type="text" name="enddate" id={state.work_histories.id} value={state.work_histories.enddate} onChange={handleHistory} />
                        <label htmlFor="current">Current Job: </label>
                        <input type="checkbox" name="current" id={state.work_histories.id} value={state.work_histories.current} onChange={handleHistory} />
                        <br />
                        <label htmlFor="Description">Description: </label>
                        <input type="text" name="description" id={state.work_histories.id} value={state.work_histories.description} onChange={handleHistory} />
                        <br />

                        </div>
                        
                        <button onClick={handleHistory}>Add Experience</button>
                    </div> */}
                    </Form>
            </div>
        </div>
    )

}