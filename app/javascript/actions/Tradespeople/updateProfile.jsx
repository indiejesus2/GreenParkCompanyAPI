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
        return fetch(`http://localhost:3000/api/v1/employees/${profile.employee_id}/profiles/${profile.id}`, configObj)
        .then(resp => resp.json())
        .then(profile => dispatch({type: 'UPDATE_PROFILE', payload: profile}))
    }
}