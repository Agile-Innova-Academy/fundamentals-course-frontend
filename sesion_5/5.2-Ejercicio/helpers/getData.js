
const GetData = async (url)=>{
    const {data} = await axios.get(url)
    return data
}

export default GetData