import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import {signInContractor} from '../actions/Contractors/signInContractor'
import { signUpContractor } from '../actions/Contractors/signUpContractor'
import { addJob } from '../actions/Contractors/addJob'
import { fetchJobs } from '../actions/Contractors/fetchJobs'
import { fetchEmployee } from '../actions/Contractors/fetchEmployee'
import Contractors from '../components/Contractors/Contractors'
import SignUp from '../components/Contractors/SignUp'
import AddJob from '../components/Contractors/AddJob'
import Job from '../components/Contractors/Job'
import EmployeeProfile from '../components/Contractors/EmployeeProfile'

class ContractorsContainer extends Component {

    // componentDidMount() {
    //     this.props.fetchJobs(this.props.contractor)
    // }

    render() {
        return (
            <div className="contractor">
                <Switch>
                <Route path='/contractors/employees/:id' render={(routerProps) => <EmployeeProfile {...routerProps} loading={this.props.loading} candidates={this.props.candidates} profiles={this.props.profiles} work_history={this.props.work_history} fetchEmployee={this.props.fetchEmployee}/>}></Route>
                    {/* <Route path='/contractors/:id/jobs/:job_id' render={(routerProps) => <Job {...routerProps} contractor={this.props.contractor} jobs={this.props.jobs} candidates={this.props.candidates} /> } ></Route>
                    <Route path='/contractors/addjob' render={(routerProps) => <AddJob {...routerProps} contractor={this.props.contractor} addJob={this.props.addJob}/>}></Route> */}
                    <Route path='/contractors/signup' render={(routerProps) => <SignUp {...routerProps} loading={this.props.loading} signUpContractor={this.props.signUpContractor} />}></Route>
                    <Route path='/contractors' render={(routerProps) => <Contractors {...routerProps} loading={this.props.loading} signIn={this.props.signIn} loggedIn={this.props.loggedIn} contractor={this.props.contractor} profile={this.props.profile} fetchJobs={this.props.fetchJobs} jobs={this.props.jobs} />}></Route>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
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
    fetchEmployee: id => dispatch(fetchEmployee(id))

    // updateProfile: profile => dispatch(updateProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContractorsContainer)