export const findCity = (postal) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CITY'})
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(postal)
        };
        return fetch('/findcity', configObj)
        .then(resp => resp.json)
    }
}