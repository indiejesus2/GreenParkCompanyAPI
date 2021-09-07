import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import {signIn} from '../actions/signIn'
import Employees from '../components/Employees/Employees'
import SignUp from '../components/Employees/signup'

class EmployeesContainer extends Component {
    render() {
        return (
            <div className="employee">
                <Switch>
                    <Route path='/employees' render={(routerProps) => <Employees {...routerProps} signIn={this.props.signIn}/>}></Route>
                    <Route path='/employees/signup' render={(routerProps) => <Signup {...routerProps} />}></Route>

                </Switch>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {

//     }
// }

const mapDispatchToProps = dispatch => ({
    signIn: employee => dispatch(signIn(employee))
})

export default connect(null, mapDispatchToProps)(EmployeesContainer)