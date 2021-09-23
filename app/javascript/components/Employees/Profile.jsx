import React from 'react'

const Profile = props => {
    
    const handleClick = () => {
        //logout user
        props.history.push(`/employees/${props.employee.id}/edit_profile`)
    }
    const employee = props.profile

    return (
        <div className="employee-profile">
            <h2>{employee.fname} {employee.lname}</h2>
            <h4>{employee.city}, {employee.state}</h4>
            <h5>{employee.education}</h5>
            <p>{employee.description}</p>
            <div className="work-schedule">
                Job Type: {employee.jobtype.join(', ')}
                <br />
                Work Schedule: {employee.schedule.join(', ')}
            </div>
            <div className="skills">
                Skills: {employee.skills.join(', ')}
            </div>
            <div className="work-history">
                Experience:

            </div>
            <button onClick={handleClick}>Edit Profile</button>
        </div>
    )
}

export default Profile

