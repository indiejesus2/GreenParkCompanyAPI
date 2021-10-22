export const updateProfile = (contractor) => {
    return (dispatch) => {
        dispatch({type: 'FETCH_CONTRACTOR'})
        const configObj = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(contractor)
        };
        return fetch(`/api/v1/employer/${contractor.id}`, configObj)
        .then(resp => resp.json())
        .then(contractor => dispatch({type: 'UPDATE_PROFILE', payload: contractor.data.attributes}))
    }
}