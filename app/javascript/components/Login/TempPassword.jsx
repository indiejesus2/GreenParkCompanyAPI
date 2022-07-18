import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import {Button, Form, Modal, Alert, Image, CloseButton, Row, Col, FloatingLabel} from 'react-bootstrap'
import * as yup from 'yup'


const TempPassword = props => {

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

    // if(props.currentStep !== 4) {
    //     return null
    // }

    const schema = yup.object().shape({
        email: yup.string().email("Please enter a valid email address").required("Email is required."),
        password: yup.string().required("Please enter a password.").min(6, "Password must have at least 6 characters"),
        token: yup.string().required("Please enter the token number.")
    })

    const formik = useFormik({
        initialValues: {
            email: "",
            token: "",
            password: "",
            password_confirmation: "",
            user: "employee"
        },
        validationSchema: schema,
        onSubmit: values => {
            if (values.password !== values.password_confirmation) {
                alert("Passwords don't match.");
            } else {
                props.resetPassword(values)
            }
            history.push('/home/signIn');
        }
    })
    
        return (
            <React.Fragment>    
            <Modal size="lg" show={show} animation centered onHide={handleClose}>
                <div className="signIn" style={{
                    "maxwidth": 771 + "px"
                }}>
                    <Form noValidate onSubmit={formik.handleSubmit}>
                        {/* // style={{
                        //     "width": 50 + "%"
                        // }}> */}
                    <Modal.Body
                        style={{ "backgroundColor": "#373737"}}
                    >
                        <p>
                            Enter the temporary code sent to your email to update your password.
                        </p>
                        <Alert show={alert}>
                            {props.errors}
                        </Alert>
                        <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationFormik01">
                        <Form.Control
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.email}
                            onBlur={formik.handleBlur}
                            style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                            />
                            {/* <Form.Control.Feedback type="invalid" tooltip>
                                {formik.errors.email}
                            </Form.Control.Feedback> */}
                            {formik.errors.email && formik.touched.email && (
                                <div style={{ color: "red"}}>{formik.errors.email}</div>
                                )}
                        </Form.Group>
                            <Form.Group as={Col} controlId="validationFormik02">
                            <Form.Control
                                type="text"
                                name="token"
                                placeholder="Temporary Token"
                                value={formik.values.token}
                                onChange={formik.handleChange}
                                isInvalid={formik.errors.token}
                                onBlur={formik.handleBlur}
                                style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                                />
                                {/* <Form.Control.Feedback type="invalid" tooltip>
                                    {formik.errors.email}
                                </Form.Control.Feedback> */}
                                {formik.errors.token && formik.touched.token && (
                                    <div style={{ color: "red"}}>{formik.errors.token}</div>
                                    )}
                            </Form.Group>
                        </Row>
                        <Row>
                        <Form.Group className="mb-3" md="4" controlId="validationFormik03">
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="New Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.password}
                            onBlur={formik.handleBlur}
                            style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                            />
                            {/* <Form.Control.Feedback type="invalid" tooltip>
                                {formik.errors.password}
                            </Form.Control.Feedback> */}
                            {formik.errors.password && formik.touched.password && (
                                <div style={{ color: "red"}}>{formik.errors.password}</div>
                                )}
                        </Form.Group>
                        <Form.Group className="mb-3" md="4" controlId="validationFormik04">
                        <Form.Control
                            type="password"
                            name="password_confirmation"
                            placeholder="Confirm Password"
                            value={formik.values.password_confirmation}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.password_confirmation}
                            onBlur={formik.handleBlur}
                            style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                            />
                            {/* <Form.Control.Feedback type="invalid" tooltip>
                                {formik.errors.password_confirmation}
                            </Form.Control.Feedback> */}
                            {formik.errors.password_confirmation && formik.touched.password_confirmation && (
                                <div style={{ color: "red"}}>{formik.errors.password_confirmation}</div>
                                )}
                        </Form.Group>
                        </Row>
                        <Row>

                        <Form.Group as={Col} id="signInOptions">
                            <Form.Label>User: 
                                <Form.Select onChange={formik.handleChange} name="user" value={formik.values.user}
                                    style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                                    >
                                    <option value="employee">Employee</option>
                                    <option value="employer">Employer</option>
                                </Form.Select>
                            </Form.Label>
                            </Form.Group>
                    <Button variant="primary" type="submit" style={{
                            "width": 50 + "%",
                            "textAlign": "center"
                        }}>Reset Password</Button>
                    </Row>
                    </Modal.Body>
                    <Modal.Footer 
                        style={{
                            borderTop: "none"
                        }}
                    >
                    </Modal.Footer>
                    </Form>
                    {/* <div id="collar">
                            <Image fluid="true" src="/images/blucollarO.png" alt="collar" />
                    </div> */}
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

export default TempPassword