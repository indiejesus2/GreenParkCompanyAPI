import { assertConditionalExpression } from "@babel/types"

export default function adminReducer(state = {employees: [], jobs: [], employers: [], loading: false, loggedIn: false}, action) {
    switch(action.type) {    
        case 'LOADING_ADMIN':
            return {
                ...state,
                loading: true
            }
        case 'SIGNIN_ADMIN':
            return {
                employees: action.payload.employees.data.map(employee => employee.attributes),
                employers: action.payload.employers.data.map(employer => employer.attributes),
                jobs: action.payload.jobs.data.map(job => job.attributes),
                loading: false,
                loggedIn: true
            }
        case 'DELETE_EMPLOYEE':
            let deletedEmployees = state.employees.filter(employee => employee.id != action.payload.employee.data.id)
            return {
                ...state,
                employees: deletedEmployees
            }
        case 'DELETE_EMPLOYER':
            let deletedEmployers = state.employers.filter(employer => employer.id != action.payload.employer.data.id)
            debugger
            return {
                ...state,
                employers: deletedEmployers,
                loading: false
            }
        case 'DELETE_ADMIN_JOB':
            let deletedJobs = state.jobs.filter(job => job.id != action.payload.job.id)
            return {
                ...state,
                jobs: deletedJobs
            }
        case 'LOGOUT_ADMIN':
            return {
                loggedIn: false,
                employees: [],
                employers: [],
                jobs: []
            }
        // case 'FETCH_JOB':
        //     return {
        //         candidates: action.payload.candidates.map(candidate => candidate[0]),
        //         loading: false
        //     }
        default:
            return state
    }
}