export const signOut = () => {
    return (dispatch) => {
        dispatch({ type: 'LOGOUT_EMPLOYEE'})
        return (fetch(`/api/v1/logout` ,{
            method: "DELETE",
        }))
    }
}