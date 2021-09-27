import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
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

            <Form.Label htmlFor="first name">First Name: </Form.Label>
            <Form.Control type="text" name="fname" value={props.fname} onChange={props.handleChange} />
            <Form.Label htmlFor="last name">Last Name: </Form.Label>
            <Form.Control type="text" name="lname" value={props.lname} onChange={props.handleChange} />
            <Form.Label htmlFor="city">City: </Form.Label>
            <Form.Control type="text" name="city" value={props.city} onChange={props.handleChange} />
            <Form.Label htmlFor="state">State: </Form.Label>
            <Form.Control type="text" name="state" value={props.state} onChange={props.handleChange} />
            <Form.Label htmlFor="zipcode">Zipcode: </Form.Label>
            <Form.Control type="text" name="zipcode" value={props.zipcode} onChange={props.handleChange} />
            <Form.Check type="checkbox" name="license" label="Driver's License" onChange={props.handleChange} />
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

