import React from 'react'
import NavBar from '../NavBar'
import { useFormik } from 'formik'
import { Form, FloatingLabel, Button, Row, Col} from 'react-bootstrap'
import SideNavBar from '../SideNavBar'

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

    const formik = useFormik({      
        initialValues: {
            employee_id: props.employee.id,
            title: "",
            company: "",
            city: "",
            state: "",
            zipcode: "",
            startdate: "",
            enddate: "",
            description: "",
            current: ""
        },
        onSubmit: values => {
            props.addExperience(values)
            props.history.push(`/employees/${values.employee_id}/profile`)
        }
    })

    return (
        <div className="employees">
        <NavBar handleSignout={props.signOut} profile={props.profile} loggedIn={props.loggedIn} user="employee" />
        <div className="d-flex">
            <SideNavBar profile={props.profile} user="employee"/>
            <div className="dashboard">
            <h1>Add Experience</h1>
            <div className="input">
`           <Form className="profile-form">
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <FloatingLabel label="Title">
                        <Form.Control type="text" name="title" value={formik.values.title} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} onChange={formik.handleChange} />
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <FloatingLabel label="Company">
                            <Form.Control type="text" name="company" value={formik.values.company} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} onChange={formik.handleChange} />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <FloatingLabel label="City">
                            <Form.Control type="text" name="city" value={formik.values.city} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} onChange={formik.handleChange} />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <FloatingLabel label="State">
                        <Form.Select name="state" value={formik.values.state} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} onChange={formik.handleChange}>
                        {states.map(state => 
                            <option defaultValue="--">{state}</option>
                        )}
                        </Form.Select>
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <FloatingLabel label="ZipCode">
                        <Form.Control type="text" name="zipcode" value={formik.values.zipcode} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} onChange={formik.handleChange} />
                    </FloatingLabel>
                    </Form.Group>
                </Row>
                
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <FloatingLabel label="Start Date">
                            <Form.Control type="date" name="startdate" value={formik.values.startdate} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} onChange={formik.handleChange} />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <FloatingLabel label="End Date">
                            <Form.Control type="date" name="enddate" value={formik.values.enddate} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} onChange={formik.handleChange} />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <FloatingLabel label="Description">
                            <Form.Control as="textarea" name="description" value={formik.values.description} style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} onChange={formik.handleChange} />
                        </FloatingLabel>
                    </Form.Group>
                </Row>

                <Form.Label>
                    <Form.Check label="Current Job" name="current" value={formik.values.current} onChange={props.handleChange} defaultChecked={formik.values.current}/>
                </Form.Label>
                
                <div className="submit">
                    <Button type="submit" value="Save Changes" onClick={formik.handleSubmit}>Save Changes</Button>
                </div>
                
                </Form>
                </div>
            </div>
            </div>
        </div>
        )
    }