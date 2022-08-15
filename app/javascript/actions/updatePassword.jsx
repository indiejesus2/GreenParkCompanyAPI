export const updatePassword = (user) => {
    // debugger

    // handleUser = () => {
    //     if (user.user =="employee") {
    //         dispatch({type: 'LOADING_EMPLOYEES'})
    //     } else {
    //         dispatch({type: 'FETCH_CONTRACTOR'})
    //     }
    // }

    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        };
        // handleUser()
        return fetch(`/api/v1/forgot_password`, configObj)
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                dispatch({
                    type: 'ERROR_EMPLOYEE',
                    payload: user.error
                })
            } else {
                debugger
            }
            // dispatch({payload: user})
        })
    }
}