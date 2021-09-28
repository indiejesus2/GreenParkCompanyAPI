import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'
import EmployeeSignIn from '../Login/EmployeeSignIn'
import Jobs from './Jobs'
import Questionnaire from '../Questionnaire/Main'

const Employees = props => {


    const [state, setState] = useState({
        profile: props.profile ? props.profile : [],
        jobs: props.jobs ? props.jobs : []
    })

    if (props.loggedIn === false) {
        return (
                <div className="signin">
                    <Home />
                    <EmployeeSignIn signIn={props.signIn} />
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
    debugger
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