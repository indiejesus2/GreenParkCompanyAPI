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
                </div>
                <Link to="/employees/signup">
                    Create Account and Find A Job Today!
                </Link>
            </div>
        )
    } else {
        return (
                <div className="jobs">
                    <h1>{props.profile.fname} {props.profile.lname} Jobs!</h1>
                    <Jobs jobs={props.jobs} />
                </div>
        )
    }
}

export default Employees