import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import Basic from './Basic'
import Desired from './Desired'
import Skills from './Skills'
import NavBar from '../NavBar'
import Form from 'react-bootstrap/Form'
import { Alert, Button } from 'react-bootstrap'

const Main = (props) => {


    const history = useHistory()

    const [state, setState] = useState({
        currentStep: 0,
        loading: props.loading,
    })

    const [show, setShow] = useState(true)
    const [step, setStep] = useState(0)
    const [loading, setLoading] = useState(props.loading)

    const handleClose = () => {
        setShow(false);
        setStep(step + 1)
    }

    const schema = yup.object().shape({
        fname: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required()
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
            phone: '',
            license: false,
            jobtype: [],
            schedule: [],
            shifts: [],
            seasonstart: '',
            seasonend: '',
            minpay: 0,
            maxpay: 0,
            paytype: "Hourly",
            industry: '',
            commute: 25,
            file: null,
            experience: {
                id: ''
            }
        },
        validationSchema: schema,
        onSubmit: values => {
            props.createProfile(values)
            history.push('/employees')
        }
    })

    const handleClick = (e) => {
        let currentStep = step;
        let direction = e.target.name;
        if (currentStep !==1 && direction == "previous"){
            setStep(step-1)
        } else if (currentStep === 2 && direction === "next") {
            setStep(step+1)
        } else if (currentStep < 2 && direction == "next" && formik.values.city !== "" && formik.values.state !== "") {
            setStep(step+1)
        } else {
            formik.setErrors({city: "Please enter a city", state: "Please enter a state"})
        }
    }

    if(loading == true) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {    
        return (
            <div>
            <NavBar handleSignout={props.handleSignout}/>
            <Form onSubmit={formik.handleSubmit}>
                <Basic
                    currentStep={step}
                    handleChange={formik.handleChange}
                    setFieldValue={formik.setFieldValue}
                    values={formik.values}
                    handleClick={handleClick}
                    touched={formik.touched}
                    errors={formik.errors}
                    onBlur={formik.handleBlur}
                    email={props.employee.email}
                    />
                <Desired
                    currentStep={step}
                    employee={props.employee}
                    uploadFile={props.uploadFile}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    handleClick={handleClick}
                    handleSubmit={formik.handleSubmit}
                    fileLoading={props.fileLoading}
                    />
                <Skills
                    currentStep={step}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    handleClick={handleClick}
                    />
            </Form>
            <div className="d-flex justify-content-center" >
            <Alert show={show} style={{width: 50 + "%"}}>
                    <Alert.Heading>Welcome to BluCollar!</Alert.Heading>
                    <p>
                        Please complete the questionnaire to begin the job-matching process. Please answer as many questions as possible to increase your chances of matching with a potential contractor.
                    </p>
                    <div onClick={handleClose} className="d-flex justify-content-center">
                        <Button>
                            Enter Info
                        </Button>
                    </div>
                </Alert>
            </div>
            </div>
            )}

}

export default Main