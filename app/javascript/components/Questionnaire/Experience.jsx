import React, { useState } from 'react'
import { Form, FloatingLabel, Button, Row, Col } from 'react-bootstrap'

const Experience = props => {

    const [id, setId] = useState(props.id)

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
            <Form.Control type="text" name={`experience.${id}.title`} value={props.values.experience.id.title} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>

        <FloatingLabel label="Company">
            <Form.Control type="text" name={`experience.${id}.company`} value={props.values.experience.id.company} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Row className="mb-3">

        <Form.Group as={Col}>
        <FloatingLabel label="City">
            <Form.Control type="text" name={`experience.${id}.city`} value={props.values.experience.id.city} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col}>
        <FloatingLabel label="State">
            <Form.Select name={`experience.${id}.state`} value={props.values.experience.id.state} onChange={props.handleChange}>
            {states.map(state => 
                <option defaultValue="--">{state}</option>
            )}
            </Form.Select>
        </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>
        <FloatingLabel label="ZipCode">
            <Form.Control type="text" name={`experience.${id}.zipcode`} value={props.values.experience.id.zipcode} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        </Row>
        {/* <Row className="mb-3">
        <Form.Group as={Col}>
        <FloatingLabel label="Phone">
            <Form.Control type="text" name={`experience.id[0].phone`} value={props.values.experience.id[0].phone} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>
        <FloatingLabel label="Email">
            <Form.Control type="text" name={`experience.id[0].email`} value={props.values.experience.id[0].email} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        </Row> */}
        <Row className="mb-3">
        <Form.Group as={Col}>
        <FloatingLabel label="Start Date">
            <Form.Control type="date" name={`experience.${id}.startdate`} value={props.values.experience.id.startdate} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col}>
        <FloatingLabel label="End Date">
            <Form.Control type="date" name={`experience.${id}.enddate`} value={props.values.experience.id.enddate} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
        <FloatingLabel label="Description">
            <Form.Control as="textarea" name={`experience.${id}.description`} value={props.values.experience.id.description} onChange={props.handleChange} />
        </FloatingLabel>
        </Form.Group>
        </Row>
        <Form.Label>
            <Form.Check label="Current Job" name={`experience.${id}.current`} value={props.values.experience.id.current} onChange={props.handleChange} defaultChecked={props.values.experience.id.current}/>
        </Form.Label>
        </div>
    )
}

export default Experience