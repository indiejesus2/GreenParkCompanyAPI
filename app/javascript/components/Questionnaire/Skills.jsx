import React from 'react'
import {Modal, Button, Form, FloatingLabel} from 'react-bootstrap'

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
            <Modal.Title><img src="/images/blucollar_icon.png" alt="Collar" /></Modal.Title>
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
            <Form.Group name="experience">
                <FloatingLabel label="Title">
                    <Form.Control type="text" name="experience[title]" onChange={props.handleChange} />
                </FloatingLabel>
                <FloatingLabel label="Company">
                    <Form.Control type="text" name="experience[company]" onChange={props.handleChange} />
                </FloatingLabel>
                <FloatingLabel label="City">
                    <Form.Control type="text" name="experience[city]" onChange={props.handleChange} />
                </FloatingLabel>
                <FloatingLabel label="State">
                    <Form.Control type="text" name="experience[state]" onChange={props.handleChange} />
                </FloatingLabel>
                <FloatingLabel label="ZipCode">
                    <Form.Control type="text" name="experience[zipcode]" onChange={props.handleChange} />
                </FloatingLabel>
                <FloatingLabel label="Phone">
                    <Form.Control type="text" name="experience[phone]" onChange={props.handleChange} />
                </FloatingLabel>
                <FloatingLabel label="State Date">
                    <Form.Control type="text" name="experience[startdate]" onChange={props.handleChange} />
                </FloatingLabel>
                <FloatingLabel label="End Date">
                    <Form.Control type="text" name="experience[enddate]" onChange={props.handleChange} />
                </FloatingLabel>
                <FloatingLabel label="Description">
                    <Form.Control as="textarea" name="experience[description]" onChange={props.handleChange} />
                </FloatingLabel>
                <Form.Label>
                    <Form.Check label="Current Job:" name="experience[current]" onChange={props.handleChange}/>
                </Form.Label>
            </Form.Group>
            {/* {skills.map(skill =>
            <Form.Control.Feedback type="valid">{skill}</Form.Control.Feedback>
            )}
            <Button onClick={props.handleSkills}>Add Skill</Button>
            <br /> */}
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
