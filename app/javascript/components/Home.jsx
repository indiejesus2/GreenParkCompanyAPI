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
                    <Container>
                            <NavBar />

                        <div className="homepage-header">
                            <Image src="/images/blucollarlogo_wocollar.png" alt="BluCollar Logo" />
                        </div>
                        <div className="homepage-body">
                            <div className="homepage-employees">
                                <div style={{position: "relative", right: 2.5+"px" }}>
                                    <h5>JobSeekers</h5>
                                </div>
                                <Link to="/employees">
                                    <Button id="employees">Find Jobs</Button>
                                </Link>
                        </div>
                        <div className="homepage-contractors">
                        <div style={{position: "relative", right: 6+"px" }}>
                                <h5>Contractors</h5>
                            </div>
                            <Link to="/contractors">
                                <Button>Post Jobs</Button>
                            </Link>
                        </div>
                    </div>
                    </Container>
            </div>
        )
    }
} 

export default Home