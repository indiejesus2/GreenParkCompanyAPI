import { assertConditionalExpression } from "@babel/types"

export default function employeesReducer(state = {employee: [], profile: [], experience: [], jobs: [], applicants: [], file: [], document: [], errors: [], loggedIn: false, loading: false, fileLoading: false}, action) {
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
                file: employee.file,
                document: employee.document,
                loggedIn: true,
                loading: false
            }
        case 'CURRENT_EMPLOYEE':
            return {
                ...state,
                employee: action.payload.user,
                loggedIn: true
            }    
        case 'CREATE_PROFILE':
            return {
                ...state,
                profile: action.payload.profile,
                experience: action.payload.experiences,
                jobs: action.payload.jobs,
                applicants: action.payload.applicants,
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
                file: profile.file,
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
        case 'LOADING_FILE':
            return {
                ...state,
                fileLoading: true
            }
        case 'UPLOAD_FILE':
            return {
                ...state,
                fileLoading: false,
                document: action.payload
            }
        case 'UPDATE_APPLICATIONS':
            return {
                ...state,
                applicants: action.payload
            }
        case 'ERROR_EMPLOYEE':
            debugger
            return {
                ...state,
                loading: false,
                loggedIn: false,
                employeeErrors: action.payload
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
                    errors: []
                }
        default:
            return state
    }
}