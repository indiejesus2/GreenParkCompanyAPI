export const addExperience = (experience) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(experience)
        };
        dispatch({type: 'LOADING_EMPLOYEES'})
        return fetch(`/api/v1/employees/${experience.employee_id}/experiences/`, configObj)
        .then(resp => resp.json())
        .then(experience => dispatch({type: 'ADD_EXPERIENCE', payload: experience.data.attributes}))
    }
}