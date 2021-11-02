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
            <Form.Control type="text" name={`experience[0].title`} value={props.values.experience[0].title} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>

        <FloatingLabel label="Company">
            <Form.Control type="text" name={`experience[0].company`} value={props.values.experience[0].company} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Row className="mb-3">

        <Form.Group as={Col}>
        <FloatingLabel label="City">
            <Form.Control type="text" name={`experience[0].city`} value={props.values.experience[0].city} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col}>
        <FloatingLabel label="State">
            <Form.Select name={`experience[0].state`} value={props.values.experience[0].state} onChange={props.handleChange}>
            {states.map(state => 
                <option defaultValue="--">{state}</option>
            )}
            </Form.Select>
        </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>
        <FloatingLabel label="ZipCode">
            <Form.Control type="text" name={`experience[0].zipcode`} value={props.values.experience[0].zipcode} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
        <FloatingLabel label="Phone">
            <Form.Control type="text" name={`experience[0].phone`} value={props.values.experience[0].phone} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>
        <FloatingLabel label="Email">
            <Form.Control type="text" name={`experience[0].email`} value={props.values.experience[0].email} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
        <FloatingLabel label="Start Date">
            <Form.Control type="text" name={`experience[0].startdate`} value={props.values.experience[0].startdate} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>
        <FloatingLabel label="End Date">
            <Form.Control type="text" name={`experience[0].enddate`} value={props.values.experience[0].enddate} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
        <FloatingLabel label="Description">
            <Form.Control as="textarea" name={`experience[0].description`} value={props.values.experience[0].description} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Form.Label>
            <Form.Check label="Current Job" name={`experience[0].current`} value={props.values.experience[0].current} onChange={props.handleChange}/>
        </Form.Label>
        </div>
    )
}

export default Experience