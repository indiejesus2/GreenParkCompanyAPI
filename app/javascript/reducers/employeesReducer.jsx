import { assertConditionalExpression } from "@babel/types"

export default function employeesReducer(state = {employee: [], profile: [], experience: [], jobs: [], applicants: [], file: [], document: [], employeeErrors: [], loggedIn: false, loading: false, fileLoading: false}, action) {
    switch(action.type) {
        case 'LOADING_EMPLOYEES':
            return {
                ...state,
                loading: true
            }
        case 'SIGNUP_EMPLOYEE':
            return {
                ...state,
                employee: action.payload,
                loggedIn: true,
                loading: false
            }
        case 'SIGNIN_EMPLOYEE':
            let employee = action.payload.employee.data.attributes
            let jobs = action.payload.jobs.data.map(job=>job.attributes)
            return {
                ...state,
                employee: employee,
                profile: employee.profile,
                experience: employee.experiences,
                jobs: jobs,
                applicants: employee.applicants,
                file: action.payload.file,
                document: employee.document,
                loggedIn: true,
                employeeErrors: [],
                loading: false
            }
        case 'CURRENT_EMPLOYEE':
            let current = action.payload.employee.data.attributes
            let currentJobs = action.payload.jobs.data.map(job=>job.attributes)
            return {
                ...state,
                loggedIn: true
                // employee: current,
                // profile: current.profile,
                // experience: current.experiences,
                // jobs: currentJobs,
                // applicants: current.applicants,
                // file: current.file,
                // document: current.document,
                // loggedIn: true,
                // loading: false
            }
        case 'CREATE_PROFILE':
            return {
                ...state,
                employee: action.payload.employee.data.attributes,
                profile: employee.profile,
                experience: employee.experiences,
                jobs: action.payload.jobs.data.map(job=>job.attributes),
                applicants: employee.applicants,
                file: action.payload.file,
                document: employee.document,
                loading: false
            }
        case 'UPDATE_PROFILE':
            let profile = action.payload.employee.data.attributes
            let matches = action.payload.jobs.data.map(job=>job.attributes)
            return {
                ...state,
                employee: profile,
                profile: profile.profile,
                experience: profile.experiences,
                jobs: matches,
                applicants: profile.applicants,
                file: action.payload.file,
                document: profile.document,
                loading: false
            }
        case 'ADD_EXPERIENCE':
            return {...state, experience: [...state.experience, action.payload], loading: false}
        case 'UPDATE_EXPERIENCE':
            let edited = state.experience.map(experience => {
                if(experience.id === action.payload.id) {
                    return action.payload
                } else {
                    return experience
                }
            })
            return {...state, experience: edited, loading: false}
        case 'DELETE_EXPERIENCE':
            let deleted = state.experience.filter(exp => exp.id != action.payload.id)
            {return {...state, experience: deleted, loading: false}}
        case 'LOADING_FILE':
            return {
                ...state,
                fileLoading: true
            }
        case 'UPLOAD_FILE':
            return {
                ...state,
                fileLoading: false,
                file: action.payload
            }
        case 'UPDATE_APPLICATIONS':
            return {
                ...state,
                applicants: action.payload
            }
        case 'ERROR_EMPLOYEE':
            return {
                ...state,
                loading: false,
                employeeErrors: action.payload
            }
        case 'CLEAR_EMPLOYEE_ERRORS':
            return {
                ...state,
                employeeErrors: []
            }
        case 'LOGOUT_EMPLOYEE':
            return {
                loggedIn: false,
                employee: [],
                profile: [],
                experience: [],
                jobs: [],
                applicants: [],
                file: [],
                document: [],
                employeeErrors: []
            }
        default:
            return state
    }
}