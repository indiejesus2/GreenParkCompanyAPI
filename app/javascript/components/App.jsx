// import React from 'react';
// import Routes from '../routes/Index'

// export default props => <>{Routes}</>;

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/Home';
import EmployeesContainer from '../containers/EmployeesContainer'
import ContractorsContainer from '../containers/ContractorsContainer'
import NavBar from '../components/NavBar'
import signIn from '../actions/Tradespeople/signIn'

class App extends Component {

    render(){
        return (
            <div>
            <NavBar/>
                <Switch>
                    <Route path="/" exact render={(routerProps) => <Home {...routerProps} signIn={this.props.signIn}/>}></Route>
                    <Route path="/employees" component={EmployeesContainer}></Route>
                    <Route path="/contractors" component={ContractorsContainer}></Route>
                </Switch>
            </div>
        )
    }
}

export default App(null, signIn);