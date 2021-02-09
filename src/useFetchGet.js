import { useState, useEffect } from "react";

const useFetchGet = (route) => {
    const [error, setError] = useState(false)
    const [response, setResponse] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            try {
                const shot = await fetch(`https://movies.cerassus.usermd.net/${route}`)
                const api_response = await shot.json()
                setResponse(api_response)
                setLoading(false)
            }
            catch(err) {
                setLoading(false)
                setError(err)
            }
        })()
    }, [route])
    return { response, error, loading }
}

export default useFetchGet

