import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import Applicant from './Applicant'
import EmployeeProfile from './EmployeeProfile'
import JobsContainer from '../../containers/JobsContainer'
import NavBar from '../NavBar'
import SideNavBar from '../SideNavBar'
import { Image } from 'react-bootstrap'

const Contractors = props => {

    // debugger

    const [loading, setLoading] = useState(props.loading)
    const [jobs, setJobs] = useState(props.jobs ? props.jobs : [])
    const [applicants, setApplicants] = useState(props.applicants)
    const [errors, setErrors] = useState(props.contractorErrors)
    const [contractor, setContractor] = useState(props.contractor)
    const [currentStep, setStep] = useState(1)
    const [applicant, setApplicant] = useState("")
    const [job, setJob] = useState([])


    useEffect(() => {
        if (props.contractorErrors != errors) {
            setErrors(props.contractorErrors)
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

    const handleContact = (candidate) => {
        // let job = jobs.find(job=>job.id == applicant.application.job_id)
        let person = job.employees.find(employee => employee.id == candidate.employee_id)
        window.location.href = ("mailto:" + person.email + "?subject=" + job.title + " - " + props.contractor.name)        
    }

    const handleApplicants = () => {
        if (jobs.length < 1) {
            return (
                <Redirect to="/employers/addJob" />
            )
        } else if (currentStep == 1) {
            return (
                <div className="dashboard">
                    <JobsContainer jobs={jobs} contractor={contractor} applicants={props.applicants} candidates={props.candidates} profiles={props.profiles} files={props.files} />
                    {/* <JobsContainer jobs={props.jobs} contractor={props.contractor} candidates={props.candidates} profiles={props.profiles} editApplicant={props.editApplicant} signOut={props.signOutContractor} files={props.files}/> */}
                    {/* <Applicant contractor={contractor} jobs={jobs} applicants={props.applicants} editApplicant={props.editApplicant} currentStep={currentStep} handleApplicant={handleApplicant} /> */}
                </div>
            )
        } else if (currentStep == 2) {
            return (
            <div className="dashboard">
                <EmployeeProfile 
                candidate={applicant.info}
                application={applicant.application}
                editApplicant={props.editApplicant}
                handleClose={handleClose}
                job={job}
                applicants={props.applicants}
                currentStep={currentStep}
                handleContact={handleContact}
                contractor={contractor}
                files={props.files}
                />
            </div>
            )
        }
    }

    
// if (loading === true) {
//         return (
//         <div className="spinner">
//             <NavBar handleSignout={props.signOut} contractor={props.contractor} user="contractor" />
//             <div className="homepage-header">
//                 <Image fluid="true" src="/images/blucollarO.png" alt="collar" />
//                 <span className="sr-only">Loading...</span>
//             </div>
//         </div>
//         )
//     } else 
    if (props.loggedIn === false) {
        return (
            <Redirect to="/home" />
        )
    } else if (!contractor.name) {
        return (
            <Redirect to={`/employers/${contractor.id}/editprofile`} />
        )
    } else if (contractor.status == false) {
        // || props.subscription.stripe_active == false) {
        return (
            <div>
                <NavBar handleSignout={props.signOut} contractor={props.contractor} />
                <Redirect to="/employers/subscription" />
            </div>
        )        
    } else if (props.loggedIn === true && jobs.length < 1) {
        return (
            <Redirect to="/employers/addjob" />
        )
    } else if (props.loggedIn === true) {
        return (
            <div className="contractor">
                <NavBar handleSignout={props.signOut} contractor={props.contractor} loggedIn={props.loggedIn} user="contractor" />
                <div className="page">
                    <SideNavBar contractor={props.contractor} user="contractor"/>
                    {handleApplicants()}
                </div>
                {/* <Applicant contractor={contractor} jobs={jobs} applicants={props.applicants} editApplicant={props.editApplicant} /> */}
            </div>
        )
    } else {
        debugger
        return (
            <Redirect to="/home" />
        )
    }
    
}

export default Contractors     