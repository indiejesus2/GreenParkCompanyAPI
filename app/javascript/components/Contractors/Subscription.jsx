import React, { useState, useEffect } from 'react'
import { Form, Button, FloatingLabel, Row, Col, InputGroup, Modal, Alert } from 'react-bootstrap'
import {useFormik} from 'formik'
import * as yup from 'yup'
import ConfirmSubscription from './ConfirmSubscription'
import StripeForm from './StripeForm'
import NavBar from '../NavBar'

const Subscription = (props) => {

    const [monthly, setMonthly] = useState(false)
    const [yearly, setYearly] = useState(false)
    const [id, setId] = useState(!!props.subscription?props.subscription.id:"")
    const [employerId, setEmployerId] = useState(props.contractor.id)
    const [show, setShow] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [plan, setPlan] = useState(!!props.subscription&&!!props.subscription.active?props.subscription.plan_id:"")
    const [active, setActive] = useState(!!props.subscription?props.subscription.active:false)
    const [nextBilling, setNextBilling] = useState(!!props.subscription?props.subscription.nextBilling:"")
    const [stripe, setStripe] = useState(!!props.subscription?props.subscription.stripe_id:"")

    const schema = yup.object().shape({
        card_number: yup.string().required(),
        expiryDate: yup.string().required("Invalid expiration date"),
        cvc: yup.string().required(),
        plan_id: yup.string().required("Please select a plan")
    })
    
    const formik = useFormik({
        initialValues: {
            id: id,
            employer_id: employerId,
            stripe_id: stripe,
            plan_id: plan,
            active: active,
            card_number: "",
            expiryDate: "",
            exp_month: "",
            exp_year: "",
            cvc: ""
        },
        validationSchema: schema,
        onSubmit: values => {
            // if (props.contractor.status == true && active == true) {
            // if (stripe != "" && props.contractor.status == true) {
            if (active == true && id != "") {
                props.updatePayment(values)
            // } else if (props.subscription.active == true && active == false){
            //     props.cancelPayment(values)
            } else {
                props.addPayment(values)
            }
            props.history.push(`/employers`)
        }
        // props.updateSubscription(values)
    })
    
    const handleClick = (duration) => {
        // e.stopPropagation()
        // e.preventDefault()
        if (duration == "Monthly") {
            setPlan(1)
            formik.setFieldValue('plan_id', 1)
            // setPlan(3)
            // formik.setFieldValue('plan_id', 3)
            // setActive(true)
        } else {
            setPlan(2)
            formik.setFieldValue('plan_id', 2)
            // setPlan(4)
            // formik.setFieldValue('plan_id', 4)
        }
        setActive(true)
        formik.setFieldValue('active', true)
        // setShowForm(true)
    }

    const handleMonthly = () => {
        if (plan == 1) {
        // if (plan == 3) {
            return (
                <Button value="Monthly" onClick={() => handleClick("Monthly")} style={{backgroundColor: "green"}}>Monthly</Button>
            )
        } else {
            return (
                <Button value="Monthly" onClick={() => handleClick("Monthly")}>Monthly</Button>
            )
        }
    }
    
    const handleYearly = () => {
        if (plan == 2) {
        // if (plan == 4) {
        return (
                <Button value="Yearly" onClick={() => handleClick("Yearly")} style={{backgroundColor: "green"}}>Yearly</Button>
            )
        } else {
            return (
                <Button value="Yearly" onClick={() => handleClick("Yearly")} isinvalid={formik.errors.plan_id}>Yearly</Button>
            )
        }
    }

    const handleCancelation = () => {
        let cancellation = {
            id: id,
            employer_id: employerId,
            active: false,
            stripe_id: props.subscription.stripe_id,
        } 
        props.updatePayment(cancellation)
    }

    const handleConfirmation = () => {
        setShow(true)
    }

    

    const handleNavBar = () => {
        // debugger
        if (nextBilling != "" && new Date(props.subscription.next_billing*1000) > new Date()) {
            return (
                <div style={{"height": 125 + "px"}}>
                    <NavBar handleSignout={props.signOut} contractor={props.contractor} loggedIn={props.loggedIn} user="contractor" />
                </div>
            )
        }
    }

    return (
        <div className="subscription">
            {handleNavBar()}
        {/* <Modal show animation centered>
            <Modal.Body
                style={{
                    "paddingBlock": 0 + "px",
                    "backgroundColor": "black"
                }}
                > */}

            <Form onSubmit={formik.handleSubmit}>

            <h1 style={{"marginInlineStart": 25+"px"}}>Subscription</h1>
            <div className="subscriptions mb-3">

            <div className="monthly">
                <h1>Monthly</h1>
                <h3>$14.95</h3>
                <ul>
                    <li>Unlimited Job Postings</li>
                    <li>Search Directory of Candidates</li>
                </ul>
                {handleMonthly()}
                {/* <Button value="Monthly" onClick={handleClick}>Monthly</Button> */}
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
                {handleYearly()}
                {/* <Button value="Yearly" onClick={handleClick}>Yearly</Button> */}
            </div>
            </div>
            <StripeForm 
                handleChange={formik.handleChange}
                values={formik.values}
                handleSubmit={formik.handleSubmit}
                contractor={props.contractor}
                subscription={props.subscription}
                touched={formik.touched}
                onBlur={formik.handleBlur}
                stripeErrors={props.contractorErrors}
                errors={formik.errors}
                handleConfirmation={handleConfirmation}
            />
            {/* {cancellation()} */}
            <ConfirmSubscription handleSubmit={handleCancelation} show={show} />
            </Form>
            {/* </Modal.Body>
        </Modal> */}
        </div>

    )
}

export default Subscription