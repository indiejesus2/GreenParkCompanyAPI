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
import { contactMsg } from '../actions/contactMsg'
import { addPayment } from '../actions/Contractors/addPayment'
import Contractors from '../components/Contractors/Contractors'
import Subscription from '../components/Contractors/Subscription'
import Profile from '../components/Contractors/Profile'
import EmployeeProfile from '../components/Contractors/EmployeeProfile'
import EditProfile from '../components/Contractors/EditProfile'
import JobsContainer from '../containers/JobsContainer'
import AddJob from '../components/Contractors/AddJob'
import Applicant from '../components/Contractors/Applicant'
import Logo from '../components/Logo'
import About from '../components/About'
import Contact from '../components/Contact'

class ContractorsContainer extends Component {

    // componentDidUpdate() {
    //     this.props.currentUser()
    // }

    componentDidUpdate() {
        // debugger
        if (!!this.props.contractor) {
            this.props.currentUser()
        }
    }

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
        // } else if (this.props.loggedIn == false) {
        //     return (
        //         <div>
        //             <Switch>
        //                 <Route path='/contractors/signIn' render={(routerProps) => <Contractors {...routerProps} currentStep={1} signIn={this.props.signIn} signUp={this.props.signUp} contractor={this.props.contractor} updateSubscription={this.props.updateSubscription} errors={this.props.errors} signOut={this.props.signOut} updatePassword={this.props.updatePassword}/>}></Route>
        //                 <Route path='/contractors' render={(routerProps) => <Contractors {...routerProps} loading={this.props.loading} signIn={this.props.signIn} signUp={this.props.signUp} loggedIn={this.props.loggedIn} contractor={this.props.contractor} profile={this.props.profile} jobs={this.props.jobs} updateSubscription={this.props.updateSubscription} errors={this.props.errors} signOut={this.props.signOut} updatePassword={this.props.updatePassword}/>}></Route>
        //             </Switch>
        //         </div>
        //     )
        } else {
        return (
            <div>
                <Switch>
                    <Route path='/contractors/contact' render={(routerProps) => <Contact {...routerProps} loggedIn={this.props.loggedIn} signOut={this.props.signOut} user="contractor" contractor={this.props.contractor} contactMsg={this.props.contactMsg} />}></Route>
                    <Route path='/contractors/about' render={(routerProps) => <About {...routerProps} loggedIn={this.props.loggedIn} signOut={this.props.signOut} user="contractor" contractor={this.props.contractor} />}></Route>
                    <Route path='/contractors/:id/jobs/:job_id/employees/:employee_id' render={(routerProps) => <EmployeeProfile {...routerProps} loading={this.props.loading} contractor={this.props.contractor} jobs={this.props.jobs} signOut={this.props.signOutContractor} files={this.props.files} />}></Route>
                    <Route path='/contractors/:id/profile' render={(routerProps) => <Profile {...routerProps} loggedIn={this.props.loggedIn} contractor={this.props.contractor} signOut={this.props.signOutContractor} updateProfile={this.props.updateProfile} />}></Route>
                    <Route path='/contractors/:id/editprofile' render={(routerProps) => <EditProfile {...routerProps} loggedIn={this.props.loggedIn} contractor={this.props.contractor} updateProfile={this.props.updateProfile} signOut={this.props.signOutContractor} />}></Route>
                    <Route path='/contractors/:id/jobs' render={(routerProps) => <JobsContainer {...routerProps} jobs={this.props.jobs} contractor={this.props.contractor} candidates={this.props.candidates} profiles={this.props.profiles}  editApplicant={this.props.editApplicant} signOut={this.props.signOutContractor} files={this.props.files}/>}></Route>
                    <Route path='/contractors/addjob' render={(routerProps) => <JobsContainer {...routerProps} contractor={this.props.contractor} addJob={this.props.addJob}/>}></Route>
                    <Route path='/contractors/:id/applicants' render={(routerProps) => <Applicant {...routerProps} loggedIn={this.props.loggedIn} jobs={this.props.jobs} contractor={this.props.contractor} applicants={this.props.applicants} profiles={this.props.profiles}  editApplicant={this.props.editApplicant} files={this.props.files}/>}></Route>
                    <Route exact path='/signout' render={(routerProps) => <SignOut {...routerProps} signoutUser={this.props.signoutContractorUser} user={this.props.user}/> }/>
                    <Route path='/contractors/subscription' render={(routerProps) => <Subscription {...routerProps} contractor={this.props.contractor} updateSubscription={this.props.updateSubscription} signOut={this.props.signOutContractor} loggedIn={this.props.loggedIn} addPayment={this.props.addPayment} contractorErrors={this.props.contractorErrors}/>}></Route>
                    <Route path='/contractors' render={(routerProps) => <Contractors {...routerProps} loading={this.props.loading} signIn={this.props.signIn} signUp={this.props.signUp} loggedIn={this.props.loggedIn} contractor={this.props.contractor} profile={this.props.profile} jobs={this.props.jobs} applicants={this.props.applicants} updateSubscription={this.props.updateSubscription} editApplicant={this.props.editApplicant} errors={this.props.errors} signOut={this.props.signOutContractor} files={this.props.files} contractorErrors={this.props.contractorErrors}/>}></Route>
                </Switch>
            </div>
        )}
    }
}

const mapStateToProps = state => {
    return {
        contractor: state.contractorsReducer.contractor,
        profiles: state.contractorsReducer.profiles,
        loggedIn: state.contractorsReducer.loggedIn,
        loading: state.contractorsReducer.loading,
        jobs: state.contractorsReducer.jobs,
        applicants: state.contractorsReducer.applicants,
        contractorErrors: state.contractorsReducer.contractorErrors,
        files: state.contractorsReducer.files,
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
    addPayment: payment => dispatch(addPayment(payment)),
    updateProfile: contractor => dispatch(updateProfile(contractor)),
    editApplicant: applicant => dispatch(editApplicant(applicant)),
    updatePassword: user => dispatch(updatePassword(user)),
    contactMsg: msg => dispatch(contactMsg(msg)),
    currentUser: () => dispatch(currentUser()),
    signOutContractor: () => dispatch(signOutContractor())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContractorsContainer)