import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
                                <Link to="/employees">
                                    <label>JobSeekers</label>
                                    <button>Search Jobs</button>
                                </Link>
                            </div>
                            <div className="cards">
                                <label>Employers</label>
                                    <Link to="/employers">
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