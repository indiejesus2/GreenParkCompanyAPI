export const signIn = (employee) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept : 'application/json',
                'X-Custom-Header' : 'Employee',
            },
            body: JSON.stringify({employee: employee})
        }
        dispatch({type: 'LOADING_EMPLOYEES'})
        return fetch(`/api/v1/signin`, configObj)
        .then(resp => resp.json())
        .then(employee => {
            if (employee.error) {
                dispatch({
                    type: 'ERROR_EMPLOYEE',
                    payload: employee.error
                })
            } else {
                dispatch({
                    type: 'SIGNIN_EMPLOYEE',
                    payload: employee.data.attributes
                })
            }
            }
        )
    }
}