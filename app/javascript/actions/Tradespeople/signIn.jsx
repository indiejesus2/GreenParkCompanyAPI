export const signIn = (user) => {
    return (dispatch) => {
    if (user.user == "employee") {
            const configObj = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Accept : 'application/json',
                    'X-Custom-Header' : 'Employee',
                },
                body: JSON.stringify({employee: user})
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
                        payload: employee
                    })
                }
                }
            )
        } else if (user.user == "contractor") {
            const configObj = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Accept : 'application/json',
                },
                body: JSON.stringify({employer: user})
            }
            dispatch({type: 'FETCH_CONTRACTOR'})
            return fetch(`/api/v1/signin`, configObj)
            .then(resp => resp.json())
            .then(employer => {
                debugger
                if (employer.error) {
                    dispatch({
                        type: 'ERROR_CONTRACTOR',
                        payload: employer.error    
                    })
                } else {
                    dispatch({
                        type: 'SIGNIN_CONTRACTOR',
                        payload: employer
                    })
                }
            })
            .catch(err => {
                dispatch({type: 'ERROR_CONTRACTOR', payload: err})
            })
        } 
    }
}