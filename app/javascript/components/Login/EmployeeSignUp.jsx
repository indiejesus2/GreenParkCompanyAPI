import React, { useState, useEffect } from 'react'
import { Modal, Form, Col, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'


export default function EmployeeSignUp(props) {

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
        },
        validationSchema: schema,
        onSubmit: values => {
            props.signUp(values)
            handleClose
            history.push('/employees')
        },
    });

    if(props.currentStep !== 2) {
        return null
    } 

    return (
        <React.Fragment>    
        <Modal show={show} animation centered onHide={handleClose}>
            <Modal.Header><h1>Create a Free Account</h1>
            <p>Find a job today!</p></Modal.Header>

            <Form onSubmit={formik.handleSubmit}>
            <Modal.Body>
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
                        />
                            {formik.errors.password && formik.touched.password && (
                                <div style={{ color: "red"}}>{formik.errors.password}</div>
                            )}
                        <Button variant="link" onClick={props.handleClick}>Already Have An Account?</Button>
                </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">Sign-Up</Button>
                </Modal.Footer>
                </Form>
        </Modal>
        </React.Fragment>
    )
}