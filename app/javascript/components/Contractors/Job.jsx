import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Form, Button, Table } from 'react-bootstrap'
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
            return (
                <div className="job">
                    <Card.Header>
                    {/* <img src="/images/noun_electric_3108716.png" alt="Electric" /> */}
                        <h1>{job.title}</h1>
                    <Card.Subtitle>{job.city}, {job.state}</Card.Subtitle>
                    <Link to={`/contractors/${job.employer_id}/jobs/${job.id}/editjob`}>Edit Job</Link>
                    </Card.Header>
                    <Card.Body>
                        <Table>
                            <tbody>
                                <tr>
                                    <td>trade:</td>
                                    <td>{job.trade}</td>
                                </tr>
                                <tr>
                                    <td>Job Type:</td>
                                    <td>{job.jobtype.join(", ")}</td>
                                </tr>
                                <tr>
                                    <td>Schedule:</td>
                                    <td>{job.schedule.join(", ")}</td>
                                </tr>
                                <tr>
                                    <td>Shifts:</td>
                                    <td>{job.shifts.join(", ")}</td>
                                </tr>
                                <tr>
                                    <td>Season Availability:</td>
                                    <td>{job.seasonstart} - {job.seasonend} </td>
                                </tr>
                                <tr>
                                    <td>Pay:</td>
                                    <td>${job.minpay} {job.paytype == "Hourly"?"per hour":"per year"}</td>
                                </tr>
                                <tr>
                                    <td>Description:</td>
                                    <td>{job.description}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                            <Applicants job={job}/>
                        </div>

            )
        }
}

export default Job