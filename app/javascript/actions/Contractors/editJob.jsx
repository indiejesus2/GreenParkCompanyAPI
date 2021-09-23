export const editJob = (job) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_JOBS'})
        const configObj = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(job)
        };
        return fetch(`/api/v1/jobs/${job.id}`, configObj)
        .then(resp => resp.json())
        .then(job => dispatch({type: 'EDIT_JOB', payload: job}))
    }
}