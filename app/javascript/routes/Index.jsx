import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/Home';
import EmployeesContainer from '../containers/EmployeesContainer'

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/employees" exact component={EmployeesContainer}></Route>
        </Switch>
    </Router>
)