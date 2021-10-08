import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import {signIn} from '../actions/Tradespeople/signIn'
import { signUpEmployee } from '../actions/Tradespeople/signUpEmployee'
import { createProfile } from '../actions/Tradespeople/createProfile'
import { fetchJobs } from '../actions/Tradespeople/fetchJobs'
import { signOut } from '../actions/signOut'
import Employees from '../components/Employees/Employees'
import Questionnaire from '../components/Questionnaire/Main'
import Profile from '../components/Employees/Profile'
import EditProfile from '../components/Employees/EditProfile'
import NavBar from '../components/NavBar'

class EmployeesContainer extends Component {

    handleSignout = () => {
        this.props.signOut()
    }

    render() {
        return (
            <div>
                <NavBar loggedIn={this.props.loggedIn} handleSignout={this.handleSignout} user="employee" />
            <Switch>
                    <Route path='/employees/:id/edit_profile' render={(routerProps) => <EditProfile {...routerProps} employee={this.props.employee} profile={this.props.profile} work_history={this.props.work_history} updateProfile={this.props.updateProfile}/>}></Route>
                    <Route path='/employees/:id/profile' render={(routerProps) => <Profile {...routerProps} employee={this.props.employee} profile={this.props.profile} work_history={this.props.work_history} />}></Route>
                    <Route path='/employees/questionnaire' render={(routerProps) => <Questionnaire {...routerProps} employee={this.props.employee} createProfile={this.props.createProfile} loading={this.props.loading} />}></Route>
                    <Route path='/employees' render={(routerProps) => <Employees {...routerProps} signIn={this.props.signIn} signUp={this.props.signUp} loggedIn={this.props.loggedIn} employee={this.props.employee} profile={this.props.profile}  jobs={this.props.jobs} loading={this.props.loading} createProfile={this.props.createProfile} errors={this.props.errors} signOut={this.props.signOut}/>}></Route>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    debugger
    return {
        employee: state.employeesReducer.employee,
        profile: state.employeesReducer.profile,
        work_history: state.employeesReducer.work_history,
        loggedIn: state.employeesReducer.loggedIn,
        loading: state.employeesReducer.loading,
        jobs: state.employeesReducer.jobs,
        errors: state.employeesReducer.errors
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: employee => dispatch(signIn(employee)),
    signUp: employee => dispatch(signUpEmployee(employee)),
    createProfile: profile => dispatch(createProfile(profile)),
    fetchJobs: employee => dispatch(fetchJobs(employee)),
    signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer)