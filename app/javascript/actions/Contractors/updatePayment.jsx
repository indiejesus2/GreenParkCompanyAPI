export const updatePayment = (cancellation) => {
    return (dispatch) => {
        dispatch({type: 'FETCH_CONTRACTOR'})
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(cancellation)
        };
        return fetch(`/api/v1/employers/${payment.employer_id}/subscriptions`, configObj)
        .then(resp => resp.json())
        .then(payment => {
            if (payment.error) {
                dispatch({type: 'ERROR_CONTRACTOR', payload: payment.error})
            } else {
                dispatch({type: 'UPDATE_PAYMENT', payload: payment.data.attributes})
            }
        })
        // .catch(err => {
        //     debugger
        // })
    }
}