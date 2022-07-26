import React, { useEffect } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ErrorBoundary from '../components/ErrorBoundary'
import LoginContainer from '../containers/LoginContainer'
import EmployeesContainer from '../containers/EmployeesContainer'
import ContractorsContainer from '../containers/ContractorsContainer'
import { currentUser } from '../actions/currentUser'
import NavBar from '../components/NavBar'
import TempPassword from './Login/TempPassword';

const App = () => {

    // useEffect(() => {
    //     currentUser()
    // })

    debugger
        
        return (
            <div>
                <ErrorBoundary>
                <Switch>
                    <Redirect from="/" to="/home" exact />
                    <Route path="/home" component={LoginContainer}></Route>
                    {/* // exact render={(routerProps) => <Home {...routerProps} signIn={this.props.signIn}/>}></Route> */}
                    <Route path="/employees" component={EmployeesContainer}></Route>
                    <Route path="/employers" component={ContractorsContainer}></Route>
                </Switch>
                </ErrorBoundary>
            </div>
        )
}

export default App;