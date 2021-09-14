export default function jobsReducer(state = {jobs: [], loading: false}, action) {
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
        default:
            return state
    }
}