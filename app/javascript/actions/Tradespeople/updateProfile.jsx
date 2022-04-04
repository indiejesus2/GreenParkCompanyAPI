export const updateProfile = (profile) => {
    return (dispatch) => {
        const configObj = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(profile)
        };
        dispatch({type: 'LOADING_EMPLOYEES'})
        return fetch(`/api/v1/employees/${profile.employee_id}/profiles/${profile.id}`, configObj)
        .then(resp => resp.json())
        .then(employee => {dispatch({type: 'UPDATE_PROFILE', payload: employee})})
        .catch(err => {
            dispatch({type: 'ERROR_EMPLOYEE', payload: err})
        })
    }
}