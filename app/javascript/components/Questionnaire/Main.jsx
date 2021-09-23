import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Basic from './Basic'
import Desired from './Desired'
import Skills from './Skills'

const Main = (props) => {

    const [state, setState] = useState({
        currentStep: 1,
        id: props.profile.id,
        employee_id: props.employee.id,
        show: true,
        fname: '',
        lname: '',
        city: '',
        state: '',
        education: '',
        state: '',
        jobType: [],
        schedule: [],
        minpay: 0,
        maxpay: 0,
        industry: '',
        skills: [],
        experience: []
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const handleChange = (event) => {
        const {name, value}  = event.target
        setState( prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleJob = (e) => {
        if (e.target.checked === true) {
            setState( prevState => ({
                ...prevState,
                [e.target.name]: [...state[e.target.name], e.target.value]
            }))
        } else {
            let group = state[e.target.name]
            let deleted = group.findIndex(job => Object.keys(job)[0] == e.target.id)
            group.splice(deleted, 1)
            setState( prevState => ({
                ...prevState,
                [e.target.name]: group
            }))
        }
    }

    const handleSkills = (e) => {
        e.preventDefault()
        let skill = e.target.previousElementSibling.value
        setState( prevState => ({
            ...prevState,
            skills: [...state.skills, skill]
        }))
    }

    const handleHistory = (e) => {
        let work_histories = state.work_histories
        work_histories[e.target.name] = e.target.value
        setState( prevState => ({
            ...prevState,
            work_histories : work_histories
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateProfile(state)
        props.history.push('/employees')
    }

    const handleClick = (e) => {
        let currentStep = state.currentStep;
        let direction = e.target.name;
        if (currentStep !==1 && direction == "previous"){
            setState( prevState => ({
                ...prevState,
                currentStep : currentStep -= 1
            }))
        } else if (currentStep < 3 && direction == "next") {
            setState( prevState => ({
                ...prevState,
                currentStep : currentStep += 1
            }))
        }
    }

    
    return (
        <div>
            <h1>BluCollar Tradespeople Main</h1>
            {/* <Modal show={state.show}>     */}
            <p>Step {state.currentStep}</p>
            <form onSubmit={handleSubmit}>
                <Basic
                    currentStep={state.currentStep}
                    handleChange={handleChange}
                    show={state.show}
                    fname={state.fname}
                    lname={state.lname}
                    city={state.city}
                    state={state.state}
                    education={state.education}
                    handleClick={handleClick}
                    />
                <Desired
                    currentStep={state.currentStep}
                    handleChange={handleJob}
                    
                    show={state.show}
                    jobType={state.jobType}
                    schedule={state.schedule}
                    minpay={state.minpay}
                    maxpay={state.maxpay}
                    handleClick={handleClick}
                    />
                <Skills
                    currentStep={state.currentStep}
                    handleChange={handleSkills}
                    handleSubmit={handleSubmit}
                    show={state.show}
                    skills={state.skills}
                    certificates={state.certificates}
                    handleClick={handleClick}
                    />
            </form>
            </div>


                    // {/* </Modal> */}
        // </React.Fragment>
    )
}


export default Main