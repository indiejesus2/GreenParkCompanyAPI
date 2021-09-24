import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginContainer from '../containers/LoginContainer'
import EmployeesContainer from '../containers/EmployeesContainer'
import ContractorsContainer from '../containers/ContractorsContainer'
import NavBar from '../components/NavBar'

class App extends Component {

    render(){
        return (
            <div>
            <NavBar/>
                <Switch>
                    <Route path="/" exact component={LoginContainer}></Route>
                    {/* // exact render={(routerProps) => <Home {...routerProps} signIn={this.props.signIn}/>}></Route> */}
                    <Route path="/employees" component={EmployeesContainer}></Route>
                    <Route path="/contractors" component={ContractorsContainer}></Route>
                </Switch>
            </div>
        )
    }
}

export default App;