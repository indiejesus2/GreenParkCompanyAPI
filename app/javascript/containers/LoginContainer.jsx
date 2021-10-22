import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../components/Home'
import EmployeeSignIn from '../components/Login/EmployeeSignIn'
import EmployeeSignUp from '../components/Login/EmployeeSignUp'
import {signIn} from '../actions/Tradespeople/signIn'
import { signUpEmployee } from '../actions/Tradespeople/signUpEmployee'
import SignOut from '../components/Login/SignOut'
import signOut from '../actions/signOut'
// import { updateProfile } from '../actions/Tradespeople/updateProfile'

class LoginContainer extends Component {

    render() {
        return(
            <Switch>
                <Route path='/signout' exact render={(routerProps) => <SignOut {...routerProps} signOut={this.props.signOut}/>}></Route>
                {/* <Route path='/employees/signup' render={(routerProps) => <EmployeeSignUp {...routerProps} signUpEmployee={this.props.signUpEmployee} />}></Route> */}
                <Route path='/' exact render={(routerProps) => <Home {...routerProps} />}></Route>
            </Switch>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
})

export default connect((errors) => errors, mapDispatchToProps)(LoginContainer)