import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import {signIn} from '../actions/Tradespeople/signIn'
import { signUpEmployee } from '../actions/Tradespeople/signUpEmployee'
import { updateProfile } from '../actions/Tradespeople/updateProfile'
import { fetchJobs } from '../actions/Tradespeople/fetchJobs'
import Employees from '../components/Employees/Employees'
import SignUp from '../components/Employees/SignUp'
import Profile from '../components/Employees/Profile'

class EmployeesContainer extends Component {

    componentDidMount() {
        this.props.fetchJobs()
    }

    render() {
        return (
            <div className="employee">
                <Switch>
                    <Route path='/employees/profile' render={(routerProps) => <Profile {...routerProps} employee={this.props.employee} profile={this.props.profile} updateProfile={this.props.updateProfile}/>}></Route>
                    <Route path='/employees/signup' render={(routerProps) => <SignUp {...routerProps} signUpEmployee={this.props.signUpEmployee} />}></Route>
                    <Route path='/employees' render={(routerProps) => <Employees {...routerProps} signIn={this.props.signIn} loggedIn={this.props.loggedIn} employee={this.props.employee} profile={this.props.profile} jobs={this.props.jobs} />}></Route>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        employee: state.employeesReducer.employee,
        profile: state.employeesReducer.profile,
        loggedIn: state.employeesReducer.loggedIn,
        jobs: state.jobsReducer.jobs
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: employee => dispatch(signIn(employee)),
    signUpEmployee: employee => dispatch(signUpEmployee(employee)),
    updateProfile: profile => dispatch(updateProfile(profile)),
    fetchJobs: () => dispatch(fetchJobs())
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer)