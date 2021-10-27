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
            jobType: [],
            schedule: [],
            shifts: [],
            seasonstart: '',
            seasonend: '',
            minpay: 0,
            maxpay: 0,
            paytype: "",
            industry: '',
            experience: [
                {
                title: "",
                company: "",
                city: "",
                state: "",
                zipcode: "",
                phone: "",
                email: "",
                startdate: "",
                enddate: "",
                description: "",
                current: false
            }
        ]
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
            // setState( prevState => ({
            //     ...prevState,
            //     currentStep : currentStep -= 1
            // }))
        } else if (currentStep < 3 && direction == "next") {
            setStep(step+1)
            // setState( prevState => ({
            //     ...prevState,
            //     currentStep : currentStep += 1
            // }))
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
                    values={formik.values}
                    handleClick={handleClick}
                    touched={formik.touched}
                    errors={formik.errors}
                    onBlur={formik.handleBlur}
                    />
                <Desired
                    currentStep={step}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    handleClick={handleClick}
                    />
                <Skills
                    currentStep={step}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    handleClick={handleClick}
                    handleSubmit={formik.handleSubmit}
                    />
            </Form>
            <Alert show={show} >
                    <Alert.Heading>Welcome to BluCollar!</Alert.Heading>
                    <p>
                        Please complete the three-part questionnaire to begin the job-matching process. Please answer as many questions as possible to increase your chances of matching with a potential contractor.
                    </p>
                    <div onClick={handleClose} className="d-flex justify-content-end">
                        <Button>
                            Enter Info
                        </Button>
                    </div>
                </Alert>
            </div>
            )}

}

export default Main