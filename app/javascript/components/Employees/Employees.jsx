import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './signin'

const Employees = props => {
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
}

export default Employees