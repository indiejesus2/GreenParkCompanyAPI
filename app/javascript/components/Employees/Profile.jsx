import React from 'react'
import NavBar from '../NavBar'

const Profile = props => {
    
    const handleClick = () => {
        props.history.push(`/employees/${props.employee.id}/edit_profile`)
    }

    const employee = props.profile

    return (

        <div className="employee-profile">
            <NavBar handleSignout={props.signOut} profile={props.profile} user="employee" />
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
                {props.experience.map(history => 
            <div className="work-history" key={history.id}>
                Experience:
                <br />
                    <span>{history.title} - {history.company}</span>
            </div>
                    )}
                    <br />
            <button onClick={handleClick}>Edit Profile</button>
        </div>
    )
}

export default Profile

