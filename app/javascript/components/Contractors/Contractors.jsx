import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'

const Contractors = props => {
    // debugger
    if (props.loggedIn === false) {
        return (
            <div className="jobs">
                <h1>Jobs!</h1>
                <p>Jobs!</p>
                <div className="signin">
                    <SignIn signIn={props.signIn} />
                </div>
                <Link to="/contractors/signup">
                    Create Account and Hire a Tradesperson Today!
                </Link>
            </div>
        )
    } else if (props.loading === true) {
        <div className="spinner">
            <span className="sr-only">Loading...</span>
        </div>
    } else {
        return (
                <div className="jobs">
                    <h1>{props.contractor.name} Jobs</h1>
                    {/* <h1>{props.profile.fname} {props.profile.lname} Jobs!</h1> */}
                    <p>Jobs!</p>
                </div>
        )
    }
}

export default Contractors