import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import {signInContractor} from '../actions/Contractors/signInContractor'
import { signUpContractor } from '../actions/Contractors/signUpContractor'
import { addJob } from '../actions/Contractors/addJob'
import { editJob } from '../actions/Contractors/editJob'
import { deleteJob } from '../actions/Contractors/deleteJob'
import { editApplicant } from '../actions/Contractors/editApplicant'
import Contractors from '../components/Contractors/Contractors'
import ContractorSignUp from '../components/Login/ContractorSignUp'
import AddJob from '../components/Contractors/AddJob'
import EditJob from '../components/Contractors/EditJob'
import Job from '../components/Contractors/Job'
import Jobs from '../components/Contractors/Jobs'
import NavBar from '../components/NavBar'

class JobsContainer extends Component {
  
    render() {
            return (
                <div className="jobs">
                    <Switch>
                        <Route path='/contractors/:id/jobs/:job_id/editjob' render={(routerProps) => <EditJob {...routerProps} jobs={this.props.jobs} contractor={this.props.contractor} editJob={this.props.editJob} loggedIn={this.props.loggedIn} deleteJob={this.props.deleteJob}/>}></Route>
                        <Route path='/contractors/:id/jobs/:job_id' render={(routerProps) => <Job {...routerProps} contractor={this.props.contractor} jobs={this.props.jobs} applicants={this.props.applicants} candidates={this.props.candidates} profiles={this.props.profiles} fetchJob={this.props.fetchJob} editApplicant={this.props.editApplicant} loggedIn={this.props.loggedIn} deleteJob={this.props.deleteJob} editJob={this.props.editJob} />}></Route>
                        <Route path='/contractors/addjob' render={(routerProps) => <AddJob {...routerProps} contractor={this.props.contractor} addJob={this.props.addJob} loggedIn={this.props.loggedIn} />}></Route>
                        <Route path='/contractors/signup' render={(routerProps) => <ContractorsSignUp {...routerProps} loading={this.props.loading} signUpContractor={this.props.signUpContractor} loggedIn={this.props.loggedIn}/>}></Route>
                        <Route path='/contractors' render={(routerProps) => <Jobs {...routerProps} loading={this.props.loading} signIn={this.props.signIn} loggedIn={this.props.loggedIn} contractor={this.props.contractor} profile={this.props.profile} jobs={this.props.jobs} deleteJob={this.props.deleteJob} editApplicant={this.props.editApplicant}/>}></Route>
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
        applicants: state.contractorsReducer.applicants,
        errors: state.errorsReducer.errors
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: contractor => dispatch(signInContractor(contractor)),
    signUpContractor: contractor => dispatch(signUpContractor(contractor)),
    addJob: job => dispatch(addJob(job)),
    editJob: job => dispatch(editJob(job)),
    deleteJob: job => dispatch(deleteJob(job)),
    fetchJobs: contractor => dispatch(fetchJobs(contractor)),
    fetchJob: job => dispatch(fetchJob(job)),
    editApplicant: applicant => dispatch(editApplicant(applicant))

    // updateProfile: profile => dispatch(updateProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsContainer)