import React, { useState } from 'react'
import { useFormik } from 'formik'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

export default function ContractorSignIn(props) {

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
            props.signIn(values)
        },
    });

    if(props.currentStep !== 1) {
        return null
    }
    
    return (
        <React.Fragment>    
        <Modal show={show} animation backdrop onHide={handleClose}>
            <Modal.Header>
                <img src="/images/blucollar_horizicon.png" alt="Blue Collar Logo" className="signIn"/>
                Sign-In
            </Modal.Header>
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
                <Button color="danger" name="close" onClick={handleClose}>Close</Button>
                <Button color="success" name="sign up" onClick={props.handleClick}>Sign-Up</Button>
                <Button type="submit">Sign-In</Button>
            </Modal.Footer>
            </Form>
        </Modal>
        </React.Fragment>
    )
}