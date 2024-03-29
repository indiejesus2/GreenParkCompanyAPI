import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'
import {signIn} from '../actions/Tradespeople/signIn'
import { signUp } from '../actions/Tradespeople/signUp'
import { createProfile } from '../actions/Tradespeople/createProfile'
import { signOut } from '../actions/signOut'
import { updateProfile } from '../actions/Tradespeople/updateProfile'
import { uploadFile } from '../actions/Tradespeople/uploadFile'
import { findCity } from '../actions/Tradespeople/findCity'
import { formatPhoneNumber } from '../actions/CommonWebblock/formatPhoneNumber'
import { addExperience } from '../actions/Tradespeople/addExperience'
import { editExperience } from '../actions/Tradespeople/editExperience'
import { deleteExperience } from '../actions/Tradespeople/deleteExperience'
import { handleInterest } from '../actions/Tradespeople/handleInterest'
import { handleSave } from '../actions/Tradespeople/handleSave'
import { updatePassword } from '../actions/updatePassword'
import { currentUser } from '../actions/currentUser'
import {resetPassword } from '../actions/resetPassword'
import { contactMsg } from '../actions/contactMsg'
import { Image } from 'react-bootstrap'
import Employees from '../components/Employees/Employees'
import Questionnaire from '../components/Questionnaire/Main'
import Profile from '../components/Employees/Profile'
import EditProfile from '../components/Employees/EditProfile'
import AddExperience from '../components/Employees/AddExperience'
import EditExperience from '../components/Employees/EditExperience'
import About from '../components/About'
import Contact from '../components/Contact'
import Logo from '../components/Logo'

class EmployeesContainer extends Component {

    // componentDidUpdate() {
    //     // debugger
    //     if (!!this.props.employee) {
    //         this.props.currentUser()
    //     }
    // }

    handleSignout = () => {
        this.props.signOut()
    }

    handleAlert = () => {
        debugger
    }

