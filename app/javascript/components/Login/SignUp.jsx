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
    const [error, setError] = useState("")

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
        if (props.employeeErrors != "" || props.contractorErrors != "") {
            setAlert(true)
            setError(props.employeeErrors!=""?props.employeeErrors:props.contractorErrors)
        }
    })

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
            } else if (values.user == "contractor") {
                history.push('/contractors')
            }
        },
    });

    if(props.currentStep !== 2) {
        return null
    }

    

    return (
        <React.Fragment>    
            <Modal show animation centered rounded onHide={handleClose}>
                <div className="signIn"
                    style={{
                        paddingInlineStart: 20 + "px"
                    }}
                >                
                    <Form onSubmit={formik.handleSubmit}
                        style={{
                            "width": 66 + "%"
                        }}
                    >
                    <Modal.Body
                        style={{
                            "paddingBlock": 0 + "px"
                        }}
                    >
                        <h1
                            style={{
                                textAlign: "end",
                                position: "relative",
                                left: 26 + "px",
                                bottom: 15 + "px"
                            }}
                        >Sign Up</h1>
                    {/* <div id="newUser">
                            <span>Already user?</span><Button variant="link" onClick={handleClick}>Sign In</Button>
                        </div> */}
                    <Alert show={alert}>
                            {error}
                    </Alert>
                    <Form.Group md="4" id="signInOptions">
                        <Form.Label>Sign Up As</Form.Label>
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
                    <div id="collar">
                        <Image fluid="true" src="/images/blucollarO.png" alt="collar" />
                    </div>
                    <CloseButton onClick={handleClose} 
                        style={{
                            position: "relative",
                            bottom: 15 + "px",
                            right: 15 + "px"
                        }}
                    />
                </div>
            </Modal>
        </React.Fragment>
    )
}