import React, { useState } from 'react'

export default function SignIn(props) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleChange = (event) => {
        return(
        event.target.name==="username"?setUsername(event.target.value):
        event.target.name==="password"?setPassword(event.target.value):
        ()=>{}
        )
    }
        
    const handleSubmit = (event) => {
        event.preventDefault()
        let state = {username: username, password: password}
        props.loginUser(state)
    }

        return (
            <div class="signin">
                <h1>Sign-In</h1>
            <div class="input">
                <form onSubmit={handleSubmit}>
                    <label>Username: </label>
                    <input type="text" name="username" id="username" onChange={handleChange}/>
                    <br />
                    <label>Password: </label>
                    <input type="password" name="password" id="password" onChange={handleChange}/>
                        <div class="submit">
                            <input type="submit" value="Log-In"/>
                        </div>
                </form>
            </div>
            </div>
        )
}