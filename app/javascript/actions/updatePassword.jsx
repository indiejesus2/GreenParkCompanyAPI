export const updatePassword = (user) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        };
        return fetch(`/api/v1/forgot_password`, configObj)
        .then(resp => resp.json())
        .then(user => dispatch({payload: user}))
    }
}