import React, {useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import Home from '../Home'
import EmployeeSignIn from '../Login/EmployeeSignIn'
import EmployeeSignUp from '../Login/SignUp'
import ForgotPassword from '../Login/ForgotPassword'
import TempPassword from '../Login/TempPassword'
import Jobs from './Jobs'
import Job from './Job'
import Questionnaire from '../Questionnaire/Main'
import NavBar from '../NavBar'
import SideNavBar from '../SideNavBar'
import { Breadcrumb } from 'react-bootstrap'


const Employees = props => {

    const [state, setState] = useState({
        profile: props.profile ? props.profile : [],
    })

    const [jobs, setJobs] = useState(props.jobs)
    const [errors, setErrors] = useState(props.errors)
    const [currentStep, setCurrentStep] = useState(1)
    const [listing, setListing] = useState("")
    
    const handleJob = (job) => {
        setListing(job)
        setCurrentStep(2);
    }
    
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

    const handleClose = () => {
        setStep(1)
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
                    <h2 style={{ "padding-inline-start": 160 + "px"}}>
                        "We're working hard to find some matches."
                    </h2>
                </div>
            )
        } else if (currentStep == 1) {
            return (
                <div>
                    <h2 style={{ "padding-inline-start": 160 + "px"}}>Congrats, you have {jobs.length} jobs that match your profile</h2>
                    <Jobs jobs={jobs} employee={props.employee} profile={props.profile} applicants={props.applicants} handleInterest={props.handleInterest} currentStep={currentStep} handleJob={handleJob} />
                </div>
            )
        } else if (currentStep == 2) {
            return (
                <div>
                  <Job currentStep={currentStep} job={listing} employee={props.employee} applicants={props.applicants} handleClick={handleClick} handleClose={handleClose} />
                </div>
            )
        }
    }

    if (props.loggedIn === false) {
        return (
            <Redirect to="/home" />
        )
        // return (
        //     <div className="signin">
        //             <Home />
        //             <EmployeeSignUp signUp={props.signUp} currentStep={currentStep} handleClick={handleClick} handlePassword={handlePassword} errors={errors} />
        //             <EmployeeSignIn signIn={props.signIn} currentStep={currentStep} handleClick={handleClick} handlePassword={handlePassword} errors={errors} />
        //             <ForgotPassword currentStep={currentStep} updatePassword={props.updatePassword} handleValidation={handleValidation} user={"employee"} />
        //         </div>
        // )
    } else if (state.profile.length === 0) {
        return (
            <div className="questionnaire">
                <NavBar handleSignout={props.signOut} loggedIn={props.loggedIn} />
                <Questionnaire employee={props.employee} createProfile={props.createProfile} handleSignout={props.signOutEmployee} uploadFile={props.uploadFile} fileLoading={props.fileLoading} />
            </div>
        )
        
    } else {
        return (
            <div>
                {handleJobs()}
            </div>
        )
    }
}

export default Employees