import React, {useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import Jobs from './Jobs'
import Job from './Job'
import Questionnaire from '../Questionnaire/Main'
import NavBar from '../NavBar'
import SideNavBar from '../SideNavBar'
import { Button } from 'react-bootstrap'


const Employees = props => {

    const [state, setState] = useState({
        profile: props.profile ? props.profile : [],
    })

    const [jobs, setJobs] = useState(props.jobs)
    const [errors, setErrors] = useState(props.errors)
    const [currentStep, setCurrentStep] = useState(0)
    const [listing, setListing] = useState("")
    
    const handleJob = (job) => {
        setListing(job)
        setCurrentStep(2);
        props.history.push(`/employees/${props.employee.id}/job/${job.id}`)
    }
    
    useEffect(() => {
        if (props.errors != errors) {
            setErrors(props.errors)
        } else if (props.jobs && props.jobs != jobs) {
            setJobs(props.jobs)
        } else if (listing == "" && props.history.location.pathname.includes("job")) {
            let path = props.history.location.pathname.split("/")
            let job = jobs.filter(job => job.id == path[4])
            handleJob(job)
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
        setCurrentStep(1)
        props.history.push(`/employees`)
    }

    const handlePassword = () => {
        setCurrentStep(3)
    }

    const handleValidation = () => {
        setCurrentStep(4)
    }

    const handleHeading = () => {
        if (props.savedJobs == false) {
            <h2 style={{ "padding-inline-start": 15 + "px"}}>Congrats, you have {jobs.length} jobs that match your profile</h2>
        } else {
            <h2 style={{ "padding-inline-start": 15 + "px"}}>Saved Jobs</h2>
        }
    }

    const handleApply = (job) => {
        let application = props.applicants.find(applicant => applicant.job_id == job.id)
        if (application.interested == false) {
            return (
                <Button id="apply" onClick={() => props.handleInterest(application)}>Apply Now</Button>
            )
        } else {
            return (
                <Button disabled>Applied</Button>
            )
        }
    }

    const handleSavedJob = (job) => {
        let application = props.applicants.find(applicant => applicant.job_id == job.id)
        if (application.savedJob == true) {
            return (
                <Button onClick={() => props.handleSave(application)}>Unsave</Button>
            )
        } else {
            return (
                <Button onClick={() => props.handleSave(application)}>Save for Later</Button>
            )
        }
    }

    const handleJobs = () => {
        if (jobs.length == 0) {
            return (
                <div className="dashboard">
                    <h2 style={{ "padding-inline-start": 15 + "px"}}>
                        "We're working hard to find some matches."
                    </h2>
                </div>
            )
        } else if (props.history.location.pathname == "/employees" || props.history.location.pathname == "/employees/saved_jobs") {
            // debugger
            // setCurrentStep(1)
            return (
                <div className="dashboard">
                    {handleHeading()}
                    <Jobs jobs={jobs} employee={props.employee} profile={props.profile} applicants={props.applicants} handleApply={handleApply} currentStep={currentStep} handleJob={handleJob} savedJobs={props.savedJobs} handleSave={props.handleSave} />
                </div>
            )
        } else if (currentStep == 2) {
            // history.location.path.includes("employees") && history.location.path.includes("job/")
            // setCurrentStep(2)
            return (
                <div className="dashboard">
                  <Job currentStep={currentStep} job={listing} employee={props.employee} applicants={props.applicants} handleClick={handleClick} handleClose={handleClose} handleApply={handleApply} handleSave={props.handleSave} handleSavedJob={handleSavedJob} />
                </div>
            )
        }
    }

    if (props.loggedIn === false) {
        return (
            <Redirect to="/home" />
        )
    } else if (state.profile.length == 0) {
        return (
            <div className="questionnaire">
                <NavBar handleSignout={props.signOut} profile={props.profile} loggedIn={props.loggedIn} />
                <Questionnaire employee={props.employee} createProfile={props.createProfile} handleSignout={props.signOutEmployee} uploadFile={props.uploadFile} fileLoading={props.fileLoading} />
            </div>
        )
    } else {
        return (
            <div className="employees">
                    <NavBar handleSignout={props.signOut} handleClick={handleClick} profile={props.profile} loggedIn={props.loggedIn} user="employee" />
                    <div className="d-flex">
                        <SideNavBar profile={props.profile} handleClick={handleClick} user="employee"/>
                        {handleJobs()}
                    </div>
            </div>
        )
    }
}

export default Employees