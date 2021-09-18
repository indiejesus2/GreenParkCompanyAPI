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
                jobs: action.payload.jobs,
                candidates: action.payload.candidates.data.map(dat => dat.attributes),
                profiles: action.payload.candidates.included.filter(include => include.type == "profile"),
                //     if (include.type == "profile") {
                //         include
                //     }
                // }),
                work_history: action.payload.candidates.included.filter(include => include.type == "work_history"),
                loggedIn: true,
                loading: false
            }
        case 'ADD_JOB':
            return {
                ...state, 
                jobs: action.payload.jobs
            }
        // case 'FETCH_EMPLOYEE':
        //     return {
        //         profile: action.payload.profile
        //     }
        default:
            return state
    }
}