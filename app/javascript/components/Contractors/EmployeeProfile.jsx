import React from 'react'
import NavBar from '../NavBar'
import { useFormik } from 'formik'
import { Modal, Button } from 'react-bootstrap'

const EmployeeProfile = props => {

    const candidate = props.candidate
    const display = props.show == true ? "employee-profile" : "employee-profile d-none"
    
    // const interested = () => {
    //     if (candidate.interested) {
    //         return (
    //             <div>
    //                 <h5>Interested</h5>
    //             </div>
    //         )
    //     }
    // }

    const formik = useFormik({
        initialValues: {
            id: candidate.id,
            employee_id: candidate.employee_id,
            employer_id: candidate.employer_id,
            job_id: candidate.job_id,
            acceptance: candidate.acceptance
        },
        onSubmit: values => {
            props.editApplicant(values)
            props.history.push(`/contractors/${values.id}/profile`)
        }
    })

    const handleInterest = (candidate) => {
        if (candidate.interested == true) {
            return (
                <div style={{ display: "contents"}}>
                    {String.fromCharCode(9989)} Applied!
                </div>
            )
        }
    }

    const handleApplicant = (status) => {
        if (status = "false") {
            formik.values.acceptance = false
        } else if (status = "true") {
            formik.values.acceptance = true
        }
        formik.handleSubmit()
    }
    
    if (candidate == "") {
        return null
    }


    
        return (
            <div className={display}>
            <Modal show={props.show}>
                <Modal.Header>

                <Modal.Title>
                    <h2>{candidate.info.fname} {candidate.info.lname} - {candidate.info.city}, {candidate.info.state}</h2>
                    <h5>{candidate.info.trade}</h5>
                    <h6>{handleInterest(candidate)}</h6>

                </Modal.Title>
                </Modal.Header>
            <Modal.Body>
            <span>{candidate.info.description}</span>
            <div className="work-schedule">
                Job Type: {candidate.info.jobtype.join(', ')}
                <br />
                Work Schedule: {candidate.info.schedule.join(', ')}
                <br />
                Shifts: {candidate.info.shifts.join(', ')}
                <br />
                Season Availability: {candidate.info.seasonstart} - {candidate.info.seasonend}
                <br />
                Minimum Pay: ${candidate.info.minpay} {candidate.info.paytype == "Hourly"?"per hour":"per year"}
                <br />
                Description: {candidate.info.description}
            </div>
            <Modal.Footer>
                <Button onClick={() => handleApplicant("accept")}>Accept</Button>
                <Button onClick={() => handleApplicant("decline")}>Decline</Button>
                <Button onClick={props.handleClose}>Close</Button>
            </Modal.Footer>
            </Modal.Body>
                {/* {props.work_history.map(history => 
            <div className="work-history" key={history.id}>
            Experience:
            <p>{history.title}</p>
            <p>{history.company}</p>
            </div>
            )}
        <button onClick={handleClick}>Edit Profile</button> */}
        </Modal>
        </div>
        )
        // else {
        //     return (
        //         <div>
        //             Loading...
        //         </div>
        //     )
        // }
    
}

export default EmployeeProfile