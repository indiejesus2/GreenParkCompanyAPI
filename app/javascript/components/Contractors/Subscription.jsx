import React, { useState, useEffect } from 'react'
import { Form, Button, FloatingLabel, Row, Col, InputGroup, Modal, Alert } from 'react-bootstrap'
import {useFormik} from 'formik'
import * as yup from 'yup'
import ConfirmSubscription from './ConfirmSubscription'
import StripeForm from './StripeForm'
import NavBar from '../NavBar'

const Subscription = (props) => {

    debugger

    const [monthly, setMonthly] = useState(false)
    const [yearly, setYearly] = useState(false)
    const [id, setId] = useState(props.contractor.id)
    const [show, setShow] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [plan, setPlan] = useState(-1)
    const [active, setActive] = useState(false)

    const schema = yup.object().shape({
        card_number: yup.string().required(),
        // exp_month: yup.string().required(),
        // exp_year: yup.string().required(),
        cvc: yup.string().required()
    })

    // userEffect(() => {
    //     setId(props.contractor.id)
    // })

    // useEffect(() => {
    //     setId(props.contractor.id)
    //     // props.errors
    // }, (props.contractor))


    
    const formik = useFormik({
        initialValues: {
            employer_id: id,
            stripe_id: props.contractor.stripe_id,
            plan_id: plan,
            active: active,
            card_number: "",
            exp_month: "",
            exp_year: "",
            cvc: ""
        },
        validationSchema: schema,
        onSubmit: values => {
            props.addPayment(values)
            props.history.push("/contractors")
        }
        // props.updateSubscription(values)
    })
    
    const handleClick = (duration) => {
        // e.preventDefault()
        if (duration == "Monthly") {
            setPlan(1)
            formik.setFieldValue('plan_id', 1)
            // setActive(true)
        } else {
            setPlan(2)
            formik.setFieldValue('plan_id', 2)
        }
        setActive(true)
        formik.setFieldValue('active', true)
        // setShowForm(true)
    }

    const handleMonthly = () => {
        if (plan == 1) {
            // formik.setFieldValue('plan_id', plan)
            // formik.setFieldValue('active', active)
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
        // formik.setFieldValue('plan_id', plan)
        // formik.setFieldValue('active', active)
        if (plan == 2) {
            return (
                <Button value="Yearly" onClick={() => handleClick("Yearly")} style={{backgroundColor: "green"}}>Yearly</Button>
            )
        } else {
            return (
                <Button value="Yearly" onClick={() => handleClick("Yearly")}>Yearly</Button>
            )
        }
    }

    const handleConfirmation = () => {
        setShowForm(false)
        setShow(true)
    }

    return (
        <div className="subscription">
            {/* <NavBar handleSignout={props.signOut} contractor={props.contractor} loggedIn={props.loggedIn} user="contractor" /> */}
        <Modal show animation centered fullscreen>
            <Modal.Body
                style={{
                    "paddingBlock": 0 + "px",
                    "backgroundColor": "black"
                }}
            >
            <Form onSubmit={formik.handleSubmit}>

            <h1>Subscription</h1>
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
                handleConfirmation={formik.handleSubmit}
                contractor={props.contractor}
                touched={formik.touched}
                onBlur={formik.handleBlur}
                stripeErrors={props.contractorErrors}
                errors={formik.errors}
            />
            {/* <ConfirmSubscription handleSubmit={handleSubmit} show={show} /> */}
            </Form>
            </Modal.Body>
        </Modal>
        </div>

    )
}

export default Subscription