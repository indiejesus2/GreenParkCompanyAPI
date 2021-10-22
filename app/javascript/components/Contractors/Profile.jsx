import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import EditProfile from '../Contractors/EditProfile'
import NavBar from '../NavBar'

const Profile = props => {

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(true)
        // props.history.push(`contractors/${props.contractor.id}/editprofile`)
    }


    return (
        <div className="employer-profile">
                <NavBar handleSignout={props.signOut} contractor={props.contractor} user="contractor" />

            <h5>Email: {props.contractor.email}</h5>
            <h5>Subscription: {props.contractor.subscription}</h5>
            <h5>Status: {props.contractor.status == true ? "True" : "False"}</h5>
            <Button onClick={handleClick}>Edit Profile</Button>
            <EditProfile contractor={props.contractor} show={show} updateProfile={props.updateProfile}/>
        </div>
    )
}

export default Profile