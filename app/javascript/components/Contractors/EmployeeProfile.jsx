import React from 'react'
import NavBar from '../NavBar'
import { Modal, Button } from 'react-bootstrap'

const EmployeeProfile = props => {

    const candidate = props.candidate
    const display = props.show == true ? "employee-profile" : "employee-profile d-none"
    const interested = () => {
        if (candidate.interested) {
            return (
                <div>
                    <h5>Interested</h5>
                </div>
            )
        }
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
                    <h5>{candidate.info.industry}</h5>
                    {interested()}
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
                <Button>Accept</Button>
                <Button>Decline</Button>
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