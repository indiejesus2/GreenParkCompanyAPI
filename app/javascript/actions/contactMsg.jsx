export const contactMsg = (msg) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'applicant/json'
            },
            body: JSON.stringify(msg)
        };
        return fetch('api/v1/contact', configObj)
        .then(resp => resp.json())
        // .then()
    }
}