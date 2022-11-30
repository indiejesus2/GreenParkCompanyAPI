import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Card, Table } from 'react-bootstrap'
import EmployeeProfile from './EmployeeProfile'
import NavBar from '../NavBar'
import SideNavBar from '../SideNavBar'


const Applicants = (props) => {
    
    const [job, setJob] = useState(props.jobs.find(job => job.id == props.match.params.job_id))
    const [applicants, setApplicants] = useState(props.applicants.filter(applicant=>applicant.job_id == job.id).sort((a,b) => b.rating - a.rating))
    const [currentStep, setStep] = useState(1)
    // debugger
    // const [profiles, setProfiles] = useState(props.applicants.profiles)

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

    const [show, setShow] = useState(false)
    const [applicant, setApplicant] = useState("")
    const [candidates, setCandidates] = useState(applicants)
    
    const handleClose = () => {
        setStep(1)
    }

    const handleApplicant = (candidate) => {
        setApplicant(candidate)
        setStep(2)
        setShow(true)
    }

    const saved = () => {
        let savedApplicants = candidates.map(candidate => candidate.acceptance == true)
        return savedApplicants
    }
    
    useEffect(() => {
        if (props.savedApplicants == true && saved != candidates) {
            setCandidates(saved)
        } 
        // else if (props.savedApplicants == false && props.applicants != applicants) {
        //     setCandidates(applicants)
        // }
    })

    const handleApplicants = () => {
        if (currentStep == 1) {        
            return (
                    <div className="employees-jobs">
                    {candidates.map(candidate => 
                        <Card id={candidate.id} key={candidate.id} >                
                            <Card.Body className="d-flex">
                                {handleTable(candidate)}
    
                            </Card.Body>
                        </Card>
                    )}
            </div>
                )
        } else if (currentStep == 2) {
            return (
                <EmployeeProfile 
                candidate={applicant}
                // application={applicant.application}
                show={show}
                editApplicant={props.editApplicant}
                handleClose={handleClose}
                job={job}
                applicants={props.applicants}
                currentStep={currentStep}
                contractor={props.contractor}
                handleContact={handleContact}
                files={props.files}
                />
            )
        }
    }

    const rate = (rating) => {
        if (rating == 6 || rating == 5) {
            return (
                <span>
                    {String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734)}
                </span>
            )
        } else if (rating == 4) {
            return (
                <span>
                    {String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734)}
                </span>
            )
        } else if (rating == 3) {
            return (
                <span>
                    {String.fromCharCode(9734) + String.fromCharCode(9734) + String.fromCharCode(9734)}
                </span>
            )
        } else if (rating == 2) {
            return (
                <span>
                    {String.fromCharCode(9734) + String.fromCharCode(9734)}
                </span>
            )
        } else if (rating == 1) {
            return (
                <span>
                    {String.fromCharCode(9734)}
                </span>
            )
        }
    }

    
    const [state, setState] = useState({
        jobtype: false,
        schedule: false,
        shifts: false,
    })

    const handleApplied = (e) => {
        // let filtered = []
        // Object.entries(candidates).map(function([info, applicant]) {
        //     if(applicant.application.interested == true) {
        //         filtered.push(applicant)
        //     }
        // })
        let filtered = candidates.filter(candidate => candidate.interested == true)
        if (e.currentTarget.checked == true) {
            setCandidates(filtered)
        } else {
            setCandidates(candidates)
        }
    }

    const handleApplications = () => {
        // let filtered = []
        // Object.entries(candidates).map(function([info, applicant]) {
        //     if(applicant.application.interested == true) {
        //         filtered.push(applicant)
        //     }
        // })
        let filtered = candidates.filter(candidate => candidate.interested == true)
        if (filtered.length > 0) {
            return (
                    <div className='homeApplied'>
                        <input type="checkbox" id="applied" name="applied" value="applied" onChange={handleApplied}/>
                        <label htmlFor="applied">Applied Candidates</label>
                    </div>
            )
        }
    }

    const handleContact = (candidate) => {
        let person = job.employees.find(employee => employee.id == candidate.employee_id)
        window.location.href = ("mailto:" + person.email + "?subject=" + job.title + " - " + props.contractor.name)
    }

    // const handleContact = (candidate) => {
    //     let person = job.employees.find(employee => employee.id == candidate.info.employee_id)
    //     window.location.href = ("mailto:" + candidate.employee.email + "?subject=" + job.title + " - " + props.contractor.name)        
    // }
    
    const handleAcceptance = (candidate) => {
        let person = job.employees.find(employee => employee.id == candidate.info.employee_id)
    }

    const handleDenial = (candidate) => {
        let person = job.employees.find(employee => employee.id == candidate.info.employee_id)
    }

    const header = () => {
        if (candidates.length==0) {
            return (
                <div className="newemployer">
                    <h1>Future Applicants</h1>
                    <h3>We're working hard to find applicants.</h3>
                </div>
            )
        } else {
            return (
                <div className="newemployer">
                    <h1>{candidates.length} {candidates.length<=1?"Match":"Matches!"}</h1>
                    {handleApplications()}
                </div>
            )
        }
    }

    const handleTable = (candidate) => {
        if (size.width > 580) {
            return (
                <div className="d-flex">
                    <Table style={{ "marginBottom": 2.5 + "px"}}>
                        <tbody>
                            <tr>
                                <td id="table-header" style={{ "border-bottom-width": 0 + "px", "border-right": 2 + "px solid white"}}>
                                    Name: {candidate.profile.fname} {candidate.profile.lname}
                                </td>
                                <td id="table-header-rating" style={{ "border-bottom-width": 0 + "px"}}>Rating:
                                    {rate(candidate.rating)}
                                </td>
                            </tr>
                            <tr>
                                <td id="table-header-title" style={{ "border-bottom-width": 0 + "px", "border-right": 2 + "px solid white"}}>Job Title:<span></span>
                                    {job.title}
                                </td>
                                <td id="table-header-location" style={{ "border-bottom-width": 0 + "px"}}>
                                    Distance:{Math.round(candidate.distance)} Miles
                                </td>
                            </tr>
                         </tbody>
                    </Table>
                    <div className="employee-jobs-buttons">
                        <Button onClick={() => handleApplicant(candidate)}>Details</Button>
                        <Button onClick={() => handleContact(candidate)}>Contact</Button>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <Table style={{ "marginBottom": 2.5 + "px"}}>
                        <tbody>
                            <tr>
                                <td id="table-header" style={{ "border-bottom-width": 0 + "px"}}>
                                    Name: {candidate.profile.fname} {candidate.profile.lname}
                                </td>
                            </tr>
                            <tr>
                                <td id="table-header-rating" style={{ "border-bottom-width": 0 + "px"}}>Rating:
                                    {rate(candidate.rating)}
                                </td>
                            </tr>
                            <tr>
                                <td id="table-header-title" style={{ "border-bottom-width": 0 + "px"}}>Job Title:<span></span>
                                    {job.title}
                                </td>
                            </tr>                        
                            <tr>
                                <td id="table-header-location" style={{ "border-bottom-width": 0 + "px"}}>
                                    Distance:{Math.round(candidate.distance)} Miles
                                </td>
                            </tr>
                         </tbody>
                    </Table>
                    <div className="employee-jobs-buttons">
                        <Button onClick={() => handleApplicant(candidate)}>Details</Button>
                        <Button onClick={() => handleContact(candidate)}>Contact</Button>
                    </div>
                </div>
            )
        }
    }
    
    return (
        <div className="applicants">
            <NavBar handleSignout={props.signOut} contractor={props.contractor} loggedIn={props.loggedIn} user="contractor" />
                <div className="page">
                    <SideNavBar contractor={props.contractor} user="contractor"/>
                        <div className="dashboard">
                            <h1 style={{ textAlign: "center", textTransform: "uppercase"}}>{job.title}</h1>
                            {header()}  
                            {handleApplicants()}
                        </div>
                </div>
        </div>
    )
    
}

export default Applicants