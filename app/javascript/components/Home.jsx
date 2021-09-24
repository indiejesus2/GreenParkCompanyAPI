import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'


class Home extends Component {
    render() {
        return (
            <div className="homepage">
                    <div className="homepage-container">
                        <div className="homepage-header">
                            <img src="/images/BluCollar-Logo.jpeg" alt="" />
                            <h1>Start Your Career Path, Today!</h1>
                        </div>
                        <div className="homepage-body">
                            <CardGroup className="homepage-cards">
                                <Card>
                                    <Card.Header>
                                        JobSeekers
                                    </Card.Header>
                                    <Card.Body>
                                        <Link to="/employees">
                                            <Button>Search Jobs</Button>
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
                            </CardGroup>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Home