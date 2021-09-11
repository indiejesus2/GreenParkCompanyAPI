import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div className="nav">
            <div className="logo">
                <Link to="/">
                <img src="/images/React.png" alt="Logo" />
                <h3>BluCollar</h3>
                </Link>
            </div>
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