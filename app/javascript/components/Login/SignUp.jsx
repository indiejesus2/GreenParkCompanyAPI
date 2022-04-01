import React, { useState, useEffect } from 'react'
import { Modal, Form, Col, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'


export default function SignUp(props) {

    const [show, setShow] = useState(true)
    const history = useHistory();
    const [alert, setAlert] = useState(false)

    const schema = yup.object().shape({
        email: yup.string().email("Please enter a valid email address").required("Email is required."),
        password: yup.string().required("Please enter a password.").min(6, "Password must have at least 6 characters")
    })
    
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
        <Modal size="lg" show={show} animation centered onHide={handleClose}>
            <div className="signIn">



            <Form onSubmit={formik.handleSubmit}
                style={{
                    "width": 50 + "%"
                }}
            >
            <Modal.Body
                style={{
                    "paddingBlock": 0 + "px"
                }}
            >
                <h1>Sign Up</h1>
            <div id="newUser">
                    <span>Already user??</span><Button variant="link" onClick={props.handleClick}>Sign In</Button>
                </div>
            <Alert show={alert}>
                    {props.errors}
            </Alert>
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
                <Form.Group md="4" id="signInOptions">
                    <Form.Label>Sign In As</Form.Label>
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
                <div>
                    <Button variant="primary" type="submit" style={{ "width": 100 + "%"}}>Sign Up</Button>
                </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="primary" type="submit">Sign-Up</Button>
                </Modal.Footer> */}
                </Form>
                <div id="collar">
                    <img src="/images/blucollarO.png" alt="collar" />
            </div>
            </div>
        </Modal>
        </React.Fragment>
    )
}