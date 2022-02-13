import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { signInContractor } from '../actions/Contractors/signInContractor'
import { signUpContractor } from '../actions/Contractors/signUpContractor'
import { updateSubscription } from '../actions/Contractors/updateSubscription'
import { updateProfile } from '../actions/Contractors/updateProfile'
import { signOutContractor } from '../actions/signOutContractor'
import { fetchJobs } from '../actions/Contractors/fetchJobs'
import { editApplicant } from '../actions/Contractors/editApplicant'
import { currentUser } from '../actions/currentUser'
import { updatePassword } from '../actions/updatePassword'
import Contractors from '../components/Contractors/Contractors'
import Subscription from '../components/Contractors/Subscription'
import Profile from '../components/Contractors/Profile'
import EmployeeProfile from '../components/Contractors/EmployeeProfile'
import EditProfile from '../components/Contractors/EditProfile'
import JobsContainer from '../containers/JobsContainer'
import AddJob from '../components/Contractors/AddJob'
import Applicant from '../components/Contractors/Applicant'
import Logo from '../components/Logo'

class ContractorsContainer extends Component {

    componentDidUpdate() {
        this.props.currentUser()
    }
    // componentDidMount() {
    //     debugger

    // //     // debugger
    // //     if (this.props.jobs && this.props.jobs.length == 0) {
    // //         this.props.fetchJobs(this.props.contractor)
    // //     }
    // }

    handleSignout = () => {
        this.props.signOut()
    }

    render() {
        if (this.props.loading == true) {
            return (
                <div>
                    <Logo user="contractor"/>
                <div className="loading">
                {/* <NavBar loading={this.props.loading} handleSignout={this.handleSignout} user="contractor" /> */}

                    Loading....
                </div>
                </div>
            )
        } else if (this.props.loggedIn == false) {
            return (
                <div>
                    <Switch>
                        <Route path='/contractors/signIn' render={(routerProps) => <Contractors {...routerProps} currentStep={1} signIn={this.props.signIn} signUp={this.props.signUp} contractor={this.props.contractor} updateSubscription={this.props.updateSubscription} errors={this.props.errors} signOut={this.props.signOut} updatePassword={this.props.updatePassword}/>}></Route>
                        <Route path='/contractors' render={(routerProps) => <Contractors {...routerProps} loading={this.props.loading} signIn={this.props.signIn} signUp={this.props.signUp} loggedIn={this.props.loggedIn} contractor={this.props.contractor} profile={this.props.profile} jobs={this.props.jobs} updateSubscription={this.props.updateSubscription} errors={this.props.errors} signOut={this.props.signOut} updatePassword={this.props.updatePassword}/>}></Route>
                    </Switch>
                </div>
            )
        } else {
        return (
            <div>
            <Logo user="contractor"/>
                <Switch>
                <Route path='/contractors/:id/jobs/:job_id/employees/:employee_id' render={(routerProps) => <EmployeeProfile {...routerProps} loading={this.props.loading} contractor={this.props.contractor} jobs={this.props.jobs} signOut={this.props.signOutContractor} />}></Route>
                <Route path='/contractors/:id/profile' render={(routerProps) => <Profile {...routerProps} contractor={this.props.contractor} signOut={this.props.signOutContractor} updateProfile={this.props.updateProfile} />}></Route>
                <Route path='/contractors/:id/editprofile' render={(routerProps) => <EditProfile {...routerProps} contractor={this.props.contractor} signOut={this.props.signOutContractor} />}></Route>
                <Route path='/contractors/:id/jobs' render={(routerProps) => <JobsContainer {...routerProps} jobs={this.props.jobs} contractor={this.props.contractor} candidates={this.props.candidates} profiles={this.props.profiles} work_history={this.props.work_history} editApplicant={this.props.editApplicant} signOut={this.props.signOutContractor}/>}></Route>
                <Route path='/contractors/addjob' render={(routerProps) => <JobsContainer {...routerProps} contractor={this.props.contractor} addJob={this.props.addJob}/>}></Route>
                <Route path='/contractors/:id/applicants' render={(routerProps) => <Applicant {...routerProps} jobs={this.props.jobs} contractor={this.props.contractor} applicants={this.props.applicants} profiles={this.props.profiles} work_history={this.props.work_history} editApplicant={this.props.editApplicant} />}></Route>
                <Route path='/contractors/signIn'> <Redirect to="/contractors" /> </Route>
                <Route exact path='/signout' render={(routerProps) => <SignOut {...routerProps} signoutUser={this.props.signoutContractorUser} user={this.props.user}/> }/>
                {/* candidates={this.props.candidates} profiles={this.props.profiles} work_history={this.props.work_history} fetchEmployee={this.props.fetchEmployee} */}
                    {/* <Route path='/contractors/:id/jobs/:job_id' render={(routerProps) => <Job {...routerProps} contractor={this.props.contractor} jobs={this.props.jobs} candidates={this.props.candidates} /> } ></Route>
                    <Route path='/contractors/addjob' render={(routerProps) => <AddJob {...routerProps} contractor={this.props.contractor} addJob={this.props.addJob}/>}></Route> */}
                    <Route path='/contractors/subscription' render={(routerProps) => <Subscription {...routerProps} contractor={this.props.contractor} updateSubscription={this.props.updateSubscription} signOut={this.props.signOutContractor} />}></Route>
                    {/* <Route path='/contractors/signup' render={(routerProps) => <ContractorSignUp {...routerProps} loading={this.props.loading} signUpContractor={this.props.signUpContractor} />}></Route> */}
                    <Route path='/contractors' render={(routerProps) => <Contractors {...routerProps} loading={this.props.loading} signIn={this.props.signIn} signUp={this.props.signUp} loggedIn={this.props.loggedIn} contractor={this.props.contractor} profile={this.props.profile} jobs={this.props.jobs} applicants={this.props.applicants} updateSubscription={this.props.updateSubscription} editApplicant={this.props.editApplicant} errors={this.props.errors} signOut={this.props.signOutContractor}/>}></Route>
                </Switch>
            </div>
        )}
    }
}

const mapStateToProps = state => {
    return {
        contractor: state.contractorsReducer.contractor,
        profiles: state.contractorsReducer.profiles,
        work_history: state.contractorsReducer.work_history,
        loggedIn: state.contractorsReducer.loggedIn,
        loading: state.contractorsReducer.loading,
        jobs: state.contractorsReducer.jobs,
        applicants: state.contractorsReducer.applicants,
        errors: state.contractorsReducer.errors,
        currentStep: 1
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: contractor => dispatch(signInContractor(contractor)),
    signUp: contractor => dispatch(signUpContractor(contractor)),
    addJob: job => dispatch(addJob(job)),
    fetchJobs: contractor => dispatch(fetchJobs(contractor)),
    fetchEmployee: id => dispatch(fetchEmployee(id)),
    updateSubscription: (subscription, id) => dispatch(updateSubscription(subscription, id)),
    updateProfile: contractor => dispatch(updateProfile(contractor)),
    editApplicant: applicant => dispatch(editApplicant(applicant)),
    updatePassword: user => dispatch(updatePassword(user)),
    currentUser: () => dispatch(currentUser()),
    signOutContractor: () => dispatch(signOutContractor())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContractorsContainer)