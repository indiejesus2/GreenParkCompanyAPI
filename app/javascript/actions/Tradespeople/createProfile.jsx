export const createProfile = (profile) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(profile)
        };
        return fetch(`http://localhost:3000/api/v1/employees/${profile.employee_id}/profiles/`, configObj)
        .then(resp => resp.json())
        .then(profile => dispatch({type: 'CREATE_PROFILE', payload: profile}))
    }
}