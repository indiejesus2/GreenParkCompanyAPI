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
            if (payment.error) {
                dispatch({type: 'ERROR_CONTRACTOR', payload: payment.error})
            } else {
                dispatch({type: 'ADD_PAYMENT', payload: payment})
            }
        })
        // .catch(err => {
        //     debugger
        // })
    }
}