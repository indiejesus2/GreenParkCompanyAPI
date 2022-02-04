// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
// import { render } from 'react-snapshot'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
// import { hashHistory } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { store, persistor } from './configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import { hydrate, render } from 'react-dom';
import {ReactDOMServer} from 'react-dom/server'

// import employeesReducer from '../reducers/employeesReducer'
// import contractorsReducer from '../reducers/contractorsReducer'
// import jobsReducer from '../reducers/jobsReducer';
// import errorsReducer from '../reducers/errorsReducer'
import App from '../components/App'
import ScrollToTop from '../components/ScrollToTop'
import 'bootstrap/dist/css/bootstrap.min.css';


// const rootReducer = combineReducers({
//   employeesReducer,
//   contractorsReducer,
//   jobsReducer,
//   errorsReducer
// })

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
const rootElement = document.getElementById("root")

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router>
        <PersistGate loading={null} persistor={persistor}>
          <ScrollToTop />
          <App />
        </PersistGate>
      </Router>
    </Provider>,
    // document.body.style.backgroundColor="#3d8ac9",
    document.body.appendChild(document.createElement('div'))
  )
})
