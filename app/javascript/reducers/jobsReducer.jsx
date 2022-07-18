export default function jobsReducer(state = {jobs: [], candidates: [], loading: false}, action) {
    switch(action.type) {
        
        case 'LOADING_JOBS':
            return {
                ...state,
                // candidates: [...state.candidates],
                loading: true
            }
        case 'FETCH_JOBS':
            return {
                jobs: action.payload,
                loading: false
            }
        case 'FETCH_JOB':
            return {
                candidates: action.payload.candidates.map(candidate => candidate[0]),
                loading: false
            }
        default:
            return state
    }
}