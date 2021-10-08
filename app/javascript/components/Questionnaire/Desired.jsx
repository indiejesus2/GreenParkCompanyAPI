import React from 'react'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



const Desired = props => {

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

    if(props.currentStep !== 2) {
        return null
    }

    return(
        <div className="desired">

            <div key={`inline-checkbox`} className="mb-3">

            <React.Fragment>
        <Modal show animation backdrop>
        <Modal.Header>
            <Modal.Title><img src="/images/blucollar_icon.png" alt="Collar" /></Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <div className="jobtype">
            <Form.Label htmlFor="job-type">Job-Type: </Form.Label>
            <Form.Check name="jobType" label="Full Time" value="Full Time" id={`inline-checkbox-1`} onChange={props.handleChange} />
            <Form.Check name="jobType" label="Part Time" value="Part Time" id={`inline-checkbox-2`} onChange={props.handleChange} /> 
            <Form.Check name="jobType" label="Contract" value="Contract" id={`inline-checkbox-3`} onChange={props.handleChange} />
            <Form.Check name="jobType" label="Temporary" value="Temporary" id={`inline-checkbox-4`} onChange={props.handleChange} />
                </div>
                <div className="schedule">
            <Form.Label htmlFor="schedule">Schedule: </Form.Label>
            <Form.Check name="schedule" label="Weekdays" value="Weekdays" onChange={props.handleChange}/>
            <Form.Check name="schedule" label="Weekends" value="Weekends" onChange={props.handleChange}/>
            <Form.Check name="schedule" label="Overnight" value="Overnight" onChange={props.handleChange}/>
            <Form.Check name="schedule" label="Holidays" value="Holidays" onChange={props.handleChange}/>
                </div>
                <div className="shifts">
                    <Form.Label>Shifts: </Form.Label>
                    <Form.Check name="shift" label="AM" value="AM" onChange={props.handleChange}/>
                    <Form.Check name="shift" label="PM" value="PM" onChange={props.handleChange}/>
                    <Form.Check name="shift" label="Evening" value="Evening" onChange={props.handleChange}/>
                </div>
                <div className="seasonal">
                    <Form.Label>Season Availability: </Form.Label>
                    <Form.Control as="select" name="seasonstart" onChange={props.handleChange}> 
                        <option>Seasonal Start</option>
                        {months.map(month => 
                        <option value={month}>{month}</option>
                            )}
                    </Form.Control>
                    <Form.Control as="select" name="seasonend" onChange={props.handleChange}> 
                        <option>Seasonal End</option>
                        {months.map(month => 
                        <option value={month}>{month}</option>
                            )}
                    </Form.Control>
                </div>
                <div className="payrate">
                    <Form.Label>
                        Minimum Pay Rate: 
                    </Form.Label>
                    <Form.Control type="text" name="minpay" onChange={props.handleChange} />
                    <Form.Label>
                        Maximum Pay Rate: 
                    </Form.Label>
                    <Form.Control type="text" name="maxpay" onChange={props.handleChange} />
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
        </div>
    )
}

export default Desired