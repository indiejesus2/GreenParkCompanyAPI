import React from 'react'

const EmployeeProfile = props => {


    
    const job = props.jobs.find(job => job.id == props.match.params.job_id)

    const candidate = job.profiles.find(profile => profile.id == props.match.params.employee_id)


    // componentDidMount() {
    //     this.props.fetchEmployee(this.props.match.params.id)
    // }
        // const employee = !!this.props.profile ? this.props.profile : [jobtype = [], schedule = []]
        // return (<div>
        //     <h1>{candidate.fname} {candidate.lname}</h1>

        // </div>
        // )
        // if (this.props.loading === true) {
        //     return (
        //         <div className="loading">
        //             Loading...
        //         </div>
        //     )
        // } else {
        return (
            <div className="employee-profile">
                <h2>{candidate.fname} {candidate.lname}</h2>
                <h4>{candidate.city}, {candidate.state}</h4>
                <h5>{candidate.phone}</h5>
                <label htmlFor="jobtype">Job Type: 
                <p>{candidate.jobtype.join(", ")}</p>
                </label>
                <label htmlFor="schedule">Schedule: 
                <p>{candidate.schedule.join(", ")}</p>
                </label>
                <label htmlFor="education">Education: 
                <p>{candidate.education}</p>
                </label>
            </div>
        )
        // else {
        //     return (
        //         <div>
        //             Loading...
        //         </div>
        //     )
        // }
    
}

export default EmployeeProfile