    render() {
        if (this.props.loading == true) {
            return (
                <div>
                    <div>
                        <Logo user="employee"/>
                    </div>
                    <div className="homepage">
                        <Image style={{"transform": "scale(" + 0.75 + ")", marginTop: 75 + "px", marginLeft: 75 + "px"}} fluid="true" src="/images/blucollarO.png" alt="collar" />
                        {/* <span className="sr-only">Loading...</span> */}
                    </div>
                        <div className="loading">
                            Loading....
                        </div>
                </div>
            )
        // } else if (!this.props.profile) {

        // // } else if (this.props.loggedIn == false) {
        //     debugger
        //     return (
        //         <div>
        //              <Switch>
        //                 <NavBar handleSignout={this.props.signOut} loggedIn={this.props.loggedIn} user="employee" />
        //                 <Route path='/employees' render={(routerProps) => <Employees {...routerProps} signIn={this.props.signIn} signUp={this.props.signUp} loggedIn={this.props.loggedIn} employee={this.props.employee} profile={[]} currentStep={3} jobs={this.props.jobs} loading={this.props.loading} createProfile={this.props.createProfile} errors={this.props.errors} signOut={this.props.signOutEmployee} updatePassword={this.props.updatePassword} />}></Route>
        //              </Switch>
        //         </div>
        //     )
        } else {
            return (
                <div>
                    {/* <NavBar handleSignout={this.props.signOut} profile={this.props.profile} loggedIn={this.props.loggedIn} user="employee" />
                    <SideNavBar profile={this.props.profile} user="employee"/> */}
                {/* <Logo user="employee"/> */}
                    <Switch>
                        <Route path='/employees/contact' render={(routerProps) => <Contact {...routerProps} loggedIn={this.props.loggedIn} signOut={this.props.signOut} user="employee" profile={this.props.profile} contactMsg={this.props.contactMsg} />}></Route>
                        <Route path='/employees/about' render={(routerProps) => <About {...routerProps} loggedIn={this.props.loggedIn} signOut={this.props.signOut} user="employee" profile={this.props.profile} />}></Route>
                        <Route path='/employees/:id/experience/add_experience' render={(routerProps) => <AddExperience {...routerProps} employee={this.props.employee} profile={this.props.profile} addExperience={this.props.addExperience} loggedIn={this.props.loggedIn}/>}></Route>
                        <Route path='/employees/:id/experience/:id' render={(routerProps) => <EditExperience {...routerProps} employee={this.props.employee} profile={this.props.profile} experience={this.props.experience} updateProfile={this.props.updateProfile} uploadFile={this.props.uploadFile} editExperience={this.props.editExperience} deleteExperience={this.props.deleteExperience} loggedIn={this.props.loggedIn}/>}></Route>
                        <Route path='/employees/:id/edit_profile' render={(routerProps) => <EditProfile {...routerProps} employee={this.props.employee} profile={this.props.profile} experience={this.props.experience} updateProfile={this.props.updateProfile} uploadFile={this.props.uploadFile} fileLoading={this.props.fileLoading} loggedIn={this.props.loggedIn}/>}></Route>
                        <Route path='/employees/:id/profile' render={(routerProps) => <Profile {...routerProps} employee={this.props.employee} profile={this.props.profile} experience={this.props.experience} file={this.props.file} loggedIn={this.props.loggedIn}/>}></Route>
                        <Route path='/employees/questionnaire' render={(routerProps) => <Questionnaire {...routerProps} employee={this.props.employee} createProfile={this.props.createProfile} loading={this.props.loading} findCity={this.props.findCity} formatPhoneNumber={this.props.formatPhoneNumber} uploadFile={this.props.uploadFile}/>}></Route>
                        {/* <Route exact path='/signout' render={(routerProps) => <SignOut {...routerProps} signoutUser={this.props.signoutContractorUser} user={this.props.user}/> }/> */}
                        <Route path='/employees/:id/jobs/:id' render={(routerProps) => <Employees {...routerProps} signIn={this.props.signIn} signUp={this.props.signUp} loggedIn={this.props.loggedIn} employee={this.props.employee} profile={this.props.profile} jobs={this.props.jobs} applicants={this.props.applicants} loading={this.props.loading} fileLoading={this.props.fileLoading} createProfile={this.props.createProfile} uploadFile={this.props.uploadFile} errors={this.props.errors} signOut={this.props.signOutEmployee} handleInterest={this.props.handleInterest} handleSave={this.props.handleSave}/>}></Route>
                        <Route path='/employees/saved_jobs' render={(routerProps) => <Employees {...routerProps} signIn={this.props.signIn} signUp={this.props.signUp} loggedIn={this.props.loggedIn} employee={this.props.employee} profile={this.props.profile} jobs={this.props.jobs} applicants={this.props.applicants} loading={this.props.loading} fileLoading={this.props.fileLoading} createProfile={this.props.createProfile} uploadFile={this.props.uploadFile} errors={this.props.errors} signOut={this.props.signOutEmployee} handleInterest={this.props.handleInterest} savedJobs={true} currentStep={2} />}></Route>
                        <Route path='/employees' render={(routerProps) => <Employees {...routerProps} signIn={this.props.signIn} signUp={this.props.signUp} loggedIn={this.props.loggedIn} employee={this.props.employee} profile={this.props.profile} jobs={this.props.jobs} applicants={this.props.applicants} loading={this.props.loading} fileLoading={this.props.fileLoading} createProfile={this.props.createProfile} uploadFile={this.props.uploadFile} errors={this.props.errors} signOut={this.props.signOutEmployee} handleInterest={this.props.handleInterest} handleSave={this.props.handleSave} savedJobs={false} />}></Route>
                    </Switch>
                </div>
                )
        }
    }
}

const mapStateToProps = state => {
    return {
        employee: state.employeesReducer.employee,
        profile: state.employeesReducer.profile,
        experience: state.employeesReducer.experience,
        loggedIn: state.employeesReducer.loggedIn,
        loading: state.employeesReducer.loading,
        jobs: state.employeesReducer.jobs,
        applicants: state.employeesReducer.applicants,
        errors: state.employeesReducer.errors,
        file: state.employeesReducer.file,
        document: state.employeesReducer.document,
        currentStep: 1,
        fileLoading: state.employeesReducer.fileLoading
    }
}

const mapDispatchToProps = dispatch => ({
    // signIn: employee => dispatch(signIn(employee)),
    // signUp: employee => dispatch(signUp(employee)),
    createProfile: profile => dispatch(createProfile(profile)),
    fetchJobs: employee => dispatch(fetchJobs(employee)),
    updateProfile: profile => dispatch(updateProfile(profile)),
    uploadFile: (file, id) => dispatch(uploadFile(file, id)),
    addExperience: (experience) => dispatch(addExperience(experience)),
    editExperience: (experience) => dispatch(editExperience(experience)),
    deleteExperience: (experience) => dispatch(deleteExperience(experience)),
    findCity: postal => dispatch(findCity(postal)),
    formatPhoneNumber: value => dispatch(formatPhoneNumber(value)),
    handleInterest: application => dispatch(handleInterest(application)),
    handleSave: application => dispatch(handleSave(application)),
    updatePassword: user => dispatch(updatePassword(user)),
    resetPassword: user => dispatch(resetPassword(user)),
    contactMsg: msg => dispatch(contactMsg(msg)),
    currentUser: () => dispatch(currentUser()),
    signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer)