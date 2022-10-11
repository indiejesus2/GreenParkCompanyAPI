import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import NavBar from '../NavBar'
import { Image, Card, Table, CardGroup, Button } from 'react-bootstrap'

const Dashboard = props => {

    // debugger, Card

    const [loading, setLoading] = useState(props.loading)
    const [employees, setEmployees] = useState(props.employees.filter(employee => !!employee.profile))
    const [employers, setEmployers] = useState(props.employers)
    const [jobs, setJobs] = useState(props.jobs)

    // useEffect(() => {
    //     // if (props.contractorErrors != errors) {
    //     //     setErrors(props.contractorErrors)
    //     // } else 
    //     if (props.loading != loading) {
    //         setLoading(props.loading)
    //     } else if (props.contractor != contractor) {
    //         setContractor(props.contractor)
    //     } else if (props.applicants != applicants) {
    //         setApplicants(props.applicants)
    //     } else if (props.jobs != jobs) {
    //         setJobs(props.jobs)
    //     }
    // })
    const handleBilling = employer => {
        if (!!employer.subscription && employer.subscription.next_billing != employer.subscription.cancel_at) {
            return (
                new Date(employer.subscription.next_billing*1000).toLocaleDateString()
            )
        } else {
            return (
                "Cancelled"
            )
        }
    }

    const handleJob = (job) => {
        props.history.push(`/admin/editJob/${job.id}`)
    }

    const handleProfile = (employee) => {
        props.history.push(`/admin/editprofile/${employee.id}`)
    }


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
            <div className="admin">
                <NavBar handleSignout={props.signOut} loggedIn={props.loggedIn} user="admin" />
            <div className="adminDashboard">
                        <div className="adminJobs">    
                        <div>
                            Employees
                        </div>
                        <div className="adminCards">

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
                                {employee.profile.fname} {employee.profile.lname}
                            </td>
                            </tr>                    
                            <tr style={{ "border-bottom-width": 0 + "px"}}>
                            <td style={{"padding": "0px" }}>
                                Trade:                         
                            </td>
                            <td style={{"padding": "0px" }}>
                                {employee.profile.trade}
                            </td>
                            </tr>                    
                            <tr style={{ "border-bottom-width": 0 + "px"}}>
                            <td style={{"padding": "0px" }}>
                                Location:                         
                            </td>
                            <td style={{"padding": "0px" }}>
                                {employee.profile.city}, {employee.profile.state} {employee.profile.zipcode}
                            </td>
                            </tr>
                        </tbody>                
                    </Table>
                    <Button onClick={() => handleProfile(employee)}>Edit Profile</Button>
                        </Card.Body>
                    </Card>
                )}
                        </div>
                    </div>
                
                <div className="adminJobs">    
                <div>
                    Employers
                </div>
                <div className="adminCards">

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
                                            {employer.name}
                                        </td>
                                    </tr>
                                    <tr style={{ "border-bottom-width": 0 + "px"}}>
                                        <td style={{"padding": "0px" }}>
                                            Email: 
                                        </td>
                                        <td style={{"padding": "0px" }}>
                                            {employer.email}
                                        </td>
                                    </tr>
                                    <tr style={{ "border-bottom-width": 0 + "px"}}>
                                        <td style={{"padding": "0px" }}>
                                            Phone Number: 
                                        </td>
                                        <td style={{"padding": "0px" }}>
                                            {employer.phone}
                                        </td>
                                    </tr>
                                    <tr style={{ "border-bottom-width": 0 + "px"}}>
                                        <td style={{"padding": "0px" }}>
                                            Subscription: 
                                        </td>
                                        <td style={{"padding": "0px" }}>
                                            {employer.monthly == true ? "Monthly" : "Yearly"}
                                        </td>
                                    </tr>
                                    <tr style={{ "border-bottom-width": 0 + "px"}}>
                                        <td style={{"padding": "0px" }}>
                                            Next Billing Date: 
                                        </td>
                                        <td style={{"padding": "0px" }}>
                                            {handleBilling(employer)}
                                        </td>
                                    </tr>
                                    <tr style={{ "border-bottom-width": 0 + "px"}}>
                                        <td style={{"padding": "0px" }}>
                                            Card:
                                        </td>
                                        <td style={{"padding": "0px" }}>
                                            {employer.current_card}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>    
                )}
                </div>
                </div>
                <div className="adminJobs">

                <div>
                    Jobs
                </div>
                <div className="adminCards">

                {jobs.map(job => 
                    <Card id={job.id} key={job.id}>
                        <Card.Body>
                        <Table>
                                                <tbody>
                                                <tr style={{ "border-bottom-width": 0 + "px"}}>
                                                <td style={{"padding": "0px" }}>
                                                    Company:                         
                                                </td>
                                                <td style={{"padding": "0px" }}>
                                                    {job.company}
                                                </td>
                                                </tr>
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
                                                </tbody>                
                                            </Table>
                                            <Button onClick={() => handleJob(job)}>Edit Job</Button>
                        </Card.Body>
                    </Card>
                )}
                
                        </div>
                    </div>
                </div>
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