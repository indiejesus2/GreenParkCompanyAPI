import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar'
import { useFormik } from 'formik'
import { Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const EmployeeProfile = props => {

    const candidate = props.candidate ? props.candidate : []
    const application = props.application ? props.application : []
    // const [application, setApplication] = useState(props.candidate.application)
    const display = props.show == true ? "employee-profile" : "employee-profile d-none"
    const history = useHistory();
    
    // const interested = () => {
    //     if (candidate.interested) {
    //         return (
    //             <div>
    //                 <h5>Interested</h5>
    //             </div>
    //         )
    //     }
    // }
    // useEffect(() => {
    //     if (application != props.candidate.application) {
    //         setApplication(props.candidate.application)
    //     }
    // }, [props.candidate])

    const formik = useFormik({
        initialValues:
         {
            id: application.id, 
            employee_id: application.employee_id,
            employer_id: application.employer_id,
            job_id: application.job_id,
            acceptance: application.acceptance
        },
        onSubmit: values => {
            props.editApplicant(values)
            history.push(`/contractors/${values.employer_id}/jobs/${values.job_id}`)
        }
    })

    const handleInterest = (application) => {
        if (application.interested == true) {
            return (
                <div style={{ display: "contents"}}>
                    {String.fromCharCode(9989)} Applied!
                </div>
            )
        }
    }

    const handleApplicant = (status) => {
        debugger
        formik.setValues(application)
        formik.setFieldValue('acceptance', status)
        formik.handleSubmit(formik.values)
    }
    
    if (candidate == "") {
        return null
    }


    
        return (
            <div className={display}>
            <Modal show={props.show}>
                <Modal.Header>

                <Modal.Title>
                    <h2>{candidate.fname} {candidate.lname} - {candidate.city}, {candidate.state}</h2>
                    <h5>{candidate.trade}</h5>
                    <h6>{handleInterest(application)}</h6>

                </Modal.Title>
                </Modal.Header>
            <Modal.Body>
            <span>{candidate.description}</span>
            <div className="work-schedule">
                Job Type: {candidate.jobtype.join(', ')}
                <br />
                Work Schedule: {candidate.schedule.join(', ')}
                <br />
                Shifts: {candidate.shifts.join(', ')}
                <br />
                Season Availability: {candidate.seasonstart} - {candidate.seasonend}
                <br />
                Minimum Pay: ${candidate.minpay} {candidate.paytype == "Hourly"?"per hour":"per year"}
                <br />
                Description: {candidate.description}
            </div>
            <Modal.Footer>
                <Button onClick={() => handleApplicant(true)}>Accept</Button>
                <Button onClick={() => handleApplicant(false)}>Decline</Button>
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