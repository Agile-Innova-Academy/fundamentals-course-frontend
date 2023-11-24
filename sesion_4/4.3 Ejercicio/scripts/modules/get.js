
export const get = async (url)=>{
    try{
        const resp = await fetch(url);
        const data = await resp.json();
        return data
    }
    catch(er){
        throw err
    }
}