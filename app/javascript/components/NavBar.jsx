import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { Navbar, Nav, Container, Breadcrumb} from 'react-bootstrap'
import Logo from '../components/Logo'

const NavBar = props => {

    const handleQuestion = () => {
        if (props.profile.fname) {
            return (
                <h1 className="d-flex justify-content-center">{props.profile.fname.toUpperCase()}'S EMPLOYEE DASHBOARD</h1>
            )
        }
    }

    const handleSubscription = () => {
        if (props.contractor.name) {
            return (
                <h1 className="d-flex justify-content-center">{props.contractor.name.toUpperCase()}'S DASHBOARD</h1>
            )
        }
    }

    const history = useHistory()

    const handleLogo = () => {
        if (history.location.pathname != "/home") {
            return (
                    <Logo />
            )
        }
    }

    if (props.loggedIn == true && props.user == "employee") {
        
            return (
                <div>

                <div className="employee-nav">
                    <Logo />
                    <div className="upperCollapseNav">

                        <Navbar collapseOnSelect expand='lg' variant="dark">
                {/* <Container> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                            <Nav defaultActiveKey="/" className="flex-column me-auto">
                                <Nav.Link as={Link} to="/employees" eventKey="1"
                                    style={{
                                        color: "#fff",
                                        fontFamily: 'Luam, serif',
                                        fontSize: "x-large",
                                    }}
                                >
                                    My Matches
                                </Nav.Link>
                                <Nav.Link as={Link} to={`/employees/${props.profile.id}/profile`} eventKey="2"
                                    style={{
                                        color: "#fff",
                                        fontFamily: 'Luam, serif',
                                        fontSize: "x-large",
                                    }}
                                >
                                    My Profile
                                </Nav.Link>
                                <Nav.Link as={Link} to={`/employees/saved_jobs`} eventKey="3"
                                    style={{
                                        color: "#fff",
                                        fontFamily: 'Luam, serif',
                                        fontSize: "x-large",
                                    }}
                                >
                                    Saved Jobs
                                </Nav.Link>
                            </Nav>
                            <Nav defaultActiveKey="/" className="flex-column me-auto"> 
                                <Nav.Link as={Link} to="/employees/about" eventKey="4"
                                    style={{
                                        color: "#fff",
                                        fontFamily: 'Luam, serif',
                                        fontSize: "x-large",
                                    }}
                                >
                                    About
                                </Nav.Link>
                                <Nav.Link as={Link} to={`/employees`} eventKey="5"
                                    style={{
                                        color: "#fff",
                                        fontFamily: 'Luam, serif',
                                        fontSize: "x-large",
                                    }}
                                >
                                    Contact
                                </Nav.Link>
                                <Nav.Link as={Link} to="/home/signOut" eventKey="6"
                                    style={{
                                        color: "#fff",
                                        fontFamily: 'Luam, serif',
                                        fontSize: "x-large",
                                    }}
                                    >Sign Out
                                </Nav.Link>
                            </Nav>
                        {/* <Breadcrumb>
                        </Breadcrumb> */}
                    </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
            </div>
                    <div className="navCollapse">

                        {/* <Navbar.Brand style={{ margin: 0 + "px", padding: 0 + "px" }}>
                        </Navbar.Brand>
                        <Navbar.Collapse id='basic-navbar-nav'
                        
                    > */}

                            <Nav
                                style={{
                                    "font-size": "x-large",
                                }}
                                >
                                <Nav.Link as={Link} to="/employees">HOME</Nav.Link>
                                <Nav.Link as={Link} to="/employees/about">ABOUT</Nav.Link>
                                <Nav.Link as={Link} to="/employees">CONTACT</Nav.Link>
                            </Nav>

                            <Nav
                                style={{
                                    "font-size": "x-large",
                                }}
                                >
                                <Nav.Link as={Link} to="/home/signOut">SIGN-OUT</Nav.Link>
                            </Nav>
                        {/* </Navbar.Collapse> */}
                </div>                        
                {/* <div className="nav"> */}
                    {/* <Breadcrumb>
                        <Breadcrumb.Item linkAs={Link} linkProps={{to: "/", onClick: props.handleSignout }} >Sign Out</Breadcrumb.Item>
                    </Breadcrumb> */}
                </div>
                {handleQuestion()}
            </div>
            )
        } else if (props.loggedIn == true && props.user == "contractor") {
            return (
                    <div>
    
                    <div className="employee-nav">
                        <Logo />

                        <div className="upperCollapseNav">
    
                            <Navbar collapseOnSelect expand='lg' variant="dark">
                    {/* <Container> */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                                <Nav defaultActiveKey="/" className="flex-column me-auto">
                                    <Nav.Link as={Link} to="/contractors" eventKey="1"
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Luam, serif',
                                            fontSize: "x-large",
                                        }}
                                    >
                                        Applicants
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={`/contractors/${props.contractor.id}/jobs`} eventKey="2"
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Luam, serif',
                                            fontSize: "x-large",
                                        }}
                                    >
                                        Jobs
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={`/contractors/addjob`} eventKey="3"
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Luam, serif',
                                            fontSize: "x-large",
                                        }}
                                    >
                                        Add Job
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={`/contractors/${props.contractor.name}/profile`} eventKey="4"
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Luam, serif',
                                            fontSize: "x-large",
                                        }}
                                    >
                                        Profile
                                    </Nav.Link>
                                </Nav>
                                <Nav defaultActiveKey="/" className="flex-column me-auto"> eventKey="5"
                                    <Nav.Link as={Link} to="/contractors/about"
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Luam, serif',
                                            fontSize: "x-large",
                                        }}
                                    >
                                        About
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={`/contractors`} eventKey="6"
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Luam, serif',
                                            fontSize: "x-large",
                                        }}
                                    >
                                        Contact
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/home/signOut" eventKey="7"
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Luam, serif',
                                            fontSize: "x-large",
                                        }}
                                        >Sign Out
                                    </Nav.Link>
                                </Nav>
                            {/* <Breadcrumb>
                            </Breadcrumb> */}
                        </Navbar.Collapse>
                    {/* </Container> */}
                </Navbar>
                </div>
                        <div className="navCollapse">
    
                            {/* <Navbar.Brand style={{ margin: 0 + "px", padding: 0 + "px" }}>
                            </Navbar.Brand>
                            <Navbar.Collapse id='basic-navbar-nav'
                            
                        > */}
    
                                <Nav
                                    style={{
                                        "font-size": "x-large",
                                    }}
                                    >
                                    <Nav.Link as={Link} to="/contractors">HOME</Nav.Link>
                                    <Nav.Link as={Link} to="/contractors/about">ABOUT</Nav.Link>
                                    <Nav.Link as={Link} to="/contractors">CONTACT</Nav.Link>
                                </Nav>
    
                                <Nav
                                    style={{
                                        "font-size": "x-large",
                                    }}
                                    >
                                    <Nav.Link as={Link} to="/home/signOut">SIGN-OUT</Nav.Link>
                                </Nav>
                            {/* </Navbar.Collapse> */}
                    </div>                        
                    {/* <div className="nav"> */}
                        {/* <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{to: "/", onClick: props.handleSignout }} >Sign Out</Breadcrumb.Item>
                        </Breadcrumb> */}
                    </div>
                    {handleSubscription()}
                </div>
            )            
        } else {
            return (
            <div className="nav">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: 100 + "%"
                    }}
                >

                <Breadcrumb
                    style={{
                        "padding-inline": 15 + "px"
                    }}
                >
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/'}}>HOME</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/home/about'}}>ABOUT</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '#'}}>CONTACT</Breadcrumb.Item>
                </Breadcrumb>
                {handleLogo()}

                <Breadcrumb
                    style={{
                        "padding-inline": 15 + "px"
                    }}
                >
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/home/signIn'}}>LOGIN</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/home/signUp'}}>CREATE ACCOUNT</Breadcrumb.Item>
                </Breadcrumb>
                </div>
                    {/* <Breadcrumb.Item linkAs={Link} linkProps={{to: "/", onClick: props.handleSignout }} >Sign Out</Breadcrumb.Item> */}
            </div>
            )
        }
}

export default NavBar