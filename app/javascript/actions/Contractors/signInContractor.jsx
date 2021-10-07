export const signInContractor = (employer) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept : 'application/json',
            },
            body: JSON.stringify({employer: employer})
        }
        dispatch({type: 'FETCH_CONTRACTOR'})
        return fetch(`/api/v1/signin`, configObj)
        .then(resp => resp.json())
        .then(employer => {
            if (employer.error) {
                dispatch({
                    type: 'ADD_ERROR',
                    payload: employer.error    
                })
            } else {
                dispatch({
                    type: 'SIGNIN_CONTRACTOR',
                    payload: employer
                })
            }
        })
    }
}