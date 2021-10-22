import React from 'react'
import { useFormik } from 'formik'
import { Form, FloatingLabel, Modal, Button } from 'react-bootstrap'


export default function EditProfile(props) {
    
    const employer = props.contractor
    
    const formik = useFormik({
        initialValues: {
            id: employer.id,
            email: employer.email,
            name: employer.name,
            subscription: employer.subscription
        },
        onSubmit: values => {
            props.updateProfile(values)
            props.history.push(`/contractors/${values.id}/profile`)
        }
    })


    return (
        <div className="edit_contractor">
            <Modal show={props.show}>
            <div className="input">
                <Modal.Header closeButton>
                <Modal.Title>
                <h1>Edit Profile</h1>

                </Modal.Title>
                </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>
                    <FloatingLabel label="Email">
                        <Form.Control type="text" name="email" value={formik.values.email} onChange={formik.handleChange} />
                    </FloatingLabel>
                    <FloatingLabel label="Company Name">
                        <Form.Control type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
                    </FloatingLabel>
                    <FloatingLabel label="Subscription">
                        <Form.Control name="subscription" value={employer.subscription} readOnly />
                    </FloatingLabel>
                    <Modal.Footer>
                        <Button variant="success">Modify/Cancel Subscription</Button>
                        <Button type="submit" onClick={formik.handleSubmit}>Save Changes</Button>
                    </Modal.Footer>
                </Form>
                </Modal.Body>
            </div>
        </Modal>
        </div>
    )
}