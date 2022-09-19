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
        case 'SIGNOUT_ADMIN':
            return {
                loggedIn: false
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