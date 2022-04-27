import React, { useState } from 'react'
import {Modal, Button, Form, Accordion, Image} from 'react-bootstrap'
import NavBar from '../NavBar'
import Experience from './Experience'

const Skills = props => {

    if(props.currentStep !== 3) {
        return null
    }


    return(
        <React.Fragment>
        <Modal show animation backdrop>
        <Modal.Header className="justify-content-center" style={{ "backgroundColor": "#373737"}}>
            <Modal.Title className="questionlogo">
                <Image fluid="true" src="/images/blucollar-logo-non-bold.png" alt="BluCollar Logo" />
            </Modal.Title>

            {/* <Modal.Title><img src="/images/blucollar_icon.png" alt="BluCollar Logo" /></Modal.Title> */}
        </Modal.Header>
            <Modal.Body style={{ "backgroundColor": "#373737"}}>
                <Form.Label>
                    Experience:
                </Form.Label>

            {/* // <span key={skill.id}>{skill} </span> */}

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}>
                        Most Recent Job
                    </Accordion.Header>
                        <Accordion.Body  style={{ "backgroundColor": "#373737"}}>
                            <Experience handleChange={props.handleChange} values={props.values} id={0}/>
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}>
                        Job #2
                    </Accordion.Header>
                        <Accordion.Body  style={{ "backgroundColor": "#373737"}}>
                            <Experience handleChange={props.handleChange} values={props.values} id={1}/>
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}>
                        Job #3
                    </Accordion.Header>
                        <Accordion.Body  style={{ "backgroundColor": "#373737"}}>
                            <Experience handleChange={props.handleChange} values={props.values} id={2}/>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </Modal.Body>
            <Modal.Footer style={{ "backgroundColor": "#373737"}}>
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
