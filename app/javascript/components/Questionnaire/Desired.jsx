import React from 'react'
import { Modal, Form, FloatingLabel, Button, Row, Col } from 'react-bootstrap'

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

    const jobtypes = [
        "Full Time",
        "Part Time",
        "Contract",
        "Temporary"
    ]

    const schedule = [
        "Weekdays",
        "Weekends",
        "Overnight",
        "Holidays"
    ]

    const shifts = [
        "AM",
        "PM",
        "Evening"
    ]

    const industries = [
        "Industry",
        "Plumbing",
        "Painting",
        "Maintenance",
        "Electric",
        "Landscape",   
        "Other/None"
    ]

    const commute = [
        "5",
        "10",
        "15",
        "25",
        "50",
        "100"
    ]

    if(props.currentStep !== 2) {
        return null
    }

    return(
        <div className="desired" style={{overflow: "auto"}}>

            <div key={`inline-checkbox`} className="mb-3">

            <React.Fragment>
        <Modal show animation backdrop>
        <Modal.Header className="justify-content-center">
            <Modal.Title className="questionlogo"><img src="/images/blucollar_O.png" alt="BluCollar Logo" /></Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <h1>Desired Position</h1>
                <Row>
                    <Form.Group as={Col}>

            <Form.Select name="industry" id="industry" onChange={props.handleChange} value={props.values.industry} defaultValue={props.values.industry}>
                {industries.map(industry => 
                    <option key={industry} value={industry}>{industry}</option>
                    )}
            </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
            <Form.Select name="commute" id="commute" onChange={props.handleChange} value={props.values.commute} defaultValue={props.values.commute}>
                {commute.map(miles => 
                    <option key={miles} value={miles}>{miles} Miles</option>    
                )}
            </Form.Select>
            </Form.Group>

            </Row>
            <Row className="desired">

        <Form.Group as={Col}>
        <div className="job type">
            <Form.Label htmlFor="job type"> Job-Type: </Form.Label>
            {jobtypes.map(job => 
                <Form.Check name="jobtype" label={job} value={job} id={job} key={job} onChange={props.handleChange} defaultChecked={props.values.jobtype.includes(job)} />
            )}
        </div>
        </Form.Group>
        <Form.Group as={Col}>
            
        <div className="schedule">
            <Form.Label htmlFor="schedule">Schedule: </Form.Label>
            {schedule.map(day => 
                <Form.Check name="schedule" id={day} label={day} value={day} key={day} onChange={props.handleChange} defaultChecked={props.values.schedule.includes(day)}/>
                )}
        </div>
                </Form.Group>
                <Form.Group as={Col}>
            
        <div className="shifts">
        <Form.Label>Shifts: </Form.Label>
        {shifts.map(shift =>                             
            <Form.Check name="shifts" label={shift} value={shift} key={shift} onChange={props.handleChange} defaultChecked={props.values.shifts.includes(shift)}/>
            )}
        </div>
            </Form.Group>
        </Row>
        
        <Form.Label>Season Availability: </Form.Label>
        <Row className="mb-3">
        <Form.Group as={Col}>
        <FloatingLabel label="Seasonal Start">
        
        <Form.Select name="seasonstart" onChange={props.handleChange} defaultValue={props.values.seasonstart}> 
            {months.map(month =>
                    <option key={month}>{month}</option>
            )}
        </Form.Select>
            </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col}>
            <FloatingLabel label="Seasonal End">
            
        <Form.Select name="seasonend" onChange={props.handleChange} defaultValue={props.values.seasonend}> 
            {months.map(month => 
            <option>{month}</option>
            )}
        </Form.Select>
        </FloatingLabel>
        </Form.Group>
            
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
        <Form.Label>
            Minimum Pay Rate: 
        </Form.Label>
        <Form.Control type="text" name="minpay" onChange={props.handleChange} value={props.values.minpay}/>
        </Form.Group>
    
        <Form.Group as={Col}>
            <Form.Label>
                Pay Type:
            </Form.Label>
            <Form.Select name="paytype" label="paytype" value={props.values.paytype} onChange={props.handleChange} defaultValue={props.values.paytype}>
                    <option>Hourly</option>
                    <option>Salary</option>
            </Form.Select>
        </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col}>
                <Form.Check type="checkbox" name="license" label="Driver's License" value={props.values.license} onChange={props.handleChange} defaultChecked={props.values.license}/>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Upload Resume:</Form.Label>
                <Form.Control type="file" name="file" size="sm" onChange={props.handleChange} />
            </Form.Group>
        </Row>
            </Modal.Body>
                <Modal.Footer>        
                <Button variant="link" name="next" style={{margin: 0+"px", padding:5+"px"}} onClick={props.handleClick}>
                    +Add Previous Experience
                </Button>
                <Button variant="primary" name="previous" onClick={props.handleClick}>
                    Previous
                </Button> 
                <Button variant="primary" name="submit" onClick={props.handleSubmit}>
                    Complete Profile
                </Button>
                </Modal.Footer>
        </Modal>
        </React.Fragment>
            </div>
        </div>
    )
}

export default Desired