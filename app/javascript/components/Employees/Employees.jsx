import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './signin'
import Jobs from './Jobs'

const Employees = props => {
    // debugger
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
    } else {
        return (
                <div className="jobs">
                    <h1>{props.profile.fname} {props.profile.lname} Jobs!</h1>
                    <Jobs jobs={props.jobs} fetchJobs={props.fetchJobs} employee={props.employee} />
                </div>
        )
    }
}

export default Employees