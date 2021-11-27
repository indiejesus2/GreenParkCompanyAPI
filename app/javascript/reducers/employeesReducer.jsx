import { assertConditionalExpression } from "@babel/types"

export default function employeesReducer(state = {employee: [], profile: [], experience: [], jobs: [], file: [], document: [], loggedIn: false, loading: false, fileLoading: false}, action) {
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
            return {
                ...state,
                employee: action.payload,
                profile: action.payload.profile,
                experience: action.payload.experiences,
                jobs: action.payload.jobs,
                file: action.payload.file,
                document: action.payload.document,
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
                loading: false
            }
        case 'UPDATE_PROFILE':
            return {
                ...state,
                employee: action.payload,
                profile: action.payload.profile,
                experience: action.payload.experiences,
                jobs: action.payload.jobs,
                loading: false
            }
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
        case 'ERROR_EMPLOYEE':
            return {
                ...state,
                loading: false,
                loggedIn: false,
                errors: action.payload
            }
            case 'LOGOUT_USER':
                return {
                    loggedIn: false
                }
        default:
            return state
    }
}