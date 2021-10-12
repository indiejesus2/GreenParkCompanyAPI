export const addJob = (job) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_JOBS'})
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(job)
        };
        return fetch('/api/v1/jobs', configObj)
        .then(resp => resp.json())
        .then(job => dispatch({type: 'ADD_JOB', payload: job.data.attributes}))
    }
}