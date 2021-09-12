import React, { useState } from 'react'

export default function SignIn(props) {

    const [employee] = useState("employee")
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleChange = (event) => {
        return(
        event.target.name==="email"?setEmail(event.target.value):
        event.target.name==="password"?setPassword(event.target.value):
        ()=>{}
        )
    }
        
    const handleSubmit = (event) => {
        event.preventDefault()
        let state = {email: email, password: password}
        props.signIn(state)
    }

        return (
            <div className="signin">
                <h1>Sign-In</h1>
            <div className="input">
                <form onSubmit={handleSubmit}>
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