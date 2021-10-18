import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Form, Button } from 'react-bootstrap'
import Applicants from './Applicants'

const Job = props => {
   
    const job = props.jobs.find(job => job.id == props.match.params.job_id)

        if (props.loading === true) {
            return (
            <div className="spinner">
                <span className="sr-only">Loading...</span>
            </div>
            )
        } else {
            debugger
            return (
                <div className="job">
                    <Card.Header>
                    <img src="/images/noun_electric_3108716.png" alt="Electric" />
                        <h1>{job.title}</h1>
                        <br />
                    <Link to={`/contractors/${job.employer_id}/jobs/${job.id}/editjob`}>Edit Job</Link>
                    </Card.Header>
                    <Card.Subtitle>{job.city}, {job.state}</Card.Subtitle>
                    <Card.Text>Job Type: {job.jobtype.join(", ")}</Card.Text>
                    <Card.Text>Schedule: {job.schedule.join(", ")}</Card.Text>
                    <Card.Text>Shifts: {job.shifts.join(", ")}</Card.Text>
                    <Card.Text>Season: {job.seasonstart} - {job.seasonend} </Card.Text>
                    <Card.Text>Pay Range: {job.minpay} - {job.maxpay}</Card.Text>
                    <Card.Text>{job.description}</Card.Text>
                            <Applicants job={job}/>
                        </div>

            )
        }
}

export default Job