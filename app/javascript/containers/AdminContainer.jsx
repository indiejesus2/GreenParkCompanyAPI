import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import {signInContractor} from '../actions/Contractors/signInContractor'
import { signUpContractor } from '../actions/Contractors/signUpContractor'
import { addJob } from '../actions/Contractors/addJob'
import { editJob } from '../actions/Contractors/editJob'
import { deleteJob } from '../actions/Contractors/deleteJob'
import { editApplicant } from '../actions/Contractors/editApplicant'
import Dashboard from '../components/Admin/Dashboard'

class AdminContainer extends Component {

    
    render() {
        return (
                <div className="admin">
                    <Switch>
                        <Route path='/admin' render={(routerProps) => <Dashboard {...routerProps} loggedIn={this.props.loggedIn} loading={this.props.loading} employees={this.props.employees} employers={this.props.employers} jobs={this.props.jobs} />}></Route>
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
        loading: state.adminReducer.loading,
        loggedIn: state.adminReducer.loggedIn,
        employees: state.adminReducer.employees,
        employers: state.adminReducer.employers,
        jobs: state.adminReducer.jobs,
        // errors: state.errorsReducer.errors
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
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)