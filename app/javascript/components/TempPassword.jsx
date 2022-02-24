import React from 'react';
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import {Button, Form, Modal, Alert} from 'react-bootstrap'


const TempPassword = props => {

    const history = useHistory();

    const newPassword = async (check) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'applicant/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(check)
        };
        const resp = await fetch(`/api/v1/reset_password/`, {configObj})
        const response = await resp.json()
        if (!!response.error) {
            history.push('/')
        } else {
            alert(response.alert)
            history.push('/')
        }
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            token: "",
            password: "",
            password_confirmation: "",
        },
        onSubmit: values => {
            if (password !== password_confirmation) {
                alert("Passwords don't match.");
            } else {
                newPassword(values)
            }
        }
    })
    
        return (
            <div className="tempCode">

                <p>
                    Enter your email address associated with your account and the temporary code sent to your email to update your password.
                </p>
                <Form>
                    <From.Group md="4">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control 
                            type="text"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        <Form.Label>Email: </Form.Label>
                        <Form.Control 
                            type="text"
                            name="token"
                            value={formik.values.token}
                            onChange={formik.handleChange}
                        />
                        <Form.Label>New Password: </Form.Label>
                        <Form.Control 
                            type="text"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <Form.Label>Confirm new password: </Form.Label>
                        <Form.Control 
                            type="text"
                            name="password_confirmation"
                            value={formik.values.password_confirmation}
                            onChange={formik.handleChange}
                        />
                    </From.Group>
                </Form>
            </div>
        )

}

export default TempPassword