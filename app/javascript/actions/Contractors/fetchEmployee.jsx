export const fetchEmployee = (id) => {
    return (dispatch) => {
        // dispatch({type: 'FETCH_CONTRACTOR'})
        // dispatch({type: 'LOADING_JOBS'})
        // dispatch({type: 'LOADING_EMPLOYEES'})

        fetch(`http://localhost:3000/api/v1/employees/${id}`).then(resp => resp.json())
        .then(employee => dispatch({
            type: 'FETCH_EMPLOYEE',
            payload: employee
        }))
    }
}