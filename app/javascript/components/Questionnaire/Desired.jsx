import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



const Desired = props => {

    if(props.currentStep !== 2) {
        return null
    }

    return(
        <React.Fragment>
        <Modal show={props.show} animation backdrop>
        <Modal.Header closeButton>
            <Modal.Title><img src="/images/Collar.jpeg" alt="Collar" /></Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <label htmlFor="job-type">Job-Type: </label>
            <input type="checkbox" name="jobType" value="FT" id='1' onChange={props.handleJob} /> Full-time
            <input type="checkbox" name="jobType" value="PT" id='2' onChange={props.handleJob} /> Part-time
            <input type="checkbox" name="jobType" value="Contract" id='3' onChange={props.handleJob} /> Contract
            <input type="checkbox" name="jobType" value="Temporary" id='4' onChange={props.handleJob} /> Temporary
            <br />
            <label htmlFor="schedule">Schedule: </label>
            <input type="checkbox" name="schedule" value="M-F" onChange={props.handleJob}/>
            M-F
            <input type="checkbox" name="schedule" value="Weekends" onChange={props.handleJob}/>
            Weekends
            <input type="checkbox" name="schedule" value="Overnight" onChange={props.handleJob}/>
            Overnight
            <input type="checkbox" name="schedule" value="Holidays" onChange={props.handleJob}/>
            Holidays
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" name="previous" onClick={props.handleClick}>
                    Previous
                </Button>
                <Button variant="primary" name="next" onClick={props.handleClick}>
                    Next
                </Button>
            </Modal.Footer>
        </Modal>
        </React.Fragment>
    )
}

export default Desired