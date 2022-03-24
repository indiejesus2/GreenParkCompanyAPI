import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Nav, Container, Breadcrumb} from 'react-bootstrap'
import Logo from '../components/Logo'

const NavBar = props => {
    
    if (props.loggedIn == true && props.user == "employee") {
            return (
                <div className="employee-nav">
                <Navbar collapseOnSelect expand='lg' variant="dark">
                    <Container className="d-grid justify-content-center"
                        style={{
                            height: 185 + "px"
                        }}
                    >    
                        <Navbar.Brand style={{ margin: 0 + "px", padding: 0 + "px" }}>
                            <Logo />    
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' 
                            style={{
                                width: "fit-content",
                                position: "relative",
                                bottom: 65 + "px",
                                right: 115 + "px",
                                "font-size": "x-large",
                            }}
                        />
                        <Navbar.Collapse id='basic-navbar-nav'
                            style={{
                                position: "relative",
                                bottom: 115 + "px",
                                right: 275 + "px",
                                "font-size": "x-large",
                            }}
                        >
                            <Nav>
                                <Nav.Link href='/'>HOME</Nav.Link>
                                <Nav.Link href='#'>ABOUT</Nav.Link>
                                <Nav.Link href='#'>CONTACT</Nav.Link>
                                {/* <Nav.Link href={{to: "/", onClick: props.handleSignout }} >Sign-Out</Nav.Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    <h1 className="position-relative" style={{ bottom: 50 + "px"}}>{props.profile.fname.toUpperCase()}'S EMPLOYEE DASHBOARD</h1>                    
                    </Container>
                </Navbar>
                {/* <div className="nav"> */}
                    {/* <Breadcrumb>
                        <Breadcrumb.Item linkAs={Link} linkProps={{to: "/", onClick: props.handleSignout }} >Sign Out</Breadcrumb.Item>
                    </Breadcrumb> */}
                </div>
            )
        } else {
            return (
            <div className="nav">
                <div>

                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/'}}>HOME</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '#'}}>ABOUT</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '#'}}>CONTACT</Breadcrumb.Item>
                </Breadcrumb>
                </div>
                <div>

                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/signIn'}}>LOGIN</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/signUp'}}>CREATE ACCOUNT</Breadcrumb.Item>
                </Breadcrumb>
                </div>
                    {/* <Breadcrumb.Item linkAs={Link} linkProps={{to: "/", onClick: props.handleSignout }} >Sign Out</Breadcrumb.Item> */}
            </div>
            )
        }
}

export default NavBar