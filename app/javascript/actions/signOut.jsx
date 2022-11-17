export const signOut = (user) => {
    return (dispatch) => {
        dispatch({ type: 'LOGOUT_EMPLOYEE'})
        dispatch({ type: 'LOGOUT_CONTRACTOR'})
        dispatch({ type: 'LOGOUT_ADMIN'})
        return (fetch(`/api/v1/signout` ,{
            method: "DELETE",
        }))
    }
}