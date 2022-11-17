export const deleteEmployer = (employer) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_ADMIN'})
        return (fetch(`/api/v1/employers/${employer.id}`, {
            method: "DELETE",
        }))
    .then(resp => resp.json())
    .then(employer => dispatch({type: "DELETE_EMPLOYER", payload: employer}))
    .catch(err => {
        dispatch({type: "ERROR_ADMIN", payload: err})
    })}
}