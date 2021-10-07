export const fetchJob = (job) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_JOBS'})
        fetch(`/api/v1/employers/${job.employer_id}/jobs/${job.id}`).then(resp => resp.json())
        .then(candidates => dispatch({
            type: 'FETCH_JOB',
            payload: candidates
        }))
    }
}