import React from 'react'
import { Modal, Form, FloatingLabel, Button, Row, Col } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'

const Basic = props => {

    if(props.currentStep !== 1) {
        return null
    }

    return(
        <React.Fragment>
        <Modal show animation backdrop>
            
        <Modal.Header>
            <Modal.Title><img src="/images/blucollar_icon.png" alt="Collar" /></Modal.Title>
        </Modal.Header>
            <Modal.Body>

            <Row className="mb-3">

                    <Form.Group as={Col}>
                        <FloatingLabel label="First Name">
                            <Form.Control type="text" name="fname" value={props.values.fname} onChange={props.handleChange} />
                        </FloatingLabel>
                    </Form.Group> 
                    <Form.Group as={Col}>

                        <FloatingLabel label="Last Name">
                            <Form.Control type="text" name="lname" value={props.values.lname} onChange={props.handleChange} />
                        </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">

                    <Form.Group as={Col}>
                        <FloatingLabel label="City">
                            <Form.Control type="text" name="city" value={props.values.city} onChange={props.handleChange} />
                        </FloatingLabel>
                        </Form.Group> 
                    <Form.Group as={Col}>
                        <FloatingLabel label="State">
                            <Form.Control type="text" name="state" value={props.values.state} onChange={props.handleChange} />
                        </FloatingLabel>
                        </Form.Group>
                    <Form.Group as={Col}>
                        <FloatingLabel label="Zip-Code">
                            <Form.Control type="text" name="zipcode" value={props.values.zipcode} onChange={props.handleChange} />
                        </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Form.Group>
                        <FloatingLabel label="Phone">
                            <Form.Control type="text" name="phone" value={props.values.phone} onChange={props.handleChange} />
                        </FloatingLabel>
                    </Form.Group>
            <Form.Check type="checkbox" name="license" label="Driver's License" value={props.values.license} onChange={props.handleChange} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" name="next" onClick={props.handleClick}>
                    Next
                </Button>
            </Modal.Footer>
        </Modal>
        </React.Fragment>
    )
}

export default Basic

