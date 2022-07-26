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

    const history = useHistory();
    const [alert, setAlert] = useState(false)
    const [error, setError] = useState(props.employeeErrors!=""?props.employeeErrors:props.contractorErrors)
    const [employeeError, setEmployeeError] = useState(props.employeeErrors)
    const [contractorError, setContractorError] = useState(props.contractorErrors)

    const handleClose = () => {
        history.push('/');
        props.clearEmployeeErrors()
        props.clearContractorErrors()
        setError("")
        setShow(false)
    }

    const handleClick = () => {
        history.push('/home/forgot_password')
    }

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
                } else if (values.user == "employer") {
                    history.push('/contractors')
                }
        },
    });

    useEffect(() => {
        if(!Array.isArray(error)) {
        // if (props.employeeErrors != "" || props.contractorErrors != "") {
            setAlert(true)
            handleError()
            // setError(props.employeeErrors!=""?props.employeeErrors:props.contractorErrors)
        }
    }, [error])
    
    // useEffect(() => {
    //     // debugger
    //     if(!Array.isArray(contractorError)) {
    //     // if (props.employeeErrors !=error || props.contractorErrors != error) {
    //         setAlert(true)
    //         // setError(props.employeeErrors!=""?props.employeeErrors:props.contractorErrors)
    //     } else if (!Array.isArray(employeeError)) {
    //         setAlert(true)
    //     }
    // }, [contractorError, employeeError])

    if(props.currentStep !== 1) {
        return null
    }

    const handleModal = () => {
        if (window.screen.availWidth <= 320) {
            return "sm"
        }
    }

    const handleError = () => {
        if (!Array.isArray(contractorError)) {
            formik.setFieldValue('user', "employer")
        }
    }

    // const handleImg = () => {
    //     if (window.screen.availWidth > 580) {
    //         return (
    //             "none"
    //         )    
    //     }
    // }

    const handleWidth = () => {
        if (window.screen.availWidth > 580) {
            return ("66%")
        } else {
            return ("100%")
        }
    }

    // debugger
    
    return (
        <Modal show animation centered onHide={handleClose} size={handleModal} >
            <div className="signIn">
            {/* <Modal.Header>
                <img src="/images/blucollarlogo.png" alt="Blue Collar Logo" className="signIn"/>
            </Modal.Header> */}

            <Form noValidate onSubmit={formik.handleSubmit}
            >
            <Modal.Body
                style={{
                    "paddingBlock": 0 + "px"
                }}
            >
                    <h1 id="header">Sign In</h1>            
                <Alert show={alert}>
                    {error}
                </Alert>
                <Form.Group className="mb-3" md="4" id="signInOptions">
                    <div id="choiceLabel">
                        <Form.Label>Sign In As</Form.Label>
                    </div>
                        <Form.Select onChange={formik.handleChange} name="user" value={formik.values.user}
                            style={{
                                "width": 63 + "%",
                                "height": 50 + "%"
                            }}
                        >
                            <option value="employee">Employee</option>
                            <option value="employer">Employer</option>
                        </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" md="4" controlId="validationFormik01">
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
                    }}
                    />
                    {/* <Form.Control.Feedback type="invalid" tooltip>
                        {formik.errors.email}
                    </Form.Control.Feedback> */}
                    {formik.errors.email && formik.touched.email && (
                        <div style={{ color: "red"}}>{formik.errors.email}</div>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" md="4" controlId="validationFormik02">
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
                <Button variant="link" onClick={handleClick}
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
            <div id="collar" >
                    <Image fluid="true" src="/images/blucollarO.png" alt="collar" />
                </div>
            
            <div id="closeButton">
                <CloseButton onClick={handleClose} />
            </div>
        </div>    
        </Modal>
    )
}