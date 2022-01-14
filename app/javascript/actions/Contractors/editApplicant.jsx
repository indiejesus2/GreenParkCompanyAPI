export const editApplicant = (applicant) => {
    return (dispatch) => {
        dispatch({type: 'FETCH_CONTRACTOR'})
        const configObj = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({applicant})
        };
        return fetch(`/api/v1/applicants/${applicant.id}`, configObj)
        .then(resp => resp.json())
        .then(jobs => dispatch({type: 'UPDATE_JOBS', payload: jobs}))
    }
}