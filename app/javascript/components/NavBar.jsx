import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { Navbar, Nav, Container, Breadcrumb} from 'react-bootstrap'
import Logo from '../components/Logo'

const NavBar = props => {

    const size = useWindowPosition();

    function useWindowPosition() {
        const [windowPosition, setWindowPosition] = useState({
            width: undefined,
            height: undefined
        });

        useEffect(() => {
            function handleScroll() {
                setWindowPosition({
                    width: window.scrollX,
                    height: window.scrollY
                });
            }
            
            window.addEventListener("scroll", handleScroll);
            
            handleScroll();
            
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

        return windowPosition;
    }

    const handleHome = () => {
        // debugger
        if (size.height > 450) {
            return (
                <div className="employee-nav">
                        <Logo user={props.user}/>
                </div>
            )
        }
    }

    const handlePosition = () => {
        if (size.height > 450) {
            return (
                {position: "relative",
                bottom: 85 + "px"}
            )
        }
    }

    const handleQuestion = () => {
        if (props.profile.fname && history.location.pathname != "/employees/about") {
            return (
                <h1 className="employeeTitle">{props.profile.fname.toUpperCase()}'S EMPLOYEE DASHBOARD</h1>
            )
        }
    }

    const handleSubscription = () => {
        if (props.contractor.name && history.location.pathname != "/contractors/about") {
            return (
                <h1 className="employeeTitle">{props.contractor.name.toUpperCase()}'S DASHBOARD</h1>
            )
        }
    }

    const history = useHistory()

    const handleLogo = () => {
        
    }

    const handleCollapse = () => {
        if (size.height > 450) {
            return (
                <div className="homeCollapse"
                    style={{
                        position: "relative",
                        bottom: 75 + "px"
                    }}
                >
                <Nav
                style={{
                    "font-size": "x-large",
                }}
                >
                <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                <Nav.Link as={Link} to="/home/about">ABOUT</Nav.Link>
                <Nav.Link as={Link} to="/home/contact">CONTACT</Nav.Link>
            </Nav>
            <Nav
                style={{
                    "font-size": "x-large",
                }}
                >
                <Nav.Link as={Link} to="/home/signIn">LOGIN</Nav.Link>
                <Nav.Link as={Link} to="/home/signUp">CREATE ACCOUNT</Nav.Link>
            </Nav>
        </div>
                )
        } else {
            return (
                <div className="homeCollapse">
            <Nav
                style={{
                    "font-size": "x-large",
                }}
                >
                <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                <Nav.Link as={Link} to="/home/about">ABOUT</Nav.Link>
                <Nav.Link as={Link} to="/home/contact">CONTACT</Nav.Link>
            </Nav>
            <Nav
                style={{
                    "font-size": "x-large",
                }}
                >
                <Nav.Link as={Link} to="/home/signIn">LOGIN</Nav.Link>
                <Nav.Link as={Link} to="/home/signUp">CREATE ACCOUNT</Nav.Link>
            </Nav>
        </div>
            )
        }

        
    }


    if (props.loggedIn == true && props.user == "employee") {
        
            return (
                <div>
                    <div className="employee-nav">
                        <Logo user={props.user}/>
                    </div>
                    <div className="employeeCollapseNav">

                        <Navbar collapseOnSelect expand='1000px' variant="dark" >
                {/* <Container> */}
                    <div className="employee-nav-toggle">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                    <div style={{textAlign: "center", zIndex:1, background:"black", position: "relative", bottom: 50+"px"}}>
                    <Navbar.Collapse id="basic-navbar-nav">
                            <Nav defaultActiveKey="/" className="flex-column me-auto">
                                <Nav.Link as={Link} to="/employees" eventKey="1" onClick={props.handleClick}
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
                                <Nav.Link as={Link} to={`/employees/saved_jobs`} onClick={props.handleClick} eventKey="3"
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
                    </div>

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
                {handleQuestion()}
            </div>
            )
        } else if (props.loggedIn == true && props.user == "contractor") {
            return (
                    <div>
    
                        <div className="employee-nav">
                            <Logo user={props.user}/>
                        </div>
                        <div className="employeeCollapseNav">
    
                            <Navbar collapseOnSelect expand='lg' variant="dark">
                    {/* <Container> */}
                        <div className="employee-nav-toggle">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </div>
                        <div style={{textAlign: "center", zIndex:1, background:"black", position: "relative", bottom: 50+"px"}}>
                        <Navbar.Collapse id="basic-navbar-nav">
                                <Nav defaultActiveKey="/" className="flex-column me-auto">
                                    <Nav.Link as={Link} to="/contractors" eventKey="1"
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Luam, serif',
                                            fontSize: "x-large",
                                        }}
                                    >
                                        My Jobs
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={`/contractors/${props.contractor.id}/applicants`} eventKey="2"
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Luam, serif',
                                            fontSize: "x-large",
                                        }}
                                    >
                                        Applicants
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
                                    <Nav.Link as={Link} to={`/contractors/${props.contractor.id}/profile`} eventKey="4"
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Luam, serif',
                                            fontSize: "x-large",
                                        }}
                                    >
                                        My Profile
                                    </Nav.Link>
                                </Nav>
                                <Nav defaultActiveKey="/" className="flex-column me-auto"> 
                                    <Nav.Link as={Link} to="/contractors/about" eventKey="5"
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
                        </div>
                    </Navbar>
                </div>
                <div className="navCollapse">
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
                    </div>                       
                    {handleSubscription()}
                </div>
            )
        } else if (history.location.pathname != "/home" && history.location.pathname != "/home/about") {
                return (
                    <Logo />
                )
        } else {
            return (
                <div 
                    style={{
                        marginBlockEnd: 25+"px",
                        height: 50 + "px"
                    }}
                >
                    {handleHome()}
                <div className="homeCollapseNav"
                    style={handlePosition()}
                >
                    <Navbar collapseOnSelect expand='md' variant="dark" className="upperCollapseNav">
                        <div className="home-nav">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </div>
                        <div style={{textAlign: "center", zIndex:1, background:"black", position: "relative"}}>

                        <Navbar.Collapse id="basic-navbar-nav" style={{}}>
                                <Nav defaultActiveKey="/" className="flex-column me-1 mb-0">
                                    <Nav.Link as={Link} to="/home" eventKey="1"
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Luam, serif',
                                            fontSize: "x-large",
                                        }}
                                    >
                                        HOME
                                    </Nav.Link>
                                </Nav>
                                <Nav defaultActiveKey="/" className="flex-column me-1 mb-0">
                                    <Nav.Link as={Link} to="/home/about" eventKey="2"
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Luam, serif',
                                            fontSize: "x-large",
                                        }}
                                    >
                                        ABOUT
                                    </Nav.Link>
                                </Nav>
                                <Nav defaultActiveKey="/" className="flex-column me-1 mb-0">
                                    <Nav.Link as={Link} to="/home/contact" eventKey="3"
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Luam, serif',
                                            fontSize: "x-large",
                                        }}
                                    >
                                        CONTACT
                                    </Nav.Link>
                                </Nav>
                                <Nav defaultActiveKey="/" className="flex-column me-1 mb-0">
                                    <Nav.Link as={Link} to="/home/signIn" eventKey="4"
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Luam, serif',
                                            fontSize: "x-large",
                                        }}
                                    >
                                        LOGIN
                                    </Nav.Link>
                                </Nav>
                                <Nav defaultActiveKey="/" className="flex-column me-1 mb-0">
                                    <Nav.Link as={Link} to="/home/signUp" eventKey="5"
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Luam, serif',
                                            fontSize: "x-large",
                                        }}
                                    >
                                        CREATE ACCOUNT
                                    </Nav.Link>
                                </Nav>
                        </Navbar.Collapse>
                                    </div>
                    </Navbar>
                </div>
                {handleCollapse()}
            </div>
            )
        }
}

export default NavBar