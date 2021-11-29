export const addExperience = (experience) => {
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
        return fetch(`/api/v1/experiences/`, configObj)
        .then(resp => resp.json())
        .then(experience => dispatch({type: 'ADD_EXPERIENCE', payload: experience.data.attributes}))
    }
}