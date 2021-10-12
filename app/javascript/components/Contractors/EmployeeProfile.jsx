import React from 'react'

const EmployeeProfile = props => {

    const job = props.jobs.find(job => job.id == props.match.params.job_id)
    const candidate = job.profiles.find(profile => profile.employee_id == props.match.params.employee_id)


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
            <h5>{candidate.industry}</h5>
            <p>{candidate.description}</p>
            <div className="work-schedule">
                Job Type: {candidate.jobtype.join(', ')}
                <br />
                Work Schedule: {candidate.schedule.join(', ')}
                <br />
                Shifts: {candidate.shifts.join(', ')}
            </div>
                {/* {props.work_history.map(history => 
            <div className="work-history" key={history.id}>
                Experience:
                    <p>{history.title}</p>
                    <p>{history.company}</p>
            </div>
                    )}
            <button onClick={handleClick}>Edit Profile</button> */}
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