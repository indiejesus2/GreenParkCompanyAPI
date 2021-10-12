import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import Basic from './Basic'
import Desired from './Desired'
import Skills from './Skills'
import Form from 'react-bootstrap/Form'
import { useHistory } from 'react-router-dom'

const Main = (props) => {

    const history = useHistory()

    const [state, setState] = useState({
        currentStep: 1,
        loading: props.loading,
    })

    const formik = useFormik({
        initialValues: {
            employee_id: props.employee ? props.employee.id : 1,
            show: true,
            fname: '',
            lname: '',
            city: '',
            state: '',
            zipcode: '',
            license: false,
            // education: '',
            jobType: [],
            schedule: [],
            shifts: [],
            seasonstart: '',
            seasonend: '',
            minpay: 0,
            maxpay: 0,
            industry: '',
            // skills: [],
            experience: [
                {
                id: 1,
                title: "",
                company: "",
                city: "",
                state: "",
                zipcode: "",
                phone: "",
                startdate: "",
                enddate: "",
                description: "",
                current: false
            },
                {
                    id: 2,
                title: "",
                company: "",
                city: "",
                state: "",
                zipcode: "",
                phone: "",
                startdate: "",
                enddate: "",
                description: "",
                current: false
            }
        ]
        },
        onSubmit: values => {
            props.createProfile(values)
            history.push('/employees')
        }
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSkills = (e) => {
        let id = e.target.id
        formik.values.experience[id-1].id = id
    }
    

    const handleClick = (e) => {
        let currentStep = state.currentStep;
        let direction = e.target.name;
        if (currentStep !==1 && direction == "previous"){
            setState( prevState => ({
                ...prevState,
                currentStep : currentStep -= 1
            }))
        } else if (currentStep < 3 && direction == "next") {
            setState( prevState => ({
                ...prevState,
                currentStep : currentStep += 1
            }))
        }
    }

    if(state.loading == true) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {    
        return (
            <div>
            <h1>BluCollar Tradespeople Main</h1>
            {/* <Modal show={state.show}>     */}
            <p>Step {state.currentStep}</p>
            <Form onSubmit={formik.handleSubmit}>
                <Basic
                    currentStep={state.currentStep}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    handleClick={handleClick}
                    />
                <Desired
                    currentStep={state.currentStep}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    handleClick={handleClick}
                    />
                <Skills
                    currentStep={state.currentStep}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    handleClick={handleClick}
                    handleSkills={handleSkills}
                    handleSubmit={formik.handleSubmit}
                    />
            </Form>
            </div>
            )}

}

export default Main