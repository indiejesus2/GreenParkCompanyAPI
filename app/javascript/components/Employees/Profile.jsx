import React from 'react'
import NavBar from '../NavBar'
import { Button, Table } from 'react-bootstrap'

const Profile = props => {
    
    const handleClick = () => {
        props.history.push(`/employees/${props.employee.id}/edit_profile`)
    }

    const employee = props.profile
    const license = props.profile.license == true ? "Yes" : "No"

    return (

        <div className="employee">
            <NavBar handleSignout={props.signOut} profile={props.profile} user="employee" />
            <div className="employee-profile">
                <div className="employee-title">
                    <h4>{employee.city}, {employee.state}</h4>
                    <h4>{employee.industry}</h4>
                </div>
                {/* <span>Experience: </span> */}
            <div className="work-schedule">
                <Table>
                    <tbody>
                    <tr>
                        <td>Job Type:</td>
                        <td>{employee.jobtype.join(", ")}</td>
                    </tr>
                    <tr>
                        <td>Schedule:</td>
                        <td>{employee.schedule.join(", ")}</td>
                    </tr>
                    <tr>
                        <td>Shifts:</td>
                        <td>{employee.shifts.join(", ")}</td>
                    </tr>
                    <tr>
                        <td>Season Availability:</td>
                        <td>{employee.seasonstart} - {employee.seasonend} </td>
                    </tr>
                    <tr>
                        <td>Pay Range:</td>
                        <td>${employee.minpay} - ${employee.maxpay} {employee.paytype}</td>
                    </tr>
                    <tr>
                        <td>Driver's License:</td>
                        <td>{license}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
                {props.experience.map(history => 
            <div className="work-history" key={history.id}>
                <h4>Experience:</h4>
                <p>{employee.description}</p>

                    {/* <span>{history.title} - {history.company} - {history.city}, {history.state} </span>
                    <br />
                    <span>{history.startdate} {history.enddate}</span>
                    <br />
                    <span>{history.description}</span> */}
            </div>
                    )}
                    <br />
                    <div className="edit-button">
                        <Button onClick={handleClick}>Edit Profile</Button>
                    </div>
            </div>
        </div>
    )
}

export default Profile

