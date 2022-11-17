export const deleteEmployee = (employee) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_ADMIN'})
        return (fetch(`/api/v1/employees/${employee.id}`, {
            method: "DELETE",
        }))
    .then(resp => resp.json())
    .then(employee => dispatch({type: "DELETE_EMPLOYEE", payload: employee}))
    .catch(err => {
        dispatch({type: "ERROR_ADMIN", payload: err})
    })}
}