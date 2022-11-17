import React from 'react'
import { useFormik } from 'formik'
import { useHistory, Redirect } from 'react-router-dom'
import { Form, FloatingLabel, Modal, Button, Row, Col } from 'react-bootstrap'
import NavBar from '../NavBar'
import SideNavBar from '../SideNavBar'

const EditEmployerAdmin = (props) => {

    
    const employer = props.employers.find(employer => employer.id == props.match.params.employer_id)

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

    // const modifySubscription = () => {
    //     history.push("/employers/updatesubscription")
    //     // <Redirect to="/employers/subscription" />
    // }

    // const handleSubscription = () => {
    //     if (employer.status != true) {
    //         return (

    //         )
    //     } else {
    //         return (
    //             <div>
    //                     <Row className="mb-3">
    //                         <Form.Group as={Col}>
    //                         <FloatingLabel label="Subscription">
    //                             <Form.Control name="subscription" style={{ "backgroundColor": "#717272", "color": "#fff"}} value={employer.monthly == true ? "Monthly" : "Yearly"} />
    //                         </FloatingLabel>
    //                         </Form.Group>
    //                     </Row>
    //                     <div className="d-flex justify-content-around">
    //                         <Button onClick={() => modifySubscription()}>Modify Subscription</Button>
    //                         <Button type="submit" onClick={formik.handleSubmit}>Save Changes</Button>
    //                     </div>
    //                 </div>
    //         )
    //     }
    // }

    const handleSideNav = () => {
        if (employer.status == true) {
            return (
                <SideNavBar contractor={employer} user="contractor"/>
            )
        }
    }

    const handleDelete = () => {
        props.deleteEmployer(employer)
        props.history.push('/admin/employers')
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
            props.history.push('/admin/employers')
            // if (employer.monthly != true && employer.yearly != true) {
            //     history.push('/employers/subscription')
            // } else {
            //     history.push(`/employers/${values.id}/profile`)
            // }
        }
    })


    return (
        <div className="admin">
            <NavBar handleSignout={props.signOut} contractor={employer} loggedIn={props.loggedIn} user="admin" />
            <div className="adminDashboard">
                {/* {handleSideNav()} */}
                {/* <SideNavBar contractor={employer} user="contractor"/> */}
                <div className="dashboard">
                    <h1>Edit Employer</h1>
                    <div className="employee-job">
                    <div className="input">
                    <Form onSubmit={formik.handleSubmit} className="profile-form">
                        <Row className="mb-3">
                        <Form.Group as={Col}>
                        <FloatingLabel label="Company Name">
                            <Form.Control type="text" name="name" style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} value={formik.values.name} onChange={formik.handleChange} />
                        </FloatingLabel>
                        </Form.Group>
                        </Row>
                        <Row className="mb-3">
                        <Form.Group as={Col}>
                        <FloatingLabel label="Email">
                            <Form.Control type="text" name="email" style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} value={formik.values.email} onChange={formik.handleChange} />
                        </FloatingLabel>
                        </Form.Group>
                        </Row>
                        <Row className="mb-3">
                        <Form.Group as={Col}>
                        <FloatingLabel label="Phone Number">
                            <Form.Control type="text" name="phone" style={{ "backgroundColor": "#2f2f2f", "color": "#fff"}} value={formatPhoneNumber(formik.values.phone)} onChange={formik.handleChange} />
                        </FloatingLabel>
                        </Form.Group>
                        </Row>
                        <Row className="mb-3">
                        <Form.Group as={Col}>
                        <FloatingLabel label="Description">
                            <Form.Control as="textarea" name="description" style={{ "backgroundColor": "#2f2f2f", "color": "#fff", height: 150 + "px", width: 350 + "px"}} value={formik.values.description} onChange={formik.handleChange} />
                        </FloatingLabel>
                        </Form.Group>
                        </Row>
                    </Form>
                    <div className="d-flex justify-content-around">
                        <Button type="submit" onClick={formik.handleSubmit}>Save Changes</Button>
                        <Button type="secondary" onClick={() => handleDelete()}>Delete Employer</Button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditEmployerAdmin