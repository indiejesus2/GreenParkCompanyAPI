// import React from 'react';
// import Routes from '../routes/Index'

// export default props => <>{Routes}</>;

import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/Home';
import EmployeesContainer from '../containers/EmployeesContainer'
import NavBar from '../components/NavBar'

        

function App() {
    return (
        <div>
        <Router>
        <NavBar />
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/employees" exact component={EmployeesContainer}></Route>
            </Switch>
        </Router>
        </div>
    )
}

export default App;