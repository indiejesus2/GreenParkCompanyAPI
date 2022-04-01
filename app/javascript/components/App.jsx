import React, { useEffect } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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
        
        return (
            <div>
                <Switch>
                    <Redirect from="/" to="/home" exact />
                    <Route path="/home" component={LoginContainer}></Route>
                    {/* // exact render={(routerProps) => <Home {...routerProps} signIn={this.props.signIn}/>}></Route> */}
                    <Route path="/employees" component={EmployeesContainer}></Route>
                    <Route path="/contractors" component={ContractorsContainer}></Route>
                </Switch>
            </div>
        )
}

export default App;