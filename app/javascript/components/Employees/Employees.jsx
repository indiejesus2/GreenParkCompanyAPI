import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'
import EmployeeSignIn from '../Login/EmployeeSignIn'
import EmployeeSignUp from '../Login/EmployeeSignUp'
import Jobs from './Jobs'
import Questionnaire from '../Questionnaire/Main'

const Employees = props => {


    const [state, setState] = useState({
        profile: props.profile ? props.profile : [],
        jobs: props.jobs ? props.jobs : [],
        currentStep: 1
    })

    const handleClick = (e) => {
        let currentStep = state.currentStep;
        let direction = e.target.name;
        if (currentStep == 1 && direction == "sign up"){
            setState( prevState => ({
                ...prevState,
                currentStep : currentStep+=1
            }))
            console.log(currentStep)
        } else if (currentStep == 2 && direction == "sign in") {
            setState( prevState => ({
                ...prevState,
                currentStep : currentStep-=1
            }))
            console.log(currentStep)
        }
    }

    if (props.loggedIn === false) {
        return (
                <div className="signin">
                    <Home />
                    <EmployeeSignUp signUp={props.signUp} currentStep={state.currentStep} handleClick={handleClick} />
                    <EmployeeSignIn signIn={props.signIn} currentStep={state.currentStep} handleClick={handleClick} />
                </div>
                /* <Jobs jobs={props.jobs} fetchJobs={props.fetchJobs} /> */
        )
    } else if (props.loading === true) {
        return (
            <div>
                Loading....
            </div>
        )
    } else if (props.profile == null) {
        return (
            <Questionnaire employee={props.employee} createProfile={props.createProfile} />
        )
        
    } {
        return (
                <div className="employees">
                    <h1>{props.profile.fname} {props.profile.lname}</h1>
                    <Link to={`/employees/${props.employee.id}/profile`}>Profile</Link>
                    <h2>Jobs</h2>
                    <Jobs jobs={state.jobs} fetchJobs={props.fetchJobs} employee={props.employee} />
                </div>
        )
    }
}

export default Employees