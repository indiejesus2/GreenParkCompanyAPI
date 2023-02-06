import React, { useState, useEffect } from 'react'
import { Form, Button, FloatingLabel, Row, Col, InputGroup, Modal, Alert } from 'react-bootstrap'
import { usePaymentInputs } from 'react-payment-inputs';

// import {useprops} from 'props'
import * as yup from 'yup'

const StripeForm = (props) => {

    const [alert, setAlert] = useState(false)
    const [active, setActive] = useState(!!props.subscription?props.subscription.active:false)
    const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

    const months = [
        "--",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12"
    ]

    const years = [
        "----",
        "2022",
        "2023",
        "2024",
        "2025",
        "2026",
        "2027",
        "2028",
        "2029",
        "2030",
        "2031",
        "2032"
    ]

    const [error, setError] = useState(props.stripeErrors)
    const [formError, setFormError] = useState(props.errors.plan_id)

    useEffect(() => {
        if (Array.isArray(error) || (!!formError && props.touched.plan_id)) {
            setAlert(true)
        } else {
            setAlert(false)
        }
    })

    const cancellation = () => {
        if (active == true) {
            return (
                <Button onClick={() => props.handleConfirmation()}>Cancel Subscription</Button>
                // <div className="d-flex justify-center mt-3" style={{width: 100 + "%"}}>
                // </div>
            )
        }
    }


    return (            
            <div className="stripeModal">
                <React.Fragment>
                        <h1 id="header">Billing Information</h1>            
                    <Alert show={alert} style={{ maxWidth: 500 + "px"}}>
                        {error}
                        {props.errors.plan_id && props.touched.plan_id && (
                            <div style={{ color: "red"}}>{props.errors.plan_id}</div>
                        )}
                    </Alert>                    
                <div>
                    <Row>
                        <Form.Group as={Col} controlId="validationprops01" className="mb-3">
                            <Form.Label>
                                Card Number
                            </Form.Label>
                        <Form.Control
                            {...getCardNumberProps ({ onChange: props.handleChange })}
                            name="card_number"
                            placeholder="#### #### #### ####"
                            value={props.values.card_number}
                            // onChange={props.handleChange}
                            style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                            isInvalid={props.errors.card_number && props.touched.card_number}
                            onBlur={props.handleBlur}
                            // style={{
                            //     "padding": 5 + "px",
                            //     "width": 75 + "%"
                            // }}
                            />
                            {/* <Form.Control.Feedback type="invalid" tooltip>
                                {props.errors.email}
                            </Form.Control.Feedback> */}
                            {props.errors.card_number && props.touched.card_number && (
                                <div style={{ color: "red"}}>{props.errors.card_number}</div>
                                )}
                        </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group as={Col} className="mb-3">
                            <Form.Label>
                                Expiration Date
                            </Form.Label>
                            <Form.Control
                                {...getExpiryDateProps({ onChange: props.handleChange })}
                                name="expiryDate"
                                // onChange={props.handleChange}
                                value={props.values.expiryDate}
                                // defaultValue={props.values.expiryDate}
                                style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                                isInvalid={props.errors.expiryDate && props.touched.expiryDate}
                                onBlur={props.handleBlur}
                            />
                               
                                {props.errors.expiryDate && props.touched.expiryDate && (
                                    <div style={{ color: "red"}}>{props.errors.expiryDate}</div>
                                )}
                            {/* </Form.Select> */}
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="validationprops02">
                            <Form.Label>
                                CVC
                            </Form.Label>
                            <Form.Control
                                {...getCVCProps({ onChange: props.handleChange })}
                                // type="text"
                                name="cvc"
                                placeholder="###"
                                value={props.values.cvc}
                                isInvalid={props.errors.cvc && props.touched.cvc}
                                onBlur={props.handleBlur}
                                style={{ "backgroundColor": "#2f2f2f", "color": "#fff" }}
                                // style={{
                                //     "padding": 5 + "px",
                                //     "width": 15 + "%",
                                //     "marginLeft": 5 + "px"
                                // }}
                                />
                                {props.errors.cvc && props.touched.cvc && (
                                    <div style={{ color: "red"}}>{props.errors.cvc}</div>
                                    )}
                        </Form.Group>

                        {/* <input  value={props.values.cvc} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} /> */}
                    </Row>
                        {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
                </div>
                    <div>
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>
                                Trial Period Code
                            </Form.Label>
                            <Form.Control
                                name="trial"
                                value={props.values.trial}
                                style={{ "backgroundColor": "#2f2f2f", "color": "#fff" }}
                                onChange={props.handleChange}
                            />
                        </Form.Group>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <Button variant="primary" type="submit" onClick={() => props.handleSubmit} 
                        // style={{ "width": 100 + "%"}}
                    >Submit Info</Button>
                        {cancellation()}
                    </div>
                </React.Fragment>
            </div>
    )

}

export default StripeForm

