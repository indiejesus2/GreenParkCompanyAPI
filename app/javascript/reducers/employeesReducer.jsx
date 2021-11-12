import { assertConditionalExpression } from "@babel/types"

export default function employeesReducer(state = {employee: [], profile: [], experience: [], jobs: [], document: [], loggedIn: false, loading: false}, action) {
    switch(action.type) {
        case 'LOADING_EMPLOYEES':
            return {
                ...state,
                loading: true
            }
        case 'SIGNUP_EMPLOYEE':
            return {
                employee: action.payload,
                loggedIn: true,
                loading: false
            }
        case 'SIGNIN_EMPLOYEE':
            return {
                employee: action.payload,
                profile: action.payload.profile,
                experience: action.payload.experiences,
                jobs: action.payload.jobs,
                loggedIn: true,
                loading: false
            }
        case 'CURRENT_EMPLOYEE':
            return {
                employee: action.payload.user,
                loggedIn: true
            }    
        case 'CREATE_PROFILE':
            return {
                employee: action.payload,
                profile: action.payload.profile,
                experience: action.payload.experiences,
                jobs: action.payload.jobs,
                loading: false
            }
        case 'UPDATE_PROFILE':
            return {
                employee: action.payload,
                profile: action.payload.profile,
                experience: action.payload.experiences,
                jobs: action.payload.jobs,
                loading: false
            }
        case 'LOADING_FILE':
            return {
                ...state,
                loading: true
            }
        case 'UPLOAD_FILE':
            return {
                ...state,
                loading: false,
                document: action.payload
            }
        case 'ERROR_EMPLOYEE':
            return {
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