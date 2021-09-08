export default function employeesReducer(state = {employee: [], profile: [], loggedIn: false, loading: false}, action) {
    switch(action.type) {
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
                profile: action.payload.profile,
                loggedIn: true,
                loading: false
            }
        default:
            return state
    }
}