import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { Form, FloatingLabel, Button } from 'react-bootstrap'


export default function EditProfile(props) {


    // First Name, Last Name, Location(Zipcode), Phone, Job Type(FT, PT, ...etc), Schedule (M-F, WKND), Job History, Education, Skills, Military Service, Certficates

    // const [state, setState] = useState({
    //     id: props.profile.id,
    //     employee_id: props.profile.employee_id,
    //     fname: props.profile.fname,
    //     lname: props.profile.lname,
    //     city: props.profile.city,
    //     state: props.profile.state,
    //     phone: props.profile.phone,
    //     status: props.profile.status,
    //     jobType: props.profile.jobType,
    //     schedule: props.profile.schedule,
    //     skills: props.profile.shifts,
    //     description: props.profile.description,
    //     work_histories: props.work_histories ? props.work_histories : []
    // })

    // const formik.handleChange = (event) => {
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
    //     props.history.push('/employees')
    // }

    // const handleSelection = (event) => {
    //     debugger
    // }
    const months = [
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

    const employee = props.profile

    const formik = useFormik({
        initialValues: {
            employee_id: employee.id,
            fname: employee.fname,
            lname: employee.lname,
            city: employee.city,
            state: employee.state,
            zipcode: employee.zipcode,
            phone: employee.phone,
            description: employee.description,
            license: employee.license,
            // education: employee.,
            jobtype: employee.jobtype.join("").split(", "),
            schedule: employee.schedule.join("").split(", "),
            shifts: employee.shifts.join("").split(", "),
            seasonstart: employee.seasonstart,
            seasonend: employee.seasonend,
            minpay: employee.minpay,
            maxpay: employee.maxpay,
            industry: employee.industry,
        }
    })

    return (
        <div className="profile">
            <h1>Complete Profile</h1>
            <div className="input">
                <Form onSubmit={formik.handleSubmit} className="profile-form">
                    <div className="basic-info">
                        <label htmlFor="first name">First Name: </label>
                        <input type="text" name="fname" value={formik.initialValues.fname} onChange={formik.handleChange} />
                        <br />
                        <label htmlFor="last name">Last Name: </label>
                        <input type="text" name="lname" value={formik.initialValues.lname} onChange={formik.handleChange} />
                        <br />
                        <label htmlFor="city">City: </label>
                        <input type="text" name="city" value={formik.initialValues.city} onChange={formik.handleChange} />
                        <br />
                        <label htmlFor="state">State: </label>
                        <input type="text" name="state" value={formik.initialValues.state} onChange={formik.handleChange} />
                        <br />
                        <label htmlFor="phone">Phone: </label>
                        <input type="text" name="phone" value={formik.initialValues.phone} onChange={formik.handleChange} />
                        <br />
                        <label htmlFor="Description">Description: </label>
                        <input type="textarea" name="description" value={formik.initialValues.description} onChange={formik.handleChange} />
                        <br />
                    </div>
                    <div className="work-schedule">
                        <label htmlFor="job type">Job Type: </label>
                        {jobtypes.map(job => 
                    <Form.Check name="jobType" label={job} value={job} id={job} onChange={formik.handleChange} defaultChecked={formik.initialValues.jobtype.includes(job)}/>
                )}
                </div>
                    <div className="schedule">
            <Form.Label htmlFor="schedule">Schedule: </Form.Label>
                    {schedule.map(day => 
                        <Form.Check name="schedule" id={day} label={day} value={day} onChange={formik.handleChange} 
                        defaultChecked={formik.initialValues.schedule.includes(day)}
                        />
                    )}
                </div>
                <div className="shifts">
                    <Form.Label>Shifts: </Form.Label>
                    {shifts.map(shift =>                             
                        <Form.Check name="shift" label={shift} value={shift} onChange={formik.handleChange} defaultChecked={formik.initialValues.shifts.includes(shift)} />
                        )}
                </div>
                <div className="seasonal">
                    <Form.Label>Season Availability: </Form.Label>
                    <FloatingLabel label="Seasonal Start">

                    <Form.Select name="seasonstart" onChange={formik.handleChange} defaultValue={formik.initialValues.seasonstart}> 
                        {months.map(month =>
                                <option selected={formik.initialValues.seasonstart == month}>{month}</option>
                        )}
                    </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel label="Seasonal End">

                    <Form.Select name="seasonend" onChange={formik.handleChange} defaultValue={formik.initialValues.seasonend}> 
                        {months.map(month => 
                        <option selected={formik.initialValues.seasonend == month}>{month}</option>
                        )}
                    </Form.Select>
                    </FloatingLabel>
                </div>
                <div className="payrate">
                    <Form.Label>
                        Minimum Pay Rate: 
                    </Form.Label>
                    <Form.Control type="text" name="minpay" onChange={formik.handleChange} value={formik.initialValues.minpay}/>
                    <Form.Label>
                        Maximum Pay Rate: 
                    </Form.Label>
                    <Form.Control type="text" name="maxpay" onChange={formik.handleChange} value={formik.initialValues.maxpay}/>
                </div>
                <div className="submit">
                    <Button type="submit" value="Edit Profile" onClick={formik.handleSubmit}>Edit Profile</Button>
                </div>
                        {/* {state.jobType.map(work => 
                    
                    
                    )} */}
                    {/* <input type="checkbox" label="Full Time" name="jobType" value={formik.initialValues."ft" id='1' onChange={handleJob} /> Full-Time
                        <input type="checkbox" name="jobType" value={formik.initialValues."pt" id='2' onChange={handleJob} /> Part-time
                        <input type="checkbox" name="jobType" value={formik.initialValues."contract" id='3' onChange={handleJob} /> Contract
                        <input type="checkbox" name="jobType" value={formik.initialValues."temporary" id='4' onChange={handleJob} /> Temporary */}
                        {/* <br />
                        <label htmlFor="schedule">Schedule: </label>
                        <input type="checkbox" name="schedule" value={formik.initialValues."M-F" onChange={handleJob}/>
                        M-F
                        <input type="checkbox" name="schedule" value={formik.initialValues."Weekends" onChange={handleJob}/>
                        Weekends
                        <input type="checkbox" name="schedule" value={formik.initialValues."Overnight" onChange={handleJob}/>
                        Overnight
                        <input type="checkbox" name="schedule" value={formik.initialValues."Holidays" onChange={handleJob}/>
                        Holidays
                    </div> */}
                    {/* <div className="history">
                        <h5>Work History</h5>
                        <div >

                        <label htmlFor="Job Title">Job Title: </label>
                        <input type="text" name="title" id={state.work_histories.id} value={state.work_histories.title} onChange={handleHistory} />
                        <br />
                        <label htmlFor="Company">Company: </label>
                        <input type="text" name="company" id={state.work_histories.id} value={state.work_histories.company} onChange={handleHistory} />
                        <br />
                        <label htmlFor="city">City: </label>
                        <input type="text" name="city" id={state.work_histories.id} value={state.work_histories.city} onChange={handleHistory} />
                        <br />
                        <label htmlFor="state">State: </label>
                        <input type="text" name="state" id={state.work_histories.id} value={state.work_histories.state} onChange={handleHistory} />
                        <br />
                        <label htmlFor="phone">Phone: </label>
                        <input type="text" name="phone" id={state.work_histories.id} value={state.work_histories.phone} onChange={handleHistory} />
                        <br />
                        <label htmlFor="startdate">Start Date: </label>
                        <input type="text" name="startdate" id={state.work_histories.id} value={state.work_histories.startdate} onChange={handleHistory} />
                        <br />
                        <label htmlFor="enddate">End Date: </label>
                        <input type="text" name="enddate" id={state.work_histories.id} value={state.work_histories.enddate} onChange={handleHistory} />
                        <label htmlFor="current">Current Job: </label>
                        <input type="checkbox" name="current" id={state.work_histories.id} value={state.work_histories.current} onChange={handleHistory} />
                        <br />
                        <label htmlFor="Description">Description: </label>
                        <input type="text" name="description" id={state.work_histories.id} value={state.work_histories.description} onChange={handleHistory} />
                        <br />

                        </div>
                        
                        <button onClick={handleHistory}>Add Experience</button>
                    </div> */}
                    </Form>
            </div>
        </div>
    )

}