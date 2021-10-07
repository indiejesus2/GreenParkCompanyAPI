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
        debugger
            return {
                contractor: action.payload.contractor,
                jobs: action.payload.jobs.data.map(job => job.attributes),
                // candidates: action.payload.candidates.data.map(candidate => candidate.attributes),
                // profiles: action.payload.candidates.included.filter(include => include.type == "profile").map(profile => profile.attributes),
                // work_history: action.payload.candidates.included.filter(include => include.type == "work_history").map(work => work.attributes),
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
                jobs: [...state.jobs, action.payload.jobs.data.attributes],
                loading: false
            }
        case 'EDIT_JOB':
            return {
                ...state,
                jobs: action.payload.jobs.data.map(job => job.attributes)
            }
        case 'DELETE_JOB':
            return {
                ...state,
                jobs: action.payload.jobs.data.map(job => job.attributes)
            }
        default:
            return state
    }
}