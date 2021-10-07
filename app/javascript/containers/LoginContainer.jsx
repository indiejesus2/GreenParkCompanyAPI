import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../components/Home'
import EmployeeSignIn from '../components/Login/EmployeeSignIn'
import EmployeeSignUp from '../components/Login/EmployeeSignUp'
import {signIn} from '../actions/Tradespeople/signIn'
import { signUpEmployee } from '../actions/Tradespeople/signUpEmployee'
// import { updateProfile } from '../actions/Tradespeople/updateProfile'

class LoginContainer extends Component {

    render() {
        return(
            <Switch>
                <Route path='/employees/signin' exact render={(routerProps) => <EmployeeSignIn {...routerProps} signIn={this.props.signIn} />}></Route>
                {/* <Route path='/employees/signup' render={(routerProps) => <EmployeeSignUp {...routerProps} signUpEmployee={this.props.signUpEmployee} />}></Route> */}
                <Route path='/' exact render={(routerProps) => <Home {...routerProps} />}></Route>
            </Switch>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: employee => dispatch(signIn(employee))
})

export default connect((errors) => errors, mapDispatchToProps)(LoginContainer)