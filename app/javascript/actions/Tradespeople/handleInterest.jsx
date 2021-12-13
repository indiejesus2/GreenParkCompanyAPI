export const handleInterest = (application) => {
    return (dispatch) => {
        const configObj = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'applicant/json'
            },
            body: JSON.stringify(application)
        };
        return fetch(`/api/v1/employees/${application.employee_id}/applicants/${application.job_id}`, {configObj})
        .then(resp => resp.json())
        .then(applications => {
            dispatch({type: 'UPDATE_APPLICATIONS', payload: applications})
        })
    }
}