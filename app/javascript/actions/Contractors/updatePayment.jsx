export const updatePayment = (payment) => {
    debugger
    return (dispatch) => {
        dispatch({type: 'FETCH_CONTRACTOR'})
        const configObj = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payment)
        };
        return fetch(`/api/v1/employers/${payment.employer_id}/subscriptions/${payment.id}`, configObj)
        .then(resp => resp.json())
        .then(payment => {
            if (payment.error) {
                dispatch({type: 'ERROR_CONTRACTOR', payload: payment.error})
            } else {
                dispatch({type: 'UPDATE_PAYMENT', payload: payment})
            }
        })
        // .catch(err => {
        //     debugger
        // })
    }
}