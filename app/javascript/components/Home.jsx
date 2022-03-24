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
            <div>
                <NavBar />
                <div className="homepage">
                        <Container>
                            <div className="homepage-header">
                                <Image src="/images/blucollarlogo-white.png" alt="BluCollar Logo" />
                            </div>
                        </Container>
                </div>
            </div>
        )
    }
} 

export default Home