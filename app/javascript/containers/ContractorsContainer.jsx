import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import {signInContractor} from '../actions/Contractors/signInContractor'
import { signUpContractor } from '../actions/Contractors/signUpContractor'
import { addJob } from '../actions/Contractors/addJob'
import Contractors from '../components/Contractors/Contractors'
import SignUp from '../components/Contractors/SignUp'
import AddJob from '../components/Contractors/AddJob'

class ContractorsContainer extends Component {
    render() {
        return (
            <div className="contractor">
                <Switch>
                    <Route path='/contractors/addjob' render={(routerProps) => <AddJob {...routerProps} contractor={this.props.contractor} addJob={this.props.addJob}/>}></Route>
                    <Route path='/contractors/signup' render={(routerProps) => <SignUp {...routerProps} loading={this.props.loading} signUpContractor={this.props.signUpContractor} />}></Route>
                    <Route path='/contractors' render={(routerProps) => <Contractors {...routerProps} loading={this.props.loading} signIn={this.props.signIn} loggedIn={this.props.loggedIn} contractor={this.props.contractor} profile={this.props.profile} />}></Route>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contractor: state.contractorsReducer.contractor,
        // profile: state.contractorsReducer.profile,
        loggedIn: state.contractorsReducer.loggedIn,
        loading: state.contractorsReducer.loading
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: contractor => dispatch(signInContractor(contractor)),
    signUpContractor: contractor => dispatch(signUpContractor(contractor)),
    addJob: job => dispatch(addJob(job)),
    // updateProfile: profile => dispatch(updateProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContractorsContainer)