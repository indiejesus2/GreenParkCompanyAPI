import React from 'react'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'



class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    // componentDidCatch(error, errorInfo) {
    //   // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    // }
  
    render() {
      if (this.state.hasError) {
        // debugger
        // You can render any custom fallback UI
        return (
          <div>
            <NavBar />
            <div className="d-grid justify-content-center">
              <h1>Something went wrong.</h1>
              <h3>Please sign out and try again.</h3>
              <h5>If issue persists, please contact site adminstrator.</h5>
              <Link to={'/home/contact'}>Contact</Link>
            </div>
          </div>
        )
      }
   
      return this.props.children; 
    }
  }

  export default ErrorBoundary;