import React, { Component, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'

export default function EmployeeSignUp(props) {

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
            props.signUpEmployee(values)
            handleClose
            history.push('/employees')
        },
    });

    if(props.currentStep !== 2) {
        return null
    } 

    return (
        <React.Fragment>    
        <Modal show={show} animation backdrop>

        {/* <div className="signin"> */}
            <Modal.Header><h1>Create a Free Account</h1>
            <p>Find a job today!</p></Modal.Header>

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
                        <Button color="success" name="sign in" onClick={props.handleClick}>Sign-In</Button>
                    {/* <Link to="/employees"> */}
                        <Button color="primary" type="submit">Sign-Up</Button>
                    {/* </Link> */}
                </Modal.Footer>
                </Form>
            {/* </div> */}
        </Modal>
                        </React.Fragment>
        // <div className="signUp">

        //     <div className="input">
        //         <form onSubmit={handleSubmit} className="signup-form">
        //         {/* <label>Name: </label>
        //             <input type="text" name="name" id="name" onChange={handleChange}/>
        //             <br /> */}
        //         <label>Email: </label>
        //             <input type="text" name="email" id="email" onChange={handleChange}/>
        //             <br />
        //         <label>Password: </label>
        //             <input type="password" name="password" id="password" onChange={handleChange}/>
        //                 <div className="submit">
        //                     <input type="submit" value="Log-In"/>
        //                 </div>
        //         </form>
        //     </div>
        // </div>
    )
}