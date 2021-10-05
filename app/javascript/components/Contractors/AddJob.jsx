import React, { useState } from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import {useFormik} from 'formik'

export default function AddJob(props) {

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

    const industries = [
        "Plumbing",
        "Painting",
        "Maintenance",
        "Electric",
        "Landscape",   
        "Other"
    ]

    const formik = useFormik({
        initialValues: {
            employer_id: props.contractor.id,
            title: '',
            city: '',
            state: '',
            zipcode: '',
            license: false,
            jobType: [],
            schedule: [],
            shifts: [],
            seasonstart: '',
            seasonend: '',
            minpay: 0,
            maxpay: 0,
            industry: ''
        },
        onSubmit: values => {
            props.addJob(values)
            props.history.push(`/contractors/${props.employer_id}/jobs/`)
        }
    })

    return (
        <div className="editJob">
            <h1>Add Job</h1>
                <Form onSubmit={formik.handleSubmit} className="addJob-form">
            <div className="input">
            <Form.Select name="industry" id="industry" onChange={formik.handleChange}>
            <option>Work Industry</option>
                        {industries.map(industry => 
                        <option value={industry}>{industry}</option>
                            )}
            </Form.Select>
                <Form.Group name="info">
                <FloatingLabel label="Title">
                    <Form.Control type="text" name="title" onChange={formik.handleChange} />
                </FloatingLabel>
                <FloatingLabel label="City">
                    <Form.Control type="text" name="city" onChange={formik.handleChange} />
                </FloatingLabel>
                <FloatingLabel label="State">
                    <Form.Control type="text" name="state" onChange={formik.handleChange} />
                </FloatingLabel>
                <FloatingLabel label="ZipCode">
                    <Form.Control type="text" name="zipcode" onChange={formik.handleChange} />
                </FloatingLabel>
                <FloatingLabel label="Description">
                    <Form.Control as="textarea" name="description" onChange={formik.handleChange} />
                </FloatingLabel>
                </Form.Group>
            </div>
            <div className="job-type">
                <Form.Label htmlFor="job-type">Job-Type: </Form.Label>
            <Form.Check name="jobType" label="Full Time" value="Full Time" id={`inline-checkbox-1`} onChange={formik.handleChange} />
            <Form.Check name="jobType" label="Part Time" value="Part Time" id={`inline-checkbox-2`} onChange={formik.handleChange} /> 
            <Form.Check name="jobType" label="Contract" value="Contract" id={`inline-checkbox-3`} onChange={formik.handleChange} />
            <Form.Check name="jobType" label="Temporary" value="Temporary" id={`inline-checkbox-4`} onChange={formik.handleChange} />
            </div>
                <div className="schedule">
            <Form.Label htmlFor="schedule">Schedule: </Form.Label>
            <Form.Check name="schedule" label="Weekdays" value="Weekdays" onChange={props.handleChange}/>
            <Form.Check name="schedule" label="Weekends" value="Weekends" onChange={props.handleChange}/>
            <Form.Check name="schedule" label="Overnight" value="Overnight" onChange={props.handleChange}/>
            <Form.Check name="schedule" label="Holidays" value="Holidays" onChange={props.handleChange}/>
                </div>
                <div className="shifts">
                    <Form.Label>Shifts: </Form.Label>
                    <Form.Check name="shift" label="AM" value="AM" onChange={props.handleChange}/>
                    <Form.Check name="shift" label="PM" value="PM" onChange={props.handleChange}/>
                    <Form.Check name="shift" label="Evening" value="Evening" onChange={props.handleChange}/>
                </div>
                <div className="seasonal">
                    <Form.Label>Season Availability: </Form.Label>
                    <Form.Control as="select" name="seasonstart" onChange={props.handleChange}> 
                        <option>Seasonal Start</option>
                        {months.map(month => 
                        <option value={month}>{month}</option>
                            )}
                    </Form.Control>
                    <Form.Control as="select" name="seasonend" onChange={props.handleChange}> 
                        <option>Seasonal End</option>
                        {months.map(month => 
                        <option value={month}>{month}</option>
                            )}
                    </Form.Control>
                </div>
                <div className="payrate">
                    <Form.Label>
                        Minimum Pay Rate: 
                    </Form.Label>
                    <Form.Control type="text" name="minpay" onChange={props.handleChange} />
                    <Form.Label>
                        Maximum Pay Rate: 
                    </Form.Label>
                    <Form.Control type="text" name="maxpay" onChange={props.handleChange} />
                </div>
                <div className="submit">
                    <Button type="submit" value="Add Job" onClick={formik.handleSubmit}>Add Job</Button>
                </div>
            </Form>
        </div>
    )

}