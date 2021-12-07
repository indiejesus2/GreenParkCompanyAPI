import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import Home from '../Home'
import ContractorSignIn from '../Login/ContractorSignIn'
import ContractorSignUp from '../Login/ContractorSignUp'
import Applicant from '../Contractors/Applicant'
import JobsContainer from '../../containers/JobsContainer'
import NavBar from '../NavBar'

const Contractors = props => {

    const [state, setState] = useState({
        currentStep: 2
    })

    const [loading, setLoading] = useState(props.loading)
    const [jobs, setJobs] = useState(props.jobs ? props.jobs : [])
    const [errors, setErrors] = useState(props.errors)
    const [contractor, setContractor] = useState(props.contractor)


    useEffect(() => {
        if (props.errors != errors) {
            setErrors(props.errors)
        } else if (props.jobs != jobs) {
            setJobs(props.jobs)
        } else if (props.contractor != contractor) {
            setContractor(props.contractor)
        } else if (props.loading != loading) {
            setLoading(props.loading)
        }
    })

    const handleClick = (e) => {
        let currentStep = state.currentStep;
        // let direction = e.target.name;
        if (currentStep == 1){
            setState( prevState => ({
                ...prevState,
                currentStep : currentStep+=1
            }))
        } else if (currentStep == 2) {
            setState( prevState => ({
                ...prevState,
                currentStep : currentStep-=1
            }))
        }
    }


if (loading === true) {
        return (
        <div className="spinner">
            <span className="sr-only">Loading...</span>
        </div>
        )
    } else if (props.loggedIn === false) {
        return (
            <div className="signin">
                <Home />
                <ContractorSignUp signUp={props.signUp} currentStep={state.currentStep} handleClick={handleClick} errors={errors} />
                <ContractorSignIn signIn={props.signIn} currentStep={state.currentStep} handleClick={handleClick} errors={errors} />
            </div>
        )
    } else if (contractor.status!=true && contractor.subscription!=false) {
        return (
            <Redirect to="/contractors/subscription" />
        )
    } else {
        return (
                <div className="contractor">
                <NavBar handleSignout={props.signOut} contractor={props.contractor} user="contractor" />
                    <Applicant contractor={contractor} jobs={jobs} applicants={props.applicants} />
                    {/* <JobsContainer jobs={jobs} contractor={contractor} candidates={props.candidates} profiles={props.profiles}/> */}
                </div>
        )
    }
    
}

export default Contractors   