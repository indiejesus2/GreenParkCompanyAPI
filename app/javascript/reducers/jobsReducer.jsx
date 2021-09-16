export default function jobsReducer(state = {jobs: [], candidates: [], loading: false}, action) {
    switch(action.type) {
        
        case 'LOADING_JOBS':
            return {
                jobs: [...state.jobs],
                loading: true
            }
        case 'FETCH_JOBS':
            return {
                jobs: action.payload,
                loading: false
            }
        case 'FETCH_JOB':
            return {
                candidates: action.payload.candidates,
                loading: false
            }
        default:
            return state
    }
}