import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'
import {signIn} from '../actions/Tradespeople/signIn'
import { signUpEmployee } from '../actions/Tradespeople/signUpEmployee'
import { createProfile } from '../actions/Tradespeople/createProfile'
import { signOutEmployee } from '../actions/signOutEmployee'
import { updateProfile } from '../actions/Tradespeople/updateProfile'
import { uploadFile } from '../actions/Tradespeople/uploadFile'
import { findCity } from '../actions/Tradespeople/findCity'
import { formatPhoneNumber } from '../actions/CommonWebblock/formatPhoneNumber'
import { addExperience } from '../actions/Tradespeople/addExperience'
import { editExperience } from '../actions/Tradespeople/editExperience'
import { handleInterest } from '../actions/Tradespeople/handleInterest'
import { updatePassword } from '../actions/updatePassword'
import { currentUser } from '../actions/currentUser'
import {resetPassword } from '../actions/resetPassword'
import Employees from '../components/Employees/Employees'
import Questionnaire from '../components/Questionnaire/Main'
import Profile from '../components/Employees/Profile'
import EditProfile from '../components/Employees/EditProfile'
import AddExperience from '../components/Employees/AddExperience'
import EditExperience from '../components/Employees/EditExperience'
import TempPassword from '../components/Login/TempPassword'
import NavBar from '../components/NavBar'
import Logo from '../components/Logo'

class EmployeesContainer extends Component {

    componentDidUpdate() {
        if (!!this.props.employee) {
            this.props.currentUser()
        }
    }

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
                    <Logo user="employee"/>
                        <div className="loading">
                            Loading....
                        </div>
                </div>
            )
        } else if (this.props.loggedIn == false) {
            return (
                <div>
                    <Switch>
                        <Route path='/employees/reset_password' render={(routerProps)  => <TempPassword {...routerProps} employee={this.props.employee} currentStep={4} loggedIn={false} resetPassword={this.props.resetPassword} signIn={this.props.signIn} signUp={this.props.signUp} profile={this.props.profile} jobs={this.props.jobs} loading={this.props.loading} createProfile={this.props.createProfile} errors={this.props.errors} signOut={this.props.signOutEmployee} updatePassword={this.props.updatePassword}/>}></Route>
                        <Route path='/employees/signIn' render={(routerProps) => <Employees {...routerProps} employee={this.props.employee} currentStep={1} loggedIn={false} signIn={this.props.signIn} signUp={this.props.signUp} profile={this.props.profile} jobs={this.props.jobs} loading={this.props.loading} createProfile={this.props.createProfile} errors={this.props.errors} signOut={this.props.signOutEmployee} updatePassword={this.props.updatePassword}/>}></Route>
                        <Route path='/employees' render={(routerProps) => <Employees {...routerProps} signIn={this.props.signIn} signUp={this.props.signUp} loggedIn={this.props.loggedIn} employee={this.props.employee} profile={this.props.profile} jobs={this.props.jobs} loading={this.props.loading} createProfile={this.props.createProfile} errors={this.props.errors} signOut={this.props.signOutEmployee} updatePassword={this.props.updatePassword} />}></Route>
                    </Switch>
                </div>
            )
        } else {
            return (
                <div>
                <Logo user="employee"/>
                    <Switch>
                        <Route path='/employees/:id/experience/add_experience' render={(routerProps) => <AddExperience {...routerProps} employee={this.props.employee} profile={this.props.profile} addExperience={this.props.addExperience}/>}></Route>
                        <Route path='/employees/:id/experience/:id' render={(routerProps) => <EditExperience {...routerProps} employee={this.props.employee} profile={this.props.profile} experience={this.props.experience} updateProfile={this.props.updateProfile} uploadFile={this.props.uploadFile} editExperience={this.props.editExperience}/>}></Route>
                        <Route path='/employees/:id/edit_profile' render={(routerProps) => <EditProfile {...routerProps} employee={this.props.employee} profile={this.props.profile} experience={this.props.experience} updateProfile={this.props.updateProfile} uploadFile={this.props.uploadFile} fileLoading={this.props.fileLoading} />}></Route>
                        <Route path='/employees/:id/profile' render={(routerProps) => <Profile {...routerProps} employee={this.props.employee} profile={this.props.profile} experience={this.props.experience} document={this.props.document}/>}></Route>
                        <Route path='/employees/questionnaire' render={(routerProps) => <Questionnaire {...routerProps} employee={this.props.employee} createProfile={this.props.createProfile} loading={this.props.loading} findCity={this.props.findCity} formatPhoneNumber={this.props.formatPhoneNumber} uploadFile={this.props.uploadFile}/>}></Route>
                        <Route path='/employees' render={(routerProps) => <Employees {...routerProps} signIn={this.props.signIn} signUp={this.props.signUp} loggedIn={this.props.loggedIn} employee={this.props.employee} profile={this.props.profile} jobs={this.props.jobs} applicants={this.props.applicants} loading={this.props.loading} fileLoading={this.props.fileLoading} createProfile={this.props.createProfile} uploadFile={this.props.uploadFile} errors={this.props.errors} signOut={this.props.signOutEmployee} handleInterest={this.props.handleInterest} />}></Route>
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
    signIn: employee => dispatch(signIn(employee)),
    signUp: employee => dispatch(signUpEmployee(employee)),
    createProfile: profile => dispatch(createProfile(profile)),
    fetchJobs: employee => dispatch(fetchJobs(employee)),
    updateProfile: profile => dispatch(updateProfile(profile)),
    uploadFile: (file, id) => dispatch(uploadFile(file, id)),
    addExperience: (experience) => dispatch(addExperience(experience)),
    editExperience: (experience) => dispatch(editExperience(experience)),
    findCity: postal => dispatch(findCity(postal)),
    formatPhoneNumber: value => dispatch(formatPhoneNumber(value)),
    handleInterest: application => dispatch(handleInterest(application)),
    updatePassword: user => dispatch(updatePassword(user)),
    resetPassword: user => dispatch(resetPassword(user)),
    currentUser: () => dispatch(currentUser()),
    signOutEmployee: () => dispatch(signOutEmployee())
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer)