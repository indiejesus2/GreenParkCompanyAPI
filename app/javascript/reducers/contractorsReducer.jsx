export default function contractorsReducer(state = {contractor: [], profile: [], jobPost: [], loggedIn: false, loading: false}, action) {
    switch(action.type) {
        case 'FETCH_CONTRACTOR':
            return {
                loading: true
            }
        case 'SIGNUP_CONTRACTOR':
            // debugger
            return {
                contractor: action.payload,
                loggedIn: true,
                loading: false
            }
        case 'SIGNIN_CONTRACTOR':
            // debugger
            return {
                contractor: action.payload.contractor,
                profile: action.payload.profile,
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