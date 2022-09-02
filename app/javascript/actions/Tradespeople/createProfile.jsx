export const createProfile = (profile) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_EMPLOYEES'})
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(profile)
        };
        return fetch(`/api/v1/employees/${profile.employee_id}/profiles/`, configObj)
        .then(resp => resp.json())
        .then(profile => {dispatch({type: 'UPDATE_PROFILE', payload: profile})})
        .catch(err => {
            dispatch({type: 'ERROR_EMPLOYEE', payload: err})
        })
    }
}