import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'
import ContractorSignIn from '../Login/ContractorSignIn'
import ContractorSignUp from '../Login/ContractorSignUp'
import JobsContainer from '../../containers/JobsContainer'
import NavBar from '../NavBar'
import { useHistory } from 'react-router-dom'


const Contractors = props => {


    const [state, setState] = useState({
        currentStep: 1
    })

    const [loading, setLoading] = useState(props.loading)
    const [jobs, setJobs] = useState(props.jobs ? props.jobs : [])
    const [errors, setErrors] = useState(props.errors)
    const history = useHistory();


    useEffect(() => {
        if (props.errors != errors) {
            setErrors(props.errors)
        } else if (props.jobs != jobs) {
            setJobs(props.jobs)
        }
    })

    const handleSignout = () => {
        props.signOut()
        history.push('/');
    }

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
    } else {
        return (
                <div className="contractor">
                    <h1>{props.contractor.name}</h1>
                    <div className="contractor-nav">
                        <Link to={'/contractors'}>Home</Link>    
                        <Link to={'/contractors/addjob'}>Add Job</Link>
                        <Link to={`/contractors/${props.contractor.id}/profile`}>Profile</Link>
                        <Link to={`/contractors/${props.contractor.id}/editprofile`}>Edit Profile</Link>
                    </div>
                    <JobsContainer jobs={jobs} fetchJobs={props.fetchJobs} contractor={props.contractor} candidates={props.candidates} profiles={props.profiles} work_history={props.work_history}/>
                </div>
        )
    }

}

export default Contractors