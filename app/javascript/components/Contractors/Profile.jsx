import React, { useState, useEffect } from 'react'
import { Button, Table, Card, CloseButton } from 'react-bootstrap'
import EditProfile from '../Contractors/EditProfile'
import NavBar from '../NavBar'
import SideNavBar from '../SideNavBar'

const Profile = props => {

    // const [show, setShow] = useState(false)
    const [contractor, setContractor] = useState(props.contractor)

    // const handleClose = () => setShow(false)
    // const handleShow = () => setShow(true)

    const handleClick = () => {
        props.history.push(`/employers/${contractor.id}/editprofile`)
    }

    const handleClose = () => {
        props.history.push('/employers')
    }

    const handleBilling = () => {
        if (!!props.subscription && props.subscription.next_billing != props.subscription.cancel_at) {
            return (
                new Date(props.subscription.next_billing*1000).toLocaleDateString()
            )
        } else {
            return (
                "Cancelled"
            )
        }
    }

    return (
        <div className="employees">
            <NavBar handleSignout={props.signOut} loggedIn={props.loggedIn} contractor={contractor} user="contractor" />
            <div className="page">
                <SideNavBar contractor={contractor} user="contractor"/>
                <div className="dashboard">
                    <div className="employee-job">
                    <h1>Profile</h1>
                    <Card>
                        <CloseButton variant="white" onClick={handleClose} style={{color: "#3fa1fc", position: "relative", top: 15+"px", right: 15+"px", alignSelf:"end"}}/> 
                        <Card.Body style={{"padding-top": "10px"}}>
                            <div className="job-body"
                                // style={{"width": 50 + "%"}}
                            >
                            <div className="job-table">
                            <Table>
                                <tbody>
                                    <tr style={{ "border-bottom-width": 0 + "px"}}>
                                        <td style={{"padding": "0px" }}>
                                            Company Name: 
                                        </td>
                                        <td style={{"padding": "0px" }}>
                                            {contractor.name}
                                        </td>
                                    </tr>
                                    <tr style={{ "border-bottom-width": 0 + "px"}}>
                                        <td style={{"padding": "0px" }}>
                                            Email: 
                                        </td>
                                        <td style={{"padding": "0px" }}>
                                            {contractor.email}
                                        </td>
                                    </tr>
                                    <tr style={{ "border-bottom-width": 0 + "px"}}>
                                        <td style={{"padding": "0px" }}>
                                            Phone Number: 
                                        </td>
                                        <td style={{"padding": "0px" }}>
                                            {contractor.phone}
                                        </td>
                                    </tr>
                                    <tr style={{ "border-bottom-width": 0 + "px"}}>
                                        <td style={{"padding": "0px" }}>
                                            Subscription: 
                                        </td>
                                        <td style={{"padding": "0px" }}>
                                            {contractor.monthly == true ? "Monthly" : "Yearly"}
                                        </td>
                                    </tr>
                                    <tr style={{ "border-bottom-width": 0 + "px"}}>
                                        <td style={{"padding": "0px" }}>
                                            Next Billing Date: 
                                        </td>
                                        <td style={{"padding": "0px" }}>
                                            {handleBilling()}
                                        </td>
                                    </tr>
                                    <tr style={{ "border-bottom-width": 0 + "px"}}>
                                        <td style={{"padding": "0px" }}>
                                            Card:
                                        </td>
                                        <td style={{"padding": "0px" }}>
                                            {contractor.current_card}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            </div>
                                
                            </div>                                
                                        <div className="description"
                                                // style={{"width": 50 + "%"}}
                                        >
                        {/* <span>{job.description}</span> */}
                                        <div id="description-details">
                                            <h2>Description:</h2>
                                        </div>
                                        <div className="description-box">
                                        <p>
                                            {contractor.description}
                                        </p>
                                        </div>
                                    </div>
                        </Card.Body>
                        <div className="d-flex justify-content-center">
                                    <Button onClick={handleClick}>Edit Profile</Button>
                                </div>
                    </Card>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Profile