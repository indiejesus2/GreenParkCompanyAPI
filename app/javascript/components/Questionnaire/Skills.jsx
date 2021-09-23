import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



const Skills = props => {

    if(props.currentStep !== 3) {
        return null
    }

    return(
        <React.Fragment>
        <Modal show={props.show} animation backdrop>
        <Modal.Header closeButton>
            <Modal.Title>Work-Schedule</Modal.Title>
        </Modal.Header>
            <Modal.Body>

            <label>Skills: </label>
            {props.skills.map(skill =>
            <span key={skill.id}>{skill} </span>
            )}
            <input type="text" name="skills" id="skills"/>
            <button onClick={props.handleSkills}>Add Skill</button>
            <br />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" name="previous" onClick={props.handleClick}>
                    Previous
                </Button>
                <Button variant="primary" name="submit" onClick={props.handleSubmit}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
        </React.Fragment>
    )
}

export default Skills
