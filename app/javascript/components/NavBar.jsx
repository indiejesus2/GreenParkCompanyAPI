import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render() {
        debugger
        return (
            <div className="nav">
            <span className="logo">
                <Link to="/">
                <img src="/images/BluCollar-Logo.jpeg" alt="Logo" />
                </Link>
            </span>
            <div className="links">
                <Link to={'/employees'}>For Employees</Link>
                <Link to={'/contractors'}>For Employers</Link>
                <Link to={'/employees/profile'}>Profile</Link>
                <Link to={'/contractors/addjob'}>Add Job</Link>
            </div>
        </div>
        )
    }
}

export default NavBar