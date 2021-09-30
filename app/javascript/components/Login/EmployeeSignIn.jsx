import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import * as yup from 'yup'

const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
})

export default function EmployeeSignIn(props) {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: values => {
            props.signIn(values)
            // props.history.push('/employees')
        },
    });

    const handleClick = () => {
        handleClose
        // debugger
        // props.history.push('/employees/signup')
    }
    
    return (
        <React.Fragment>    
        <Modal show animation backdrop onHide={handleClose}>

        {/* <div className="signin"> */}
            <Modal.Header>
        <img src="/images/blucollar_horizicon.png" alt="" className="signIn"/>
            Sign-In</Modal.Header>

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
                    <Link to="/employees/signup">
                        <Button color="success" onClick={handleClick}>Sign-Up</Button>
                    </Link>
                    <Button type="submit">Sign-In</Button>
                </Modal.Footer>
                </Form>
            {/* </div> */}
        </Modal>
                        </React.Fragment>
    )
}