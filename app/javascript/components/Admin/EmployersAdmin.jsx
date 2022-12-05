import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'

import { useFormik } from 'formik'
import { Image, Card, Table, CardGroup, Button } from 'react-bootstrap'
import NavBar from '../NavBar'

const EmployersAdmin = (props) => {

    const [little, setLittle] = useState(props.employers)
    const [employers, setEmployers] = useState(little.slice(0,10))
    const [page, setPage] = useState(0)
    const [endPage, setEndPage] = useState(Math.round(props.employers.length/10) - 1)

    useEffect(() => {
        if (props.employers != little) {
            setLittle(props.employers)
        }
    }, [props.employers])

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
            setEmployers(little.slice(newPage,10))
        } else {
            let page = newPage + "0"
            setEmployers(little.slice(page, page+10))
        }
    }

    const history = useHistory()

    const handleNav = () => {
        if (history.location.pathname === "/admin/employers") {
            return (
                <NavBar handleSignout={props.signOut} loggedIn={props.loggedIn} user="admin" />
            )
        }
    }

    const handlePage = () => {
        if (history.location.pathname === "/admin/employers") {
            return (
                <div className="adminPagination">
                    <Button onClick={(e) => handleNewPage(e)} value="previous">
                        Previous
                    </Button>
                    <Button onClick={(e) => handleNewPage(e)} value="next">
                        Next
                    </Button>
                </div>
            )
        }
    }
    // useEffect(() => {
    //     if (props.employers != employers) {
    //         setEmployers(props.employers)
    //     }
    // }), [props.employers]

    const handleEmployer = (employer) => {
        history.push(`/admin/editemployer/${employer.id}`)
    }

    const handleDelete = (employer) => {
        props.deleteEmployer(employer)
        // props.history.push('/admin/employers')
    }

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
    }
    else if (props.loggedIn === true) {
        return (
            <div className="admin">
                {handleNav()}
            <div className="adminDashboard">
            <div className="adminJobs">    
                <div className="d-flex justify-content-center">
                    <h1>
                        Employers `{props.employers.length}`
                    </h1>
                </div>
                {handlePage()}
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
                            <div className="employee-jobs-buttons">
                                <Button onClick={() => handleEmployer(employer)}>Edit Employer</Button>
                                <Button type="secondary" onClick={() => handleDelete(employer)}>Delete Employer</Button>
                            </div>
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

export default EmployersAdmin