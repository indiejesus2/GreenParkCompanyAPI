import React from 'react'
import { useFormik } from 'formik'


const Profile = props => {
    
    const handleClick = () => {
        //logout user
        props.history.push(`/employees/${props.employee.id}/edit_profile`)
    }

    const employee = props.profile

    const formik = useFormik({
        initialValues: {
            employee_id: employee.id,
            fname: employee.fname,
            lname: employee.lname,
            city: employee.city,
            state: employee.state,
            zipcode: employee.zipcode,
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
        <div className="employee-profile">
            <h2>{employee.fname} {employee.lname}</h2>
            <h4>{employee.city}, {employee.state}</h4>
            <h5>{employee.industry}</h5>
            <p>{employee.description}</p>
            <div className="work-schedule">
                Job Type: {employee.jobtype.join(', ')}
                <br />
                Work Schedule: {employee.schedule.join(', ')}
                <br />
                Shifts: {employee.shifts.join(', ')}
            </div>
                {props.work_history.map(history => 
            <div className="work-history">
                Experience:
                    <p>{history.title}</p>
                    <p>{history.company}</p>
            </div>
                    )}
            <button onClick={handleClick}>Edit Profile</button>
        </div>
    )
}

export default Profile

