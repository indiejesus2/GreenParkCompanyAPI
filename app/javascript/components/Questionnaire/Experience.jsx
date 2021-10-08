import React from 'react'
import { Form, FloatingLabel, Button } from 'react-bootstrap'

const Experience = props => {

    const id = props.id - 1

    return(
        <Form.Group name="experience" id={id}>
        <FloatingLabel label="Title">
            <Form.Control type="text" id={id} name={`experience[${id}].title`} onChange={props.handleChange} />
        </FloatingLabel>
        <FloatingLabel label="Company">
            <Form.Control type="text" id={id} name={`experience[${id}].company`} onChange={props.handleChange} />
        </FloatingLabel>
        <FloatingLabel label="City">
            <Form.Control type="text" id={id} name={`experience[${id}].city`} onChange={props.handleChange} />
        </FloatingLabel>
        <FloatingLabel label="State">
            <Form.Control type="text" id={id} name={`experience[${id}].state`} onChange={props.handleChange} />
        </FloatingLabel>
        <FloatingLabel label="ZipCode">
            <Form.Control type="text" id={id} name={`experience[${id}].zipcode`} onChange={props.handleChange} />
        </FloatingLabel>
        <FloatingLabel label="Phone">
            <Form.Control type="text" id={id} name={`experience[${id}].phone`} onChange={props.handleChange} />
        </FloatingLabel>
        <FloatingLabel label="State Date">
            <Form.Control type="text" id={id} name={`experience[${id}].startdate`} onChange={props.handleChange} />
        </FloatingLabel>
        <FloatingLabel label="End Date">
            <Form.Control type="text" id={id} name={`experience[${id}].enddate`} onChange={props.handleChange} />
        </FloatingLabel>
        <FloatingLabel label="Description">
            <Form.Control as="textarea" id={id} name={`experience[${id}].description`} onChange={props.handleChange} />
        </FloatingLabel>
        <Form.Label>
            <Form.Check label="Current Job:" id={id} name={`experience[${id}].current`} onChange={props.handleChange}/>
        </Form.Label>
        {/* <Button id={props.id} onClick={props.handleSkills}>Add Job</Button> */}
    </Form.Group>
    )
}

export default Experience