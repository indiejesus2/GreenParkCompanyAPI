export default function contractorsReducer(state = {contractor: [], jobs: [], loggedIn: false, loading: false}, action) {
    switch(action.type) {
        case 'FETCH_CONTRACTOR':
            return {
                ...state,
                loading: true
            }
        case 'SIGNUP_CONTRACTOR':
            // debugger
            return {
                contractor: action.payload,
                loggedIn: true,
                loading: false
            }
        case 'UPDATE_SUBSCRIPTION':
            return {
                contractor: action.payload,
                loading: false
            }
        case 'SIGNIN_CONTRACTOR': 
            return {
                contractor: action.payload.contractor,
                jobs: action.payload.jobs.data.map(job => job.attributes),
                loggedIn: true,
                loading: false
            }
        case 'UPDATE_PROFILE':
            return {
                ...state,
                contractor: action.payload,
                loading: false
            }
        case 'LOADING_JOBS':
            return {
                contractor: state.contractor,
                jobs: [...state.jobs],
                loading: true
            }
        case 'ADD_JOB':
            return {
                ...state, 
                jobs: [...state.jobs, action.payload],
                loading: false
            }
        case 'EDIT_JOB':
            let edited = state.jobs.map(job => {
                if(job.id === action.payload.id) {
                    return action.payload
                } else {
                    return job
                }
            })
            return {...state, jobs: edited, loading: false}
        case 'DELETE_JOB':
            let deleted = state.jobs.filter(job => job.id != action.payload.id)
            return {...state, jobs: deleted, loading: false}
        case 'ERROR_CONTRACTOR':
            return {
                contractor: [...state.contractor],
                loggedIn: false,
                loading: false,
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