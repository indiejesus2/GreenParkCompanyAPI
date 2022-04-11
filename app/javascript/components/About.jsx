import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import Logo from './Logo'
import NavBar from './NavBar'

const About = () => {

    const handleNav = () => {
        if (props.user == "employee" || "contractor") {
            return (
                <NavBar />
            )
        }
    }

    return (
        <div>
            {handleNav()}
        <div className="about"
            style={{
                paddingInline: 25 + "px"
            }}
        >
            <Logo />
            <div>
                <h1
                    style={{
                        fontSize: "xxx-large",
                        fontWeight: "lighter"
                    }}
                >Our Mission</h1>
            </div>
            <div 
                style={{
                    height: 100 + "px",
                    width: 50 + "px",
                    borderLeft: 2 + "px solid gray",
                    borderBottom: 2 + "px solid gray",
                    width: 50 + "px"
                }}
            ></div>
            <div>
                <h3
                    style={{
                        fontSize: "xx-large",
                        display: "flex",
                        fontWeight: "bold",
                        justifyContent: "center",
                    }}
                >Anyone looking for a job</h3>
                <h2
                    style={{
                        fontSize: "xxx-large",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "center"
                    }}
                >Should be able to find one!</h2>
            </div>
            <p style={{ fontStyle: "italic"}}><span id="blu" style={{ color: "blue"}}>BluCollar</span> was created on the principle that anyone looking for a job OR anyone looking for an employee should be able to find a perfect match. It is designed to find a promising job match so that both parties can start a career relationship on the right footing.</p>
            <div className="d-flex justify-content-center">
                <h1>Our Ideals</h1>
            </div>
            <div>
                <p style={{ fontStyle: "italic"}}>Work is what we spend most of our time doing. Why not be happy before an interview takes place.  The idea is to get an ideal match with both the employee and employer, ensuring an easy transition.</p>
            </div>
            <div className="d-flex justify-content-between mt-3">
                <div className="aboutCard"
                    style={{
                        borderRight: 2 + "px gray solid"
                    }}
                >
                    <Card
                        style={{
                            backgroundColor: "gray",
                            width: 500 + "px"
                        }}
                    >
                        <Card.Title>
                            <h5>Simplicity</h5>
                        </Card.Title>
                        <Card.Body>
                            <p>Finding a job should not be difficult.</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className="aboutCard">
                    <Card
                        style={{
                            backgroundColor: "gray",
                            width: 500 + "px"
                        }}
                    >
                        <Card.Title>
                            <h5>Collaboration</h5>
                        </Card.Title>
                        <Card.Body>
                            <p>We work toward the success of both the employee and employer.</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="mt-3">
                <div className="aboutCard">
                    <Card
                        style={{
                            backgroundColor: "gray",
                            width: 500 + "px"
                        }}
                    >
                        <Card.Title>
                            <h5>Care</h5>
                        </Card.Title>
                        <Card.Body>
                        <p>We all have jobs and know the trials and tribulations that come with employment. We want to consider the perspectives of others and  make the connection count.</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <h1 className="aboutHeader"
                style={{
                    fontSize:"xxx-large",
                    display: "flex",
                    justifyContent: "right"
                }}
            >About</h1>
            <div className="d-flex">
                <div clasName="aboutImg">
                    <div className="d-flex">
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    <img src="" alt="" />
                </div>
                <div>
                    <p><span style={{ color: "blue"}}>BluCollar's</span> roots go back decades when employment in the trades was a right of passage for the new generation of young employees entering the workforce.</p>

                    <p>High School students were, and are, a tremendous resource that help, and continue to help build businesses that make the country's economy run. </p>

                    <p>The recent demand for employees and the unsustainable college costs have created  a perfect environment for the newest generation to continue helping build economy receiving high pay rates that have never been seen before.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About