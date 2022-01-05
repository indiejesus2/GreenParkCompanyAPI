import React, { useState, useEffect } from 'react'
import { Modal, Form, FloatingLabel, Button, Row, Col, InputGroup } from 'react-bootstrap'
import EmployeeFile from '../Employees/EmployeeFile'

const Desired = props => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (props.fileLoading == false) {
            handleClose()
        }
    }, [props.fileLoading])

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

    const trades = [
        "--",
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

    // const formatPay = (pay) => {

    //     if (!pay) return pay;

    //     const check = pay.replace(/[^\d]/g, "");
        
    //     const checkLength = check.length;

    //     if (props.values.paytype == "Hourly" && checkLength == 2) {
    //         return `${check.slice(0, check.length)}.00`
    //     } else if (props.values.paytype == "Salary" && checkLength > 3) {
    //         return `${check.slice(0, 1)}, ${check.slice(1, 3)}`
    //     } else if (props.values.paytype == "Salary" && checkLength > 4) {
    //         return `${check.slice(0, 2)}, ${check.slice(1, 3)}`
    //     } else if (props.values.paytype == "Salary" && checkLength > 5) {
    //         return `${check.slice(0, 3)}, ${check.slice(1, 3)}`
    //     }
    // }

    if(props.currentStep !== 2) {
        return null
    }

    return(
        <div className="desired" style={{overflow: "auto"}}>

            <div key={`inline-checkbox`} className="mb-3">

            <React.Fragment>
        <Modal show animation backdrop centered>
        <Modal.Header className="justify-content-center">
            <Modal.Title className="questionlogo"><img src="/images/blucollar_O.png" alt="BluCollar Logo" /></Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <h1>Desired Position</h1>
                <Row>
                    <Form.Group as={Col}>
                    <FloatingLabel label="Trade">
                        <Form.Select name="trade" id="trade" onChange={props.handleChange} value={props.values.trade} defaultValue={props.values.trade}>
                            {trades.map(trade => 
                                <option key={trade} value={trade}>{trade}</option>
                                )}
                        </Form.Select>
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <FloatingLabel label="Commuting Distance">

                        <Form.Select name="commute" id="commute" onChange={props.handleChange} value={props.values.commute} defaultValue={props.values.commute}>
                            {commute.map(miles => 
                                <option key={miles} value={miles}>{miles} Miles</option>    
                            )}
                        </Form.Select>
                    </FloatingLabel>
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
                Pay Type:
            </Form.Label>
            <Form.Select name="paytype" label="paytype" value={props.values.paytype} onChange={props.handleChange} defaultValue={props.values.paytype}>
                    <option>Hourly</option>
                    <option>Salary</option>
            </Form.Select>
        </Form.Group>
            <Form.Group as={Col}>
                    <Form.Label>
                        Minimum Pay Rate: 
                    </Form.Label>
                    <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control type="text" name="minpay" onChange={props.handleChange} value={props.values.minpay}/>
                    </InputGroup>
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col}>
                <Form.Check type="checkbox" name="license" label="Driver's License" value={props.values.license} onChange={props.handleChange} defaultChecked={props.values.license}/>
            </Form.Group>
            <Form.Group as={Col}>
                        <Button variant="link" onClick={handleShow} className="d-flex justify-content-right">
                            Upload Resume/CV
                            <EmployeeFile 
                            show={show} 
                            employee={props.employee}
                            uploadFile={props.uploadFile}
                            fileLoading={props.fileLoading}
                            // uploadFile={} 
                            />
                        </Button>
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
                    Submit Profile
                </Button>
                </Modal.Footer>
        </Modal>
        </React.Fragment>
            </div>
        </div>
    )
}

export default Desired