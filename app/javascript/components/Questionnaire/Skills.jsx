import React from 'react'
import Modal from 'react-bootstrap/Modal'


const Skills = props => {

    if(props.currentStep !== 3) {
        return null
    }

    return(
        <React.Fragment>
        {/* <Modal> */}
        <div className="skills">
            <label>Skills: </label>
            {props.skills.map(skill =>
            <span key={skill.id}>{skill} </span>
            )}
            <input type="text" name="skills" id="skills"/>
            <button onClick={props.handleSkills}>Add Skill</button>
            <br />

        </div>
        
        {/* </Modal> */}
        </React.Fragment>
    )
}

export default Skills
