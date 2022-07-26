import React, { useState, useEffect } from 'react'
import { Modal, Form, Col, Button, Alert, Image, CloseButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'


export default function SignUp(props) {

    const [show, setShow] = useState(true)
    const history = useHistory();
    const [alert, setAlert] = useState(false)
    const [error, setError] = useState(props.employeeErrors!=""?props.employeeErrors:props.contractorErrors)

    const schema = yup.object().shape({
        email: yup.string().email("Please enter a valid email address").required("Email is required."),
        password: yup.string().required("Please enter a password.").min(6, "Password must have at least 6 characters")
    })
    
    const handleClose = () => {
        history.push('/');
        props.clearEmployeeErrors()
        props.clearContractorErrors()
        setError("")
        setShow(false)
    }

    useEffect(() => {
        if(!Array.isArray(error)) {
        // if (props.employeeErrors != "" || props.contractorErrors != "") {
            setAlert(true)
            // setError(props.employeeErrors!=""?props.employeeErrors:props.contractorErrors)
        }
    }, [error])

    const handleShow = () => setShow(true);

    const handleClick = () => {
        history.push('/home/signIn')
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            user: "employee"
        },
        validationSchema: schema,
        onSubmit: values => {
            props.signUp(values)
            if (values.user == "employee") {
                history.push('/employees')
            } else if (values.user == "employer") {
                history.push('/employers')
            }
        },
    });

    if(props.currentStep !== 2) {
        return null
    }

    const handleModal = () => {
        if (window.screen.availWidth <= 320) {
            return "sm"
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
            <Modal show animation centered onHide={handleClose} size={handleModal}>
                <div className="signIn"
                    style={{
                        paddingInlineStart: 20 + "px"
                    }}
                >                
                    <Form noValidate onSubmit={formik.handleSubmit}
                    >
                    <Modal.Body
                        style={{
                            "paddingBlock": 0 + "px"
                        }}
                    >
                        <h1 id="header">Sign Up</h1>
                    {/* <div id="newUser">
                            <span>Already user?</span><Button variant="link" onClick={handleClick}>Sign In</Button>
                        </div> */}
                    <Alert show={alert}>
                            {error}
                    </Alert>
                    <Form.Group className="mb-3" md="4" id="signInOptions">
                        <Form.Label>Sign Up As</Form.Label>
                            <Form.Select onChange={formik.handleChange} name="user" value={formik.values.user}
                                style={{
                                    "width": 63 + "%",
                                    "height": 50 + "%"
                                }}
                            >
                            <option value="employee">Employee</option>
                            <option value="employer">Employer</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group md="4" controlId="validationFormik01">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.email && formik.errors.email}
                            onBlur={formik.handleBlur}
                            style={{
                                "padding": 5 + "px",
                                "marginBottom": 10 + "px"
                            }}
                            />
                                {formik.errors.email && formik.touched.email && (
                                    <div style={{ color: "red"}}>{formik.errors.email}</div>
                                )}
                            <Form.Label>Password: </Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                isInvalid={formik.touched.password && formik.errors.password}
                                onBlur={formik.handleBlur}
                                style={{
                                    "padding": 5 + "px",
                                    "marginBottom": 10 + "px"
                                }}
                                />
                                    {formik.errors.password && formik.touched.password && (
                                        <div style={{ color: "red"}}>{formik.errors.password}</div>
                                    )}
                        </Form.Group>
                        <div>
                            <Button variant="primary" type="submit" style={{ "width": 100 + "%"}}>Sign Up</Button>
                        </div>
                        {/* <Modal.Footer>
                            <Button variant="primary" type="submit">Sign-Up</Button>
                        </Modal.Footer> */}
                    </Modal.Body>
                    </Form>
                    <div id="collar" >
                    <Image fluid="true" src="/images/blucollarO.png" alt="collar" />
                </div>
            
            <div id="closeButton">
                <CloseButton onClick={handleClose} />
            </div>
                </div>
            </Modal>
    )
}