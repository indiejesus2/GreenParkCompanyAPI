import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'
import EmployeeSignIn from '../Login/EmployeeSignIn'
import EmployeeSignUp from '../Login/EmployeeSignUp'
import ForgotPassword from '../Login/ForgotPassword'
import TempPassword from '../Login/TempPassword'
import Jobs from './Jobs'
import Questionnaire from '../Questionnaire/Main'
import NavBar from '../NavBar'
import { Breadcrumb } from 'react-bootstrap'


const Employees = props => {

    const [state, setState] = useState({
        profile: props.profile ? props.profile : [],
    })

    const [jobs, setJobs] = useState(props.jobs)
    const [errors, setErrors] = useState(props.errors)
    const [currentStep, setCurrentStep] = useState(props.currentStep ? props.currentStep : 2)
    
    useEffect(() => {
        if (props.errors != errors) {
            setErrors(props.errors)
        } else if (props.jobs && props.job != jobs) {
            setJobs(props.jobs)
        }
    })

    const handleClick = (e) => {
        // let direction = e.target.name;
        if (currentStep == 1){
            setCurrentStep(2)
        } else if (currentStep == 2) {
            setCurrentStep(1)
        }
    }

    const handlePassword = () => {
        setCurrentStep(3)
    }

    const handleValidation = () => {
        setCurrentStep(4)
    }

    const handleJobs = () => {
        if (jobs.length == 0) {
            return (
                <div>
                    <p>
                        "We're working hard to find some matches."
                    </p>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>{jobs.length} Potential Job Matches</h2>
                    <Jobs jobs={jobs} employee={props.employee} profile={props.profile} applicants={props.applicants} handleInterest={props.handleInterest} />
                </div>
            )
        }
    }

    if (props.loggedIn === false) {
        return (
            <div className="signin">
                    <Home />
                    <EmployeeSignUp signUp={props.signUp} currentStep={currentStep} handleClick={handleClick} handlePassword={handlePassword} errors={errors} />
                    <EmployeeSignIn signIn={props.signIn} currentStep={currentStep} handleClick={handleClick} handlePassword={handlePassword} errors={errors} />
                    <ForgotPassword currentStep={currentStep} updatePassword={props.updatePassword} handleValidation={handleValidation} user={"employee"} />
                </div>
        )
    } else if (state.profile.length === 0) {
        return (
            <div className="questionnaire">
                <NavBar handleSignout={props.signOut} loggedIn={props.loggedIn} />
                <Questionnaire employee={props.employee} createProfile={props.createProfile} handleSignout={props.signOutEmployee} uploadFile={props.uploadFile} fileLoading={props.fileLoading} />
            </div>
        )
        
    } else {
        return (
            <div className="employees">
                <NavBar handleSignout={props.signOut} profile={props.profile} user="employee" />
                    {handleJobs()}
            </div>
        )
    }
}

export default Employees