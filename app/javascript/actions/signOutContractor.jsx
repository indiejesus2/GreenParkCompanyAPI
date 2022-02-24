export const signOutContractor = () => {
    return (dispatch) => {
        dispatch({ type: 'LOGOUT_CONTRACTOR'})
        return (fetch(`/api/v1/logout` ,{
            method: "DELETE",
        }))
    }
}