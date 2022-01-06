import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import EditProfile from '../Contractors/EditProfile'
import NavBar from '../NavBar'

const Profile = props => {

    const [show, setShow] = useState(false)
    const [contractor, setContractor] = useState(props.contractor)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleClick = () => {
        setShow(true)
    }

    return (
        <div className="employer-profile">
                <NavBar handleSignout={props.signOut} contractor={contractor} user="contractor" />

            <h5>Email: {contractor.email}</h5>
            <h5>Phone Number: {contractor.phone}</h5>
            <p>Description: {contractor.description}</p>
            <h5>Subscription: {contractor.monthly == true ? "Monthly" : "Yearly"}</h5>
            <div className="edit-button">
                <Button onClick={handleShow}>Edit Profile</Button>
            </div>
            <EditProfile contractor={contractor} show={show} updateProfile={props.updateProfile} handleClose={handleClose}/>
        </div>
    )
}

export default Profile