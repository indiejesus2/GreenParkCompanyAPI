import React from 'react'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import { Form, FloatingLabel, Modal, Button, Row, Col } from 'react-bootstrap'

export default function EditProfile(props) {
    
    const employer = props.contractor

    const history = useHistory()

    const formatPhoneNumber = (value) => {

        if (!value) return value;
    
        const phoneNumber = value.replace(/[^\d]/g, "");
    
        const phoneNumberLength = phoneNumber.length;
    
        if (phoneNumberLength < 4) return phoneNumber;
    
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`
        }
    
        return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6, 10)}`;
    
    }

    const handleSubscription = () => {
        if (employer.status != true) {
            return (
                <Button>Modify/Cancel Subscription</Button>
            )
        } else {
            return (
                    <div>

                        <Row className="mb-3">
                            <Form.Group as={Col}>
                            <FloatingLabel label="Subscription">
                                <Form.Control name="subscription" value={employer.monthly == true ? "Monthly" : "Yearly"} readOnly />
                            </FloatingLabel>
                            </Form.Group>
                        </Row>
                        <div className="d-flex justify-content-around">
                            <Button type="submit" onClick={formik.handleSubmit}>Save Changes</Button>
                        </div>
                    </div>
            )
        }
    }

    const handleSideNav = () => {
        if (employer.status == true) {
            return (
                <SideNavBar profile={props.profile} user="contractor"/>
            )
        }
    }
    
    const formik = useFormik({
        initialValues: {
            id: employer.id,
            email: employer.email,
            name: employer.name,
            phone: employer.phone,
            description: employer.description,
            monthly: employer.monthly,
            yearly: employer.yearly
        },
        onSubmit: values => {
            props.updateProfile(values)
            if (employer.monthly != true && employer.yearly != true) {
                history.push('/contractors/subscription')
            } else {
                history.push(`/contractors/${values.id}/profile`)
            }
        }
    })


    return (
        <div className="employees">
            <NavBar handleSignout={props.signOut} profile={props.profile} loggedIn={props.loggedIn} user="contractor" />
            <div className="d-flex">
                {handleSideNav}

                <div className="dashboard">
                    <h1>Edit Profile</h1>
                    <div className="input">
                    <Form onSubmit={formik.handleSubmit} className="profile-form">
                        <Row className="mb-3">
                        <Form.Group as={Col}>
                        <FloatingLabel label="Company Name">
                            <Form.Control type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
                        </FloatingLabel>
                        </Form.Group>
                        </Row>
                        <Row className="mb-3">
                        <Form.Group as={Col}>
                        <FloatingLabel label="Email">
                            <Form.Control type="text" name="email" value={formik.values.email} onChange={formik.handleChange} />
                        </FloatingLabel>
                        <FloatingLabel label="Phone Number">
                            <Form.Control type="text" name="phone" value={formatPhoneNumber(formik.values.phone)} onChange={formik.handleChange} />
                        </FloatingLabel>
                        </Form.Group>
                        </Row>
                        <Row className="mb-3">
                        <Form.Group as={Col}>
                        <FloatingLabel label="Description">
                            <Form.Control as="textarea" name="description" value={formik.values.description} onChange={formik.handleChange} />
                        </FloatingLabel>
                        </Form.Group>
                        </Row>
                        {handleSubscription}
                    </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}