export const editExperience = (experience) => {
    return (dispatch) => {
        const configObj = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(experience)
        };
        dispatch({type: 'LOADING_EMPLOYEES'})
        return fetch(`/api/v1/employees/${experience.employee_id}/experiences/${experience.id}`, configObj)
        .then(resp => resp.json())
        .then(experience => {
            dispatch({type: 'UPDATE_EXPERIENCE', payload: experience.data.attributes})
        })
    }
}