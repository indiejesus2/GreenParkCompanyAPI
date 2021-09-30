import React, { useState, useEffect } from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import { useFormik } from 'formik'

export default function EditJob(props) {

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

    const job = props.jobs.find(job => job.id == props.match.params.job_id)

    const formik = useFormik({
        initialValues: {
            job: job.id,
            title: job.title,
            city: job.city,
            state: job.state,
            zipcode: job.zipcode,
            license: job.license,
            jobType: job.jobType,
            schedule: job.schedule,
            shifts: job.shifts,
            seasonstart: job.seasonstart,
            seasonend: job.seasonend,
            minpay: job.minpay,
            maxpay: job.maxpay,
            industry: ''
        },
        onSubmit: values => {
            props.editJob(values)
            props.history.push(`/contractors/${state.employer_id}/jobs/${state.id}`)
        }
    })

    return (
        <div className="editJob">
            <h1>Edit Job</h1>
                <Form onSubmit={formik.handleSubmit} className="editJob-form">
            <div className="input">
                <Form.Group name="info">
                <FloatingLabel label="Title">
                    <Form.Control type="text" name="title" value={formik.initialValues.title} onChange={formik.handleChange} />
                </FloatingLabel>
                <FloatingLabel label="City">
                    <Form.Control type="text" name="city" value={formik.initialValues.city} onChange={formik.handleChange} />
                </FloatingLabel>
                <FloatingLabel label="State">
                    <Form.Control type="text" name="state" value={formik.initialValues.state} onChange={formik.handleChange} />
                </FloatingLabel>
                <FloatingLabel label="ZipCode">
                    <Form.Control type="text" name="zipcode" value={formik.initialValues.zipcode} onChange={formik.handleChange} />
                </FloatingLabel>
                <FloatingLabel label="Description">
                    <Form.Control as="textarea" name="description" value={formik.initialValues.description} onChange={formik.handleChange} />
                </FloatingLabel>
                </Form.Group>
            </div>
            <div className="job-type">
                <Form.Label htmlFor="job-type">Job-Type: </Form.Label>
            <Form.Check name="jobType" label="Full-Time" value="FT" id={`inline-checkbox-1`} onChange={formik.handleChange} />
            <Form.Check name="jobType" label="Part-Time" value="PT" id={`inline-checkbox-2`} onChange={formik.handleChange} /> 
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
                    <Button type="submit" value="Edit Job" onClick={formik.handleSubmit}/>
                </div>
            </Form>
        </div>
    )
}