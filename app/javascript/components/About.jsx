import React, { useState, useEffect } from 'react'
import { Card, Image } from 'react-bootstrap'
import Logo from './Logo'
import NavBar from './NavBar'

const About = props => {

    const handleNav = () => {
        if (props.user == "employee") {
            return (
                <NavBar profile={props.profile} user="employee" loggedIn={props.loggedIn} />
            )
        } else if (props.user == "contractor") {
            return (
                <NavBar contractor={props.contractor} user="contractor" loggedIn={props.loggedIn}/>
            )
        } else {
            return (
                <Navbar />
            )
        }
    }

    return (
        <Image style={{width: 100 + '%'}} src="/images/main page.png" alt="About page" />
    )
}

export default About