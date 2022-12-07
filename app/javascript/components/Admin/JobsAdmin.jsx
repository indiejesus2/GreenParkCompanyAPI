import React, { useState, useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Card, CardGroup, Button, Table } from 'react-bootstrap/'
import NavBar from '../NavBar'
import SideNavBar from '../SideNavBar'

const JobsAdmin = (props) => {

    const [little, setLittle] = useState(props.jobs)
    const [jobs, setJobs] = useState(little.slice(0,10))
    const [page, setPage] = useState(0)
    const [endPage, setEndPage] = useState(Math.ceil(props.jobs.length/10) - 1)

    useEffect(() => {
        newJobs = props.jobs
        if (newJobs != jobs) {
            setLittle(newJobs)
            setJobs(newJobs)
            setEndPage(Math.ceil(jobs.length/10)-1)
        }
    }, [props.jobs])

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
            setJobs(props.jobs.slice(0,10))
        } else {
            let page = newPage + "0"
            setJobs(props.jobs.slice(page, page + 10))
        }
    }
    
    const history = useHistory()

    const handleNav = () => {
        if (history.location.pathname === "/admin/jobs") {
            return (
                <NavBar handleSignout={props.signOut} loggedIn={props.loggedIn} user="admin" />
            )
        }
    }

    const handlePage = () => {
        if (history.location.pathname === "/admin/jobs") {
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

    // const handleNav = () => {
    //     if (history.location.pathname != "/admin/jobs") {
    //         return (
    //             <NavBar handleSignout={props.signOut} loggedIn={props.loggedIn} user="admin" />
    //         )
    //     }
    // }
    // useEffect(() => {
    //     if (props.jobs != jobs) {
    //         setJobs(props.jobs)
    //     }
    // }), [props.jobs]
    
    const handleJob = job => {
        history.push(`/admin/editJob/${job.id}`)
    }

    const handleDelete = job => {
        props.deleteJob(job)
        // props.history.push('/admin/jobs')
    }

    const handleTable = (job) => {
        return (
            <div>
                <Table style={{ "marginBottom": 2.5 + "px"}}>
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
                <div className="employee-jobs-buttons">
                    <Button id="edit_job" onClick={() => handleJob(job)}>Edit Job</Button>
                    <Button type="secondary" onClick={() => handleDelete(job)}>Delete Job</Button>
                </div>
            </div>
        )
    }

    if (props.loading == true) {
        return (
            <div className="spinner">
            {handleNav()}
            <div className="homepage-header">
                <Image fluid="true" src="/images/blucollarO.png" alt="collar" />
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        )
    } else if (props.loggedIn === true) {
        return (
            <div className="adminJobs">
                {handleNav()}
                <div className="d-flex justify-content-center">
                    <h1>Jobs `{props.jobs.length}`</h1>
                </div>
                {handlePage()}
                <div className="adminCards">
                    {jobs.map(job =>
                        <Card id={job.id} key={job.id}>
                            <Card.Body>
                                {handleTable(job)}
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>
        )}
    }

export default JobsAdmin