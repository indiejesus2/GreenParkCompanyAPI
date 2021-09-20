import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import {signInContractor} from '../actions/Contractors/signInContractor'
import { signUpContractor } from '../actions/Contractors/signUpContractor'
import { addJob } from '../actions/Contractors/addJob'
import { fetchJobs } from '../actions/Contractors/fetchJobs'
import { fetchJob } from '../actions/Contractors/fetchJob'
import Contractors from '../components/Contractors/Contractors'
import SignUp from '../components/Contractors/SignUp'
import AddJob from '../components/Contractors/AddJob'
import Job from '../components/Contractors/Job'
import Jobs from '../components/Contractors/Jobs'

class JobsContainer extends Component {

    // componentDidMount() {
    //     this.props.fetchJobs(this.props.contractor)
    // }
    
    render() {
            return (
                <div className="jobs">
                    <Switch>
                        <Route path='/contractors/:id/jobs/:job_id' render={(routerProps) => <Job {...routerProps} contractor={this.props.contractor} jobs={this.props.jobs} applicants={this.props.applicants} candidates={this.props.candidates} profiles={this.props.profiles} fetchJob={this.props.fetchJob} /> } ></Route>
                        <Route path='/contractors/addjob' render={(routerProps) => <AddJob {...routerProps} contractor={this.props.contractor} addJob={this.props.addJob}/>}></Route>
                        <Route path='/contractors/signup' render={(routerProps) => <SignUp {...routerProps} loading={this.props.loading} signUpContractor={this.props.signUpContractor} />}></Route>
                        <Route path='/contractors' render={(routerProps) => <Jobs {...routerProps} loading={this.props.loading} signIn={this.props.signIn} loggedIn={this.props.loggedIn} contractor={this.props.contractor} profile={this.props.profile} jobs={this.props.jobs} />}></Route>
                    </Switch>
                </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        // contractor: state.contractorsReducer.contractor,
        // // profile: state.contractorsReducer.profile,
        // loggedIn: state.contractorsReducer.loggedIn,
        // loading: state.jobsReducer.loading,
        // // jobs: state.jobsReducer.jobs,
        // candidates: state.jobsReducer.candidates
        contractor: state.contractorsReducer.contractor,
        candidates: state.contractorsReducer.candidates,
        profiles: state.contractorsReducer.profiles,
        work_history: state.contractorsReducer.work_history,
        loggedIn: state.contractorsReducer.loggedIn,
        loading: state.contractorsReducer.loading,
        jobs: state.contractorsReducer.jobs,
        applicants: state.contractorsReducer.applicants
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: contractor => dispatch(signInContractor(contractor)),
    signUpContractor: contractor => dispatch(signUpContractor(contractor)),
    addJob: job => dispatch(addJob(job)),
    fetchJobs: contractor => dispatch(fetchJobs(contractor)),
    fetchJob: job => dispatch(fetchJob(job))

    // updateProfile: profile => dispatch(updateProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsContainer)