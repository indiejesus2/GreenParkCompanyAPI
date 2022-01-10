import React from 'react'
import { Modal, Button, Table, Container, Row } from 'react-bootstrap'

const Job = props => {
    
    const job = props.job
    const applicant = props.applicants.find(applicant => applicant.job_id == job.id)

    const rate = (rating) => {
        if (rating == 6 || rating == 5) {
            return (
                <span>
                    {String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734)}
                </span>
            )
        } else if (rating == 4) {
            return (
                <span>
                    {String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734)}
                </span>
            )
        } else if (rating == 3) {
            return (
                <span>
                    {String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734)}
                </span>
            )
        } else if (rating == 2) {
            return (
                <span>
                    {String.fromCharCode(9734) + String.fromCharCode(9734)}
                </span>
            )
        } else if (rating == 1) {
            return (
                <span>
                    {String.fromCharCode(9734)}
                </span>
            )
        }
    }

    if (job == "") {
        return null
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} centered>
            <div className="job-info">
            <Modal.Title>
                <h1>{job.company}</h1>
                <h2>
                    {job.title} - {job.city}, {job.state} 
                </h2>
                <div className="subtitle">
                        <span className="d-flex">
                            Potential Match: {rate(applicant.rating)} 
                        </span>    
                        <span>
                            Distance: {Math.round(applicant.distance)} Miles
                        </span>
                </div>
            </Modal.Title>
            <Modal.Body style={{"padding-top": "5px"}}>
                <div className="description">
                    <span>{job.description}</span>
                </div>
                <div className="job-body">

                <Table style={{"padding-top": "10px"}}>
                    <tr>
                    <td>
                        Job Type:                         
                    </td>
                    <td>
                        {job.jobtype.join(', ')}
                    </td>
                    </tr>
                    <tr>
                    <td>
                        Job Shifts: 
                    </td>
                    <td>
                        {job.shifts.join(", ")}
                    </td>
                    </tr>
                    <tr>
                    <td>
                        Schedule:
                    </td>
                    <td>
                    {job.schedule.join(", ")}
                    </td>
                    </tr>
                    <tr>
                        <td>
                            Pay: 
                        </td>
                        <td>
                            ${job.minpay} {job.paytype}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Season: 
                        </td>
                        <td>
                            {job.seasonstart} - {job.seasonend}
                        </td>
                    </tr>
                </Table>
                </div>
            </Modal.Body>
        </div>
        </Modal>
    )

}

export default Job