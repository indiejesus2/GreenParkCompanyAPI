import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './signin'
import Jobs from './Jobs'
import Questionnaire from '../Questionnaire/Main'

const Employees = props => {

    const questionnaire = () => {
        props.history.push('/employees/questionnaire')
    }
    if (props.loggedIn === false) {
        return (
            <div className="jobs">
                <h1>Jobs!</h1>
                <p>Jobs!</p>
                <div className="signin">
                    <SignIn signIn={props.signIn} />
                <Link to="/employees/signup">
                    Create Account and Find A Job Today!
                </Link>
                </div>
                {/* <Jobs jobs={props.jobs} fetchJobs={props.fetchJobs} /> */}
            </div>
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
                    <h1>{props.profile.fname} {props.profile.lname} Jobs!</h1>
                        <Link to={`/employees/${props.employee.id}/profile`}>Profile</Link>
                    <Jobs jobs={props.jobs} fetchJobs={props.fetchJobs} employee={props.employee} />
                </div>
        )
    }
}

export default Employees