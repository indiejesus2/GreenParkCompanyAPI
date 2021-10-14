export const updateSubscription = (subscription) => {
    return (dispatch) => {
        dispatch({type: 'FETCH_CONTRACTOR'})
        const configObj = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({employer: subscription})
        };
        return fetch(`/api/v1/employers/${subscription.id}`, configObj)
        .then(resp => resp.json())
        .then(subscription => dispatch({type: 'UPDATE_SUBSCRIPTION', payload: subscription.data.attributes}))
    }
}