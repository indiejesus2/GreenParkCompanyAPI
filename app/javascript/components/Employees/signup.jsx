import React, { Component, useState } from 'react'

export default function SignUp(props) {

    // const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleChange = (event) => {
        return (
            // event.target.name==="name"?setName(event.target.value):
            event.target.name==="email"?setEmail(event.target.value):
            event.target.name==="password"?setPassword(event.target.value):
            ()=>{}
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let state = {email: email, password: password}
        props.signUpEmployee(state)
        props.history.push('/employees')
    }

    return (
        <div className="signUp">
            <h1>Create a Free Account</h1>
            <p>Find a job today!</p>
            <div className="input">
                <form onSubmit={handleSubmit} className="signup-form">
                {/* <label>Name: </label>
                    <input type="text" name="name" id="name" onChange={handleChange}/>
                    <br /> */}
                <label>Email: </label>
                    <input type="text" name="email" id="email" onChange={handleChange}/>
                    <br />
                <label>Password: </label>
                    <input type="password" name="password" id="password" onChange={handleChange}/>
                        <div className="submit">
                            <input type="submit" value="Log-In"/>
                        </div>
                </form>
            </div>
        </div>
    )
}