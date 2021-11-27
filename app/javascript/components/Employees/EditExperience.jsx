import React from 'react'
import NavBar from '../NavBar'
import { Form, FloatingLabel, Button, Row, Col} from 'react-bootstrap'


export default function EditExperience(props) {

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

    return (
        <div className="experience">
            <NavBar handleSignout={props.signOut} profile={props.profile} user="employee" />

            <h1>Edit Experience</h1>
            <div className="input">
                <Form className="experience-form">
                <Row className="mb-3">

<Form.Group as={Col} >
    <FloatingLabel label="Title">
    <Form.Control type="text" name={props.experience.title} value={props.experience.title} onChange={props.handleChange} />
</FloatingLabel>
</Form.Group>
<Form.Group as={Col}>

<FloatingLabel label="Company">
    <Form.Control type="text" name={props.experience.company} value={props.experience.company} onChange={props.handleChange} />
</FloatingLabel>
</Form.Group>
</Row>
<Row className="mb-3">

<Form.Group as={Col}>
<FloatingLabel label="City">
    <Form.Control type="text" name={props.experience.city} value={props.experience.city} onChange={props.handleChange} />
</FloatingLabel>
</Form.Group>

<Form.Group as={Col}>
<FloatingLabel label="State">
    <Form.Select name={props.experience.state} value={props.experience.state} onChange={props.handleChange}>
    {states.map(state => 
        <option defaultValue="--">{state}</option>
    )}
    </Form.Select>
</FloatingLabel>
</Form.Group>
<Form.Group as={Col}>
<FloatingLabel label="ZipCode">
    <Form.Control type="text" name={props.experience.zipcode} value={props.experience.zipcode} onChange={props.handleChange} />
</FloatingLabel>
</Form.Group>
</Row>
{/* <Row className="mb-3">
<Form.Group as={Col}>
<FloatingLabel label="Phone">
    <Form.Control type="text" name={experience[0].phone} value={props.experience[0].phone} onChange={props.handleChange} />
</FloatingLabel>
</Form.Group>
<Form.Group as={Col}>
<FloatingLabel label="Email">
    <Form.Control type="text" name={experience[0].email} value={props.experience[0].email} onChange={props.handleChange} />
</FloatingLabel>
</Form.Group>
</Row> */}
<Row className="mb-3">
<Form.Group as={Col}>
<FloatingLabel label="Start Date">
    <Form.Control type="date" name={props.experience.startdate} value={props.experience.startdate} onChange={props.handleChange} />
</FloatingLabel>
</Form.Group>
<Form.Group as={Col}>
<FloatingLabel label="End Date">
    <Form.Control type="date" name={props.experience.enddate} value={props.experience.enddate} onChange={props.handleChange} />
</FloatingLabel>
</Form.Group>
</Row>
<Row className="mb-3">
<Form.Group as={Col}>
<FloatingLabel label="Description">
    <Form.Control as="textarea" name={props.experience.description} value={props.experience.description} onChange={props.handleChange} />
</FloatingLabel>
</Form.Group>
</Row>
<Form.Label>
    <Form.Check label="Current Job" name={props.experience.current} value={props.experience.current} onChange={props.handleChange} defaultChecked={props.experience.current}/>
</Form.Label>
                </Form>
            </div>
        </div>
    )
}