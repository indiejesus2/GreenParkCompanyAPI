import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Button, Stack, Container, Image } from 'react-bootstrap'
import EmployeeSignIn from './Login/EmployeeSignIn';

class Home extends Component {
    
    render() {        
        return (
            <div>
                <div className="homepage">
                        <Container>
                            <div className="homepage-header">
                                <Image src="/images/blucollar-logo.png" alt="BluCollar Logo" />
                            </div>
                        </Container>
                </div>
            </div>
        )
    }
} 

export default Home