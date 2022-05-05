import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import {Link} from 'react-router-dom'
import {Button, Form, Modal, Alert, Image, CloseButton} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function ForgotPassword(props) {

    const [show, setShow] = useState(true)
    const history = useHistory();
    const [alert, setAlert] = useState(false)

    const handleClose = () => {
        history.push('/');
        setShow(false)
    }

    useEffect(() => {
        if (props.errors) {
            setAlert(true)
        }
    })

    const handleShow = () => setShow(true);

    const formik = useFormik({
        initialValues: {
            email: "",
            user: "employee"
        },
        onSubmit: values => {
            props.updatePassword(values)
            history.push('/home/reset_password')
            // props.handleValidation
        },
    });

    if(props.currentStep !== 3) {
        return null
    }

    const handleModal = () => {
        if (window.screen.availWidth <= 320) {
            return "sm"
        } else {
            return "lg"
        }
    }

    const handleImg = () => {
        if (window.screen.availWidth > 320) {
            return (
                "none"
            )    
        }
    }

    const handleWidth = () => {
        if (window.screen.availWidth > 580) {
            return ("66%")
        } else {
            return ("100%")
        }
    }
    
    return (
        <React.Fragment>    
        <Modal show={show} animation centered onHide={handleClose} size={handleModal}>
            <div className="signIn">
                <Form noValidate onSubmit={formik.handleSubmit} 
                >
                <Modal.Body
                    style={{
                        "paddingBlock": 0 + "px"
                    }}
                >
                    <h2 id="header">Find Your BluCollar Account</h2>
                    <Alert show={alert}>
                        {props.errors}
                    </Alert>
                    <Form.Group className="mb-3" md="4" controlId="validationFormik01">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        isInvalid={formik.errors.email}
                        onBlur={formik.handleBlur}
                        style={{
                            "padding": 5 + "px"
                        }}
                        />
                        {/* <Form.Control.Feedback type="invalid" tooltip>
                            {formik.errors.email}
                        </Form.Control.Feedback> */}
                        {formik.errors.email && formik.touched.email && (
                            <div style={{ color: "red"}}>{formik.errors.email}</div>
                            )}
                    </Form.Group>
                    <Form.Group md="4" id="signInOptions">
                        <Form.Label>User: </Form.Label>
                            <Form.Select onChange={formik.handleChange} name="user" value={formik.values.user}
                                style={{
                                    "width": 63 + "%",
                                    "height": 50 + "%"
                                }}
                            >
                                <option value="employee">Employee</option>
                                <option value="contractor">Contractor</option>
                            </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer 
                    style={{
                        borderTop: "none"
                    }}
                >
                    <Button variant="primary" type="submit" style={{
                            "width": 100 + "%",
                            "paddingRight": 0 + "px",
                            "textAlign": "center"
                        }}>Find Profile</Button>
                </Modal.Footer>
                </Form>
                <div id="collar" >
                    <Image fluid="true" src="/images/blucollarO.png" alt="collar" />
                </div>
            
                <div id="closeButton">
                    <CloseButton onClick={handleClose} />
                </div>
            </div>
        </Modal>
        </React.Fragment>
    )

}