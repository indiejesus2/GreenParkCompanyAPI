import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Alert from 'react-bootstrap/Alert'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
})

export default function EmployeeSignIn(props) {

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
            props.signIn(values)
            history.push('/employees')
        },
    });

    if(props.currentStep !== 1) {
        return null
    }
    
    return (
        <React.Fragment>    
        <Modal show={show} animation centered onHide={handleClose}>
            <Modal.Header>
                <img src="/images/blucollarlogo.png" alt="Blue Collar Logo" className="signIn"/>
            </Modal.Header>
            <Form noValidate onSubmit={formik.handleSubmit}>
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
                    {/* <Form.Control.Feedback type="invalid" tooltip>
                        {formik.errors.email}
                    </Form.Control.Feedback> */}
                    {formik.errors.email && formik.touched.email && (
                        <div style={{ color: "red"}}>{formik.errors.email}</div>
                    )}
                </Form.Group>
                <Form.Group md="4" controlId="validationFormik02">
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
                        <Button variant="link" onClick={props.handleClick}>Sign Up For An Account</Button>
                </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">Sign-In</Button>
                </Modal.Footer>
                </Form>
        </Modal>
                        </React.Fragment>
    )
}