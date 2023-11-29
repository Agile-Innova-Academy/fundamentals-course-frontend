

const resp= await fetch(url, {
    method: {POST},
    body: payload,
    headers: {}
})
const data= resp.json()



const data2 = axios.POST(url, data)

