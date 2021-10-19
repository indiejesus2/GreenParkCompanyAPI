import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'
import EmployeeSignIn from '../Login/EmployeeSignIn'
import EmployeeSignUp from '../Login/EmployeeSignUp'
import Jobs from './Jobs'
import Questionnaire from '../Questionnaire/Main'
import NavBar from '../NavBar'
import { Breadcrumb } from 'react-bootstrap'


const Employees = props => {

    const [state, setState] = useState({
        profile: props.profile ? props.profile : [],
        currentStep: 1
    })

    const [jobs, setJobs] = useState(props.jobs)
    const [errors, setErrors] = useState(props.errors)
    
    useEffect(() => {
        if (props.errors != errors) {
            setErrors(props.errors)
        } else if (props.jobs && props.job != jobs) {
            setJobs(props.jobs)
        }
    })

    const handleClick = (e) => {
        let currentStep = state.currentStep;
        let direction = e.target.name;
        if (currentStep == 1 && direction == "sign up"){
            setState( prevState => ({
                ...prevState,
                currentStep : currentStep+=1
            }))
        } else if (currentStep == 2 && direction == "sign in") {
            setState( prevState => ({
                ...prevState,
                currentStep : currentStep-=1
            }))
        }
    }

    if (props.loggedIn === false) {
        return (
                <div className="signin">
                    <Home />
                    <EmployeeSignUp signUp={props.signUp} currentStep={state.currentStep} handleClick={handleClick} errors={errors} />
                    <EmployeeSignIn signIn={props.signIn} currentStep={state.currentStep} handleClick={handleClick} errors={errors} />
                </div>
        )
    } else if (props.profile == null) {
        return (
            <Questionnaire employee={props.employee} createProfile={props.createProfile} />
        )
        
    } {
        return (
            <div className="employees">
                <NavBar handleSignout={props.signOut} profile={props.profile} user="employee" />

                <h2>Jobs</h2>
                <Jobs jobs={jobs} employee={props.employee} />
            </div>
        )
    }
}

export default Employees