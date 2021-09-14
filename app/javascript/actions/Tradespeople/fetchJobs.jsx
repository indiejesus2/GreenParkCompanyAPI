export const fetchJobs = (employee) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_JOBS'})
        fetch(`api/v1/employees/${employee.id}/jobs`).then(resp => resp.json())
        .then(jobs => dispatch({
            type: 'FETCH_JOBS',
            payload: jobs
        }))
    }
}