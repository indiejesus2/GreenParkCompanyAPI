import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import EditProfile from '../Contractors/EditProfile'
import NavBar from '../NavBar'
import SideNavBar from '../SideNavBar'

const Profile = props => {

    const [show, setShow] = useState(false)
    const [contractor, setContractor] = useState(props.contractor)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleClick = () => {
        props.history.push(`/contractors/${contrator.id}/editprofile`)
    }

    return (
        <div className="employees">
            <NavBar handleSignout={props.signOut} loggedIn={props.loggedIn} contractor={contractor} user="contractor" />
            <div className="d-flex">
                <SideNavBar contractor={props.contractor} user="contractor"/>
                <div className="dashboard">

            <h5>Email: {contractor.email}</h5>
            <h5>Phone Number: {contractor.phone}</h5>
            <p>Description: {contractor.description}</p>
            <h5>Subscription: {contractor.monthly == true ? "Monthly" : "Yearly"}</h5>
            <div className="edit-button">
                <Button onClick={handleShow}>Edit Profile</Button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Profile