export const deleteJob = (job) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_ADMIN'})
        return (fetch(`/api/v1/employers/${job.employer_id}/jobs/${job.id}`, {
            method: "DELETE",
        }))
        .then(resp => resp.json())
        .then(job => dispatch({type: "ADMIN_DELETE_JOB", payload: job}))
        .catch(err => {
            dispatch({type: 'ERROR_ADMIN', payload: err})
        })
    }
}