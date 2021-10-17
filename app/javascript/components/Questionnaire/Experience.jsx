import React from 'react'
import { Form, FloatingLabel, Button, Row, Col } from 'react-bootstrap'

const Experience = props => {

    const states = [
        "--",
        "AL",
        "AK",
        "AZ",
        "AR",
        "CA",
        "CO",
        "CT",
        "DE",
        "FL",
        "GA",
        "HI",
        "ID",
        "IL",
        "IN",
        "IA",
        "KS",
        "KY",
        "LA",
        "ME",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT",
        "NE",
        "NV",
        "NH",
        "NJ",
        "NM",
        "NY",
        "NC",
        "ND",
        "OH",
        "OK",
        "OR",
        "PA",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VT",
        "VA",
        "WA",
        "WV",
        "WI",
        "WY"
    ]

    return(
        <div className="experience">

        <Row className="mb-3">

        <Form.Group as={Col} >
            <FloatingLabel label="Title">
            <Form.Control type="text" name={`experience.title`} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>

        <FloatingLabel label="Company">
            <Form.Control type="text" name={`experience.company`} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Row className="mb-3">

        <Form.Group as={Col}>
        <FloatingLabel label="City">
            <Form.Control type="text" name={`experience.city`} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col}>
        <FloatingLabel label="State">
            <Form.Select name={`experience.state`} onChange={props.handleChange}>
            {states.map(state => 
                <option defaultValue="--">{state}</option>
            )}
            </Form.Select>
        </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>
        <FloatingLabel label="ZipCode">
            <Form.Control type="text" name={`experience.zipcode`} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
        <FloatingLabel label="Phone">
            <Form.Control type="text" name={`experience.phone`} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>
        <FloatingLabel label="Email">
            <Form.Control type="text" name={`experience.email`} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
        <FloatingLabel label="Start Date">
            <Form.Control type="text" name={`experience.startdate`} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>
        <FloatingLabel label="End Date">
            <Form.Control type="text" name={`experience.enddate`} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
        <FloatingLabel label="Description">
            <Form.Control as="textarea" name={`experience.description`} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Form.Label>
            <Form.Check label="Current Job" name={`experience.current`} onChange={props.handleChange}/>
        </Form.Label>
        </div>
    )
}

export default Experience