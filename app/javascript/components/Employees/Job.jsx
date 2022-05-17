import React, { useState, useEffect } from 'react'
import { Modal, Button, Table, Container, Row, Card, CloseButton } from 'react-bootstrap'

const Job = props => {

    const job = props.job
    const applicant = props.applicants.find(applicant => applicant.job_id == job.id)
    const [currentStep, setStep] = useState(props.currentStep)
    const [width, setWidth] = useState("")
    const [card, setCard] = useState("")

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

    if (job == "") {
        return null
    }

    if(currentStep !== 2) {
        return null
    }

    // const handleCard = () => {
    //     if (size.width <= 580) {
    //         setCard("grid")
    //     } else {
    //         setCard("flex")
    //     }
    // }

    // handleWidth = () => {
    //     if (size.width <= 580) {
    //         setWidth(100)
    //     } else {
    //         setWidth(50)
    //     }
    // }

    return (
            <div className="employee-job"
                style={{ "paddingInlineStart": 15 + "px", "paddingInlineEnd": 25 + "px"}}
            >
        <Card id={job.id} key={job.id} >
        <CloseButton variant="white" onClick={props.handleClose} style={{color: "#3fa1fc", position: "relative", top: 15+"px", right: 15+"px", alignSelf:"end"}}/>  
            {/* <CloseButton onClick={props.handleClose}/> */}
            {/* <Card.Title>
                <h1>{job.company}</h1>
                <h2>
                    {job.title} - {job.city}, {job.state} 
                </h2>
                <div className="subtitle">
                        <span className="d-flex">
                            Potential Match: {rate(applicant.rating)} 
                        </span>    
                        <span>
                            Distance: {Math.round(applicant.distance)} Miles
                        </span>
                </div>
            </Card.Title> */}
            <Card.Body style={{"padding-top": "10px"}}>
                <div className="job-body"
                        // style={{"width": width + "%"}}
                    >
                    <div className="job-table">

                    <Table>                
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
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                            <td style={{"padding": "0px" }}>
                                Match Rating: 
                            </td>
                            <td style={{"padding": "0px" }}>
                                {rate(applicant.rating)}        
                            </td>
                        </tr>
                        <tr style={{ "border-bottom-width": 0 + "px"}}>
                            <td style={{"padding": "0px" }}>
                                Distance: 
                            </td>
                            <td style={{"padding": "0px" }}>
                                {Math.round(applicant.distance)} Miles        
                            </td>
                        </tr>
                    </Table>
                    </div>
                    </div>
                    <div className="description"
                        // style={{"maxWidth": width + "%"}}
                    >
                        {/* <span>{job.description}</span> */}
                        <div id="description-details">
                            <h2>Job Details and Description</h2>
                        </div>
                        <div className="description-box">
                            {job.description}
                        </div>
                    </div>
            </Card.Body>
                    <div className="job-buttons mb-2">
                        {props.handleApply(job)}
                        {props.handleSavedJob(job)}
                    </div>
                    {/* <CloseButton onClick={props.handleClose} 
                        style={{
                            position: "relative",
                            bottom: 15 + "px",
                            right: 15 + "px"
                        }}
                    /> */}
        </Card>
        </div>
    )

}

export default Job