import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import SignIn from '../Login/SignIn'
import SignUp from '../Login/SignUp'
import ForgotPassword from '../Login/ForgotPassword'
import TempPassword from '../Login/TempPassword'

const Login = props => {

    const [errors, setErrors] = useState(props.customerErrors ? props.customerErrors : props.contractorErrors)
    const [currentStep, setCurrentStep] = useState(props.currentStep )

    

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

    return (
        <div>
            <div className="signin">
                <Home />
                <About />
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