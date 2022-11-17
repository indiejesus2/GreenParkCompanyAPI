import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { Image, Card, Table, CardGroup, Button } from 'react-bootstrap'
import NavBar from '../NavBar'

const EmployeesAdmin = props => {

    const [employees, setEmployees] = useState(props.employees.filter(employee => !!employee.profile).splice(0, 10))
    const [page, setPage] = useState(0)
    const [endPage, setEndPage] = useState(Math.round(props.employees.length/10) - 1)

    // debugger
    // useEffect(() => {
    //     if (props.employees != employees) {
    //         setEmployees(props.employees)
    //     }
    // }), [props.employees]

    const handleEmployee = (employee) => {
        props.history.push(`/admin/editemployee/${employee.id}`)
    }

    const handleNewPage = e => {
        let newPage = page
        if (e.target.value == "next" && page !== endPage) {
            newPage = page + 1
        } else if (e.target.value == "previous" && page != 0) {     
            newPage = page - 1
        }
        //  else {
        //     newPage = 0
        // }
        setPage(newPage)
        handlePagination(newPage)
    }
    
    const handlePagination = (newPage) => {
        if (newPage == 0) {
            setEmployees(props.employees.filter(employee => !!employee.profile).splice(newPage, 10))
        } else {
            setEmployees(props.employees.filter(employee => !!employee.profile).splice(newPage + "0", 10))
        }
    }

    if (props.loading == true) {
        return (
            <div className="spinner">
            <NavBar handleSignout={props.signOut} />
            <div className="homepage-header">
                <Image fluid="true" src="/images/blucollarO.png" alt="collar" />
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        )
    } else if (props.loggedIn === true) {
        return (
            <div className="admin">
                <NavBar handleSignout={props.signOut} loggedIn={props.loggedIn} user="admin" />
            <div className="adminDashboard">
                        <div className="adminJobs">    
                        <div className="d-flex justify-content-center">
                            <h1>
                                Employees `{props.employees.length}`
                            </h1>
                        </div>
                        <div className="adminPagination">
                            <Button onClick={(e) => handleNewPage(e)} value="previous">
                                Previous
                            </Button>
                            <Button onClick={(e) => handleNewPage(e)} value="next">
                                Next
                            </Button>
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
                    <Button onClick={() => handleEmployee(employee)}>Edit Profile</Button>
                        </Card.Body>
                    </Card>
                )}
                        </div>
                    </div>
                        </div>
                    </div>
        )
    }

}

export default EmployeesAdmin