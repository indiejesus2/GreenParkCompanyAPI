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

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: "home"
        }
    }

    componentDidUpdate() {
        debugger
    }

    employer = () => {
        this.setState({ user: "employer"})
    }

    employee = () => {
        this.setState({ user: "employee" })
    }

    home = () => {
        this.setState({ user: "home" })
    }

    render(){
        return (
            <div>
            <NavBar user={this.state}/>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/employees" component={EmployeesContainer}></Route>
                    <Route path="/contractors" component={ContractorsContainer}></Route>
                </Switch>
            </div>
        )
    }
}

export default App;