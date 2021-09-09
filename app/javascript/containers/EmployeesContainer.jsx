import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import {signIn} from '../actions/signIn'
import { signUpEmployee } from '../actions/signUpEmployee'
import { updateProfile } from '../actions/updateProfile'
import Employees from '../components/Employees/Employees'
import SignUp from '../components/Employees/SignUp'
import Profile from '../components/Employees/Profile'

class EmployeesContainer extends Component {
    render() {
        return (
            <div className="employee">
                <Switch>
                    <Route path='/employees/profile' render={(routerProps) => <Profile {...routerProps} employee={this.props.employee} profile={this.props.profile} updateProfile={this.props.updateProfile}/>}></Route>
                    <Route path='/employees/signup' render={(routerProps) => <SignUp {...routerProps} signUpEmployee={this.props.signUpEmployee} />}></Route>
                    <Route path='/employees' render={(routerProps) => <Employees {...routerProps} signIn={this.props.signIn} loggedIn={this.props.loggedIn} employee={this.props.employee} profile={this.props.profile} />}></Route>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        employee: state.employeesReducer.employee,
        profile: state.employeesReducer.profile,
        loggedIn: state.employeesReducer.loggedIn
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: employee => dispatch(signIn(employee)),
    signUpEmployee: employee => dispatch(signUpEmployee(employee)),
    updateProfile: profile => dispatch(updateProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer)