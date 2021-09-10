export const signInContractor = (employer) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept : 'application/json',
            },
            body: JSON.stringify(employer)
        }
        dispatch({type: 'FETCH_CONTRACTOR'})
        return fetch(`/api/v1/signin`, configObj)
        .then(resp => resp.json())
        .then(employer => dispatch({
            type: 'SIGNIN_CONTRACTOR',
            payload: employer
        }))
    }
}