import React, { useState } from 'react'
import { Form, Button, FloatingLabel, Row, Col, InputGroup, Modal, Alert } from 'react-bootstrap'
// import {useprops} from 'props'
import * as yup from 'yup'

const StripeForm = (props) => {

    const [alert, setAlert] = useState(false)

    const months = [
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

    // debugger

    return (
            <div className="stripeModal">
                <React.Fragment>
                        <h1 id="header">Billing Information</h1>            
                    <Alert show={alert}>
                        {error}
                    </Alert>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationprops01">
                        <Form.Control
                            type="text"
                            name="card_number"
                            placeholder="Card Number"
                            value={props.values.card_number}
                            onChange={props.handleChange}
                            isInvalid={props.errors.email}
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
                        <Form.Group as={Col} controlId="validationprops02">

                            <Form.Control
                                type="text"
                                name="cvc"
                                placeholder="CVC"
                                value={props.values.cvc}
                                onChange={props.handleChange}
                                isInvalid={props.errors.email}
                                onBlur={props.handleBlur}
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
                    </Row>

                    <Row className="cardInfo">
                        <Form.Group as={Col} className="mb-3" md="4" >
                            <Form.Label>
                                Exp. Month
                            </Form.Label>
                            <Form.Select
                                name="exp_month"
                                onChange={props.handleChange}
                                value={props.values.exp_month}
                                // defaultValue={props.values.exp_month}
                                style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                                // isInvalid={props.touched.exp_month && props.errors.exp_month}
                                // onBlur={props.handleBlur}
                            >
                                {months.map(month => 
                                    <option key={month} value={month}>{month}</option>    


                                )}
                                {/* {props.errors.exp_month && props.touched.exp_month && (
                                    <div style={{ color: "red"}}>{props.errors.exp_month}</div>
                                )} */}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" md="4">
                            <Form.Label>
                                Exp. Year
                            </Form.Label>
                            <Form.Select
                                name="exp_year"
                                onChange={props.handleChange}
                                // value={props.values.exp_year}
                                // defaultValue={props.values.exp_year}
                                style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}}
                                // isInvalid={props.touched.exp_year && props.errors.exp_year}
                                // onBlur={props.handleBlur}
                            >
                                {years.map(year => 
                                    <option key={year} value={year}>{year}</option>    
                                )}
                                {/* {props.errors.exp_year && props.touched.exp_year && (
                                    <div style={{ color: "red"}}>{props.errors.exp_year}</div>
                                )} */}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <div>
                        <Button variant="primary" type="submit" onClick={props.handleConfirmation} style={{ "width": 100 + "%"}}>Submit Info</Button>
                    </div>
                </React.Fragment>
            </div>
    )

}

export default StripeForm