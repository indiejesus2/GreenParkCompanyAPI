import React, { useState, useEffect } from 'react'
import { Card, Image } from 'react-bootstrap'
import Logo from './Logo'
import NavBar from './NavBar'

const About = props => {

    const handleNav = () => {
        if (props.user == "employee") {
            return (
                <NavBar profile={props.profile} />
            )
        } else if (props.user == "contractor") {
            return (
                <NavBar contractor={props.contractor} />
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
            <div>
                <h1
                    style={{
                        font: "normal normal 300 147px/60px Luam",
                        fontSize: 147 + "px",
                        fontSize: "8vw",
                        letterSpacing: "-0.73px",
                        color: "#FFFFFF",
                        opacity: 1,
                        marginBottom: 1.5 + "rem"
                    }}
                >Our Mission</h1>
            </div>
            <div className='d-flex'
                style={{
                    position: "relative",
                    left: 235 + "px",
                    width: "fit-content"
                }}
            >

            <div 
                style={{
                    width: 110 + "px",
                    borderLeft: 3 + "px solid #FFFFFF",
                    borderBottom: 3 + "px solid #FFFFFF",
                    height: 253 + "px",
                    opacity: 1,
                    
                }}
                ></div>
            <div>
                <h3
                    style={{
                        position: "relative",
                        top: 225 + "px",
                        font: "normal normal bold 81px/44px Muli",
                        fontSize: 81 + "px",
                        fontSize: "4vw",
                        letterSpacing: 0.32 + "px",
                        color: "#EEEEEE",
                        opacity: 1,
                        marginLeft: 15 + "px"
                    }}
                    >Anyone looking for a job</h3>
                </div>
            </div>
            <div>
                <h2
                    style={{
                        marginTop:75 + "px",
                        display: "flex",
                        justifyContent: "center",
                        font: "normal normal bold 100px/44px Muli",
                        fontSize: 100 + "px",
                        fontSize: "5vw",
                        letterSpacing:  0.4 + "px",
                        color: "#3FA1FC",
                        opacity: 1
                    }}
                >Should be able to find one!</h2>
            </div>
            <div className="midBorder"
                style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginBlockStart: 30 + "px"
                }}
            >
                <div></div>
                <div
                    style={{
                        borderRight: 3 + "px solid #FFFFFF",
                        height: 94 + "px",
                        opacity: 1,
                    }}
                ></div>
            </div>
            <div 
                style={{
                    marginTop: 15 + "px",
                    font: "italic normal 300 52px/74px Noto Sans",
                    fontSize: 52 + "px",
                    fontSize: "2.8vw",
                    letterSpacing:  0 + "px",
                    opacity: 1
                }}
            >
                <p style={{ fontStyle: "italic"}}><span id="blu" style={{ color: "#3FA1FC"}}>BluCollar</span> was created on the principle that anyone looking for a job OR anyone looking for an employee should be able to find a perfect match. It is designed to find a promising job match so that both parties can start a career relationship on the right footing.</p>
                <div 
                    style={{
                        width: 500 + "px",
                        borderTop: "3px solid #ffffff", 
                        position: "relative", 
                        bottom: "50px",
                        left: "621px"}}>
                </div>
                <div 
                    style={{
                        height: 160 + "px",
                        borderRight: "3px solid #ffffff", 
                        width: 76.45 + "%",
                        position: "relative", 
                        bottom: "52px",
                    }}>
                </div>
                <div 
                    style={{
                        width: 225 + "px",
                        borderTop: "3px solid #ffffff", 
                        position: "relative", 
                        bottom: "54px",
                        left: "897px"}}>
                </div>
            </div>
            <div className="d-grid"
                style={{
                    position: "relative",
                    bottom: 95 + "px"
                }}
            >
                <h1
                    style={{
                        font: "normal normal 300 147px/60px Luam",
                        fontSize: 52 + "px",
                        fontSize: "6vw",
                        letterSpacing:  -0.73 + "px",
                        color: "#FFFFFF",
                        textAlign: "center"
                    }}
                >Our Ideals</h1>
                <div className="midBorder"
                    style={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "space-between",
                        marginBlockStart: 30 + "px"
                    }}
                    >
                    <div></div>
                    <div
                        style={{
                            borderRight: 3 + "px solid #FFFFFF",
                            height: 94 + "px",
                            opacity: 1,
                        }}
                        ></div>
                        </div>
                <p style={{
                        font: "italic normal 300 52px/74px Noto Sans",
                        fontSize: 52 + "px",
                        fontSize: "2.8vw",
                        letterSpacing:  0 + "px",
                        opacity: 1
                }}>
                    Work is what we spend most of our time doing. Why not be happy before an interview takes place.  The idea is to get an ideal match with both the employee and employer, ensuring an easy transition.</p>
            </div>
            <div className="d-flex justify-content-between mt3">
                <div className="aboutCard"
                    // style={{
                    //     borderRight: 2 + "px gray solid"
                    // }}
                >
                    <Card
                        style={{
                            background: "#373737 0% 0% no-repeat padding-box",
                            boxShadow: "8px 16px 32px #0000001A",
                            borderRadius: 24 + "px",
                            opacity: 1,
                            width: 533 + "px",
                            height: 343 + "px",
                            alignItems: "center",
                            paddingBlock: 25 + "px"
                        }}
                    >
                        <Card.Title>
                            <h5
                                style={{
                                    font: "italic normal bold 51px/70px Noto Sans",
                                    fontSize: "3vw",
                                    letterSpacing: 0 + "px",
                                    color: "#3FA1FC",
                                    opacity: 1
                            }}
                            >Simplicity</h5>
                        </Card.Title>
                        <Card.Body>
                            <p
                            style={{
                                font: "normal normal 300 38px/52px Noto Sans",
                                fontSize: "3vw",
                                letterSpacing: "0px",
                                color: "#EEEEEE",
                                opacity: 1,
                                textAlign: "center"
                            }}
                            >Finding a job should not be difficult.</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className="aboutCard">
                    <Card
                        style={{
                            background: "#373737 0% 0% no-repeat padding-box",
                            boxShadow: "8px 16px 32px #0000001A",
                            borderRadius: 24 + "px",
                            opacity: 1,
                            width: 533 + "px",
                            height: 343 + "px",
                            alignItems: "center",
                            paddingBlock: 25 + "px"
                        }}
                    >
                        <Card.Title>
                            <h5
                                style={{
                                    font: "italic normal bold 51px/70px Noto Sans",
                                    fontSize: "3vw",
                                    letterSpacing: 0 + "px",
                                    color: "#3FA1FC",
                                    opacity: 1,
                                    paddingBottom: 0 + "px"
                            }}
                            >Collaboration</h5>
                        </Card.Title>
                        <Card.Body>
                            <p
                                style={{
                                    font: "normal normal 300 38px/52px Noto Sans",
                                    fontSize: "3vw",
                                    letterSpacing: "0px",
                                    color: "#EEEEEE",
                                    opacity: 1,
                                    textAlign: "center"
                                }}
                            >We work toward the success of both the employee and employer.</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="mt-5 d-flex justify-content-center">
                <div className="aboutCard">
                    <Card
                        style={{
                            background: "#373737 0% 0% no-repeat padding-box",
                            boxShadow: "8px 16px 32px #0000001A",
                            borderRadius: 24 + "px",
                            opacity: 1,
                            width: 847 + "px",
                            height: 404 + "px",
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <Card.Title>
                            <h5
                                style={{
                                    font: "italic normal bold 51px/70px Noto Sans",
                                    fontSize: "3vw",
                                    letterSpacing: 0 + "px",
                                    color: "#3FA1FC",
                                    opacity: 1
                            }}
                            >Care</h5>
                        </Card.Title>
                        <Card.Body>
                        <p
                            style={{
                                font: "normal normal 300 38px/52px Noto Sans",
                                fontSize: "3vw",
                                letterSpacing: "0px",
                                color: "#EEEEEE",
                                opacity: 1,
                                textAlign: "center"
                            }}
                        >We all have jobs and know the trials and tribulations that come with employment. We want to consider the perspectives of others and  make the connection count.</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <h1 className="aboutHeader"
                style={{
                    display: "flex",
                    justifyContent: "right",
                    font: "normal normal 300 147px/68px Luam",
                    fontSize: "4vw",
                    letterSpacing:  -0.73 + "px",
                    color: "#EEEEEE",
                    opacity: 1,
                }}
            >About</h1>
            <div className="d-flex justify-content-between">
                <div className="aboutImg"
                    style={{
                        width: 52 + "%"
                    }}
                >
                    <div className="d-flex justify-content-between mb-5">
                        <div>
                            <Image fluid="true" src="/images/about-worker-top-left.png" alt="" />
                        </div>
                        <div>
                            <Image fluid="true" src="/images/about-worker-top-right.png" alt="" />
                        </div>
                    </div>
                    <Image fluid="true" src="/images/about-worker.png" alt="" />
                </div>
                <div className="d-grid"
                    style={{
                        width: 48 + "%",
                        textAlign: "right"
                    }}
                >
                    <p style={{
                            font: "normal normal normal 37px/42px Noto Sans",
                            fontSize: "2vw",
                            letterSpacing:  0 + "px",
                            color: "#D2D2D2"
                    }}>
                        <span style={{ color: "#3FA1FC"}}>BluCollar's</span> roots go back decades  when employment in the trades was a right of passage for the new generation of young employees entering the workforce.
                    </p>
                    <p style={{
                            font: "normal normal normal 37px/42px Noto Sans;",
                            fontSize: "2vw",
                            letterSpacing:  0 + "px",
                            color: "#D2D2D2"
                    }}>
                        High School students were, and are, a tremendous resource that help, and continue to help build businesses that make the country's economy run.
                    </p>
                    <p style={{
                            font: "normal normal normal 37px/42px Noto Sans;",
                            fontSize: "2vw",
                            letterSpacing:  0 + "px",
                            color: "#D2D2D2"
                    }}>
                        The recent demand for employees and the unsustainable college costs have created a perfect environment for the newest generation to continue helping build economy receiving high pay rates that have never been seen before.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About