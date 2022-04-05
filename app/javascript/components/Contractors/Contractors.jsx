import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import Home from '../Home'
import ContractorSignIn from '../Login/SignIn'
import ContractorSignUp from '../Login/ContractorSignUp'
import ForgotPassword from '../Login/ForgotPassword'
import Applicant from './Applicant'
import EmployeeProfile from './EmployeeProfile'
import JobsContainer from '../../containers/JobsContainer'
import NavBar from '../NavBar'
import SideNavBar from '../SideNavBar'

const Contractors = props => {

    const [loading, setLoading] = useState(props.loading)
    const [jobs, setJobs] = useState(props.jobs ? props.jobs : [])
    const [applicants, setApplicants] = useState(props.applicants)
    const [errors, setErrors] = useState(props.errors)
    const [contractor, setContractor] = useState(props.contractor)
    const [currentStep, setStep] = useState(1)
    const [applicant, setApplicant] = useState("")
    const [job, setJob] = useState([])


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
            setStep(2)
        } else if (currentStep == 2) {
            setStep(1)
        }
    }


    const handlePassword = () => {
        setStep(3)
    }

    const handleApplicant = (candidate) => {
        setApplicant(candidate)
        let job = jobs.find(job => job.id == candidate.application.job_id)
        setJob(job)
        setStep(2);
    }

    const handleClose = () => {
        setStep(1)
    }

    const handleApplicants = () => {
        if (jobs.length < 1) {
            return (
                <Redirect to="/contractors/addJob" />
            )
        } else if (currentStep == 1) {
            return (
                <div>
                    <Applicant contractor={contractor} jobs={jobs} applicants={props.applicants} editApplicant={props.editApplicant} currentStep={currentStep} handleApplicant={handleApplicant} />
                </div>
            )
        } else if (currentStep == 2) {
            return (
            <div>
                <EmployeeProfile 
                candidate={applicant.info}
                application={applicant.application}
                editApplicant={props.editApplicant}
                handleClose={handleClose}
                job={job}
                currentStep={currentStep}
                />
            </div>
            )
        }
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
                {handleApplicants()}
                {/* <Applicant contractor={contractor} jobs={jobs} applicants={props.applicants} editApplicant={props.editApplicant} /> */}
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
            <Redirect to="/home" />
        //     <div className="signin">
        //     <Home />
        //     <ContractorSignUp signUp={props.signUp} currentStep={currentStep} handleClick={handleClick} handlePassword={handlePassword} errors={errors} />
        //     <ContractorSignIn signIn={props.signIn} currentStep={currentStep} handleClick={handleClick} handlePassword={handlePassword} errors={errors} />
        //     <ForgotPassword currentStep={currentStep} updatePassword={props.updatePassword} user="contractor" />
        // </div>

        )
    }
    
}

export default Contractors   