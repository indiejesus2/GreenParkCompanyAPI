import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login/Login'

import SignIn from '../components/Login/SignIn'
import SignUp from '../components/Login/SignUp'
import ForgotPassword from '../components/Login/ForgotPassword'
import TempPassword from '../components/Login/TempPassword'
import SignOut from '../components/Login/SignOut'
import About from '../components/About'
import Contact from '../components/Contact'
import {signIn} from '../actions/Tradespeople/signIn'
import {signUp} from '../actions/Tradespeople/signUp'
import {updatePassword} from '../actions/updatePassword'
import {resetPassword} from '../actions/resetPassword'
import { currentUser } from '../actions/currentUser'
import { clearEmployeeErrors } from '../actions/clearEmployeeErrors'
import { clearContractorErrors } from '../actions/clearContractorErrors'
import {signOut} from '../actions/signOut'
import { contactMsg } from '../actions/contactMsg'
import NavBar from '../components/NavBar'

class LoginContainer extends Component {

    // handleStep = () => {
    //     debugger
    //     const history = useHistory();
    //     if (this.props.employeeErrors == "Incorrect") {
    //         history.push('/home/signIn')
    //     }
    // }

    //     componentDidUpdate() {
    //     // debugger
    //         this.props.currentUser()
    // }

    // componentDidUpdate() {
    //     const history = useHistory();
    //     if (!!this.props.employeeErrors) {
    //         history.push('/home/signIn')
    //     }
    // }

    handleRedirect = () => {
        this.props.currentUser()
        debugger
    }

    handleClick = () => {
        // let direction , = e.target.name;
        if (this.props.currentStep == 1){
            this.props.currentStep = 2
        } else if (this.props.currentStep == 2) {
            this.props.currentStep = 1
        }
    }

    
    render() {
        // if (this.props.employee || this.props.contractor) {
        //     return (
        //         <div>
        //             {handleRedirect()}
        //         </div>
        //     )
        // } else {
        debugger
        if (this.props.employeeErrors == "Incorrect Username/Password" || this.props.contractorErrors == "Incorrect Username/Password") {
            // const history = useHistory();
            return (
                // ('/home/signIn')
                // <Redirect to="/home/signIn" />
                <div>
                    <NavBar />
                        <SignIn signIn={this.props.signIn} currentStep={1} signUp={this.props.signUp} employeeErrors={this.props.employeeErrors} contractorErrors={this.props.contractorErrors} signOut={this.props.signOut} clearEmployeeErrors={this.props.clearEmployeeErrors} clearContractorErrors={this.props.clearContractorErrors}/>
                </div>            
            )
        } else if (this.props.employeeErrors == "Email is associated with an existing account." || this.props.contractorErrors == "Email is associated with an existing account.") {
            return (
                <div>
                    <NavBar />
                        <SignUp signIn={this.props.signIn} currentStep={2} signUp={this.props.signUp} contractorErrors={this.props.contractorErrors} employeeErrors={this.props.employeeErrors} signOut={this.props.signOut} clearEmployeeErrors={this.props.clearEmployeeErrors} clearContractorErrors={this.props.clearContractorErrors}/>
                </div>
            )
        // } else if (this.handleRedirect()) {
        //     debugger
        //     return (
        //         <div>
        //             <Switch>                        
        //                 <Route path='/employees' render={(routerProps) => <Employees {...routerProps} signIn={this.props.signIn} signUp={this.props.signUp} loggedIn={this.props.loggedIn} employee={this.props.employee} profile={this.props.profile} jobs={this.props.jobs} loading={this.props.loading} createProfile={this.props.createProfile} errors={this.props.errors} signOut={this.props.signOutEmployee} updatePassword={this.props.updatePassword} />}></Route>
        //             </Switch>
        //         </div>
        //     )
        } else {
            return(
                <div>

                <div>
                {/* <NavBar /> */}
                <Switch>
                    <Route path='/home/contact' render={(routerProps) => <Contact {...routerProps} currentStep={5} signOut={this.props.signOut} user="none" contactMsg={this.props.contactMsg}/>}></Route>
                    <Route path='/home/about' render={(routerProps) => <Login {...routerProps} signOut={this.props.signOut} user="none"/>}></Route>
                    <Route path='/home/reset_password' render={(routerProps) => <TempPassword {...routerProps} resetPassword={this.props.resetPassword} currentStep={4} signOut={this.props.signOut}/>}></Route>
                    <Route path='/home/forgot_password' render={(routerProps) => <ForgotPassword {...routerProps} updatePassword={this.props.updatePassword} currentStep={3} signOut={this.props.signOut} employeesErrors={this.props.employeesErrors} contractorErrors={this.props.contractorErrors} />}></Route>
                    <Route path='/home/signOut' render={(routerProps) => <SignOut {...routerProps} signOut={this.props.signOut}/>}></Route>
                    <Route path='/home/signUp' render={(routerProps) => <SignUp {...routerProps} signUp={this.props.signUp} currentStep={2} employeeErrors={this.props.employeeErrors} contractorErrors={this.props.contractorErrors} signOut={this.props.signOut} clearEmployeeErrors={this.props.clearEmployeeErrors} clearContractorErrors={this.props.clearContractorErrors}/>}></Route>
                    <Route path='/home/signin' render={(routerProps) => <SignIn {...routerProps} signIn={this.props.signIn} currentStep={1} signUp={this.props.signUp} employeeErrors={this.props.employeeErrors} contractorErrors={this.props.contractorErrors} signOut={this.props.signOut} clearEmployeeErrors={this.props.clearEmployeeErrors} clearContractorErrors={this.props.clearContractorErrors}/>}></Route>
                    {/* <Route path='/employees/signup' render={(routerProps) => <EmployeeSignUp {...routerProps} signUpEmployee={this.props.signUpEmployee} />}></Route> */}
                    <Route path='/home' render={(routerProps) => <Login {...routerProps} />}></Route>
                </Switch>
                </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        employee: state.employeesReducer.employee,
        contractor: state.contractorsReducer.contractor,
        employeeErrors: state.employeesReducer.employeeErrors,
        contractorErrors: state.contractorsReducer.contractorErrors,
        // currentStep: 0,
        currentContractor: state.contractorsReducer.currentContractor,
        currentEmployee: state.contractorsReducer.currentEmployee
        // loading: state.employeesReducer.loading,
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: user => dispatch(signIn(user)),
    signUp: user => dispatch(signUp(user)),
    updatePassword: user => dispatch(updatePassword(user)),
    resetPassword: user => dispatch(resetPassword(user)),
    currentUser: () => dispatch(currentUser()),
    clearEmployeeErrors: () => dispatch(clearEmployeeErrors()),
    clearContractorErrors: () => dispatch(clearContractorErrors()),
    contactMsg: msg => dispatch(contactMsg(msg)),
    // handleClick: () => dispatch(handleClick()),
    signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)