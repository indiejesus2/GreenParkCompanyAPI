import React from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'

const Experience = props => {

    debugger

    return(
        <Form.Group name="experience" id={props.id}>
        <FloatingLabel label="Title">
            <Form.Control type="text" id={props.id} name="experience.title" onChange={props.handleSkills} />
        </FloatingLabel>
        <FloatingLabel label="Company">
            <Form.Control type="text" id={props.id} name="experience.company" onChange={props.handleSkills} />
        </FloatingLabel>
        <FloatingLabel label="City">
            <Form.Control type="text" id={props.id} name="experience.city" onChange={props.handleSkills} />
        </FloatingLabel>
        <FloatingLabel label="State">
            <Form.Control type="text" id={props.id} name="experience.state" onChange={props.handleSkills} />
        </FloatingLabel>
        <FloatingLabel label="ZipCode">
            <Form.Control type="text" id={props.id} name="experience.zipcode" onChange={props.handleSkills} />
        </FloatingLabel>
        <FloatingLabel label="Phone">
            <Form.Control type="text" id={props.id} name="experience.phone" onChange={props.handleSkills} />
        </FloatingLabel>
        <FloatingLabel label="State Date">
            <Form.Control type="text" id={props.id} name="experience.startdate" onChange={props.handleSkills} />
        </FloatingLabel>
        <FloatingLabel label="End Date">
            <Form.Control type="text" id={props.id} name="experience.enddate" onChange={props.handleSkills} />
        </FloatingLabel>
        <FloatingLabel label="Description">
            <Form.Control as="textarea" id={props.id} name="experience.description" onChange={props.handleSkills} />
        </FloatingLabel>
        <Form.Label>
            <Form.Check label="Current Job:" id={props.id} name="experience.current" onChange={props.handleSkills}/>
        </Form.Label>
    </Form.Group>
    )
}

export default Experience