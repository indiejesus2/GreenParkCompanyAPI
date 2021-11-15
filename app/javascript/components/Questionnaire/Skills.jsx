import React, { useState } from 'react'
import {Modal, Button, Form, Accordion} from 'react-bootstrap'
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
                <Form.Label>
                    Experience:
                </Form.Label>

            {/* // <span key={skill.id}>{skill} </span> */}

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Most Recent Job
                    </Accordion.Header>
                        <Accordion.Body>
                            <Experience handleChange={props.handleChange} values={props.values} id={0}/>
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Job #2
                    </Accordion.Header>
                        <Accordion.Body>
                            <Experience handleChange={props.handleChange} values={props.values} id={1}/>
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        Job #3
                    </Accordion.Header>
                        <Accordion.Body>
                            <Experience handleChange={props.handleChange} values={props.values} id={2}/>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
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
