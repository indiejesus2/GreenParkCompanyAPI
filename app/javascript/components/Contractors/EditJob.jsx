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
            job: job.id,
            title: job.title,
            city: job.city,
            state: job.state,
            zipcode: job.zipcode,
            license: job.license,
            jobtype: job.jobtype.join("").split(", "),
            schedule: job.schedule.join("").split(", "),
            shifts: job.shifts.join("").split(", "),
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
    
    const handleCheck = (e) => {
        // if (formik.values.jobtype.includes(jobType.value)) {
        //     return true
        // }
    }

    // const handleClick = () => {
    // }

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
                {jobtypes.map(job => 
                    <Form.Check name="jobType" label={job} value={job} id={job} onChange={formik.handleChange} defaultChecked={formik.values.jobtype.includes(job)}/>
                )}
            <Form.Check name="jobType" label="Part-Time" value="PT" id={`inline-checkbox-2`} onChange={formik.handleChange} defaultChecked={formik.values.jobtype}/> 
            <Form.Check name="jobType" label="Contract" value="Contract" id={`inline-checkbox-3`} onChange={formik.handleChange} defaultChecked={formik.values.jobtype}/>
            <Form.Check name="jobType" label="Temporary" value="Temporary" id={`inline-checkbox-4`} onChange={formik.handleChange} defaultChecked={formik.values.jobtype}/>
            </div>
                <div className="schedule">
            <Form.Label htmlFor="schedule">Schedule: </Form.Label>
                    {schedule.map(day => 
                        <Form.Check name="schedule" id={day} label={day} value={day} onChange={formik.handleChange} 
                        defaultChecked={formik.values.schedule.includes(day)}
                        />
                    )}
                </div>
                <div className="shifts">
                    <Form.Label>Shifts: </Form.Label>
                    {shifts.map(shift =>                             
                        <Form.Check name="shift" label={shift} value={shift} onChange={formik.handleChange} defaultChecked={formik.values.shifts.includes(shift)} />
                        )}
                </div>
                <div className="seasonal">
                    <Form.Label>Season Availability: </Form.Label>
                    <FloatingLabel label="Seasonal Start">

                    <Form.Select name="seasonstart" onChange={formik.handleChange} defaultValue={formik.values.seasonstart}> 
                        {months.map(month =>
                                <option selected={formik.values.seasonstart == month}>{month}</option>
                        )}
                    </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel label="Seasonal End">

                    <Form.Select name="seasonend" onChange={formik.handleChange} defaultValue={formik.values.seasonend}> 
                        {months.map(month => 
                        <option selected={formik.values.seasonend == month}>{month}</option>
                        )}
                    </Form.Select>
                    </FloatingLabel>
                </div>
                <div className="payrate">
                    <Form.Label>
                        Minimum Pay Rate: 
                    </Form.Label>
                    <Form.Control type="text" name="minpay" onChange={formik.handleChange} value={formik.values.minpay}/>
                    <Form.Label>
                        Maximum Pay Rate: 
                    </Form.Label>
                    <Form.Control type="text" name="maxpay" onChange={formik.handleChange} value={formik.values.maxpay}/>
                </div>
                <div className="submit">
                    <Button type="submit" value="Edit Job" onClick={formik.handleSubmit}>Edit Job</Button>
                </div>
            </Form>
        </div>
    )
}