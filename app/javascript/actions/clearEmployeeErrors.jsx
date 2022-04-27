export const clearEmployeeErrors = () => {
    return (dispatch) => {
        dispatch({ type: 'CLEAR_EMPLOYEE_ERRORS'})
    }
}