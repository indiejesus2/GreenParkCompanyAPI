import React from 'react'
import { Modal, Button, Table, Container, Row } from 'react-bootstrap'

const Job = props => {
    
    const job = props.job
    const applicant = props.employee.applicants.find(applicant => applicant.job_id == job.id)

    const rate = (rating) => {
        if (rating == 6 || rating == 5) {
            return "&#9734; &#9734; &#9734; &#9734; &#9734;"
        } else if (rating == 4) {
            return (
                <div>
                    {String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734)}
                </div>
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
                            Pay Range: 
                        </td>
                        <td>
                            {job.minpay} - {job.maxpay}
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