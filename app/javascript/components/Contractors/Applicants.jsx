import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Card, Table } from 'react-bootstrap'
import EmployeeProfile from './EmployeeProfile'


const Applicants = (props) => {
    
    const [job, setJob] = useState(props.job)
    const [applicants, setApplicants] = useState(props.job.applicants.sort(applicant => applicant.rating))
    const [profiles, setProfiles] = useState(props.job.profiles)

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

    const original = profiles.map(profile => {
        let oObj = {
            info: '',
            application: ''
        }
        let candidate = applicants.find(applicant => applicant.employee_id == profile.employee_id && applicant.acceptance !== false)
            if (profile.employee_id == candidate.employee_id) {
                oObj.info = profile,
                oObj.application = candidate
            }
        return oObj
    })

    const [show, setShow] = useState(false)
    const [applicant, setApplicant] = useState("")
    const [candidates, setCandidates] = useState(original)
    const handleClose = () => {
        setShow(false);
    }

    const saved = () => {
        let savedApplicants = candidates.map(candidate => candidate.application.accepted == true)
        return savedApplicants
    }
    
    useEffect(() => {
        if (props.savedApplicants == true && saved != candidates) {
            setCandidates(saved)
        } else if (props.savedApplicants == false && props.applicants != applicants) {
            setCandidates(original)
        }
    })

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
        let filtered = []
        Object.entries(candidates).map(function([info, applicant]) {
            if(applicant.application.interested == true) {
                filtered.push(applicant)
            }
        })
        if (e.currentTarget.checked == true) {
            setCandidates(filtered)
        } else {
            setCandidates(original)
        }
    }

    const handleApplications = () => {
        let filtered = []
        Object.entries(candidates).map(function([info, applicant]) {
            if(applicant.application.interested == true) {
                filtered.push(applicant)
            }
        })
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
        let person = job.employees.find(employee => employee.id == candidate.info.employee_id)
        window.location.href = ("mailto:" + person.email + "?subject=" + job.title + " - " + props.contractor.name)        
    }
    
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
                    <h1>{candidates.length} {candidates.length<=1?"Applicant":"Applicants!"}</h1>
                    {handleApplications()}
                </div>
            )
        }
    }

    const handleTable = (candidate) => {
        if (size.width > 580) {
            return (
                <Table style={{ "marginBottom": 2.5 + "px"}}>
                    <tbody>
                        <tr>
                            <td id="table-header" style={{ "border-bottom-width": 0 + "px", "border-right": 2 + "px solid white"}}>
                                Name: {candidate.info.fname} {candidate.info.lname}
                            </td>
                            <td id="table-header-rating" style={{ "border-bottom-width": 0 + "px"}}>Rating:
                                {rate(candidate.application.rating)}
                            </td>
                        </tr>
                        <tr>
                            <td id="table-header-title" style={{ "border-bottom-width": 0 + "px", "border-right": 2 + "px solid white"}}>Job Title:<span></span>
                                {job.title}
                            </td>
                            <td id="table-header-location" style={{ "border-bottom-width": 0 + "px"}}>
                                Distance:{Math.round(candidate.application.distance)} Miles
                            </td>
                        </tr>
                     </tbody>
                </Table>
            )
        } else {
            return (
                <Table style={{ "marginBottom": 2.5 + "px"}}>
                    <tbody>
                        <tr>
                            <td id="table-header" style={{ "border-bottom-width": 0 + "px"}}>
                                Name: {candidate.info.fname} {candidate.info.lname}
                            </td>
                        </tr>
                        <tr>
                            <td id="table-header-rating" style={{ "border-bottom-width": 0 + "px"}}>Rating:
                                {rate(candidate.application.rating)}
                            </td>
                        </tr>
                        <tr>
                            <td id="table-header-title" style={{ "border-bottom-width": 0 + "px"}}>Job Title:<span></span>
                                {job.title}
                            </td>
                        </tr>                        
                        <tr>
                            <td id="table-header-location" style={{ "border-bottom-width": 0 + "px"}}>
                                Distance:{Math.round(candidate.application.distance)} Miles
                            </td>
                        </tr>
                     </tbody>
                </Table>
            )
        }
    }
    
    return (
        <div className="applicants">
            {header()}
        <div className="employees-jobs">
            {candidates.map(candidate => 
                <Card id={candidate.info.id} key={candidate.info.id} >                
                    <Card.Body className="d-flex">
                        {handleTable(candidate)}
                    </Card.Body>
                    <div className="employee-jobs-buttons">
                      <Button onClick={() => props.handleApplicant(candidate)}>Details</Button>
                      <Button onClick={() => handleContact(candidate)}>Contact</Button>
                    </div>
                </Card>
            )}
                <EmployeeProfile 
                    show={show}
                    candidate={applicant.info}
                    application={applicant.application}
                    editApplicant={props.editApplicant}
                    handleClose={handleClose}
                    handleContact={handleContact}
                    contractor={props.contractor}
                    files={props.files}
                    job={props.job}
                />
            </div>
        </div>
    )
    
}

export default Applicants