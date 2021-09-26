import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'



const Skills = props => {

    if(props.currentStep !== 3) {
        return null
    }

    const skills = props.skills.length > 0 ? props.skills : []

    return(
        <React.Fragment>
        <Modal show animation backdrop>
        <Modal.Header>
            <Modal.Title><img src="/images/blucollar_icon.png" alt="Collar" /></Modal.Title>
        </Modal.Header>
            <Modal.Body>

            {/* // <span key={skill.id}>{skill} </span> */}
            <Form.Label>Skills: </Form.Label>

            <Form.Control type="text" name="skills" id="skills" onChange={props.handleChange}/>
            {skills.map(skill =>
            <Form.Control.Feedback type="valid">{skill}</Form.Control.Feedback>
            )}
            <Button onClick={props.handleSkills}>Add Skill</Button>
            <br />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" name="previous" onClick={props.handleClick}>
                    Previous
                </Button>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
        </React.Fragment>
    )
}

export default Skills
