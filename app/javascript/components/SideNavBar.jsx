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
                {/* <Nav defaultActiveKey="/" className="flex-column">
                    <Nav.Link as={Link} to="/home/signOut">Sign Out</Nav.Link>
                    <Nav.Link as={Link} to="/employees/about">
                        About
                    </Nav.Link>
                    <Nav.Link as={Link} to={`/employees`}>
                        Contact
                    </Nav.Link>
                </Nav> */}
                {/* <Breadcrumb>
                </Breadcrumb> */}
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
                    {/* <Nav.Link as={Link} to={"/home/signOut"}>Sign Out</Nav.Link> */}
                    {/* <Nav.Link href={{to: "/signOut", onClick: props.handleSignout }} >Sign Out</Nav.Link> */}
                </Nav>
                {/* <div className="sideNavCollapse">
                    <Nav defaultActiveKey="/" className="flex-column">
                        <Nav.Link as={Link} to="/contractors/about">
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to={`/contractors`}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </div> */}
        {/* <h1>{props.contractor.name}</h1> */}
                {/* <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: `/contractors`}}>Applicants</Breadcrumb.Item>    
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: `/contractors/${props.contractor.id}/jobs`}}>Jobs</Breadcrumb.Item>    
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/contractors/addjob'}}>Add Job</Breadcrumb.Item>    
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: `/contractors/${props.contractor.id}/profile`}}>Profile</Breadcrumb.Item>    
                    <Breadcrumb.Item linkAs={Link} linkProps={{to: "/", onClick: props.handleSignout }} >Sign Out</Breadcrumb.Item>
                </Breadcrumb> */}
            </div>
            )
    } 
}

export default SideNavBar