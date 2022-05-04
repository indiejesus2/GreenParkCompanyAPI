import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Button, Stack, Container, Image } from 'react-bootstrap'
import {Element} from 'react-scroll'

class Home extends Component {
    
    render() {        
        return (
            <div style={{minHeight: 625+"px"}}>
                <div className="homepage">
                        {/* <Container> */}
                            <div className="homepage-header">
                                <Image src="/images/blucollar-logo.png" alt="BluCollar Logo" />
                            </div>
                        {/* </Container> */}
                </div>
                {/* <div className="about"> */}
                    {/* <About /> */}
                    {/* <Element>
                        <Image style={{width: "100%"}} src="/images/main page.png" alt="About page" />
                    </Element>
                </div> */}
            </div>
        )
    }
} 

export default Home