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
        <Modal.Header className="justify-content-center">

            <Modal.Title><img src="/images/blucollar_icon.png" alt="BluCollar Logo" /></Modal.Title>
        </Modal.Header>
            <Modal.Body>

            {/* // <span key={skill.id}>{skill} </span> */}
            <Form.Label>Work Background: </Form.Label>

            <Form.Select name="industry" id="industry" onChange={props.handleChange}>
            <option>Work Industry</option>
                        {industries.map(industry => 
                        <option key={industry} value={industry}>{industry}</option>
                            )}
            </Form.Select>
                <Form.Label>
                    Experience:
                </Form.Label>
                <Experience handleChange={props.handleChange} values={props.values} />
            <Form.Group>
                <Form.Label>Upload Resume:</Form.Label>
                <Form.Control type="file" name="file" size="sm" onChange={props.handleChange} />
            </Form.Group>
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
