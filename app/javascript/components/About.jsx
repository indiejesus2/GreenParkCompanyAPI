import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Image } from 'react-bootstrap'
import Logo from './Logo'
import NavBar from './NavBar'

const About = props => {

    const size = useWindowPosition();

    const history = useHistory()

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
        if (props.user == "employee" || props.user == "contractor") {
            return (
                <div>
                    {handleNav()}
                </div>
            )
        } else {
            return (
                <NavBar />
            )
        // } else {
        //     return (
        //         <div></div>
        //     )
        }
    }

    const handleStick = () => {
        if (size.height > 50 || history.location.pathname != "/home/about") {
            return (
                <div className="navSticky">
                    {handleHome()}
                    {/* <NavBar /> */}
                </div>
            )
        }
    }
    
    return (
        <div>
            {handleStick()}
            <Image style={{width: 100 + '%', paddingTop: 60+"px"}} src="/images/new main page.png" alt="About page" />
        </div>
    )
}

export default About