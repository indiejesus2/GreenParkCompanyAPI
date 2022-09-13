export const signIn = (user) => {
    return (dispatch) => {
        if (user.email == "admin@blucollar.com") {
            const configObj = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Accept : 'application/json',
                    'X-Custom-Header' : 'Employee',
                },
                body: JSON.stringify({employee: user})
            }
            dispatch({type: 'LOADING_ADMIN'})
            return fetch('/api/v1/signin', configObj)
            .then (resp => resp.json())
            .then(admin => {
                if (admin.error) {
                    dispatch({
                        type: 'ERROR_ADMIN',
                        payload: admin.error
                    })
                } else {
                    dispatch({
                        type: 'SIGNIN_ADMIN',
                        payload: admin
                    })
                }
            })
        }
        else if (user.user == "employee") {
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
        } else if (user.user == "employer") {
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