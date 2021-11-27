const findCity = async (postal) => {
    const configObj = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(postal)
    };
    const resp = await fetch(`api/v1/findcity/${postal}`, { configObj })
    const data = await resp.json()
    if (data.town) {
        let location  = ["city" = data.town, "state" = data.state]
        return location
    }
}