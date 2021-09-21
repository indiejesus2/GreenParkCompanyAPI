export default function contractorsReducer(state = {contractor: [], jobs: [], candidates: [], profiles: [], work_history: [], loggedIn: false, loading: false}, action) {
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
                contractor: action.payload.contractor,
                jobs: action.payload.jobs.data.map(job => job.attributes),
                candidates: action.payload.candidates.data.map(candidate => candidate.attributes),
                profiles: action.payload.candidates.included.filter(include => include.type == "profile").map(profile => profile.attributes),
                work_history: action.payload.candidates.included.filter(include => include.type == "work_history").map(work => work.attributes),
                loggedIn: true,
                loading: false
            }
        case 'LOADING_JOBS':
            return {
                contractor: state.contractor,
                jobs: [...state.jobs],
                candidates: [...state.candidates],
                profiles: [...state.profiles],
                work_history: [...state.work_history],
                loading: true
            }
        case 'ADD_JOB':
            // let candidates = action.payload.candidates.data.filter(candidate => {
            //     if (!state.candidates.find(dat => dat.id == candidate.id)) {
            //         return candidate
            //     }
            // })
            // let profiles = action.payload.candidates.included.filter()
            return {
                ...state, 
                jobs: [...state.jobs, action.payload.jobs],
                // candidates: [...state.candidates, candidates],
                // profiles: [...state.profiles, candidates.included.filter(include => include.type == "profile").map(profile => profile.attributes)],
                // work_history: [...state.work_history, candidates.included.filter(include => include.type == "work_history").map(work => work.attributes)],
                loading: false
            }
        // case 'FETCH_EMPLOYEE':
        //     return {
        //         profile: action.payload.profile
        //     }
        default:
            return state
    }
}