export default function employeesReducer(state = {user: [], loggedIn: false}, action) {
    switch(action.type) {
        case 'SIGNIN_USER':
            return {
                user: action.payload,
                loggedIn: true
            }
        default:
            return state
    }
}