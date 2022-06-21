import { bindActionCreators } from "redux"

export default function contractorsReducer(state = {contractor: [], jobs: [], applicants: [], loggedIn: false, loading: false, contractorErrors: "", files: []}, action) {
    switch(action.type) {
        case 'FETCH_CONTRACTOR':
            return {
                ...state,
                loading: true
            }
        case 'SIGNUP_CONTRACTOR':
            return {
                contractor: action.payload,
                loggedIn: true,
                loading: false
            }
        case 'UPDATE_SUBSCRIPTION':
            return {
                ...state,
                contractor: action.payload,
                loading: false
            }
        case 'SIGNIN_CONTRACTOR':
            return {
                contractor: action.payload.contractor,
                jobs: action.payload.jobs.data.map(job => job.attributes),
                applicants: action.payload.applicants,
                files: action.payload.files,
                loggedIn: true,
                contractorErrors: [],
                loading: false
            }
        case 'CURRENT_CONTRACTOR':
            return {
                ...state,
                // contractor: action.payload.data.attributes,
                loggedIn: true,
            }
        case 'UPDATE_CONTRACTOR':
            debugger
            return {
                ...state,
                contractor: action.payload,
                loading: false
            }
        case 'LOADING_JOBS':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_JOBS':
            return {
                ...state,
                jobs: action.payload.jobs.data.map(job=>job.attributes),
                loading: false
            }
        case 'ADD_JOB':
            // let addition = state.jobs.map(job => {
            //     if(job.id === action.payload.id) {
            //         return action.payload
            //     } else {
            //         return job
            //     }
            // })
            if(state.jobs) {
                return {
                    ...state, jobs: [...state.jobs, action.payload], loading: false, applicants: action.payload.applicants
                }
            } else {
                return {
                    ...state, jobs: [action.payload], loading: false, applicants: action.payload.applicants
                }
            }
        case 'EDIT_JOB':
            // debugger
            let edited = state.jobs.map(job => {
                if(job.id === action.payload.id) {
                    return action.payload
                } else {
                    return job
                }
            })
            return {...state, jobs: edited, loading: false, applicants: action.payload.applicants}
        case 'DELETE_JOB':
            let deleted = state.jobs.filter(job => job.id != action.payload.id)
            return {...state, jobs: deleted, loading: false, applicants: action.payload.applicants}
        case 'ADD_PAYMENT':
            return {
                ...state,
                loading: false,
                contractor: action.payload
            }
        case 'ERROR_CONTRACTOR':
            debugger
            return {
                ...state,
                // loggedIn: false,
                loading: false,
                contractorErrors: action.payload
            }
        case 'CLEAR_CONTRACTOR_ERRORS':
            return {
                ...state,
                contractorErrors: []
            }
        case 'LOGOUT_CONTRACTOR':
            return {
                loggedIn: false,
                contractor: [],
                jobs: [],
                applicants: [],
                contractorErrors: []
            }
        default:
            return state
    }
}