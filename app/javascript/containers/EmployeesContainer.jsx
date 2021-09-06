import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Employees from '../components/Employees/Employees'

class EmployeesContainer extends Component {
    render() {
        return (
            <div className="employee">
                <Switch>
                    <Route path='/employees' render={(routerProps) => <Employees {...routerProps} />}></Route>
                </Switch>
            </div>
        )
    }
}

export default EmployeesContainer