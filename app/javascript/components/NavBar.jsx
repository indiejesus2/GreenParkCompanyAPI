import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class NavBar extends Component {

    render() {
        return (
            <div className="nav-home">

            <span className="links">
                <Link to={'/employees'}>
                    <h5>
                        Employees
                    </h5>
                </Link>
                <Link to={'/contractors'}>
                    <h5>
                        Employers
                    </h5>
                    </Link>
            </span>
        </div>
        )
    }
}

export default NavBar