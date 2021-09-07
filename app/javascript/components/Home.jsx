import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1>Start Your Career Path, Today!</h1>
                <div className="employees">
                    <Link to="/employees">
                    <h5>JobSeekers</h5>
                        <button>Search Jobs</button>
                    </Link>
                </div>
                <div className="employers">
                    <h5>Employers</h5>
                    <Link to="/employers">
                        <button>Post Jobs</button>
                    </Link>
                </div>
            </div>
        )
    }
} 

export default Home