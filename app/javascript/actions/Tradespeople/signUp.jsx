export const signUp = (user) => {
    return (dispatch) => {
        if (user.user=="employee") {
            const configObj = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(user)
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
        } else if (user.user == "employer") {
            const configObj = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(user)
            };
            dispatch({type: 'FETCH_CONTRACTOR'})
            return fetch('/api/v1/employers', configObj)
            .then(response => response.json())
            .then(employer => {
                if (employer.error) {
                    dispatch({
                        type: 'ERROR_CONTRACTOR',
                        payload: employer.error    
                    })
                } else {
                    dispatch({
                        type: 'SIGNUP_CONTRACTOR',
                        payload: employer
                    })
                }
            })
        }
    }
}