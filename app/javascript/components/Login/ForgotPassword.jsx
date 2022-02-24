import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import {Link} from 'react-router-dom'
import {Button, Form, Modal, Alert} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const ForgotPassword = props => {

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
            user: props.user
        },
        onSubmit: values => {
            props.updatePassword(values)
            history.push('/')
        },
    });

    if(props.currentStep !== 3) {
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
                <h2>Find Your BluCollar Account</h2>
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
                    isInvalid={formik.errors.email}
                    onBlur={formik.handleBlur}
                    />
                    {/* <Form.Control.Feedback type="invalid" tooltip>
                        {formik.errors.email}
                    </Form.Control.Feedback> */}
                    {formik.errors.email && formik.touched.email && (
                        <div style={{ color: "red"}}>{formik.errors.email}</div>
                    )}
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit">Find Profile</Button>
            </Modal.Footer>
            </Form>
        </Modal>
        </React.Fragment>
    )

}

export default ForgotPassword