import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import EditProfile from '../Contractors/EditProfile'
import NavBar from '../NavBar'

const Profile = props => {

    const [show, setShow] = useState(false)
    const [contractor, setContractor] = useState(props.contractor)

    const handleClick = () => {
        setShow(true)
        // props.history.push(`contractors/${props.contractor.id}/editprofile`)
    }

    useEffect(() => {
        if (props.contractor != contractor) {
            setContractor(props.contractor)
        }
    }) 


    return (
        <div className="employer-profile">
                <NavBar handleSignout={props.signOut} contractor={contractor} user="contractor" />

            <h5>Email: {contractor.email}</h5>
            <h5>Subscription: {contractor.subscription}</h5>
            <h5>Status: {contractor.status == true ? "True" : "False"}</h5>
            <Button onClick={handleClick}>Edit Profile</Button>
            <EditProfile contractor={contractor} show={show} updateProfile={props.updateProfile}/>
        </div>
    )
}

export default Profile