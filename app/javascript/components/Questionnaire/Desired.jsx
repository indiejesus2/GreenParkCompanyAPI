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

    const states = [
        "AL",
        "AK",
        "AZ",
        "AR",
        "CA",
        "CO",
        "CT",
        "DE",
        "FL",
        "GA",
        "HI",
        "ID",
        "IL",
        "IN",
        "IA",
        "KS",
        "KY",
        "LA",
        "ME",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT",
        "NE",
        "NV",
        "NH",
        "NJ",
        "NM",
        "NY",
        "NC",
        "ND",
        "OH",
        "OK",
        "OR",
        "PA",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VT",
        "VA",
        "WA",
        "WV",
        "WI",
        "WY"
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

    if(props.currentStep !== 2) {
        return null
    }

    return(
        <div className="desired">

            <div key={`inline-checkbox`} className="mb-3">

            <React.Fragment>
        <Modal show animation backdrop>
        <Modal.Header className="justify-content-center">
            <Modal.Title><img src="/images/blucollar_icon.png" alt="Collar" /></Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <Row className="align-items-center">

<Form.Group as={Col}>
<div className="job type">
    <Form.Label htmlFor="job type"> Job-Type: </Form.Label>
    {jobtypes.map(job => 
        <Form.Check name="jobtype" label={job} value={job} id={job} key={job} onChange={props.handleChange} />
    )}
</div>
</Form.Group>
<Form.Group as={Col}>

<div className="schedule">
    <Form.Label htmlFor="schedule">Schedule: </Form.Label>
    {schedule.map(day => 
        <Form.Check name="schedule" id={day} label={day} value={day} key={day} onChange={props.handleChange} />
        )}
</div>
        </Form.Group>
        <Form.Group as={Col}>

<div className="shifts">
<Form.Label>Shifts: </Form.Label>
{shifts.map(shift =>                             
    <Form.Check name="shifts" label={shift} value={shift} key={shift} onChange={props.handleChange} />
    )}
</div>
    </Form.Group>
</Row>

<Form.Label>Season Availability: </Form.Label>
<Row className="mb-3">
<Form.Group as={Col}>
<FloatingLabel label="Seasonal Start">

<Form.Select name="seasonstart" onChange={props.handleChange} > 
    {months.map(month =>
            <option key={month}>{month}</option>
    )}
</Form.Select>
    </FloatingLabel>
    </Form.Group>
    <Form.Group as={Col}>
    <FloatingLabel label="Seasonal End">

<Form.Select name="seasonend" onChange={props.handleChange}> 
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
    Maximum Pay Rate: 
</Form.Label>
<Form.Control type="text" name="maxpay" onChange={props.handleChange} value={props.values.maxpay}/>
</Form.Group>
</Row>
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