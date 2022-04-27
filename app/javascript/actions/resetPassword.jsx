export const resetPassword = (user) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        };
        return fetch(`/api/v1/reset_password`, configObj)
        .then(resp => resp.json())
        .then(user => {
            debugger
            if (user.error) {
                dispatch({
                    type: 'ERROR_EMPLOYEE',
                    payload: user.error
                })
            } else {
                debugger
            }
        })
    }
}