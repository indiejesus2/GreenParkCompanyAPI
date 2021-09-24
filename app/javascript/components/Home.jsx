import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SignIn from './Employees/SignIn'
import Button from 'react-bootstrap/Button'


class Home extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="homepage-image">
                    <div className="homepage-container">
                        <div className="homepage-header">
                            <h1>Start Your Career Path, Today!</h1>
                        </div>
                        <div className="homepage-body">
                            <div className="cards">
                                    <label>JobSeekers</label>
                                    <Button onClick={SignIn}>Search Jobs</Button>
                            </div>
                            <div className="cards">
                                <label>Contractors</label>
                                    <Link to="/contractors">
                                        <button>Post Jobs</button>
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <a href="https://www.freepik.com/vectors/banner">Banner vector created by katemangostar - www.freepik.com</a>
                </div>
            </div>
        )
    }
} 

export default Home