import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import {Button, Form, Modal, Alert} from 'react-bootstrap'
import Logo from '../Logo'
import NavBar from '../NavBar'


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

    const formik = useFormik({
        initialValues: {
            email: "",
            token: "",
            password: "",
            password_confirmation: "",
            user: props.user
        },
        onSubmit: values => {
            if (values.password !== values.password_confirmation) {
                alert("Passwords don't match.");
            } else {
                props.resetPassword(values)
            }
        }
    })
    
        return (
            <div className="tempCode">
                <Logo />
                <NavBar />
                <p>
                    Enter your email address associated with your account and the temporary code sent to your email to update your password.
                </p>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group md="4">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control 
                            type="text"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        <Form.Label>Token: </Form.Label>
                        <Form.Control 
                            type="text"
                            name="token"
                            value={formik.values.token}
                            onChange={formik.handleChange}
                        />
                        <Form.Label>New Password: </Form.Label>
                        <Form.Control 
                            type="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <Form.Label>Confirm new password: </Form.Label>
                        <Form.Control 
                            type="password"
                            name="password_confirmation"
                            value={formik.values.password_confirmation}
                            onChange={formik.handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={formik.handleSubmit}>Confirm Password</Button>
                </Form>
            </div>
        )

}

export default TempPassword