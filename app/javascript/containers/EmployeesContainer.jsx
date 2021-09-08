import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import {signIn} from '../actions/signIn'
import { signUpEmployee } from '../actions/signUpEmployee'
import Employees from '../components/Employees/Employees'
import SignUp from '../components/Employees/SignUp'

class EmployeesContainer extends Component {
    render() {
        return (
            <div className="employee">
                <Switch>
                    <Route path='/employees/signup' render={(routerProps) => <SignUp {...routerProps} signUpEmployee={this.props.signUpEmployee} />}></Route>
                    <Route path='/employees' render={(routerProps) => <Employees {...routerProps} signIn={this.props.signIn} loggedIn={this.props.loggedIn} employee={this.props.employee}/>}></Route>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        employee: state.employeesReducer.employee,
        loggedIn: state.employeesReducer.loggedIn
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: employee => dispatch(signIn(employee)),
    signUpEmployee: employee => dispatch(signUpEmployee(employee))
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer)