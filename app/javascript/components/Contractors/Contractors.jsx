import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import Home from '../Home'
import ContractorSignIn from '../Login/ContractorSignIn'
import ContractorSignUp from '../Login/ContractorSignUp'
import ForgotPassword from '../Login/ForgotPassword'
import Applicant from '../Contractors/Applicant'
import JobsContainer from '../../containers/JobsContainer'
import NavBar from '../NavBar'

const Contractors = props => {

    const [state, setState] = useState({
        currentStep: 2
    })

    const [loading, setLoading] = useState(props.loading)
    const [jobs, setJobs] = useState(props.jobs ? props.jobs : [])
    const [applicants, setApplicants] = useState(props.applicants)
    const [errors, setErrors] = useState(props.errors)
    const [contractor, setContractor] = useState(props.contractor)
    const [currentStep, setCurrentStep] = useState(props.currentStep ? props.currentStep : 2)


    useEffect(() => {
        if (props.errors != errors) {
            setErrors(props.errors)
        } else if (props.loading != loading) {
            setLoading(props.loading)
        } else if (props.contractor != contractor) {
            setContractor(props.contractor)
        } else if (props.applicants != applicants) {
            setApplicants(props.applicants)
        } else if (props.jobs != jobs) {
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

if (loading === true) {
        return (
        <div className="spinner">
            <NavBar handleSignout={props.signOut} contractor={props.contractor} user="contractor" />
            <span className="sr-only">Loading...</span>
        </div>
        )
    } else if (props.loggedIn === true) {
        return (
            <div className="contractor">
                <NavBar handleSignout={props.signOut} contractor={props.contractor} user="contractor" />
                <Applicant contractor={contractor} jobs={jobs} applicants={props.applicants} editApplicant={props.editApplicant} />
                {/* <JobsContainer jobs={jobs} contractor={contractor} candidates={props.candidates} profiles={props.profiles}/> */}
            </div>
        )
    } else if (contractor.status==false) {
        return (
            <Redirect to="/contractors/subscription" />
        )
    } else if (props.loggedIn === true && jobs.length < 1) {
        return (
            <Redirect to="/contractors/addjob" />
        )
    } else {
        return (
            <div className="signin">
            <Home />
            <ContractorSignUp signUp={props.signUp} currentStep={currentStep} handleClick={handleClick} handlePassword={handlePassword} errors={errors} />
            <ContractorSignIn signIn={props.signIn} currentStep={currentStep} handleClick={handleClick} handlePassword={handlePassword} errors={errors} />
            <ForgotPassword currentStep={currentStep} updatePassword={props.updatePassword} user="contractor" />
        </div>

        )
    }
    
}

export default Contractors   