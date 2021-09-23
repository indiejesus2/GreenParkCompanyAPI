import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'
import JobsContainer from '../../containers/JobsContainer'

const Contractors = props => {
    if (props.loading === true) {
        return (
        <div className="spinner">
            <span className="sr-only">Loading...</span>
        </div>
        )
    } else if (props.loggedIn === false) {
        return (
            <div className="login">
                <div className="signin">
                    <SignIn signIn={props.signIn} />
                </div>
                <Link to="/contractors/signup">
                    Create Account and Hire a Tradesperson Today!
                </Link>
            </div>
        )
    } else {
        return (
                <div className="contractor">
                    <h1>{props.contractor.name}</h1>
                    <Link to={'/contractors/addjob'}>Add Job</Link>
                    <Link to={`/contractors/${props.contractor.id}/profile`}>Employer Profile</Link>
                    <Link to={`/contractors/${props.contractor.id}/editprofile`}>Edit Profile</Link>
                    <JobsContainer jobs={props.jobs} fetchJobs={props.fetchJobs} contractor={props.contractor} candidates={props.candidates} profiles={props.profiles} work_history={props.work_history}/>
                </div>
        )
    }
}

export default Contractors