export default function employeesReducer(state = {employee: [], loggedIn: false}, action) {
    switch(action.type) {
        case 'SIGNIN_EMPLOYEE':
            debugger
            return {
                employee: action.payload,
                loggedIn: true
            }
        default:
            return state
    }
}