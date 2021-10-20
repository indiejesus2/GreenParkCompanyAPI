import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'
import { signInContractor } from '../actions/Contractors/signInContractor'
import { signUpContractor } from '../actions/Contractors/signUpContractor'
import { updateSubscription } from '../actions/Contractors/updateSubscription'
import { signOut } from '../actions/signOut'
import Contractors from '../components/Contractors/Contractors'
import Subscription from '../components/Contractors/Subscription'
import Profile from '../components/Contractors/Profile'
import EmployeeProfile from '../components/Contractors/EmployeeProfile'
import NavBar from '../components/NavBar'
import Logo from '../components/Logo'

class ContractorsContainer extends Component {

    // componentDidMount() {
    //     this.props.fetchJobs(this.props.contractor)
    // }

    handleSignout = () => {
        this.props.signOut()
    }

    render() {
        if (this.props.loading == true) {
            return (
                <div className="loading">
                    <Logo user="contractor"/>
                {/* <NavBar loading={this.props.loading} handleSignout={this.handleSignout} user="contractor" /> */}

                    Loading....
                </div>
            )
        } else {
        return (
            <div>
            <Logo user="contractor"/>
                <Switch>
                <Route path='/contractors/:id/jobs/:job_id/employees/:employee_id' render={(routerProps) => <EmployeeProfile {...routerProps} loading={this.props.loading} contractor={this.props.contractor} jobs={this.props.jobs} signOut={this.props.signOut} />}></Route>
                <Route path='/contractors/:id/profile' render={(routerProps) => <Profile {...routerProps} contractor={this.props.contractor}/>}></Route>
                <Route exact path='/signout' render={(routerProps) => <SignOut {...routerProps} signoutUser={this.props.signoutUser} user={this.props.user}/> }/>
                {/* candidates={this.props.candidates} profiles={this.props.profiles} work_history={this.props.work_history} fetchEmployee={this.props.fetchEmployee} */}
                    {/* <Route path='/contractors/:id/jobs/:job_id' render={(routerProps) => <Job {...routerProps} contractor={this.props.contractor} jobs={this.props.jobs} candidates={this.props.candidates} /> } ></Route>
                    <Route path='/contractors/addjob' render={(routerProps) => <AddJob {...routerProps} contractor={this.props.contractor} addJob={this.props.addJob}/>}></Route> */}
                    <Route path='/contractors/subscription' render={(routerProps) => <Subscription {...routerProps} contractor={this.props.contractor} updateSubscription={this.props.updateSubscription} />}></Route>
                    {/* <Route path='/contractors/signup' render={(routerProps) => <ContractorSignUp {...routerProps} loading={this.props.loading} signUpContractor={this.props.signUpContractor} />}></Route> */}
                    <Route path='/contractors' render={(routerProps) => <Contractors {...routerProps} loading={this.props.loading} signIn={this.props.signIn} signUp={this.props.signUp} loggedIn={this.props.loggedIn} contractor={this.props.contractor} profile={this.props.profile} jobs={this.props.jobs} updateSubscription={this.props.updateSubscription} errors={this.props.errors} signOut={this.props.signOut}/>}></Route>
                </Switch>
            </div>
        )}
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
        applicants: state.contractorsReducer.applicants,
        errors: state.contractorsReducer.errors

    }
}

const mapDispatchToProps = dispatch => ({
    signIn: contractor => dispatch(signInContractor(contractor)),
    signUp: contractor => dispatch(signUpContractor(contractor)),
    addJob: job => dispatch(addJob(job)),
    fetchJobs: contractor => dispatch(fetchJobs(contractor)),
    fetchEmployee: id => dispatch(fetchEmployee(id)),
    updateSubscription: (subscription, id) => dispatch(updateSubscription(subscription, id)),
    signOut: () => dispatch(signOut())

    // updateProfile: profile => dispatch(updateProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContractorsContainer)