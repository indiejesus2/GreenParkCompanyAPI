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
        return fetch('/api/v1/employers', configObj)
        .then(response => response.json())
        .then(employer => {
            if (employer.error) {
                dispatch({
                    type: 'ERROR_CONTRACTOR',
                    payload: employer.error    
                })
            } else {
                dispatch({
                    type: 'SIGNUP_CONTRACTOR',
                    payload: employer
                })
            }
        })
    }
}