export default function contractorsReducer(state = {contractor: [], jobs: [], loggedIn: false, loading: false}, action) {
    switch(action.type) {
        case 'FETCH_CONTRACTOR':

            return {
                contractor: [...state.contractor],
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
                jobs: action.payload.jobs,
                loggedIn: true,
                loading: false
            }
        case 'ADD_JOB':
            return {
                ...state, 
                jobs: action.payload.jobs
            }
        default:
            return state
    }
}