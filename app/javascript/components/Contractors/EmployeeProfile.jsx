import React from 'react'

const EmployeeProfile = props => {


    const candidate = props.profiles.find(profile => profile.id == props.match.params.id)

    debugger
    // const [state, setState] = useState({
    //     id: candidate.id,
    //     employee_id: candidate.employee_id,
    //     fname: candidate.fname,
    //     lname: candidate.lname,
    //     city: candidate.city,
    //     state: candidate.state,
    //     phone: candidate.phone,
    //     status: candidate.status,
    //     jobType: candidate.jobType,
    //     schedule: candidate.schedule,
    //     education: candidate.education,
    //     skills: candidate.skills,
    //     military: candidate.military,
    //     certificates: candidate.certificates,
    //     description: candidate.description,
    //     work_histories: props.work_history
    // })

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
                <label htmlFor="jobtype">Job Type: </label>
                <p>{candidate.jobtype.join(", ")}</p>
                <label htmlFor="schedule">Schedule: </label>
                <p>{candidate.schedule.join(", ")}</p>
                <label htmlFor="education">Education: </label>
                <p>{candidate.education}</p>
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