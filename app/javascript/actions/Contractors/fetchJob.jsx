export const fetchJobs = (job) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_JOBS'})
        fetch(`api/v1/employers/${contractor.id}/jobs`).then(resp => resp.json())
        .then(jobs => dispatch({
            type: 'FETCH_JOB',
            payload: jobs
        }))
    }
}