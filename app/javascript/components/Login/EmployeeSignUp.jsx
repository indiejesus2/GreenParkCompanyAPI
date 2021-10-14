import React, { Component, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'

export default function EmployeeSignUp(props) {

    const [show, setShow] = useState(true)
    const history = useHistory();
    
    const handleClose = () => {
        history.push('/');
        setShow(false)
    }

    const handleShow = () => setShow(true);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
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
        <Modal show={show} animation backdrop>
            <Modal.Header><h1>Create a Free Account</h1>
            <p>Find a job today!</p></Modal.Header>

            <Form onSubmit={formik.handleSubmit}>
            <Modal.Body>
                <Form.Group md="4" controlId="validationFormik01">
                <Form.Label>Email: </Form.Label>
                <Form.Control
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    />
                </Form.Group>
                <Form.Group md="4" controlId="validationFormik02">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        />
                </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" name="close" onClick={handleClose}>Close</Button>
                        <Button variant="success" name="sign in" onClick={props.handleClick}>Sign-In</Button>
                        <Button variant="primary" type="submit">Sign-Up</Button>
                </Modal.Footer>
                </Form>
        </Modal>
        </React.Fragment>
    )
}