import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import {signInContractor} from '../actions/Contractors/signInContractor'
import { signUpContractor } from '../actions/Contractors/signUpContractor'
import { addJob } from '../actions/Contractors/addJob'
import { editJob } from '../actions/Contractors/editJob'
import { deleteJob } from '../actions/Admin/deleteJob'
import { editApplicant } from '../actions/Contractors/editApplicant'
import { updateProfile } from '../actions/Tradespeople/updateProfile'
import { deleteEmployee } from '../actions/Admin/deleteEmployee'
import { deleteEmployer } from '../actions/Admin/deleteEmployer'
import Dashboard from '../components/Admin/Dashboard'
import EmployersAdmin from '../components/Admin/EmployersAdmin'
import EmployeesAdmin from '../components/Admin/EmployeesAdmin'
import JobsAdmin from '../components/Admin/JobsAdmin'
import EditJobAdmin from '../components/Admin/EditJobAdmin'
import EditEmployeeAdmin from '../components/Admin/EditEmployeeAdmin'
import EditEmployerAdmin from '../components/Admin/EditEmployerAdmin'

class AdminContainer extends Component {

    
    render() {
        return (
                <div className="admin">
                    {/* <NavBar {...routerProps} handleSignout={this.props.signOut} loggedIn={this.props.loggedIn} user="admin" /> */}

                    <Switch>
                        <Route path='/admin/editEmployer/:employer_id' render={(routerProps) => <EditEmployerAdmin {...routerProps} loggedIn={this.props.loggedIn} loading={this.props.loading} employees={this.props.employees} employers={this.props.employers} jobs={this.props.jobs} updateProfile={this.props.updateProfile} deleteEmployer={this.props.deleteEmployer} />}></Route>
                        <Route path='/admin/editEmployee/:employee_id' render={(routerProps) => <EditEmployeeAdmin {...routerProps} loggedIn={this.props.loggedIn} loading={this.props.loading} employees={this.props.employees} employers={this.props.employers} jobs={this.props.jobs} updateProfile={this.props.updateProfile} deleteEmployee={this.props.deleteEmployee} />}></Route>
                        <Route path='/admin/editJob/:job_id' render={(routerProps) => <EditJobAdmin {...routerProps} loggedIn={this.props.loggedIn} loading={this.props.loading} employees={this.props.employees} employers={this.props.employers} jobs={this.props.jobs} updateJob={this.props.updateJob} deleteJob={this.props.deleteJob} />}></Route>
                        <Route path='/admin/employers' render={(routerProps) => <EmployersAdmin {...routerProps} loggedIn={this.props.loggedIn} loading={this.props.loading} employees={this.props.employees} employers={this.props.employers} jobs={this.props.jobs} updateProfile={this.props.updateProfile} />}></Route>
                        <Route path='/admin/employees' render={(routerProps) => <EmployeesAdmin {...routerProps} loggedIn={this.props.loggedIn} loading={this.props.loading} employees={this.props.employees} employers={this.props.employers} jobs={this.props.jobs} updateProfile={this.props.updateProfile} />}></Route>
                        <Route path='/admin/jobs' render={(routerProps) => <JobsAdmin {...routerProps} loggedIn={this.props.loggedIn} loading={this.props.loading} employees={this.props.employees} employers={this.props.employers} jobs={this.props.jobs} updateProfile={this.props.updateProfile} />}></Route>
                        <Route path='/admin' render={(routerProps) => <Dashboard {...routerProps} loggedIn={this.props.loggedIn} loading={this.props.loading} employees={this.props.employees} employers={this.props.employers} jobs={this.props.jobs} />}></Route>
                    </Switch>
                </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        // contractor: state.contractorsReducer.contractor,
        // // profile: state.contractorsReducer.profile,
        // loggedIn: state.contractorsReducer.loggedIn,
        // loading: state.jobsReducer.loading,
        // // jobs: state.jobsReducer.jobs,
        // candidates: state.jobsReducer.candidates
        loading: state.adminReducer.loading,
        loggedIn: state.adminReducer.loggedIn,
        employees: state.adminReducer.employees,
        employers: state.adminReducer.employers,
        jobs: state.adminReducer.jobs,
        // errors: state.errorsReducer.errors
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: contractor => dispatch(signInContractor(contractor)),
    signUpContractor: contractor => dispatch(signUpContractor(contractor)),
    addJob: job => dispatch(addJob(job)),
    editJob: job => dispatch(editJob(job)),
    deleteJob: job => dispatch(deleteJob(job)),
    fetchJobs: contractor => dispatch(fetchJobs(contractor)),
    fetchJob: job => dispatch(fetchJob(job)),
    updateProfile: profile => dispatch(updateProfile(profile)),
    editApplicant: applicant => dispatch(editApplicant(applicant)),
    deleteEmployee: employee => dispatch(deleteEmployee(employee)),
    deleteEmployer: employer => dispatch(deleteEmployer(employer))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)