import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import {signInContractor} from '../actions/Contractors/signInContractor'
import { signUpContractor } from '../actions/Contractors/signUpContractor'
// import { updateProfile } from '../actions/updateProfile'
import Contractors from '../components/Contractors/Contractors'
import SignUp from '../components/Contractors/SignUp'
// import Profile from '../components/Contractors/Profile'

class ContractorsContainer extends Component {
    render() {
        return (
            <div className="contractor">
                <Switch>
                    {/* <Route path='/contractors/profile' render={(routerProps) => <Profile {...routerProps} contractor={this.props.contractor} profile={this.props.profile} updateProfile={this.props.updateProfile}/>}></Route> */}
                    <Route path='/contractors/signup' render={(routerProps) => <SignUp {...routerProps} signUpContractor={this.props.signUpContractor} />}></Route>
                    <Route path='/contractors' render={(routerProps) => <Contractors {...routerProps} signIn={this.props.signIn} loggedIn={this.props.loggedIn} contractor={this.props.contractor} profile={this.props.profile} />}></Route>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contractor: state.contractorsReducer.contractor,
        profile: state.contractorsReducer.profile,
        loggedIn: state.contractorsReducer.loggedIn
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: contractor => dispatch(signInContractor(contractor)),
    signUpContractor: contractor => dispatch(signUpContractor(contractor)),
    // updateProfile: profile => dispatch(updateProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContractorsContainer)