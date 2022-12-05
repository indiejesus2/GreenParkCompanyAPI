import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import NavBar from '../NavBar'
import { Image, Card, Table, CardGroup, Button } from 'react-bootstrap'
import EmployeesAdmin from './EmployeesAdmin'
import EmployersAdmin from './EmployersAdmin'
import JobsAdmin from './JobsAdmin'

const Dashboard = props => {

    // debugger, Card
    // debugger

    // const [loading, setLoading] = useState(props.loading)
    // const [employers, setEmployers] = useState(props.employers)
    // const [employees, setEmployees] = useState(props.employees.filter(employee => !!employee.profile))
    // const [jobs, setJobs] = useState(props.jobs)
    // const [smallEmployers, setSmallEmployers] = useState(employers).splice(0,10)
    // const [smallEmployees, setSmallEmployees] = useState(employees.filter(employee => !!employee.profile)).splice(0,10)
    // const [smallJobs, setSmallJobs] = useState(jobs).splice(0,10)

    // useEffect(() => {
    // // //     // if (props.contractorErrors != errors) {
    // // //     //     setErrors(props.contractorErrors)
    // //     // } else 
    // //     // if (props.loading != loading) {
    //         setLoading(props.loading)
    //         setEmployees(props.employees.filter(employee => !!employee.profile).splice(0,10))
    //         setEmployers(props.employers.splice(0,10))
    //         setJobs(props.jobs.splice(0,10))
    // //     // } else if (props.employees != employees) {
    // //     //     setEmployees(props.employees.filter(employee => !!employee.profile).splice(0,10))
    // //     // } else if (props.employers != employers) {
    // //     // } else if (props.jobs != jobs) {
    // //     // }
    // }, [props.loading])

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

    const handleEmployee = (employee) => {
        props.history.push(`/admin/editemployee/${employee.id}`)
    }
    
    const handleEmployer = (employer) => {
        props.history.push(`/admin/editemployer/${employer.id}`)
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
                <div>
                    <EmployeesAdmin employees={props.employees} loggedIn={props.loggedIn} signOut={props.signOut} deleteEmployee={props.deleteEmployee} loading={props.loading} />
                </div>
                <div>
                    <EmployersAdmin employers={props.employers} loggedIn={props.loggedIn} signOut={props.signOut} deleteEmployer={props.deleteEmployer} loading={props.loading} />
                </div>
                <div>
                    <JobsAdmin jobs={props.jobs} loggedIn={props.loggedIn} signOut={props.signOut} deleteJob={props.deleteJob} loading={props.loading} />
                </div>
                        {/* <div className="adminJobs">    
                        <div>
                            Employees
                        </div>
                        <div className="adminCards">
                    {props.employees.filter(employee => !!employee.profile).map(employee => 

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
                    <Button onClick={() => handleEmployee(employee)}>Edit Profile</Button>
                        </Card.Body>
                    </Card>
                )}
                        </div>
                    </div> */}
                
                {/* <div className="adminJobs">    
                <div>
                    Employers
                </div>
                <div className="adminCards">

                {props.employers.map(employer => 
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
                            <Button onClick={() => handleEmployer(employer)}>Edit Employer</Button>
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

                {props.jobs.map(job => 
                // .map
                    <Card id={job.id} key={job.id}> */}
                        {/* <Card.Body>
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
                    </div>*/}
                </div>
        </div> 
        )
    } else {
        return (
            <Redirect to="/home" />
        )
    }
    
}

export default Dashboard