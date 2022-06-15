import React, { useState, useEffect } from 'react'
import { Card, Image } from 'react-bootstrap'
import Logo from './Logo'
import NavBar from './NavBar'

const About = props => {

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

    const handleNav = () => {
        if (props.user == "employee") {
            return (
                <NavBar profile={props.profile} user="employee" loggedIn={props.loggedIn} />
            )
        } else if (props.user == "contractor") {
            return (
                <NavBar contractor={props.contractor} user="contractor" loggedIn={props.loggedIn}/>
            )
        } 
        // else {
        //     return (
        //         <NavBar />
        //     )
        // }
    }

    const handleHome = () => {
        // debugger
        if (size.height > 500) {
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
        <div>
            <div className="navSticky">
                {handleHome()}
                {handleNav()}
            </div>
            <Image style={{width: 100 + '%'}} src="/images/main page.png" alt="About page" />
        </div>
    )
}

export default About