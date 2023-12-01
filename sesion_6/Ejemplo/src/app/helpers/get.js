const getMethod = async () => {
    const url = "https://rickandmortyapi.com/api/character/";
    try {
        const resp = await fetch( url );
        const { results } = await resp.json()
        return results;
    } catch ( err ) {
        throw new Error(
            "El servidor no responde",
            {cause: err }
        )
    }
}

export {
    getMethod
}