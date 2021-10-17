import React, { useState } from 'react'
import {Modal, Button, Form, FloatingLabel} from 'react-bootstrap'
import NavBar from '../NavBar'
import Experience from './Experience'

const Skills = props => {

    if(props.currentStep !== 3) {
        return null
    }

    const industries = [
        "Plumbing",
        "Painting",
        "Maintenance",
        "Electric",
        "Landscape",   
    ]

    return(
        <React.Fragment>
        <Modal show animation backdrop>
        <Modal.Header>
            <Modal.Title><img src="/images/blucollar_icon.png" alt="BluCollar Logo" /></Modal.Title>
        </Modal.Header>
            <Modal.Body>

            {/* // <span key={skill.id}>{skill} </span> */}
            <Form.Label>Work Background: </Form.Label>

            <Form.Select name="industry" id="industry" onChange={props.handleChange}>
            <option>Work Industry</option>
                        {industries.map(industry => 
                        <option key={value} value={industry}>{industry}</option>
                            )}
            </Form.Select>
                <Form.Label>
                    Experience:
                </Form.Label>
                <Experience handleChange={props.handleChange} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" name="previous" onClick={props.handleClick}>
                    Previous
                </Button>
                <Button variant="primary" type="submit" onClick={props.handleSubmit}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
        </React.Fragment>
    )
}

export default Skills
