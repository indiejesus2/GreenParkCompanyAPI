import React, { useState } from 'react'
import { useFormik } from 'formik'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import * as yup from 'yup'

const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
})

export default function SignIn(props) {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        // onSubmit: values => {
        //     props.signIn(values)
        // },
    });
    
    return (
        <React.Fragment>    
        <Modal show="true" animation backdrop>

        {/* <div className="signin"> */}
            <Modal.Header>Sign-In</Modal.Header>

            <Form onSubmit={formik.handleSubmit}>
            <Modal.Body>
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Email: </Form.Label>
                <Form.Control
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
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
                    <Button type="submit">Sign-In</Button>
                </Modal.Footer>
                </Form>
            {/* </div> */}
        </Modal>
                        </React.Fragment>
    )
}