const fetchFromToTelegram = async (data) => {
    const baseUrl = '/send.php'
    const response = await fetch(baseUrl, {
        method: 'POST',
        mode: 'same-origin',
        credentials: 'same-origin',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: Object.entries(data).map(([k,v]) => k + '=' + v).join('&')
    })
    return await response.json()
}

export default fetchFromToTelegram
