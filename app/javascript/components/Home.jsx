import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import EmployeeSignIn from './Login/EmployeeSignIn';


class Home extends Component {

    // renderSignIn(){
    //     return (
    //         <div>
    //             <EmployeeSignIn />
    //         </div>
    //     )
    // }

    // handleClick = (e) => {
    //     if (e.target.id == "employees") {
    //         this.renderSignIn()
    //     }
    // }

    render() {        
        return (
            <div className="homepage">
                    <div className="homepage-container">
                        <div className="homepage-header">
                            <img src="/images/blucollarlogo_wtagline.png" alt="" />
                            {/* <h1>Start Your Career Path, Today!</h1> */}
                        </div>
                        <div className="homepage-body">
                            {/* <CardGroup className="homepage-cards"> */}
                                <Card>
                                    <Card.Header>
                                        JobSeekers
                                    </Card.Header>
                                    <Card.Body>
                                        <Link to="/employees/signin">
                                            <Button id="employees" onClick={this.handleClick}>Find Jobs</Button>
                                            {/* { renderSignIn() } */}
                                        </Link>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        Contractors
                                    </Card.Header>
                                    <Card.Body>
                                        <Link to="/contractors">
                                            <Button>Post Jobs</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                                    {/* <label>JobSeekers</label>
                                <label>Contractors</label>
                                    <Link to="/contractors">
                                        <button>Post Jobs</button>
                                    </Link> */}
                            {/* </CardGroup> */}
                    </div>
                </div>
            </div>
        )
    }
} 

export default Home