import React from 'react'
import { Modal, Form, FloatingLabel, Button, Row, Col } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'

const Basic = (props) => {

    if(props.currentStep !== 1) {
        return null
    }

    const formatPhoneNumber = (value) => {

        if (!value) return value;
    
        const phoneNumber = value.replace(/[^\d]/g, "");
    
        const phoneNumberLength = phoneNumber.length;
    
        if (phoneNumberLength < 4) return phoneNumber;
    
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`
        }
    
        return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6, 10)}`;
    
    }

    const states = [
        "--",
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

    return(
        <React.Fragment>
        <Modal show animation backdrop centered>
            
        <Modal.Header className="justify-content-center">
            <Modal.Title className="questionlogo"><img src="/images/blucollar_O.png" alt="BluCollar Logo" /></Modal.Title>
        </Modal.Header>
            <Modal.Body>

            <Row className="mb-3">

                    <Form.Group as={Col}>
                        <FloatingLabel label="First Name">
                            <Form.Control 
                            type="text" 
                            name="fname" 
                            value={props.values.fname}
                            onChange={props.handleChange}
                            isInvalid={props.touched.fname && props.errors.fname}
                            onBlur={props.handleBlur}
                            />
                                {props.errors.fname && props.touched.fname && (
                                    <div style={{ color: "red"}}>{props.errors.fname}</div>
                                )}
                        </FloatingLabel>
                    </Form.Group> 
                    <Form.Group as={Col}>

                        <FloatingLabel label="Last Name">
                            <Form.Control type="text" name="lname" value={props.values.lname} onChange={props.handleChange} />
                        </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">

                    <Form.Group as={Col}>
                        <FloatingLabel label="City">
                            <Form.Control 
                            type="text" 
                            name="city" 
                            value={props.values.city} 
                            onChange={props.handleChange} 
                            isInvalid={props.touched.city && props.errors.city}
                            onBlur={props.handleBlur}
                            />
                            {props.errors.city && props.touched.city && (
                                <div style={{ color: "red"}}>{props.errors.city}</div>
                            )}
                        </FloatingLabel>
                        </Form.Group> 
                    <Form.Group as={Col}>
                        <FloatingLabel label="State">
                            <Form.Select
                            name="state" 
                            value={props.values.state} 
                            onChange={props.handleChange}
                            isInvalid={props.touched.state && props.errors.state}
                            onBlur={props.handleBlur}
                            >
                                {states.map(state => 
                                    <option  defaultValue="--">{state}</option>
                                )}
                            {props.errors.state && props.touched.state && (
                                <div style={{ color: "red"}}>{props.errors.state}</div>
                            )}
                            </Form.Select>
                        </FloatingLabel>
                        </Form.Group>
                    <Form.Group as={Col}>
                        <FloatingLabel label="Zip-Code">
                            <Form.Control type="text" name="zipcode" 
                            // value={props.values.zipcode.length==5?props.values.zipcode : } 
                            onChange={props.handlePostal} />
                        </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Form.Group>
                        <FloatingLabel label="Phone">
                            <Form.Control type="text" name="phone" value={formatPhoneNumber(props.values.phone)} onChange={props.handleChange} />
                        </FloatingLabel>
                    </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" name="next" onClick={props.handleClick}>
                    Next
                </Button>
            </Modal.Footer>
        </Modal>
        </React.Fragment>
    )
}

export default Basic

