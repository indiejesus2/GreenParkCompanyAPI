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
        return fetch(`/api/v1/employers/${contractor.id}`, configObj)
        .then(resp => resp.json())
        .then(contractor => dispatch({type: 'UPDATE_CONTRACTOR', payload: contractor.data.attributes}))
        .catch(err => {
            dispatch({type: 'ERROR_CONTRACTOR', payload: err})
        })
    }
}