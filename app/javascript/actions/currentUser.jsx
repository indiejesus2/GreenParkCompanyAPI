export const currentUser = () => {
    return (dispatch) => {
    return fetch(`/api/v1/signin`, {withCredentials: true})
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