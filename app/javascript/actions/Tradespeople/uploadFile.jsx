export const uploadFile = (file) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_FILE'})
        return fetch(`/api/v1/documents`, {
            method: "POST",
            body: file
        })
        .then(resp => resp.json())
        .then(file => {dispatch({type: 'UPLOAD_FILE', payload: file})})
        .catch(err => {dispatch({type: 'ERROR_EMPLOYEE', payload: err})})
    }
}