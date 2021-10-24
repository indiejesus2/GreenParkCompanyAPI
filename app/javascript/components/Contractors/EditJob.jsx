import React, { useState, useEffect } from 'react'
import { Form, Button, FloatingLabel, Row, Col } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as yup from 'yup'

export default function EditJob(props) {

    const schema = yup.object().shape({
        city: yup.string().required(),
        state: yup.string().required()
    })

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

    const industries = [
        "--",
        "Plumbing",
        "Painting",
        "Maintenance",
        "Electric",
        "Landscape",   
        "Other"
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

    const job = props.jobs.find(job => job.id == props.match.params.job_id)


    const formik = useFormik({
        initialValues: {
            id: job.id,
            title: job.title,
            city: job.city,
            state: job.state,
            zipcode: job.zipcode,
            license: job.license,
            jobtype: job.jobtype,
            schedule: job.schedule,
            shifts: job.shifts,
            seasonstart: job.seasonstart,
            seasonend: job.seasonend,
            minpay: job.minpay,
            maxpay: job.maxpay,
            industry: job.industry
        },
        validationSchema: schema,
        onSubmit: values => {
            props.editJob(values)
            props.history.push(`/contractors/${job.employer_id}/jobs/${job.id}`)
        }
    })

    debugger

    return (
        <div className="editJob">
            <h1>Edit Job</h1>
                <Form onSubmit={formik.handleSubmit} className="editJob-form">
            <Row className="mb-3">
            <Form.Group as={Col} >
                <FloatingLabel label="Title">
                    <Form.Control 
                    type="text" 
                    name="title" 
                    onChange={formik.handleChange} 
                    value={formik.values.title} 
                            onChange={formik.handleChange} 
                            isInvalid={formik.touched.title && formik.errors.title}
                            onBlur={formik.handleBlur}
                            />
                            {formik.errors.title && formik.touched.title && (
                                <div style={{ color: "red"}}>{formik.errors.title}</div>
                            )}
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
                <Row className="mb-3">
                <Form.Group as={Col}>
                        <FloatingLabel label="City">
                            <Form.Control 
                            type="text" 
                            name="city" 
                            value={formik.values.city} 
                            onChange={formik.handleChange} 
                            isInvalid={formik.touched.city && formik.errors.city}
                            onBlur={formik.handleBlur}
                            />
                            {formik.errors.city && formik.touched.city && (
                                <div style={{ color: "red"}}>{formik.errors.city}</div>
                            )}
                        </FloatingLabel>
                        </Form.Group> 
                <Form.Group as={Col}>
                        <FloatingLabel label="State">
                            <Form.Select
                            name="state" 
                            value={formik.values.state} 
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.state && formik.errors.state}
                            onBlur={formik.handleBlur}
                            >
                                {states.map(state => 
                                    <option  defaultValue={formik.initialValues.state == state}>{state}</option>
                                )}
                            {formik.errors.state && formik.touched.state && (
                                <div style={{ color: "red"}}>{formik.errors.state}</div>
                            )}
                            </Form.Select>
                        </FloatingLabel>
                        </Form.Group>
                <Form.Group as={Col}>

                <FloatingLabel label="ZipCode">
                    <Form.Control type="text" name="zipcode" onChange={formik.handleChange} />
                </FloatingLabel>
                </Form.Group>
                </Row>
                
                <FloatingLabel label="Description">
                    <Form.Control as="textarea" name="description" onChange={formik.handleChange} />
                </FloatingLabel>
            <Row className="align-items-center">
                <Form.Group as={Col}>
                <div className="jobtype">
                    <Form.Label htmlFor="job type"> Job-Type: </Form.Label>
                    {jobtypes.map(job => 
                        <Form.Check name="jobtype" label={job} value={job} defaultChecked={formik.values.jobtype.includes(job)} id={job} key={job} onChange={formik.handleChange} />
                    )}
                </div>
                </Form.Group>
                <Form.Group as={Col}>
                    
                <div className="schedule">
                    <Form.Label htmlFor="schedule">Schedule: </Form.Label>
                    {schedule.map(day => 
                        <Form.Check name="schedule" id={day} label={day} value={day} defaultChecked={formik.values.schedule.includes(day)} key={day} onChange={formik.handleChange} />
                        )}
                </div>
                        </Form.Group>
                        <Form.Group as={Col}>
                    
                <div className="shifts">
                <Form.Label>Shifts: </Form.Label>
                {shifts.map(shift =>                             
                    <Form.Check name="shifts" label={shift} value={shift} defaultChecked={formik.values.shifts.includes(shift)} key={shift} onChange={formik.handleChange} />
                    )}
                </div>
                    </Form.Group>
                </Row>

                <Form.Label>Season Availability: </Form.Label>
                <Row className="mb-3">
                <Form.Group as={Col}>
                <FloatingLabel label="Seasonal Start">

                <Form.Select name="seasonstart" onChange={formik.handleChange} defaultValue={formik.values.seasonstart} > 
                    {months.map(month =>
                        <option >{month}</option>
                    )}
                </Form.Select>
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <FloatingLabel label="Seasonal End">

                <Form.Select name="seasonend" onChange={formik.handleChange} defaultValue={formik.values.seasonend} > 
                    {months.map(month => 
                        <option>{month}</option>
                    )}
                </Form.Select>
                </FloatingLabel>
                </Form.Group>

                </Row>
                <Row className="mb-3">
                <Form.Group as={Col}>
                <Form.Label>
                    Minimum Pay Rate: 
                </Form.Label>
                <Form.Control type="text" name="minpay" onChange={formik.handleChange} defaultValue={formik.values.minpay} />
                </Form.Group>
                <Form.Group as={Col}>
                <Form.Label>
                    Maximum Pay Rate: 
                </Form.Label>
                <Form.Control type="text" name="maxpay" onChange={formik.handleChange} defaultValue={formik.values.maxpay} />
                </Form.Group>
                </Row>
                <div className="submit">
                    <Button type="submit" value="Edit Job" onClick={formik.handleSubmit}>Edit Job</Button>
                </div>
            </Form>
        </div>
    )
}