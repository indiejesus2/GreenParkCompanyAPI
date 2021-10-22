import React, { useState, useEffect } from 'react'
import {Button} from 'react-bootstrap'
import ConfirmSubscription from './ConfirmSubscription'
import NavBar from '../NavBar'

const Subscription = (props) => {

    const [subscription, setSubscription] = useState("")
    const [id, setId] = useState(props.contractor.id)
    const [show, setShow] = useState(false)

    useEffect(() => {
        setId(props.contractor.id)
    })

    const handleClick = (e) => {
        e.preventDefault()
        setSubscription(e.target.value)
        setShow(true)
    }
        
    const handleSubmit = () => {
        let values = {
            subscription: subscription, 
            id: id
        }
        props.updateSubscription(values)
        props.history.push("/contractors")
    }

    return (
        <div className="subscription">
            <NavBar handleSignout={props.signOut}/>
            <h1>Subscription</h1>
            <div className="subscriptions">

            <div className="monthly">
                <h1>Monthly</h1>
                <h3>$14.95</h3>
                <ul>
                    <li>Unlimited Job Postings</li>
                    <li>Search Directory of Candidates</li>
                </ul>
                <Button value="Monthly" onClick={handleClick}>Monthly</Button>
            </div>
            <div className="vl">

            </div>
            <div className="yearly">
                <h1>Yearly</h1>
                <h3>$149.95</h3>
                <ul>
                    <li>Unlimited Job Postings</li>
                    <li>Search Directory for Candidates</li>
                </ul>
                <Button value="Yearly" onClick={handleClick}>Yearly</Button>
            </div>
            </div>
            <ConfirmSubscription handleSubmit={handleSubmit} show={show} />
        </div>
    )
}

export default Subscription