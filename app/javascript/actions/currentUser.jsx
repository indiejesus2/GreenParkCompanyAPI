export const currentUser = () => {
    return (dispatch) => {
    return fetch(`/api/v1/current_user`, {withCredentials: true})
    .then(resp => resp.json())
    .then(user => {
        // if (!!user.contractor) {
        //     dispatch({
        //         type: 'CURRENT_CONTRACTOR',
        //         payload: user
        //     })
        // } else if (!!user.employee) {
        //     dispatch({
        //         type: 'CURRENT_EMPLOYEE',
        //         payload: user
        //         })
        // } 
        if(!user.employee && !user.contractor) {
            dispatch({
                type: 'LOGOUT_EMPLOYEE',
                type: 'LOGOUT_CONTRACTOR'
            })
        }
    })}
}