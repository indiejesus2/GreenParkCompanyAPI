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
        // dispatch({type: 'FETCH_USER'})
        return fetch('http://localhost:3000/api/v1/employees', configObj)
        .then(response => response.json())
        .then(employee => dispatch({type: 'SIGNUP_EMPLOYEE', payload: employee}))
    }
}