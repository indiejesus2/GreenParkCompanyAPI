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
            return {
                contractor: action.payload,
                jobs: action.payload.jobs.data.map(job => job.attributes),
                loggedIn: true,
                loading: false
            }
        case 'LOADING_JOBS':
            return {
                contractor: state.contractor,
                jobs: [...state.jobs],
                // candidates: [...state.candidates],
                // profiles: [...state.profiles],
                // work_history: [...state.work_history],
                loading: true
            }
        case 'ADD_JOB':
            return {
                ...state, 
                jobs: [...state.jobs, action.payload],
                loading: false
            }
        case 'EDIT_JOB':
            debugger
            return {
                ...state,
                jobs: action.payload.jobs.data.map(job => job.attributes)
            }
        case 'DELETE_JOB':
            return {
                ...state,
                jobs: action.payload.jobs.data.map(job => job.attributes)
            }
        case 'ERROR_CONTRACTOR':
            return {
                contractor: [...state.contractor],
                loggedIn: false,
                loading: false,
                errors: action.payload
            }
        case 'LOGOUT_USER':
            return {
                contractor: [],
                loggedIn: false
            }
        default:
            return state
    }
}