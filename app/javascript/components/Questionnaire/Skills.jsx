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

    const [click, setClick] = useState(1)

    const handleExperience = () => {
        if (click < 3) {
            let exp = click + 1
            setClick(exp)
        }
    }

    const addExperience = () => {
        const exp = []
        for (let i = 2; i<=click;i++) {
            exp.push(<Experience id={i} handleChange={props.handleSkills} />,
                <Button name="Add Experience" onClick={handleExperience}>Additional Experience</Button>,
                <Button>Delete Experience</Button>
                );
        }
        return exp
    }


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
                        <option value={industry}>{industry}</option>
                            )}
            </Form.Select>
                <Form.Label>
                    Experience:
                </Form.Label>
                <Experience id={1} handleChange={props.handleSkills}/>
                <Button name="Add Experience" onClick={handleExperience}>Additional Experience</Button>
                {addExperience()}
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
