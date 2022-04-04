export const signOut = (user) => {
    return (dispatch) => {
        dispatch({ type: 'LOGOUT_EMPLOYEE'})
        dispatch({ type: 'LOGOUT_CONTRACTOR'})
        return (fetch(`/api/v1/signout` ,{
            method: "DELETE",
        }))
    }
}