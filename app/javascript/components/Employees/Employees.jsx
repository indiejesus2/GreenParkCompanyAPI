import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'
import EmployeeSignIn from '../Login/EmployeeSignIn'
import EmployeeSignUp from '../Login/EmployeeSignUp'
import Jobs from './Jobs'
import Questionnaire from '../Questionnaire/Main'
import NavBar from '../NavBar'
import { useHistory } from 'react-router-dom'


const Employees = props => {

    const [state, setState] = useState({
        profile: props.profile ? props.profile : [],
        currentStep: 1
    })

    const [jobs, setJobs] = useState(props.jobs)

    useEffect(() => {
        if (props.jobs && props.job != jobs) {
            setJobs(props.jobs)
        }
    })

    const history = useHistory();


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

    const handleSignout = () => {
        props.signOut()
        history.push('/');
    }

    if (props.loggedIn === false) {
        return (
                <div className="signin">
                    <Home />
                    <EmployeeSignUp signUp={props.signUp} currentStep={state.currentStep} handleClick={handleClick} errors={props.errors} />
                    <EmployeeSignIn signIn={props.signIn} currentStep={state.currentStep} handleClick={handleClick} errors={props.errors} />
                </div>
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
                <NavBar loggedIn={props.loggedIn} handleSignout={handleSignout}/>

                <h1>{props.profile.fname} {props.profile.lname}</h1>
                <Link to={`/employees`}>Home</Link>
                <Link to={`/employees/${props.employee.id}/profile`}>Profile</Link>
                <h2>Jobs</h2>
                <Jobs jobs={jobs} employee={props.employee} />
            </div>
        )
    }
}

export default Employees