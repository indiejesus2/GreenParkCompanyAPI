import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class NavBar extends Component {

    render() {
        return (
            <div className="nav-home">
            {/* <span className="logo">
                <Link to="/">
                <img src="/images/BluCollar-Logo.jpeg" alt="Logo" />
                </Link>
            </span> */}
            <span className="links">
                <Link to={'/employees'}>For Employees</Link>
                <Link to={'/contractors'}>For Employers</Link>
            </span>
        </div>
        )
    }
}

export default NavBar