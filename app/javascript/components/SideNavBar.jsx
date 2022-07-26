import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const SideNavBar = props => {
    if (props.user == "employee") {
        return (
            <div className="sidebarnav">
                <Nav defaultActiveKey="/" className="flex-column">
                    <Nav.Link as={Link} to="/employees">
                        My Matches
                    </Nav.Link>
                    <Nav.Link as={Link} to={`/employees/${props.profile.id}/profile`}>
                        My Profile
                    </Nav.Link>
                    <Nav.Link as={Link} to={`/employees/saved_jobs`}>
                        Saved Jobs
                    </Nav.Link>
                </Nav>
            </div>

        )
    } else if (props.user == "contractor") {
        return (
        <div className="sidebarnav">
                <Nav defaultActiveKey="/" className="flex-column">
                    <Nav.Link as={Link} to="/employers">
                        Jobs
                    </Nav.Link>
                    <Nav.Link as={Link} to={`/employers/${props.contractor.id}/applicants`}>
                        Applicants
                    </Nav.Link>
                    <Nav.Link as={Link} to={`/employers/addjob`}>
                        Add Job
                    </Nav.Link>
                    <Nav.Link as={Link} to={`/employers/${props.contractor.id}/profile`}>
                        Profile
                    </Nav.Link>
                </Nav>
            </div>
            )
    } 
}

export default SideNavBar