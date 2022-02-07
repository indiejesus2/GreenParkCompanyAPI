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
        return fetch(`/api/v1/employees/${profile.employee_id}/profiles/1`, configObj)
        .then(resp => resp.json())
        .then(profile => dispatch({type: 'UPDATE_PROFILE', payload: profile.data.attributes}))
    }
}