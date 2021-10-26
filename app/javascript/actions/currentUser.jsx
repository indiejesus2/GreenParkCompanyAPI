export const currentUser = () => {
    debugger
    return (dispatch) => {
        const configObj = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
    return fetch(`/api/v1/current_user`, configObj, {withCredentials: true})
    .then(resp => resp.json())
    .then(user => {
        if (user.user == "contractor") {
            dispatch({
                type: 'CURRENT_CONTRACTOR',
                payload: user
            })
        } else if (user.user == "employee") {
            dispatch({
                type: 'CURRENT_EMPLOYEE',
                payload: user
                })
        }
    })
}
}