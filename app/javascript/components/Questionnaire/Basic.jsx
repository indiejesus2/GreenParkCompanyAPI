import React, { useEffect } from 'react'
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

    const handlePostal = (e) => {
        // let postal = e.target.value
        let postal = e.target.value
        if (postal.length == 5) {
            findCity(postal)
            props.setFieldValue('zipcode', postal)
        } else {
            props.setFieldValue('zipcode', postal)
        }
    }

    // useEffect(() => {
    //     if(props.values.zipcode.length == 5) {
    //         findCity(props.values.postal)
    //     }
    // })

    const findCity = async (postal) => {
        const configObj = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(postal)
        };
        const resp = await fetch(`api/v1/findcity/${postal}`, { configObj })
        const data = await resp.json()
        if (data.town) {
            props.setFieldValue('city', data.town)
            props.setFieldValue('state', data.state)
        }
    }

    const states = [
        "--",
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Lousiana",
        "Maine",
        "Maryland",
        "Massachussetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
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
                            isInvalid={props.errors.city}
                            onBlur={props.handleBlur}
                            />
                            {props.errors.city && (
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
                            isInvalid={props.errors.state}
                            onBlur={props.handleBlur}
                            >
                                {Object.values(states).map(state => 
                                    <option  defaultValue="--">{state}</option>
                                )}
                            {props.errors.state && (
                                <div style={{ color: "red"}}>{props.errors.state}</div>
                            )}
                            </Form.Select>
                        </FloatingLabel>
                        </Form.Group>
                    <Form.Group as={Col}>
                        <FloatingLabel label="Zip-Code">
                            <Form.Control type="text" name="zipcode" 
                            value={props.values.zipcode} 
                            onChange={handlePostal} />
                        </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group as={Col}>
                        <FloatingLabel label="Phone">
                            <Form.Control type="text" name="phone" value={formatPhoneNumber(props.values.phone)} onChange={props.handleChange} />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <FloatingLabel label="E-mail">
                            <Form.Control type="text" name="e-mail" value={props.email} disabled/>
                        </FloatingLabel>
                    </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group as={Col}>
                        <FloatingLabel label="Description">
                            <Form.Control type="textarea" name="Description" style={{ height: '100px'}} value={props.values.description} />
                        </FloatingLabel>
                    </Form.Group>
                    </Row>
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

