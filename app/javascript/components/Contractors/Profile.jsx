import React from 'react'

const Profile = props => {

    const handleClick = () => {
        props.history.push(`employers/${props.contractor.id}/edit_profile`)
    }


    return (
        <div className="employer-profile">
            <h5>Email: {props.contractor.email}</h5>
            <h5>Subscription: {props.contractor.subscription}</h5>
            <h5>Status: {props.contractor.status == true ? "True" : "False"}</h5>
            <button onClick={handleClick}>Edit</button>
        </div>
    )
}

export default Profile