import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'

import Basic from './Basic'
import Desired from './Desired'
import Skills from './Skills'

const Main = (props) => {

    const [state, setState] = useState({
        currentStep: 1,
        id: props.employee.id,
        show: true,
        fname: '',
        lname: '',
        city: '',
        state: '',
        education: '',
        state: '',
        jobtype: [],
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
            console.log(currentStep)
        } else if (currentStep < 3 && direction == "next") {
            setState( prevState => ({
                ...prevState,
                currentStep : currentStep += 1
            }))
            console.log(currentStep)
        }
    }

    // _next = () => {
    //     let currentStep = this.state.currentStep
    //     currentStep = currentStep >= 2? 3: currentStep + 1
    //     this.setState({
    //       currentStep: currentStep
    //     })
    //   }
        
    //   _prev = () => {
    //     let currentStep = this.state.currentStep
    //     currentStep = currentStep <= 1? 1: currentStep - 1
    //     this.setState({
    //       currentStep: currentStep
    //     })
    //   }

    function previousButton() {
        let currentStep = state.currentStep;
        if(currentStep !==1){
          return (
            <button 
              className="btn btn-secondary" 
              type="button" onClick={setState(state.currentStep - 1)}>
            Previous
            </button>
          )
        }
        return null;
      }
      
   function nextButton() {
        let currentStep = state.currentStep;
        if(currentStep <3){
          return (
            <button 
              className="btn btn-primary float-right" 
              type="button" onClick={setState(state.currentStep + 1)}>
            Next
            </button>        
          )
        }
        return null;
      }

    
    return (
        <React.Fragment>
            <h1>BluCollar Tradespeople Main</h1>
            {/* <Modal show={state.show}>     */}
            <p>Step {state.currentStep}</p>
            <form onSubmit={handleSubmit}>
                <Basic
                    currentStep={state.currentStep}
                    handleChange={handleChange}
                    setState={setState}
                    show={state.show}
                    fname={state.fname}
                    lname={state.lname}
                    city={state.city}
                    state={state.state}
                    education={state.education}
                />
                <Desired
                    currentStep={state.currentStep}
                    handleChange={handleJob}
                    setState={setState}

                    show={state.show}
                    jobType={state.jobType}
                    schedule={state.schedule}
                    minpay={state.minpay}
                    maxpay={state.maxpay}
                />
                <Skills
                    currentStep={state.currentStep}
                    handleChange={handleSkills}
                    setState={setState}

                    show={state.show}
                    skills={state.skills}
                    certificates={state.certificates}
                />
            <button 
              className="btn btn-secondary" 
              type="button" name="previous" onClick={handleClick}>
            Previous
            </button>
            <button 
              className="btn btn-primary float-right" 
              type="button" name="next" onClick={handleClick}>
            Next
            </button>  
            </form>


                    {/* </Modal> */}
        </React.Fragment>
    )
}


export default Main