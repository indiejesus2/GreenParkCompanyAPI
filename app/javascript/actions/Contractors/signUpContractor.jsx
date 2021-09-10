export const signUpContractor = (contractor) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(contractor)
        };
        dispatch({type: 'FETCH_CONTRACTOR'})
        return fetch('http://localhost:3000/api/v1/employers', configObj)
        .then(response => response.json())
        .then(contractor => dispatch({type: 'SIGNUP_CONTRACTOR', payload: contractor}))
    }
}