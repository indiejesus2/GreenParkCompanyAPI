export default function employeesReducer(state = {employee: [], profile: [], work_history: [], jobs: [], loggedIn: false, loading: false, errors: []}, action) {
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
                employee: action.payload.employee.data.attributes,
                profile: action.payload.employee.data.attributes.profile,
                work_history: action.payload.employee.data.attributes.work_histories,
                jobs: action.payload.jobs,
                loggedIn: true,
                loading: false
            }
        case 'CREATE_PROFILE':
            return {
                ...state, 
                profile: action.payload.data.attributes,
                work_history: action.payload.data.attributes.work_histories,
                loading: false
            }
        case 'FETCH_EMPLOYEE':
            return {
                employee: action.payload.data,
                profile: action.payload.included.find(include => include.type == "profile").attributes,
                work_history: action.payload.included.find(include => include.type == "work_history").attributes,
                loading: false
            }
        case 'ERROR_EMPLOYEE':
            return {
                loading: false,
                loggedIn: false,
                errors: action.payload
            }
        default:
            return state
    }
}