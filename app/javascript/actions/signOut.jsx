export const signOut = (user) => {
    return (dispatch) => {
        dispatch({ type: 'LOGOUT_EMPLOYEE'})
        return (fetch(`/api/v1/signout` ,{
            method: "DELETE",
        }))
    }
}