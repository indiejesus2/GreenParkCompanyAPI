import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { Form, Button, Modal, CloseButton, Alert, Image} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

export default function SignIn(props) {

    const schema = yup.object().shape({
        email: yup.string().email("Please enter a valid email address").required("Email is required."),
        password: yup.string().required("Please enter a password.").min(6, "Password must have at least 6 characters")
    })

    const [show, setShow] = useState(true)
    const history = useHistory();
    const [alert, setAlert] = useState(false)

    const handleClose = () => {
        history.push('/');
        setShow(false)
    }

    const handleClick = () => {
        history.push('/home/signUp')
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
            user: "employee"
        },
        validationSchema: schema,
        onSubmit: values => {
                props.signIn(values)
                if (values.user == "employee") {
                    history.push('/employees')
                } else if (values.user == "contractor") {
                    history.push('/contractors')
                }
        },
    });

    if(props.currentStep !== 1) {
        return null
    }
    
    return (
        <React.Fragment>
        <Modal size="lg" show={show} animation centered onHide={handleClose} >
            <div className="signIn" style={{
                    "maxwidth": 771 + "px"
                }}>
            {/* <Modal.Header>
                <img src="/images/blucollarlogo.png" alt="Blue Collar Logo" className="signIn"/>
            </Modal.Header> */}
            <CloseButton />
            <Form noValidate onSubmit={formik.handleSubmit}
                style={{
                    "width": 50 + "%"
                }}>
            <Modal.Body
                style={{
                    "paddingBlock": 0 + "px"
                }}
            >
                    <h1>Sign In</h1>
                <div id="newUser">
                    <span>New user?</span><Button variant="link" onClick={handleClick}>Create An Account</Button>
                </div>
                <Alert show={alert}>
                    {props.errors}
                </Alert>
                <Form.Group md="4" controlId="validationFormik01">
                <Form.Control
                    type="text"
                    name="email"
                    placeholder="Email"
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
                <Form.Group md="4" controlId="validationFormik02">
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        isInvalid={formik.errors.password}
                        onBlur={formik.handleBlur}
                        style={{
                            "padding": 5 + "px",
                            "marginBottom": 10 + "px"
                        }}
                        />
                        {formik.errors.password && formik.touched.password && (
                            <div style={{ color: "red"}}>{formik.errors.password}</div>
                            )}
                </Form.Group>
                <Form.Group md="4" id="signInOptions">
                    <Form.Label>Sign In As</Form.Label>
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
                <Button variant="link" onClick={props.handlePassword}
                    style={{
                        "width": 100 + "%",
                        "paddingRight": 0 + "px",
                        "display": "flex",
                        "justifyContent": "end"
                    }}
                >Forgot Password?</Button>
                <div>
                    <Button variant="primary" type="submit" style={{ "width": 100 + "%"}}>Sign-In</Button>
                </div>
            </Modal.Body>
            </Form>
            <div id="collar">
                <Image fluid="true" src="/images/blucollarO.png" alt="collar" />
            </div>
        </div>    
        </Modal>
        </React.Fragment>
    )
}