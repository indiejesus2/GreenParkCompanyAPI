export const signUpEmployee = (employee) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(employee)
        };
        dispatch({type: 'LOADING_EMPLOYEES'})
        return fetch('/api/v1/employees', configObj)
        .then(response => response.json())
        .then(employee => {
            if (employee.error) {
                dispatch({
                    type: 'ERROR_EMPLOYEE',
                    payload: employee.error
                })
            } else {
                dispatch({type: 'SIGNUP_EMPLOYEE', payload: employee.data.attributes})
            }
        })
    }
}