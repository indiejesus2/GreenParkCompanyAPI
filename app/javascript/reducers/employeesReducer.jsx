export default function employeesReducer(state = {employee: [], profile: [], work_history: [], jobs: [], loggedIn: false, loading: false}, action) {
    switch(action.type) {
        case 'LOADING_EMPLOYEES':
            return {
                loading: true
            }
        case 'SIGNUP_EMPLOYEE':
            // debugger
            return {
                employee: action.payload,
                loggedIn: true,
                loading: false
            }
        case 'SIGNIN_EMPLOYEE':
            // debugger
            return {
                employee: action.payload.employee,
                profile: action.payload.employee.included.find(include => include.type == "profile").attributes,
                work_history: action.payload.employee.included.find(include => include.type == "work_history").attributes,
                jobs: action.payload.jobs,
                loggedIn: true,
                loading: false
            }
        case 'UPDATE_PROFILE':
            return {
                ...state, 
                profile: action.payload.profile
            }
        case 'FETCH_EMPLOYEE':
            return {
                employee: action.payload.data,
                profile: action.payload.included.find(include => include.type == "profile").attributes,
                work_history: action.payload.included.find(include => include.type == "work_history").attributes,
                loading: false
            }
        default:
            return state
    }
}