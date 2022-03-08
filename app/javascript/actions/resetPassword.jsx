export const resetPassword = (check) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'applicant/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(check)
        }
    return fetch(`/api/v1/reset_password`, {configObj})
    .then(resp => resp.json())
    }
}