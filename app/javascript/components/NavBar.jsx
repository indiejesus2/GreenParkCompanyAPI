import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Button, Breadcrumb} from 'react-bootstrap'

const NavBar  = props => {
    
        if (props.user == "employee") {
            return (
                <div className="employee-nav">
                <h1>{props.profile.fname} {props.profile.lname}</h1>                    
                    <br />
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{to: "/employees"}}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{to: `/employees/${props.profile.employee_id}/profile`}} >Profile</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{to: "/", onClick: props.handleSignout }} >Sign Out</Breadcrumb.Item>
                </Breadcrumb>
                </div>

            )
        } else if (props.user == "contractor") {
            return (
            <div className="employer-nav">
            <h1>{props.contractor.name}</h1>
            <br />
                    <Breadcrumb>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/contractors'}}>Home</Breadcrumb.Item>    
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/contractors/addjob'}}>Add Job</Breadcrumb.Item>    
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: `/contractors/${props.contractor.id}/profile`}}>Profile</Breadcrumb.Item>    
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: `/contractors/${props.contractor.id}/editprofile`}}>Edit Profile</Breadcrumb.Item>    
                        <Breadcrumb.Item linkAs={Link} linkProps={{to: "/", onClick: props.handleSignout }} >Sign Out</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                )
        }
}

export default NavBar