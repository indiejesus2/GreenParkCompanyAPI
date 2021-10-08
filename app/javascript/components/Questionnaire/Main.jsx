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
            experience: {
                id: "",
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
        },
        onSubmit: values => {
            debugger
            props.createProfile(values)
            history.push('/employees')
        }
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const handleChange = (event) => {
    //     const {name, value}  = event.target
    //     setState( prevState => ({
    //         ...prevState,
    //         [name] : value
    //     }))
    // }

    // const handleJob = (e) => {
    //     if (e.target.checked === true) {
    //         setState( prevState => ({
    //             ...prevState,
    //             [e.target.name]: [...state[e.target.name], e.target.value]
    //         }))
    //     } else {
    //         let group = state[e.target.name]
    //         let deleted = group.findIndex(job => Object.keys(job)[0] == e.target.id)
    //         group.splice(deleted, 1)
    //         setState( prevState => ({
    //             ...prevState,
    //             [e.target.name]: group
    //         }))
    //     }
    // }

    const handleSkills = (e) => {
        debugger
    }

    // const handleHistory = (e) => {
    //     let work_histories = state.work_histories
    //     work_histories[e.target.name] = e.target.value
    //     setState( prevState => ({
    //         ...prevState,
    //         work_histories : work_histories
    //     }))
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     props.updateProfile(state)
    //     history.push('/employees')
    // }

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
                    show={state.show}
                    fname={formik.initialValues.fname}
                    lname={formik.initialValues.lname}
                    city={formik.initialValues.city}
                    state={formik.initialValues.state}
                    education={formik.initialValues.education}
                    handleClick={handleClick}
                    />
                <Desired
                    currentStep={state.currentStep}
                    handleChange={formik.handleChange}
                    
                    show={state.show}
                    jobType={formik.initialValues.jobType}
                    schedule={formik.initialValues.schedule}
                    minpay={formik.initialValues.minpay}
                    maxpay={formik.initialValues.maxpay}
                    handleClick={handleClick}
                    />
                <Skills
                    currentStep={state.currentStep}
                    handleChange={formik.handleChange}
                    show={state.show}
                    skills={formik.initialValues.skills}
                    certificates={formik.certificates}
                    handleClick={handleClick}
                    handleSkills={handleSkills}
                    handleSubmit={formik.handleSubmit}
                    />
            </Form>
            </div>
            )}

}

export default Main