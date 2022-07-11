import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Button, Stack, Container, Image } from 'react-bootstrap'
import {Element} from 'react-scroll'
import NavBar from './NavBar'

const Home = props => {

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
        }, [size]);

        return windowPosition;
    }

    const handleHome = () => {
        // debugger
        if (size.height < 50) {
            return (
                <NavBar />
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    
            
        return (
            <div style={{minHeight: 800+"px"}}>
                {/* <div className="navSticky">
                    {handleHome()}
                </div> */}
                <NavBar />
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

export default Home