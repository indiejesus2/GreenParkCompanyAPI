export const addPayment = (payment) => {
    return (dispatch) => {
        dispatch({type: 'FETCH_CONTRACTOR'})
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payment)
        };
        return fetch(`/api/v1/employers/${payment.employer_id}/subscriptions`, configObj)
        .then(resp => resp.json())
        .then(payment => {
            debugger
            dispatch({type: 'ADD_PAYMENT', payload: payment.data.attributes})
        })
        .catch(err => {
            dispatch({type: 'ERROR_CONTRACTOR', payload: err})
        })
    }
}