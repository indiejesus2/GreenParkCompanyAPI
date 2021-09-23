import React from 'react'
import Modal from 'react-bootstrap/Modal'


const Desired = props => {

    if(props.currentStep !== 2) {
        return null
    }

    return(
        <React.Fragment>
        {/* <Modal> */}
        <div className="basic">
            <label htmlFor="job-type">Job-Type: </label>
            <input type="checkbox" name="jobType" value="ft" id='1' onChange={props.handleJob} /> Full-time
            <input type="checkbox" name="jobType" value="pt" id='2' onChange={props.handleJob} /> Part-time
            <input type="checkbox" name="jobType" value="contract" id='3' onChange={props.handleJob} /> Contract
            <input type="checkbox" name="jobType" value="temporary" id='4' onChange={props.handleJob} /> Temporary
            <br />
            <label htmlFor="schedule">Schedule: </label>
            <input type="checkbox" name="schedule" value="M-F" onChange={props.handleJob}/>
            M-F
            <input type="checkbox" name="schedule" value="Weekends" onChange={props.handleJob}/>
            Weekends
            <input type="checkbox" name="schedule" value="Overnight" onChange={props.handleJob}/>
            Overnight
            <input type="checkbox" name="schedule" value="Holidays" onChange={props.handleJob}/>
            Holidays
        </div>
        {/* </Modal> */}
        </React.Fragment>
    )
}

export default Desired