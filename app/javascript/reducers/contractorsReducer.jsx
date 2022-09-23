import { bindActionCreators } from "redux"

export default function contractorsReducer(state = {contractor: [], jobs: [], applicants: [], loggedIn: false, loading: false, contractorErrors: [], files: [], subscription: []}, action) {
    switch(action.type) {
        case 'FETCH_CONTRACTOR':
            return {
                ...state,
                loading: true
            }
        case 'SIGNUP_CONTRACTOR':
            return {
                ...state,
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
            debugger
            const subscription = () => {
                if (!!action.payload.subscription.data) {
                    return action.payload.subscription.data.attributes
                } else {
                    return action.payload.subscription.data
                }
            }

            // const applications = action.payload.applicants.filter(applicant => applicant.acceptance != false)
            return {
                contractor: action.payload.contractor,
                jobs: action.payload.jobs.data.map(job => job.attributes),
                applicants: action.payload.applicants.data.map(applicant => applicant.attributes),
                files: action.payload.files,
                subscription: subscription(),
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
            debugger
            let newApplicants = action.payload.applicants.data.map(applicant => applicant.attributes)
            // if(state.jobs) {
                // let applications = action.payload.applicants.filter(applicant => applicant.acceptance != false)
                return {
                    ...state, jobs: [...state.jobs, action.payload.job.data.attributes], loading: false, applicants: newApplicants
                }
            // } else {
                // return {
                //     ...state, jobs: action.payload.job.data.attributes, loading: false, applicants: newApplicants
                // }
            // }
        case 'EDIT_JOB':
            // let applications = action.payload.applicants.filter(applicant => applicant.acceptance != false)
            let editApplicants = action.payload.applicants.data.map(applicant => applicant.attributes)

            let edited = state.jobs.map(job => {
                if(job.id === action.payload.job.data.attributes.id) {
                    return action.payload.job.data.attributes
                } else {
                    return job
                }
            })
            return {...state, jobs: edited, loading: false, applicants: editApplicants}
        case 'DELETE_JOB':     
            let deleted = state.jobs.filter(job => job.id != action.payload.job.id)
            // let applications = action.payload.applicants.filter(applicant => applicant.acceptance != false)
            return {...state, jobs: deleted, loading: false, applicants: action.payload.applicants.data.map(applicant => applicant.attributes)}
        case 'ADD_PAYMENT':
            // debugger
            return {
                ...state,
                loading: false,
                contractor: action.payload.contractor,
                subscription: action.payload.subscription.data.attributes
            }
        case 'UPDATE_PAYMENT':
            // debugger
            return {
                ...state,
                loading: false,
                contractor: action.payload.contractor,
                subscription: action.payload.subscription.data.attributes
            }
        case 'ERROR_CONTRACTOR':
            return {
                ...state,
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