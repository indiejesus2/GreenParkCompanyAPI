import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'


class NavBar extends Component {

    render() {
        if (this.props.loggedIn===true) {
            return (
                <div className="nav-sign">
                    <span className="link">
                        {/* <Link to={'/signout'} onClick={this.props.signOut}>
                            <h5>
                                Log-Out
                            </h5>
                        </Link> */}
                        <Button onClick={this.props.handleSignout}>
                            Log-Out
                        </Button>
                    </span>
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
}

export default NavBar