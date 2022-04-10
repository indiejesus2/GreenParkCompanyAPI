import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Form, Button, Table, CloseButton } from 'react-bootstrap'
import Applicants from './Applicants'
import NavBar from '../NavBar'
import SideNavBar from '../SideNavBar'

const Job = props => {
   
    const job = props.jobs.find(job => job.id == props.match.params.job_id)

        return (
                <div className="employees">
                    <NavBar handleSignout={props.signOut} contractor={props.contractor} loggedIn={props.loggedIn} user="contractor" />
                        <div className="d-flex">
                            <SideNavBar contractor={props.contractor} user="contractor"/>
                            <div className="dashboard">

                            <div className="employee-job"
                                style={{ "paddingInlineStart": 15 + "px", "paddingInlineEnd": 25 + "px"}}
                            >
                                <h2>Job Listing</h2>
                                <Card id={job.id} key={job.id} > 
                                    <CloseButton onClick={props.handleClose}/>
                                    <Card.Body style={{"padding-top": "10px", "display": "flex"}}>
                                        <div className="job-body"
                                                style={{"width": 50 + "%"}}
                                            >
                                            <div className="job-table">

                                            <Table>                
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
                                            </Table>
                                            </div>
                                            <div className="job-buttons">
                                                <Button>Edit Job</Button>
                                                <Button>Pause Job</Button>
                                                <Button>Delete Job</Button>
                                            </div>
                                            </div>
                                            <div className="description"
                                                style={{"maxWidth": 50 + "%"}}
                                            >
                                                {/* <span>{job.description}</span> */}
                                                <div id="description-details">
                                                    <h2>Job Details</h2>
                                                </div>
                                                <div className="description-box">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                    </p>
                                                </div>
                                            </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="mt-5">
                                <h2>Applicants</h2>
                                <Applicants job={job} editApplicant={props.editApplicant} />
                            </div>
                            </div>
                        </div>
                    </div>
                )
}

export default Job
