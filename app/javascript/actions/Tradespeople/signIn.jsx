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
        // dispatch({type: 'FETCH_USER'})
        return fetch(`/api/v1/signin`, configObj)
        .then(resp => resp.json())
        .then(employee => dispatch({
            type: 'SIGNIN_EMPLOYEE',
            payload: employee
        }))
    }
}