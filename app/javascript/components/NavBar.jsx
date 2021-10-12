import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const NavBar  = props => {

    const [home] = useState(
        props.user == "contractor" ? '/contractors' : '/employees'
    )

    
        if (props.loggedIn===true) {
            return (
                <div className="nav-og">
                    <div className="nav-sign">
                    <span className="logo">
                    <Link to={home}>
                        <img src="/images/BluCollar-Logo.jpeg" alt="Logo" />
                    </Link>
                    </span>
                </div>
                <div className="nav-links">
                    <span className="link">
                        <Link to={home} onClick={props.signOut}>
                            <h5>
                                Home
                            </h5>
                        </Link>
                        <Link to={'/'} onClick={props.handleSignout}>
                            Log-Out
                        </Link>
                    </span>

                    </div>
                </div>
            )
        }
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

export default NavBar