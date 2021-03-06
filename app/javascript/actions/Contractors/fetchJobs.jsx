export const fetchJobs = (employer) => {
    return (dispatch) => {
        const configObj = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept : 'application/json',
            }
        }
    dispatch({type: 'FETCH_CONTRACTOR'})
    return fetch(`/api/v1/contractors/${employer.id}/jobs`, configObj)
    .then(resp => resp.json())
    .then(job => dispatch({type: 'FETCH_JOBS', payload: job.data.attributes}))
    .catch(err => {
        dispatch({type: 'ERROR_CONTRACTOR', payload: err})
    })
    }
}