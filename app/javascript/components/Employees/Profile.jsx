import React from 'react'

const Profile = props => {
    
    const handleClick = () => {
        props.history.push(`/employees/${props.employee.id}/edit_profile`)
    }

    const employee = props.profile

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
            <div className="work-history" key={history.id}>
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

