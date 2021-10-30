import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Button, Stack, Container, Image } from 'react-bootstrap'
import EmployeeSignIn from './Login/EmployeeSignIn';
import NavBar from '../components/NavBar'

class Home extends Component {
    
    render() {        
        return (
            <div className="homepage">
                {/* <NavBar/> */}
                    {/* <div className="homepage-container"> */}
                    <Container>
                            <NavBar />

                        <div className="homepage-header">
                            <Image src="/images/blucollarlogo_wocollar.png" alt="BluCollar Logo" />
                            {/* <h1>Start Your Career Path, Today!</h1> */}
                        </div>
                        <div className="homepage-body">
                            <div className="homepage-employees">
                                        <h5>JobSeekers</h5>
                                        <Link to="/employees">
                                            <Button id="employees">Find Jobs</Button>
                                        </Link>
                            </div>

                                    <div className="homepage-contractors">
                                        <h5>Contractors</h5>
                                        <Link to="/contractors">
                                            <Button>Post Jobs</Button>
                                        </Link>
                                    </div>
                    </div>
                    </Container>
                {/* </div> */}
            </div>
        )
    }
} 

export default Home