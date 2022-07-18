import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { Form, Button, Modal, CloseButton, Alert, Image, Col, Row, Toast, ToastContainer} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

const Contact = props => {

    const schema = yup.object().shape({
        email: yup.string().email("Please enter a valid email address").required("Email is required."),
        msg: yup.string().required("Please enter a message.")
    })

    const handleHome = () => {
        if (history.location.pathname.includes("employees")) {
            return ('/employees')
        } else if (history.location.pathname.includes("employers")) {
            return ('/employers')
        } else {
            return ('/')
        }
    }

    const handleClose = () => {
        history.push(handleHome());
        setMsg(false)
        setShow(false)
    }

    const [show, setShow] = useState(true)
    const history = useHistory();
    const [alert, setAlert] = useState(false)
    const [msg, setMsg] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            msg: ""
        },
        validationSchema: schema,
        onSubmit: values => {
            props.contactMsg(values)
            setMsg(true)
            // history.push("/")
        },
    });

    // if(props.currentStep !== 5) {
    //     return null
    // }

    return (
        <React.Fragment>
            <Modal size="lg" show={show} centered onHide={handleClose} >
                <div className="signIn" style={{
                    "maxwidth": 771 + "px"
                }}>
                    <Form noValidate onSubmit={formik.handleSubmit}
                        // style={{
                        //     "width": 50 + "%"
                        // }}
                    >
                    <Modal.Body
                        style={{
                            "paddingBlock": 0 + "px"
                        }}  
                    >
                        <h1>Contact Us</h1>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.errors.name}
                                        onBlur={formik.handleBlur}
                                        style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                                        // style={{
                                        //     "padding": 5 + "px",
                                        //     "marginBottom": 10 + "px"
                                        // }}
                                        />
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationFormik01">
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    isInvalid={formik.errors.email}
                                    onBlur={formik.handleBlur}
                                    // style={{
                                    //     "padding": 5 + "px",
                                    // }}
                                    style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                                    />
                                    {/* <Form.Control.Feedback type="invalid" tooltip>
                                        {formik.errors.email}
                                    </Form.Control.Feedback> */}
                                    {formik.errors.email && formik.touched.email && (
                                        <div style={{ color: "red"}}>{formik.errors.email}</div>
                                    )}
                                </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationFormik02">
                                    <Form.Control
                                        as="textarea"
                                        name="msg"
                                        placeholder="Write Your Message Here"
                                        value={formik.values.msg}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.errors.msg}
                                        onBlur={formik.handleBlur}
                                        style={{ "backgroundColor": "#2f2f2f", "color": "#fff", height: 100 + "px"}}
                                        // style={{
                                        //     "padding": 5 + "px",
                                        //     "marginBottom": 10 + "px"
                                        // }}
                                        />
                                        {formik.errors.msg && formik.touched.msg && (
                                            <div style={{ color: "red"}}>{formik.errors.msg}</div>
                                            )}
                                </Form.Group>
                                </Row>
                                <div>
                    <Button variant="primary" type="submit" style={{ "width": 100 + "%"}}>Submit Feedback</Button>
                </div>
                    </Modal.Body>
                    </Form>
                    <div id="collar">
                <Image fluid="true" src="/images/blucollarO.png" alt="collar" />
            </div>
            <CloseButton onClick={handleClose} 
                    style={{
                        position: "relative",
                        bottom: 15 + "px",
                        right: 15 + "px"
                    }}
            />
                </div>
            </Modal>
            <ToastContainer position="top-center">
                <Toast show={msg} centered onHide={handleClose}>
                    <Toast.Header>
                    </Toast.Header>
                        <Toast.Body style={{backgroundColor: "black"}}>
                            <h2>Thank you. Your message has been sent to the website adminstrator.</h2>
                        </Toast.Body>
                </Toast>
            </ToastContainer>
        </React.Fragment>
    )

}

export default Contact