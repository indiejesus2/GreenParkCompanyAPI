import React from 'react'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



const Desired = props => {

    if(props.currentStep !== 2) {
        return null
    }

    return(
            <div key={`inline-checkbox`} className="mb-3">

            <React.Fragment>
        <Modal show animation backdrop>
        <Modal.Header>
            <Modal.Title><img src="/images/blucollar_icon.png" alt="Collar" /></Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <div className="jobtype">
            <Form.Label htmlFor="job-type">Job-Type: </Form.Label>
            <Form.Check inline type="checkbox" name="jobType" label="Full-Time" value="FT" id={`inline-checkbox-1`} onChange={props.handleChange} />
            <Form.Check inline type="checkbox" name="jobType" label="Part-Time" value="PT" id={`inline-checkbox-2`} onChange={props.handleChange} /> 
            <Form.Check inline type="checkbox" name="jobType" label="Contract" value="Contract" id={`inline-checkbox-3`} onChange={props.handleChange} />
            <Form.Check inline type="checkbox" name="jobType" label="Temporary" value="Temporary" id={`inline-checkbox-4`} onChange={props.handleChange} />
                </div>
                <div className="schedule">
            <Form.Label htmlFor="schedule">Schedule: </Form.Label>
            <Form.Check inline type="checkbox" name="schedule" label="Weekdays" value="Weekdays" onChange={props.handleChange}/>
            <Form.Check inline type="checkbox" name="schedule" label="Weekends" value="Weekends" onChange={props.handleChange}/>
            <Form.Check inline type="checkbox" name="schedule" label="Overnight" value="Overnight" onChange={props.handleChange}/>
            <Form.Check inline type="checkbox" name="schedule" label="Holidays" value="Holidays" onChange={props.handleChange}/>
                </div>
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
            </div>
    )
}

export default Desired