import React, { useState } from 'react'
import { Form, Button, FloatingLabel, Row, Col, InputGroup } from 'react-bootstrap'
import {useFormik} from 'formik'
import * as yup from 'yup'
import TextareaAutoSize from 'react-textarea-autosize'


export default function AddJob(props) {

    const schema = yup.object().shape({
        city: yup.string().required(),
        state: yup.string().required()
    })

    const handlePostal = (e) => {
        // let postal = e.target.value
        let postal = e.target.value
        if (postal.length == 5) {
            findCity(postal)
            formik.setFieldValue('zipcode', postal)
        } else {
            formik.setFieldValue('zipcode', postal)
        }
    }

    const handleAutosize = () => {
        return (
            <div>
                <FloatingLabel label="description" style={{opacity:.65, transform: `scale(`+.85+`) translateY(-`+.5+`) translateX(`+.15+`rem)`}}>                        
                    <TextareaAutoSize minRows={5} style={{width:100+`%`, paddingTop: 25+`px`, paddingLeft:10+`px`}}/>
                </FloatingLabel>
            </div>
        )
    }

    // useEffect(() => {
    //     if(formik.values.zipcode.length == 5) {
    //         findCity(formik.values.postal)
    //     }
    // })

    const findCity = async (postal) => {
        const configObj = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(postal)
        };
        const resp = await fetch(`/api/v1/findcity/${postal}`, { configObj })
        const data = await resp.json()
        if (data.town) {
            formik.setFieldValue('city', data.town)
            formik.setFieldValue('state', data.state)
        }
    }

    const months = [
        "--",
        "Jan", 
        "Feb", 
        "Mar", 
        "Apr", 
        "May", 
        "Jun", 
        "Jul", 
        "Aug", 
        "Sept", 
        "Oct", 
        "Nov",
        "Dec"
    ]

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

    const trades = [
        "--",
        "Plumbing",
        "Painting",
        "Maintenance",
        "Electric",
        "Landscape",   
        "Other/None"
    ]

    const jobtypes = [
        "Full Time",
        "Part Time",
        "Contract",
        "Temporary"
    ]

    const schedule = [
        "Weekdays",
        "Weekends",
        "Overnight",
        "Holidays"
    ]

    const shifts = [
        "AM",
        "PM",
        "Evening"
    ]

    const formik = useFormik({
        initialValues: {
            employer_id: props.contractor.id,
            title: '',
            city: '',
            state: '',
            zipcode: '',
            license: false,
            jobtype: [],
            schedule: [],
            shifts: [],
            seasonstart: '',
            seasonend: '',
            minpay: 0,
            paytype: "Hourly",
            trade: '',
            description: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            props.addJob(values)
            props.history.push(`/contractors/${props.contractor.id}/jobs/`)
        }
    })

    return (
        <div className="editJob">
            <h1>Add Job</h1>
                <Form onSubmit={formik.handleSubmit} className="addJob-form">
                <Row className="mb-3">
                <Form.Group as={Col} >
                <FloatingLabel label="Title">
                    <Form.Control 
                    type="text" 
                    name="title" 
                    onChange={formik.handleChange} 
                    value={formik.values.title} 
                            onChange={formik.handleChange} 
                            isInvalid={formik.touched.title && formik.errors.title}
                            onBlur={formik.handleBlur}
                            />
                            {formik.errors.title && formik.touched.title && (
                                <div style={{ color: "red"}}>{formik.errors.title}</div>
                            )}
                </FloatingLabel>
                </Form.Group> 
                <Form.Group as={Col}>
                <FloatingLabel label="trade">

                <Form.Select name="trade" id="trade" onChange={formik.handleChange}>
                        {trades.map(trade => 
                            <option key={trade} defaultValue="--" value={trade}>{trade}</option>
                        )}
            </Form.Select>
                </FloatingLabel>
                </Form.Group> 

                </Row>
                <Row className="mb-3">
                <Form.Group as={Col}>
                        <FloatingLabel label="City">
                            <Form.Control 
                            type="text" 
                            name="city" 
                            value={formik.values.city} 
                            onChange={formik.handleChange} 
                            isInvalid={formik.touched.city && formik.errors.city}
                            onBlur={formik.handleBlur}
                            />
                            {formik.errors.city && formik.touched.city && (
                                <div style={{ color: "red"}}>{formik.errors.city}</div>
                            )}
                        </FloatingLabel>
                        </Form.Group> 
                <Form.Group as={Col}>
                        <FloatingLabel label="State">
                            <Form.Select
                            name="state" 
                            value={formik.values.state} 
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.state && formik.errors.state}
                            onBlur={formik.handleBlur}
                            >
                                {states.map(state => 
                                    <option  defaultValue="--">{state}</option>
                                )}
                            {formik.errors.state && formik.touched.state && (
                                <div style={{ color: "red"}}>{formik.errors.state}</div>
                            )}
                            </Form.Select>
                        </FloatingLabel>
                        </Form.Group>
                <Form.Group as={Col}>

                <FloatingLabel label="ZipCode">
                    <Form.Control type="text" name="zipcode" onChange={handlePostal} value={formik.values.zipcode}/>
                </FloatingLabel>
                </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} class="textarea">
                        {/* <FloatingLabel label="Description">                         */}
                            <Form.Control as={handleAutosize} name="description" style={{ minHeight: '100px', "margin-top": 15+"px"}} value={formik.values.description} onChange={formik.handleChange} />
                        {/* </FloatingLabel> */}
                    </Form.Group>
                    </Row>
            <Row className="desired">
                <Form.Group as={Col}>
                <div className="jobtype">
                    <Form.Label htmlFor="jobtype"> Job-Type: </Form.Label>
                    {jobtypes.map(job => 
                        <Form.Check name="jobtype" label={job} value={job} id={job} key={job} onChange={formik.handleChange} />
                    )}
                </div>
                </Form.Group>
                <Form.Group as={Col}>
                    
                <div className="schedule">
                    <Form.Label htmlFor="schedule">Schedule: </Form.Label>
                    {schedule.map(day => 
                        <Form.Check name="schedule" id={day} label={day} value={day} key={day} onChange={formik.handleChange} />
                        )}
                </div>
                        </Form.Group>
                        <Form.Group as={Col}>
                    
                <div className="shifts">
                <Form.Label>Shifts: </Form.Label>
                {shifts.map(shift =>                             
                    <Form.Check name="shifts" label={shift} value={shift} key={shift} onChange={formik.handleChange} />
                    )}
                </div>
                    </Form.Group>
                </Row>

                <Form.Label>Season Availability: </Form.Label>
                <Row className="mb-3">
                <Form.Group as={Col}>
                <FloatingLabel label="Seasonal Start">

                <Form.Select name="seasonstart" onChange={formik.handleChange} > 
                    {months.map(month =>
                            <option key={month}>{month}</option>
                    )}
                </Form.Select>
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <FloatingLabel label="Seasonal End">

                <Form.Select name="seasonend" onChange={formik.handleChange}> 
                    {months.map(month => 
                    <option>{month}</option>
                    )}
                </Form.Select>
                </FloatingLabel>
                </Form.Group>

                </Row>
                <Row className="mb-3">
    
    <Form.Group as={Col}>
        <Form.Label>
            Pay Type:
        </Form.Label>
        <Form.Select name="paytype" label="paytype" value={formik.values.paytype} onChange={formik.handleChange} defaultValue={formik.values.paytype}>
                <option>Hourly</option>
                <option>Salary</option>
        </Form.Select>
    </Form.Group>
        <Form.Group as={Col}>
                <Form.Label>
                    Minimum Pay Rate: 
                </Form.Label>
                <InputGroup>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control type="text" name="minpay" onChange={formik.handleChange} value={formik.values.minpay}/>
                </InputGroup>
        </Form.Group>
    </Row>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Check type="checkbox" name="license" label="Driver's License" value={formik.values.license} onChange={formik.handleChange} defaultChecked={formik.values.license}/>
                    </Form.Group>
                </Row>
                <div className="submit">
                    <Button type="submit" value="Add Job" onClick={formik.handleSubmit}>Add Job</Button>
                </div>
            </Form>
        </div>
    )

}