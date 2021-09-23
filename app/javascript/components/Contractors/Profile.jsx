import React from 'react'

const Profile = props => {

    const handleClick = () => {
        props.history.push(`employers/${props.contractor.id}/edit_profile`)
    }

    return (
        <div className="contractor-profile">
            <h2>{props.contractor.name}</h2>
            <h5>{props.contractor.email}</h5>
            <button onClick={handleClick}>Edit</button>
        </div>
    )
}

export default Profile