export const uploadFile = (file) => {
    // const data = new FormData()
    // data.append("file", file, file.name)
    // data.append('employee_id', id)
    // let upload = data.get('file')
    // debugger
    return (dispatch) => {
        dispatch({type: 'LOADING_FILE'})
        // const configObj = {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/x-www.-form-urlencoded'
        //         // 'Accept': 'application/json'
        //     },
        //     body: file
        // };
        return fetch(`/api/v1/documents`, {
            method: "POST",
            body: file
        })
        .then(resp => resp.json())
        .then(file => {
            debugger
            dispatch({
            type: 'UPLOAD_FILE', payload: file.data.attributes})})
    }
}