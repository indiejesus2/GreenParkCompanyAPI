import React from 'react'
import NavBar from '../NavBar'
import { useFormik } from 'formik'
import { Form, FloatingLabel } from 'react-bootstrap'


export default function EditProfile(props) {

    const formik = useFormik({
        initialValues: {
            id: employer.id,
            email: employer.email,
            name: employer.name,
            subscription: employer.subscription
        },
        onSubmit: values => {
            props.updateProfile(values)
            props.history.push(`/employers/${values.id}/profile`)
        }
    })

    const employer = props.employer

    return (
        <div className="edit_contractor">
            <NavBar handleSignout={props.signOut} user="employer" />
            <h1>Edit Profile</h1>
            <div className="input">
                <Form onSubmit={handleSubmit}>
                    <FloatingLabel label="Email">
                        <Form.Control type="text" name="email" value={employer.email} onChange={formik.handleChange} />
                    </FloatingLabel>
                    <FloatingLabel label="Company Name">
                        <Form.Control type="text" name="name" value={employer.name} onChange={formik.handleChange} />
                    </FloatingLabel>
                    <FloatingLabel label="Subscription">
                        <Form.Check name="subscription" value={employer.subscription} onChange={formik.handleChange} />
                    </FloatingLabel>
                </Form>
            </div>
        </div>
    )
}