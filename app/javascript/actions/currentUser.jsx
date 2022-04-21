export const currentUser = () => {
    return (dispatch) => {
    return fetch(`/api/v1/current_user`, {withCredentials: true})
    .then(resp => resp.json())
    .then(user => {
        if (!!user.contractor) {
            dispatch({
                type: 'CURRENT_CONTRACTOR',
                payload: user
            })
        } else if (!!user.employee) {
            dispatch({
                type: 'CURRENT_EMPLOYEE',
                payload: user
                })
        } else {
            dispatch({
                type: 'LOGOUT_EMPLOYEE',
                type: 'LOGOUT_CONTRACTOR'
            })
        }
    })}
}