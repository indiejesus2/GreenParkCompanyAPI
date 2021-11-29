import React from 'react'
import NavBar from '../NavBar'
import { useFormik } from 'formik'

import { Form, FloatingLabel, Button, Row, Col} from 'react-bootstrap'


export default function AddExperience(props) {

    const states = [
        "--",
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Lousiana",
        "Maine",
        "Maryland",
        "Massachussetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ]

    const experience = props.experience.find(exp => exp.id == props.match.params.id)

    return (
        <div className="experience">
            <NavBar handleSignout={props.signOut} profile={props.profile} user="employee" />

            <h1>Edit Experience</h1>
            <div className="input">
`           <Form className="experience-form">
                <Row className="mb-3">

                <Form.Group as={Col} >
                    <FloatingLabel label="Title">
                    <Form.Control type="text" name="title" value={experience.title} onChange={props.handleChange} />
                </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col}>
            <FloatingLabel label="Company">
                <Form.Control type="text" name="company" value={experience.company} onChange={props.handleChange} />
            </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">

            <Form.Group as={Col}>
            <FloatingLabel label="City">
                <Form.Control type="text" name="city" value={experience.city} onChange={props.handleChange} />
            </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col}>
            <FloatingLabel label="State">
                <Form.Select name="state" value={experience.state} onChange={props.handleChange}>
                {states.map(state => 
                    <option defaultValue="--">{state}</option>
                )}
                </Form.Select>
            </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col}>
            <FloatingLabel label="ZipCode">
                <Form.Control type="text" name="zipcode" value={experience.zipcode} onChange={props.handleChange} />
            </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col}>
            <FloatingLabel label="Start Date">
                <Form.Control type="date" name="startdate" value={experience.startdate} onChange={props.handleChange} />
            </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col}>
            <FloatingLabel label="End Date">
                <Form.Control type="date" name="enddate" value={experience.enddate} onChange={props.handleChange} />
            </FloatingLabel>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col}>
            <FloatingLabel label="Description">
                <Form.Control as="textarea" name="description" value={experience.description} onChange={props.handleChange} />
            </FloatingLabel>
            </Form.Group>
            </Row>
            <Form.Label>
                <Form.Check label="Current Job" name="current" value={experience.current} onChange={props.handleChange} defaultChecked={props.experience.current}/>
            </Form.Label>
                            </Form>
                        </div>
                    </div>
                )
            }