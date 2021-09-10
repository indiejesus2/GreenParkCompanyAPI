export const signIn = (employee) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept : 'application/json',
            },
            body: JSON.stringify(employee)
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