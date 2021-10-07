export const deleteJob = (job) => {
    return (dispatch) => {
        return (fetch(`/api/v1/employers/${job.employer_id}/jobs/${job.id}`, {
            method: "DELETE",
        }))
        .then(resp => resp.json())
        .then(job => dispatch({type: "DELETE_JOB", payload: job}))
    }
}