export const handleSave = (application) => {
    return (dispatch) => {
        const configObj = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'applicant/json'
            },
            body: JSON.stringify(application)
        };
        return fetch(`/api/v1/employees/${application.employee_id}/jobs/${application.job_id}/save`, {configObj})
        .then(resp => resp.json())
        .then(applications => {dispatch({type: 'UPDATE_APPLICATIONS', payload: applications})})
        .catch(err => {
            dispatch({type: 'ERROR_EMPLOYEE', payload: err})
        })
    }
}