import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Button, Breadcrumb} from 'react-bootstrap'

const NavBar  = props => {
    
        if (props.user == "employee") {
            return (
                <div className="employee-nav">
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{to: "/employees"}}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{to: `/employees/${props.profile.employee_id}/props.`}} >Profile</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{to: "/", onClick: props.handleSignout }} >Sign Out</Breadcrumb.Item>
                </Breadcrumb>
                </div>

            )
        } else if (props.user == "contractor") {
            <div className="employer-nav">
            <h1>{props.contractor.name}</h1>
                    <Breadcrumb>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/contractors'}}>Home</Breadcrumb.Item>    
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/contractors/addjob'}}>Add Job</Breadcrumb.Item>    
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: `/contractors/${props.contractor.id}/profile`}}>Profile</Breadcrumb.Item>    
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: `/contractors/${props.contractor.id}/editprofile`}}>Edit Profile</Breadcrumb.Item>    
                        <Breadcrumb.Item linkAs={Link} linkProps={{to: "/", onClick: props.handleSignout }} >Sign Out</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
        }
        // return (
        //     <div className="nav-home">

        //     <span className="links">
        //         <Link to={'/employees'}>
        //             <h5>
        //                 Employees
        //             </h5>
        //         </Link>
        //         <Link to={'/contractors'}>
        //             <h5>
        //                 Employers
        //             </h5>
        //             </Link>
        //     </span>
        // </div>
        // )
}

export default NavBar