import React, { useState, useEffect } from 'react'
import ConfirmSubscription from './ConfirmSubscription'

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
        props.updateSubscription(subscription, id)
    }

    return (
        <div className="subscription">
            <div className="monthly">
                <h1>Monthly Subscription</h1>
                <h3>$14.95</h3>
                <ul>
                    <li>Unlimited Job Postings</li>
                    <li>Search Directory of Candidates</li>
                </ul>
                <button value="Monthly" onClick={handleClick}>Monthly</button>
            </div>
            <div className="yearly">
                <h1>Yearly Subscription</h1>
                <h3>$149.95</h3>
                <ul>
                    <li>Unlimited Job Postings</li>
                    <li>Search Directory for Candidates</li>
                </ul>
                <button value="Yearly" onClick={handleClick}>Yearly</button>
            </div>
            <ConfirmSubscription handleSubmit={handleSubmit} show={show} />
        </div>
    )
}

export default Subscription