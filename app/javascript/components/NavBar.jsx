import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Button, Breadcrumb} from 'react-bootstrap'

const NavBar  = props => {
    
        if (props.user == "employee") {
            return (
                <div className="employee-nav">
                <h1>{props.profile.fname} {props.profile.lname}</h1>                    
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{to: "/employees"}}>My Matches</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{to: `/employees/${props.profile.employee_id}/profile`}} >Profile</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{to: "/", onClick: props.handleSignout }} >Sign Out</Breadcrumb.Item>
                </Breadcrumb>
                </div>

            )
        } else if (props.user == "contractor") {
            return (
            <div className="employer-nav">
            <h1>{props.contractor.name}</h1>
                    <Breadcrumb>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/contractors'}}>Jobs</Breadcrumb.Item>    
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/contractors/addjob'}}>Add Job</Breadcrumb.Item>    
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: `/contractors/${props.contractor.id}/profile`}}>Profile</Breadcrumb.Item>    
                        <Breadcrumb.Item linkAs={Link} linkProps={{to: "/", onClick: props.handleSignout }} >Sign Out</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                )
        } else {
            return (
            <div className="nav">
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/'}}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/about'}}>About</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: 'Contact'}}>Contact</Breadcrumb.Item>
                    {/* <Breadcrumb.Item linkAs={Link} linkProps={{to: "/", onClick: props.handleSignout }} >Sign Out</Breadcrumb.Item> */}
                </Breadcrumb>
            </div>
            )
        }
}

export default NavBar