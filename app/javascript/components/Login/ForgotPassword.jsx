import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import {Link} from 'react-router-dom'
import {Button, Form, Modal, Alert, Image, CloseButton} from 'react-bootstrap'
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
            // props.handleValidation
            if (props.user == "employee") {
                history.push('/employees/reset_password')
            } else {
                history.push('/contractors/reset_password')
            }
        },
    });

    if(props.currentStep !== 3) {
        return null
    }
    
    return (
        <React.Fragment>    
        <Modal show={show} animation centered onHide={handleClose}>
            <div className="signIn" style={{
                    "maxwidth": 771 + "px"
                }}>

            <Form noValidate onSubmit={formik.handleSubmit} style={{
                    "maxwidth": 771 + "px"
                }}>
            <Modal.Body>
                style={{
                    "maxwidth": 771 + "px"
                }}
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
                    style={{
                        "padding": 5 + "px",
                        "marginBottom": 10 + "px"
                    }}
                    />
                    {/* <Form.Control.Feedback type="invalid" tooltip>
                        {formik.errors.email}
                    </Form.Control.Feedback> */}
                    {formik.errors.email && formik.touched.email && (
                        <div style={{ color: "red"}}>{formik.errors.email}</div>
                        )}
                </Form.Group>
                <Form.Group md="4" id="signInOptions">
                    <Form.Label>User: </Form.Label>
                        <Form.Select onChange={formik.handleChange} name="user" value={formik.values.user}
                            style={{
                                "width": 63 + "%",
                                "height": 50 + "%"
                            }}
                        >
                            <option value="employee">Employee</option>
                            <option value="contractor">Contractor</option>
                        </Form.Select>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit" style={{
                        "width": 100 + "%",
                        "paddingRight": 0 + "px",
                        "display": "flex",
                        "justifyContent": "end"
                    }}>Find Profile</Button>
            </Modal.Footer>
            </Form>
            </div>
            <div id="collar">
                    <Image fluid="true" src="/images/blucollarO.png" alt="collar" />
            </div>
        </Modal>
        </React.Fragment>
    )

}

export default ForgotPassword