import React, { useState } from 'react'
import {Modal, Button, Form, FloatingLabel} from 'react-bootstrap'
import NavBar from '../NavBar'
import Experience from './Experience'

const Skills = props => {

    if(props.currentStep !== 3) {
        return null
    }



    return(
        <React.Fragment>
        <Modal show animation backdrop>
        <Modal.Header className="justify-content-center">
            <Modal.Title className="questionlogo"><img src="/images/blucollar_O.png" alt="BluCollar Logo" /></Modal.Title>

            {/* <Modal.Title><img src="/images/blucollar_icon.png" alt="BluCollar Logo" /></Modal.Title> */}
        </Modal.Header>
            <Modal.Body>

            {/* // <span key={skill.id}>{skill} </span> */}


                <Form.Label>
                    Experience:
                </Form.Label>
                <Experience handleChange={props.handleChange} values={props.values} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" name="previous" onClick={props.handleClick}>
                    Complete Profile
                </Button>
                {/* <Button variant="primary" type="submit" onClick={props.handleSubmit}>
                    Submit
                </Button> */}
            </Modal.Footer>
        </Modal>
        </React.Fragment>
    )
}

export default Skills
