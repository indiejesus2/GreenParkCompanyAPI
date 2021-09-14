export const fetchJobs = (contractor) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_JOBS'})
        fetch(`api/v1/employers/${contractor.id}/jobs`).then(resp => resp.json())
        .then(jobs => dispatch({
            type: 'FETCH_JOBS',
            payload: jobs
        }))
    }
}