import React, { useState, useEffect, useRef } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import NavBar from '../NavBar'
import SignIn from '../Login/SignIn'
import SignUp from '../Login/SignUp'
import ForgotPassword from '../Login/ForgotPassword'
import TempPassword from '../Login/TempPassword'

const Login = props => {

    // const size = useWindowPosition();

    // function useWindowPosition() {
    //     const [windowPosition, setWindowPosition] = useState({
    //         width: undefined,
    //         height: undefined
    //     });

    //     useEffect(() => {
    //         function handleScroll() {
    //             setWindowPosition({
    //                 width: window.scrollX,
    //                 height: window.scrollY
    //             });
    //         }
            
    //         window.addEventListener("scroll", handleScroll);
            
    //         handleScroll();
            
    //         return () => window.removeEventListener("scroll", handleScroll);
    //     }, []);

    //     return windowPosition;
    // }


    const [errors, setErrors] = useState(props.customerErrors ? props.customerErrors : props.contractorErrors)
    const [currentStep, setCurrentStep] = useState(props.currentStep)
    const myRef = useRef()
    const history = useHistory()


    const handleScroll = () => {
        // debugger
        if (history.location.pathname.includes("about")) {
            Redirect
            myRef.current.scrollIntoView()
        }
    }


    const handleHome = () => {
        // debugger
        if (size.height > 45) {
            return (
                <div></div>
            )
        } else {
            return (
                <NavBar />
            )
        }
    }

    

    

    // useEffect(() => {
    //     debugger
    //     // if (currentStep != props.currentStep) {
    //         setCurrentStep(props.currentStep)
    //     // } else if (!!errors) {
    //     //     debugger
    //         // if (errors) {

    //         // }
    //     // }
    // }, [props.currentStep]);

    const handleClick = (e) => {
        // let direction , = e.target.name;
        if (currentStep == 1){
            setCurrentStep(2)
        } else if (currentStep == 2) {
            setCurrentStep(1)
        }
    }

    const handleClose = () => {
        history.push('/');
    }

    const handlePassword = () => {
        setCurrentStep(3)
    }

    const handleValidation = () => {
        setCurrentStep(4)
    }

    // history.location.pathname != "/home"

    return (
        <div>
            {/* <div className="navSticky">
                {handleHome()}
            </div> */}
            <div className="signin">
                {handleScroll()}
                <div>
                    <Home />
                </div>
                <div ref={myRef} 
                // style={{marginTop: 35+"px"}}
                >
                    <About />
                </div>
                {/* <SignUp signUp={props.signUp} currentStep={props.currentStep} handleClick={handleClick} handlePassword={handlePassword} errors={errors} handleClose={handleClose} />
                <SignIn signIn={props.signIn} currentStep={props.currentStep} handleClick={handleClick} handlePassword={handlePassword} errors={errors} handleClose={handleClose} />
                <ForgotPassword currentStep={props.currentStep} updatePassword={props.updatePassword} handleValidation={handleValidation} user={"employee"} handleClose={handleClose} /> */}
            </div>
            {/* <div className="about">
            </div> */}
        </div>
        )
}

export default Login