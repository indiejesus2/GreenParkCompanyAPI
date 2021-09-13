export function fetchJobs() {
    return (dispatch) => {
        dispatch({type: 'LOADING_JOBS'})
        fetch('api/v1/jobs').then(resp => resp.json())
        .then(jobs => dispatch({
            type: 'FETCH_JOBS',
            payload: jobs
        }))
    }
}