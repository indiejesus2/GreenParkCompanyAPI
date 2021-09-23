import React from 'react'
import Modal from 'react-bootstrap/Modal'

const Basic = props => {

    if(props.currentStep !== 1) {
        return null
    }

    return(
        // <React.Fragment>
        <Modal show={props.show}>
            
        <div className="basic">
            <label htmlFor="first name">First Name: </label>
            <input type="text" name="fname" value={props.fname} onChange={props.handleChange} />
            <br />
            <label htmlFor="last name">Last Name: </label>
            <input type="text" name="lname" value={props.lname} onChange={props.handleChange} />
            <br />
            <label htmlFor="city">City: </label>
            <input type="text" name="city" value={props.city} onChange={props.handleChange} />
            <br />
            <label htmlFor="state">State: </label>
            <input type="text" name="state" value={props.state} onChange={props.handleChange} />
            <br />
        </div>
        </Modal>
        
    )
}

export default Basic

