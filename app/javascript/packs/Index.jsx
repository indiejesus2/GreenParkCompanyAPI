// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import employeesReducer from '../reducers/employeesReducer'
import contractorsReducer from '../reducers/contractorsReducer'
import jobsReducer from '../reducers/jobsReducer';
import App from '../components/App'
import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({
  employeesReducer,
  contractorsReducer,
  jobsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
