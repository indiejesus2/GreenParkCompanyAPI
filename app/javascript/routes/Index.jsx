import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../components/Home';

export default (
    <Router>
        <Route path="/" exact component={Home}></Route>
    </Router>
)