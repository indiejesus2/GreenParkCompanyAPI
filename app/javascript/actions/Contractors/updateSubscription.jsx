export const updateSubscription = (subscription, id) => {
    debugger
    return (dispatch) => {
        dispatch({type: 'LOADING_JOBS'})
        const configObj = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(subscription)
        };
        return fetch(`/api/v1/contractors/${id}`, configObj)
        .then(resp => resp.json())
        .then(subscription => dispatch({type: 'UPDATE_SUBSCRIPTION', payload: subscription}))
    }
}