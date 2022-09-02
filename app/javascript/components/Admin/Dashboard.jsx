import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import Applicant from './Applicant'
import EmployeeProfile from './EmployeeProfile'
import JobsContainer from '../../containers/JobsContainer'
import NavBar from '../NavBar'
import SideNavBar from '../SideNavBar'
import { Image } from 'react-bootstrap'

const Dashboard = props => {

    // debugger

    const [loading, setLoading] = useState(props.loading)
    const [employees, setEmployees] = useState(props.employees)
    const [employers, setEmployers] = useState(props.employers)
    const [jobs, setJobs] = useState(props.jobs)



    useEffect(() => {
        if (props.contractorErrors != errors) {
            setErrors(props.contractorErrors)
        } else if (props.loading != loading) {
            setLoading(props.loading)
        } else if (props.contractor != contractor) {
            setContractor(props.contractor)
        } else if (props.applicants != applicants) {
            setApplicants(props.applicants)
        } else if (props.jobs != jobs) {
            setJobs(props.jobs)
        }
    })

    if (props.loading === true) {
        return (
            <div className="spinner">
            <NavBar handleSignout={props.signOut} />
            <div className="homepage-header">
                <Image fluid="true" src="/images/blucollarO.png" alt="collar" />
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        )
    } else if (props.loggedIn === false) {
        return (
            <Redirect to="/home" />
        )
    } else if (props.loggedIn === true) {
        return (
            <div className="adminDashboard">
                Employees
                <br />
                {employees.map(employee => 
                    <Card id={employee.id} key={employee.id}>
                        <Card.Body>
                        <Table>
                        <tbody>
                            <tr style={{ "border-bottom-width": 0 + "px"}}>
                            <td style={{"padding": "0px" }}>
                                Name:                         
                            </td>
                            <td style={{"padding": "0px" }}>
                                {employee.fname} {employee.lname}
                            </td>
                            </tr>                    
                            <tr style={{ "border-bottom-width": 0 + "px"}}>
                            <td style={{"padding": "0px" }}>
                                Trade:                         
                            </td>
                            <td style={{"padding": "0px" }}>
                                {employee.trade}
                            </td>
                            </tr>                    
                            <tr style={{ "border-bottom-width": 0 + "px"}}>
                            <td style={{"padding": "0px" }}>
                                Location:                         
                            </td>
                            <td style={{"padding": "0px" }}>
                                {employee.city}, {employee.state} {employee.zipcode}
                            </td>
                            </tr>
                            <tr style={{ "border-bottom-width": 0 + "px"}}>
                            <td style={{"padding": "0px" }}>
                                Commute:                         
                            </td>
                            <td style={{"padding": "0px" }}>
                                {employee.commute}
                            </td>
                            </tr>
                            <tr style={{ "border-bottom-width": 0 + "px"}}>
                            <td style={{"padding": "0px" }}>
                                Phone Number:                         
                            </td>
                            <td style={{"padding": "0px" }}>
                                {employee.phone}
                            </td>
                            </tr>
                            <tr style={{ "border-bottom-width": 0 + "px"}}>
                            <td style={{"padding": "0px" }}>
                                Job Type:                         
                            </td>
                            <td style={{"padding": "0px" }}>
                                {employee.jobtype.join(', ')}
                            </td>
                            </tr>
                            <tr style={{ "border-bottom-width": 0 + "px"}}>
                            <td style={{"padding": "0px" }}>
                                Job Shifts: 
                            </td>
                            <td style={{"padding": "0px" }}>
                                {employee.shifts.join(", ")}
                            </td>
                            </tr>
                            <tr style={{ "border-bottom-width": 0 + "px"}}>
                            <td style={{"padding": "0px" }}>
                                Schedule:
                            </td>
                            <td style={{"padding": "0px" }}>
                            {employee.schedule.join(", ")}
                            </td>
                            </tr>
                            <tr style={{ "border-bottom-width": 0 + "px"}}>
                                <td style={{"padding": "0px" }}>
                                    Pay: 
                                </td>
                                <td style={{"padding": "0px" }}>
                                    ${employee.minpay} {employee.paytype}
                                </td>
                            </tr>
                        </tbody>                
                    </Table>
                        </Card.Body>
                    </Card>
                )}
                <br />
                Employers
                <br />
                {employers.map(employer => 
                    <Card id={employer.id} key={employer.id}>
                        <Card.Body>
                        <Table>
                                <tbody>
                                    <tr style={{ "border-bottom-width": 0 + "px"}}>
                                        <td style={{"padding": "0px" }}>
                                            Company Name: 
                                        </td>
                                        <td style={{"padding": "0px" }}>
                                            {contractor.name}
                                        </td>
                                    </tr>
                                    <tr style={{ "border-bottom-width": 0 + "px"}}>
                                        <td style={{"padding": "0px" }}>
                                            Email: 
                                        </td>
                                        <td style={{"padding": "0px" }}>
                                            {contractor.email}
                                        </td>
                                    </tr>
                                    <tr style={{ "border-bottom-width": 0 + "px"}}>
                                        <td style={{"padding": "0px" }}>
                                            Phone Number: 
                                        </td>
                                        <td style={{"padding": "0px" }}>
                                            {contractor.phone}
                                        </td>
                                    </tr>
                                    <tr style={{ "border-bottom-width": 0 + "px"}}>
                                        <td style={{"padding": "0px" }}>
                                            Subscription: 
                                        </td>
                                        <td style={{"padding": "0px" }}>
                                            {contractor.monthly == true ? "Monthly" : "Yearly"}
                                        </td>
                                    </tr>
                                    <tr style={{ "border-bottom-width": 0 + "px"}}>
                                        <td style={{"padding": "0px" }}>
                                            Next Billing Date: 
                                        </td>
                                        <td style={{"padding": "0px" }}>
                                            {handleBilling()}
                                        </td>
                                    </tr>
                                    <tr style={{ "border-bottom-width": 0 + "px"}}>
                                        <td style={{"padding": "0px" }}>
                                            Card:
                                        </td>
                                        <td style={{"padding": "0px" }}>
                                            {contractor.current_card}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>    
                )}
                <br />
                Jobs
                <br />
                {jobs.map(job => 
                    <Card id={job.id} key={job.id}>
                        <Card.Body>
                        <Table>
                                                <tbody>
                                                <tr style={{ "border-bottom-width": 0 + "px"}}>
                                                <td style={{"padding": "0px" }}>
                                                    Title:                         
                                                </td>
                                                <td style={{"padding": "0px" }}>
                                                    {job.title}
                                                </td>
                                                </tr>
                                                <tr style={{ "border-bottom-width": 0 + "px"}}>
                                                <td style={{"padding": "0px" }}>
                                                    Location:                         
                                                </td>
                                                <td style={{"padding": "0px" }}>
                                                    {job.city}, {job.state} {job.zipcode}
                                                </td>
                                                </tr>
                                                <tr style={{ "border-bottom-width": 0 + "px"}}>
                                                <td style={{"padding": "0px" }}>
                                                    Date Posted:                         
                                                </td>
                                                <td style={{"padding": "0px" }}>
                                                    {job.createdDate}
                                                </td>
                                                </tr>
                                                <tr style={{ "border-bottom-width": 0 + "px"}}>
                                                <td style={{"padding": "0px" }}>
                                                    Job Type:                         
                                                </td>
                                                <td style={{"padding": "0px" }}>
                                                    {job.jobtype.join(', ')}
                                                </td>
                                                </tr>
                                                <tr style={{ "border-bottom-width": 0 + "px"}}>
                                                <td style={{"padding": "0px" }}>
                                                    Job Shifts: 
                                                </td>
                                                <td style={{"padding": "0px" }}>
                                                    {job.shifts.join(", ")}
                                                </td>
                                                </tr>
                                                <tr style={{ "border-bottom-width": 0 + "px"}}>
                                                <td style={{"padding": "0px" }}>
                                                    Schedule:
                                                </td>
                                                <td style={{"padding": "0px" }}>
                                                {job.schedule.join(", ")}
                                                </td>
                                                </tr>
                                                <tr style={{ "border-bottom-width": 0 + "px"}}>
                                                    <td style={{"padding": "0px" }}>
                                                        Pay: 
                                                    </td>
                                                    <td style={{"padding": "0px" }}>
                                                        ${job.minpay} {job.paytype}
                                                    </td>
                                                </tr>
                                                </tbody>                
                                            </Table>
                        </Card.Body>
                    </Card>
                )}
            </div>
        )
    } else {
        debugger
        return (
            <Redirect to="/home" />
        )
    }
    
}

export default Dashboard