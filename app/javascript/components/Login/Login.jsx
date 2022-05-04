import React, { useState, useEffect, useRef } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import SignIn from '../Login/SignIn'
import SignUp from '../Login/SignUp'
import ForgotPassword from '../Login/ForgotPassword'
import TempPassword from '../Login/TempPassword'

const Login = props => {


    const [errors, setErrors] = useState(props.customerErrors ? props.customerErrors : props.contractorErrors)
    const [currentStep, setCurrentStep] = useState(props.currentStep)
    const myRef = useRef(null)
    const history = useHistory()


    const handleScroll = () => {
        if (history.location.pathname.includes("about")) {
            myRef.current.scrollIntoView()
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

    history.location.pathname != "/home"

    return (
        <div>
            <div className="signin">
                {handleScroll()}
                <div>
                    <Home />
                </div>
                <div ref={myRef}>
                    <About />
                </div>
                {/* <SignUp signUp={props.signUp} currentStep={props.currentStep} handleClick={handleClick} handlePassword={handlePassword} errors={errors} handleClose={handleClose} />
                <SignIn signIn={props.signIn} currentStep={props.currentStep} handleClick={handleClick} handlePassword={handlePassword} errors={errors} handleClose={handleClose} />
                <ForgotPassword currentStep={props.currentStep} updatePassword={props.updatePassword} handleValidation={handleValidation} user={"employee"} handleClose={handleClose} /> */}
            </div>
            <div className="about">
            </div>
        </div>
        )
}

export default Login