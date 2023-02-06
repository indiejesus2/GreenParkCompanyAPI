import React, { useState, useEffect } from 'react'
import { Modal, Form, FloatingLabel, Button, Row, Col, InputGroup, Image, Toast, ToastContainer } from 'react-bootstrap'
import EmployeeFile from '../Employees/EmployeeFile'

const Desired = props => {

    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleMsg = () => setMsg(true);
    const handleCloseMsg = () => setMsg(false)

    const size = useWindowSize();

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined
        });

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            
            window.addEventListener("resize", handleResize);
            
            handleResize();
            
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return windowSize;
    }

    useEffect(() => {
        if (props.fileLoading == false) {
            handleClose()
        }
    }, [props.fileLoading])

    const months = [
        "--",
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
        "Irrigation",
        "Construction",
        "Mechanic",
        "Roofing",   
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

    

    const handleTable = () => {
        if (size.width>580) {
            return (
                <Modal.Body style={{ "backgroundColor": "#373737"}}>
                <h1>Desired Position</h1>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <FloatingLabel label="Trade">
                        <Form.Select name="trade" id="trade" style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} onChange={props.handleChange} value={props.values.trade} defaultValue={props.values.trade}>
                            {trades.map(trade => 
                                <option key={trade} value={trade}>{trade}</option>
                                )}
                        </Form.Select>
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <FloatingLabel label="Commuting Distance">

                        <Form.Select name="commute" id="commute" style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} onChange={props.handleChange} value={props.values.commute} defaultValue={props.values.commute}>
                            {commute.map(miles => 
                                <option key={miles} value={miles}>{miles} Miles</option>    
                            )}
                        </Form.Select>
                    </FloatingLabel>
                    </Form.Group>

            </Row>
    <Row className="mb-3">
    <Form.Group as={Col} style={{ "backgroundColor": "#2f2f2f", "color": "#fff", border: "1px solid white", borderRadius: "0.25rem", paddingTop: "0.625rem", paddingBottom: ".625rem", paddingInline: ".75rem", marginInline: "10px"}}>
    <Form.Label style={{ opacity: ".65", transform: "scale(.85) translateY(-.5rem) translateX(.15rem)"}} htmlFor="job type"> Job-Type: </Form.Label>
        {jobtypes.map(job => 
            <Form.Check name="jobtype" label={job} value={job} id={job} key={job} onChange={props.handleChange} defaultChecked={props.values.jobtype.includes(job)}/>
        )}
    </Form.Group>
    <Form.Group as={Col} style={{ "backgroundColor": "#2f2f2f", "color": "#fff", border: "1px solid white", borderRadius: "0.25rem", paddingTop: "0.625rem", paddingBottom: ".625rem", paddingInline: ".75rem", marginInline: "10px"}}>
        
    <Form.Label style={{ opacity: ".65", transform: "scale(.85) translateY(-.5rem) translateX(.15rem)"}} htmlFor="schedule">Schedule: </Form.Label>
        {schedule.map(day => 
            <Form.Check name="schedule" id={day} label={day} value={day} key={day} onChange={props.handleChange} defaultChecked={props.values.schedule.includes(day)}/>
            )}
            </Form.Group>
            <Form.Group as={Col} style={{ "backgroundColor": "#2f2f2f", "color": "#fff", border: "1px solid white", borderRadius: "0.25rem", paddingTop: "0.625rem", paddingBottom: ".625rem", paddingInline: ".75rem", marginInline: "10px"}}>
        
    <Form.Label style={{ opacity: ".65", transform: "scale(.85) translateY(-.5rem) translateX(.15rem)"}}>Shifts: </Form.Label>
    {shifts.map(shift =>                             
        <Form.Check name="shifts" label={shift} value={shift} key={shift} onChange={props.handleChange} defaultChecked={props.values.shifts.includes(shift)}/>
        )}
        </Form.Group>
    </Row>

        <Row className="mb-3">
    
        <Form.Group as={Col}>
            <Form.Label>
                Pay Type:
            </Form.Label>
            <Form.Select style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} name="paytype" label="paytype" value={props.values.paytype} onChange={props.handleChange} defaultValue={props.values.paytype}>
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
                        <Form.Control style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} type="text" name="minpay" onChange={props.handleChange} value={props.values.minpay}/>
                    </InputGroup>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Valid Driver's License:
                </Form.Label>
                <Form.Select style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} name="license" label="license" value={props.values.license} onChange={props.handleChange} defaultValue={props.values.license}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </Form.Select>
            </Form.Group>
        </Row>
        <Row>
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
            )
        } else {
            return (
                <Modal.Body style={{ "backgroundColor": "#373737"}}>
                <h1>Desired Position</h1>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <FloatingLabel label="Trade">
                        <Form.Select name="trade" id="trade" style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} onChange={props.handleChange} value={props.values.trade} defaultValue={props.values.trade}>
                            {trades.map(trade => 
                                <option key={trade} value={trade}>{trade}</option>
                                )}
                        </Form.Select>
                    </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <FloatingLabel label="Commuting Distance">

                        <Form.Select name="commute" id="commute" style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} onChange={props.handleChange} value={props.values.commute} defaultValue={props.values.commute}>
                            {commute.map(miles => 
                                <option key={miles} value={miles}>{miles} Miles</option>    
                            )}
                        </Form.Select>
                    </FloatingLabel>
                    </Form.Group>

            </Row>
    <Row className="mb-3">
    <Form.Group as={Col} style={{ "backgroundColor": "#2f2f2f", "color": "#fff", border: "1px solid white", borderRadius: "0.25rem", paddingTop: "0.625rem", paddingBottom: ".625rem", paddingInline: ".75rem", marginInline: "10px"}}>
    <Form.Label style={{ opacity: ".65", transform: "scale(.85) translateY(-.5rem) translateX(.15rem)"}} htmlFor="job type"> Job-Type: </Form.Label>
        {jobtypes.map(job => 
            <Form.Check name="jobtype" label={job} value={job} id={job} key={job} onChange={props.handleChange} defaultChecked={props.values.jobtype.includes(job)}/>
        )}
    </Form.Group>
    </Row>
            <Row className="mb-3">
    <Form.Group as={Col} style={{ "backgroundColor": "#2f2f2f", "color": "#fff", border: "1px solid white", borderRadius: "0.25rem", paddingTop: "0.625rem", paddingBottom: ".625rem", paddingInline: ".75rem", marginInline: "10px"}}>
        
    <Form.Label style={{ opacity: ".65", transform: "scale(.85) translateY(-.5rem) translateX(.15rem)"}} htmlFor="schedule">Schedule: </Form.Label>
        {schedule.map(day => 
            <Form.Check name="schedule" id={day} label={day} value={day} key={day} onChange={props.handleChange} defaultChecked={props.values.schedule.includes(day)}/>
            )}
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} style={{ "backgroundColor": "#2f2f2f", "color": "#fff", border: "1px solid white", borderRadius: "0.25rem", paddingTop: "0.625rem", paddingBottom: ".625rem", paddingInline: ".75rem", marginInline: "10px"}}>
        
    <Form.Label style={{ opacity: ".65", transform: "scale(.85) translateY(-.5rem) translateX(.15rem)"}}>Shifts: </Form.Label>
    {shifts.map(shift =>                             
        <Form.Check name="shifts" label={shift} value={shift} key={shift} onChange={props.handleChange} defaultChecked={props.values.shifts.includes(shift)}/>
        )}
        </Form.Group>
        </Row>
        <Row className="mb-3">
    
        <Form.Group as={Col}>
            <Form.Label>
                Pay Type:
            </Form.Label>
            <Form.Select style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} name="paytype" label="paytype" value={props.values.paytype} onChange={props.handleChange} defaultValue={props.values.paytype}>
                    <option>Hourly</option>
                    <option>Salary</option>
            </Form.Select>
        </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col}>
                    <Form.Label>
                        Minimum Pay Rate: 
                    </Form.Label>
                    <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} type="text" name="minpay" onChange={props.handleChange} value={props.values.minpay}/>
                    </InputGroup>
            </Form.Group>
        </Row>
        <Row>
            <Form.Group>
                <Form.Label>
                    Valid Driver's License:
                </Form.Label>
                <Form.Select style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} name="license" label="license" value={props.values.license} onChange={props.handleChange} defaultValue={props.values.license}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </Form.Select>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col}>
                <Button variant="link" onClick={handleShow} className="d-flex justify-content-right">
                    Upload Resume/CV
                    <EmployeeFile 
                        show={show} 
                        employee={props.employee}
                        uploadFile={props.uploadFile}
                        fileLoading={props.fileLoading}
                        handleMsg={handleMsg}
                        handleClose={handleClose}
                        // uploadFile={} 
                    />
                </Button>
            </Form.Group>
        </Row>
            </Modal.Body>
            )
        }
    }

    return(
        <div className="desired" style={{overflow: "auto"}}>

            <div key={`inline-checkbox`} className="mb-3">

            <React.Fragment>
            <Modal show animation backdrop centered>
            
        <Modal.Header className="justify-content-center" style={{ "backgroundColor": "#373737"}}>
            <Modal.Title className="questionlogo">
                <Image fluid="true" src="/images/blucollar-logo-non-bold.png" alt="BluCollar Logo" />
            </Modal.Title>
        </Modal.Header>
            {handleTable()}
                <Modal.Footer style={{ "backgroundColor": "#373737"}}>        
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
        <ToastContainer position="top-center">
                <Toast show={msg} centered onHide={handleCloseMsg}>
                    <Toast.Header>
                    </Toast.Header>
                        <Toast.Body style={{backgroundColor: "black"}}>
                            <h2>Your resume has been successfully uploaded.</h2>
                        </Toast.Body>
                </Toast>
            </ToastContainer>
        </React.Fragment>
            </div>
        </div>
    )
}

export default Desired