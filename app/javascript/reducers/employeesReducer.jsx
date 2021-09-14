export default function employeesReducer(state = {employee: [], profile: [], work_history: [], loggedIn: false, loading: false}, action) {
    switch(action.type) {
        case 'SIGNUP_EMPLOYEE':
            // debugger
            return {
                employee: action.payload,
                loggedIn: true,
                loading: false
            }
        case 'SIGNIN_EMPLOYEE':
            debugger
            return {
                employee: action.payload.data,
                profile: action.payload.included.find(include => include.type == "profile").attributes,
                work_history: action.payload.included.find(include => include.type == "work_history").attributes,
                loggedIn: true,
                loading: false
            }
        case 'UPDATE_PROFILE':
            return {
                ...state, 
                profile: action.payload.profile
            }
        default:
            return state
    }
}