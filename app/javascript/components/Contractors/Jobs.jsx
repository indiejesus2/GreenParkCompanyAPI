import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Card, CardGroup, Button, Table } from 'react-bootstrap/'
import NavBar from '../NavBar'
import SideNavBar from '../SideNavBar'

const Jobs = (props) => {

const [jobs, setJobs] = useState(props.jobs ? props.jobs : [])

    // useEffect(() => {
    //     if (props.jobs != jobs) {
    //         setJobs(props.jobs)
    //     }

    // })

    const size = useWindowSize();

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined
        });

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            
            window.addEventListener("resize", handleResize);
            
            handleResize();
            
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return windowSize;
    }

    function handleJob(job) {
        props.history.push(`/contractors/${props.contractor.id}/jobs/${job.id}`)
    }
    
    function handleEdit(job) {
        props.history.push(`/contractors/${props.contractor.id}/jobs/${job.id}/editjob`)
    }

    const handleTable = (job) => {
        if (size.width > 580) {
            return (
                <div className="d-flex">
                    <Table style={{ "marginBottom": 2.5 + "px"}}>
                                    <tbody>
                                        <tr>
                                            <td id="table-header" style={{ "border-bottom-width": 0 + "px", "border-right": 2 + "px solid white"}}>
                                                Title: {job.title}
                                            </td>
                                            <td id="table-header-location" style={{ "border-bottom-width": 0 + "px"}}>
                                                Location: {job.city}, {job.state} {job.zipcode}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="table-header-title" style={{ "border-bottom-width": 0 + "px", "border-right": 2 + "px solid white"}}>Applicants: {job.profiles.length}
                                            </td>
                                            <td id="table-header-rating" style={{ "border-bottom-width": 0 + "px"}}>Date Posted: {job.createdDate}
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                </div>
            )
        } else {
            return (
                <div>
                    <Table style={{ "marginBottom": 2.5 + "px"}}>
                        <tbody>
                            <tr>
                                <td id="table-header" style={{ "border-bottom-width": 0 + "px"}}>
                                    Title: {job.title}
                                </td>
                            </tr>
                            <tr>
                                <td id="table-header-location" style={{ "border-bottom-width": 0 + "px"}}>
                                    Location: {job.city}, {job.state} {job.zipcode}
                                </td>
                            </tr>
                            <tr>
                                <td id="table-header-title" style={{ "border-bottom-width": 0 + "px"}}>
                                    Applicants: {job.profiles.length}
                                </td>
                            </tr>
                            <tr>
                                <td id="table-header-rating" style={{ "border-bottom-width": 0 + "px"}}>
                                    Date Posted: {job.createdDate}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            )
        }
    }

    return (
        // <div className="employees">
        //     <NavBar handleSignout={props.signOut} contractor={props.contractor} loggedIn={props.loggedIn} user="contractor" />
        //         <div className="d-flex">
        //         <SideNavBar contractor={props.contractor} user="contractor"/>
        //             <div className="dashboard">

                    <div className="employees-jobs">
                        {jobs.map(job =>
                            <Card id={job.id} key={job.id}>
                                <Card.Body className="d-flex">
                                    {handleTable(job)}
                                    {/* <div className="employee-jobs-buttons">
                                            <Button id="details" onClick={() => props.handleJob(job)}>Details</Button>
                                            {handleApply(job)}
                                    </div> */}
                            </Card.Body>
                                <div className="employee-jobs-buttons">
                                    <Button id="job" onClick={() => handleJob(job)}>View Job</Button>
                                    <Button id="edit_job" onClick={() => handleEdit(job)}>Edit Job</Button>
                                </div>
                        </Card>
                    )}
                    </div>
            //         </div>
            //     </div>
            // </div>
        )
    }

export default Jobs

{/* <Card.Header>

                            <Card.Title className="d-flex justify-content-between">
                            <Link to={`/contractors/${props.contractor.id}/jobs/${job.id}`} >
                                {job.title}
                            </Link>
                            </Card.Title>
                            <Card.Subtitle>
                                {job.city}, {job.state} 
                            </Card.Subtitle>
                        </Card.Header> */}