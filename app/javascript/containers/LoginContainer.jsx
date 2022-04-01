import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../components/Home'
import SignIn from '../components/Login/SignIn'
import SignUp from '../components/Login/SignUp'
import SignOut from '../components/Login/SignOut'
import {signIn} from '../actions/Tradespeople/signIn'
import {signUp} from '../actions/Tradespeople/signUp'
import NavBar from '../components/NavBar'

// import SignOut from '../components/Login/SignOut'
// import signOut from '../actions/signOut'
// import { updateProfile } from '../actions/Tradespeople/updateProfile'

class LoginContainer extends Component {

    render() {
        // if (this.props.loading == true) {
        //     return (
        //         <div>
        //             <Logo user="employee"/>
        //                 <div className="loading">
        //                     Loading....
        //                 </div>
        //         </div>
        //     )
        // } else if (this.props.loggedIn == true) {
        //     return (
        //         <div>
        //             <Switch>                        
        //                 <Route path='/employees' render={(routerProps) => <Employees {...routerProps} signIn={this.props.signIn} signUp={this.props.signUp} loggedIn={this.props.loggedIn} employee={this.props.employee} profile={this.props.profile} jobs={this.props.jobs} loading={this.props.loading} createProfile={this.props.createProfile} errors={this.props.errors} signOut={this.props.signOutEmployee} updatePassword={this.props.updatePassword} />}></Route>
        //             </Switch>
        //         </div>
        //     )
        // } else {
            return(
                <div>
                <NavBar />
                <Switch>
                    <Route path='/signOut' render={(routerProps) => <SignOut signOut={this.props.signOut}/>}></Route>
                    <Route path='/home/signUp' render={(routerProps) => <SignUp {...routerProps} signUp={this.props.signUp} currentStep={2} signOut={this.props.signOut}/>}></Route>
                    <Route path='/home/signin' render={(routerProps) => <SignIn {...routerProps} signIn={this.props.signIn} currentStep={1} signUp={this.props.signUp} signOut={this.props.signOut}/>}></Route>
                    {/* <Route path='/employees/signup' render={(routerProps) => <EmployeeSignUp {...routerProps} signUpEmployee={this.props.signUpEmployee} />}></Route> */}
                    <Route path='/home' render={(routerProps) => <Home {...routerProps} />}></Route>
                </Switch>
                </div>
            )
        // }
    }
}

const mapStateToProps = state => {
    return {
        employee: state.employeesReducer.employee,
        contractor: state.contractorsReducer.contractor,
        loading: state.employeesReducer.loading,
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: user => dispatch(signIn(user)),
    signUp: user => dispatch(signUp(user)),
    signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)