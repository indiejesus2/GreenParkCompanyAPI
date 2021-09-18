import React, { Component } from 'react'

export default class EmployeeProfile extends Component {

    // componentDidMount() {
    //     this.props.fetchEmployee(this.props.match.params.id)
    // }
    
    render() {
        // const employee = !!this.props.profile ? this.props.profile : [jobtype = [], schedule = []]
        return (<div>
            <h1>Candidates</h1>
        </div>
        )
        // if (this.props.loading === true) {
        //     return (
        //         <div className="loading">
        //             Loading...
        //         </div>
        //     )
        // } else {
        // return (
        //     <div className="employee-profile">
        //         <h2>{employee.fname} {employee.lname}</h2>
        //         <h4>{employee.city}, {employee.state}</h4>
        //         <h5>{employee.phone}</h5>
                
        //         <table>
        //             <tr>
        //                 <th>Job Type:</th>
        //                 <th>Schedule:</th>
        //                 <th>Education: </th>
        //             </tr>
        //             <tr>
        //                 <td>{employee.jobtype}</td>
        //                 <td>{employee.schedule}</td>
        //                 <td>{employee.education}</td>
        //             </tr>
        //         </table>
        //     </div>
        // )} 
        // else {
        //     return (
        //         <div>
        //             Loading...
        //         </div>
        //     )
        // }
    }
}