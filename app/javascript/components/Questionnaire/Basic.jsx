import React, { useState, useEffect } from 'react'
import { Modal, Form, FloatingLabel, Button, Row, Col, Image } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'

const Basic = (props) => {

    if(props.currentStep !== 1) {
        return null
    }

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
        const resp = await fetch(`/api/v1/findcity/${postal}`, { configObj })
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

    const handleTable = () => {
        if (size.width > 580) {
            return (
                <Modal.Body style={{ "backgroundColor": "#373737"}}>
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
                            style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                            />
                                {props.errors.fname && props.touched.fname && (
                                    <div style={{ color: "red"}}>{props.errors.fname}</div>
                                )}
                        </FloatingLabel>
                    </Form.Group> 
                    <Form.Group as={Col}>
                        <FloatingLabel label="Last Name">
                            <Form.Control type="text" name="lname" style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} value={props.values.lname} onChange={props.handleChange} isInvalid={props.errors.lname && props.touched.lname} onBlur={props.handleBlur}/>
                            {props.errors.lname && props.touched.lname && (
                                <div style={{ color: "red"}}>{props.errors.lname}</div>
                            )}
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
                            isInvalid={props.errors.city && props.touched.city}
                            onBlur={props.handleBlur}
                            style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
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
                            isInvalid={props.errors.state && props.touched.state}
                            onBlur={props.handleBlur}
                            style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                            >
                                {Object.values(states).map(state => 
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
                            value={props.values.zipcode} 
                            onChange={handlePostal} 
                            isInvalid={props.errors.zipcode && props.touched.zipcode}
                            onBlur={props.handleBlur}
                            style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                            />
                            {props.errors.zipcode && props.touched.zipcode && (
                                <div style={{ color: "red"}}>{props.errors.zipcode}</div>
                            )}
                        </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group as={Col}>
                        <FloatingLabel label="Phone">
                        <Form.Control type="text" name="phone" style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} value={formatPhoneNumber(props.values.phone)} onChange={props.handleChange} isInvalid={props.errors.phone && props.touched.phone} onBlur={props.handleBlur} />
                            {props.errors.phone && props.touched.phone && (
                                <div style={{ color: "red"}}>{props.errors.phone}</div>
                            )}
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <FloatingLabel label="E-mail">
                            <Form.Control type="text" name="e-mail"  style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} value={props.email} disabled/>
                        </FloatingLabel>
                    </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col}>
                        <FloatingLabel label="Tell Us About Yourself">
                            <Form.Control as="textarea" name="description"  style={{ backgroundColor: "#2f2f2f", "color": "#fff", height: '100px', "margin-top": 15+"px"}} value={props.values.description} onChange={props.handleChange} />
                        </FloatingLabel>
                    </Form.Group>
                    </Row>
            
                </Modal.Body>
            )
        } else {
            return (
                <Modal.Body style={{ "backgroundColor": "#373737"}}>
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
                            style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                            />
                                {props.errors.fname && props.touched.fname && (
                                    <div style={{ color: "red"}}>{props.errors.fname}</div>
                                )}
                        </FloatingLabel>
                    </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col}>
                        <FloatingLabel label="Last Name">
                            <Form.Control type="text" name="lname" style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} value={props.values.lname} onChange={props.handleChange} isInvalid={props.errors.lname && props.touched.lname} onBlur={props.handleBlur}/>
                                {props.errors.lname && props.touched.lname && (
                                    <div style={{ color: "red"}}>{props.errors.lname}</div>
                                )}
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
                            isInvalid={props.errors.city && props.touched.city}
                            onBlur={props.handleBlur}
                            style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                            />
                            {props.errors.city && props.touched.city && (
                                <div style={{ color: "red"}}>{props.errors.city}</div>
                            )}
                        </FloatingLabel>
                        </Form.Group>
                        </Row>
                        <Row className="mb-3">
                    <Form.Group as={Col}>
                        <FloatingLabel label="State">
                            <Form.Select
                            name="state" 
                            value={props.values.state} 
                            onChange={props.handleChange}
                            isInvalid={props.errors.state && props.touched.state}
                            onBlur={props.handleBlur}
                            style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                            >
                                {Object.values(states).map(state => 
                                    <option  defaultValue="--">{state}</option>
                                )}
                            {props.errors.state && props.touched.state && (
                                <div style={{ color: "red"}}>{props.errors.state}</div>
                                )}
                            </Form.Select>
                        </FloatingLabel>
                        </Form.Group>
                        </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <FloatingLabel label="Zip-Code">
                            <Form.Control type="text" name="zipcode" 
                            value={props.values.zipcode} 
                            onChange={handlePostal} 
                            isInvalid={props.errors.zipcode && props.touched.zipcode}
                            onBlur={props.handleBlur}
                            style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                            />
                            {props.errors.zipcode && props.touched.zipcode && (
                                <div style={{ color: "red"}}>{props.errors.zipcode}</div>
                            )}
                        </FloatingLabel>
                        </Form.Group>
                    </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <FloatingLabel label="Phone">
                            <Form.Control type="text" name="phone" style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} value={formatPhoneNumber(props.values.phone)} onChange={props.handleChange} isInvalid={props.errors.phone && props.touched.phone} onBlur={props.handleBlur} />
                            {props.errors.phone && props.touched.phone && (
                                <div style={{ color: "red"}}>{props.errors.phone}</div>
                            )}
                <Row className="mb-3"></Row>
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <FloatingLabel label="E-mail">
                            <Form.Control type="text" name="e-mail"  style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} value={props.email} disabled/>
                        </FloatingLabel>
                    </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col}>
                        <FloatingLabel label="Tell Us About Yourself">
                            <Form.Control as="textarea" name="description"  style={{ backgroundColor: "#2f2f2f", "color": "#fff", height: '100px', "margin-top": 15+"px"}} value={props.values.description} onChange={props.handleChange} />
                        </FloatingLabel>
                    </Form.Group>
                    </Row>
                </Modal.Body>
            )
        }
    }
    
    return(
        <div >

        <React.Fragment>
        <Modal show animation backdrop centered>
            
        <Modal.Header className="justify-content-center" style={{ "backgroundColor": "#373737"}}>
            <Modal.Title className="questionlogo">
                <Image fluid="true" src="/images/blucollar-logo-non-bold.png" alt="BluCollar Logo" />
            </Modal.Title>
        </Modal.Header>
            <Modal.Body style={{ "backgroundColor": "#373737"}}>
                {handleTable()}
            </Modal.Body>
            <Modal.Footer style={{ "backgroundColor": "#373737"}}>
                <Button variant="primary" name="next" onClick={props.handleClick}>
                    Next
                </Button>
            </Modal.Footer>
        </Modal>
        </React.Fragment>
        </div>
    )
}

export default Basic

