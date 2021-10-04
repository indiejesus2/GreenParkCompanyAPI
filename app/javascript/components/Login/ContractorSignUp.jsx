import React, { useState } from 'react'

export default function ContractorSignUp(props) {

    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setState( prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (state.password == state.password_confirmation) {
            props.signUpContractor(state)
            props.history.push('/contractors/subscription')
        } else {
            alert("Passwords do not match.")
        }
    }

    return (
        <div className="signUp">
            <h1>Create an Account</h1>
            <p>Find a new hire today!</p>
            <div className="input">
                <form onSubmit={handleSubmit} className="signup-form">
                <label>Company: </label>
                    <input type="text" name="name" id="name" onChange={handleChange}/>
                    <br />
                <label>Email: </label>
                    <input type="text" name="email" id="email" onChange={handleChange}/>
                    <br />
                <label>Password: </label>
                    <input type="password" name="password" id="password" onChange={handleChange}/>
                    <br />
                <label>Confirm Password: </label>
                    <input type="password" name="password_confirmation" id="password_confirmation" onChange={handleChange}/>
                        <div className="submit">
                            <input type="submit" value="Sign-Up"/>
                        </div>
                </form>
            </div>
        </div>
    )
}