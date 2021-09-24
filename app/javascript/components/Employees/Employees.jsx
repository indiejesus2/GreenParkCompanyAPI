import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'
import Jobs from './Jobs'
import Questionnaire from '../Questionnaire/Main'

const Employees = props => {

    if (props.loggedIn === false) {
        return (
                <div className="signin">
                    <SignIn signIn={props.signIn} />
                <Link to="/employees/signup">
                    Create Account and Find A Job Today!
                </Link>
                </div>
                /* <Jobs jobs={props.jobs} fetchJobs={props.fetchJobs} /> */
        )
    } else if (props.loading === true) {
        return (
            <div>
                Loading....
            </div>
        )
    } else if (props.profile.fname == null) {
        return (
            <Questionnaire employee={props.employee} profile={props.profile} work_history={props.work_history} updateProfile={props.updateProfile} />
        )
        
    } {
        return (
                <div className="jobs">
                    <h1>{props.profile.fname} {props.profile.lname}</h1>
                    <Link to={`/employees/${props.employee.id}/profile`}>Profile</Link>
                    <h2>Jobs</h2>
                    <Jobs jobs={props.jobs} fetchJobs={props.fetchJobs} employee={props.employee} />
                </div>
        )
    }
}

export default Employees