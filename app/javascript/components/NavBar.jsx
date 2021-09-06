import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div className="nav">
            <div className="logo">
                <img src="/images/React.png" alt="Logo" />
            </div>
            <div className="links">
                <Link to={'/employees'}>For Employees</Link>
                <Link to={'/employers'}>For Employers</Link>
            </div>
        </div>
        )
    }
}

export default NavBar