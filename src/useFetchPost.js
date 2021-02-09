import { useState, useEffect } from "react";

const useFetchPost = (route, login, password) => {
    const [error, setError] = useState(false)
    const [response, setResponse] = useState(false)
    const [loading, setLoading] = useState(route ? true : false)
    useEffect(() => {
        if(route && login && password) { 
            (async () => {
                setLoading(true)
                try {
                    const apiShot = await fetch(`https://movies.cerassus.usermd.net/user/${route}`, {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "POST",
                        body: JSON.stringify({
                            username: login,
                            password: password
                        })
                    })
                    const api_response = await apiShot.json()
                    setResponse(api_response)
                    setLoading(false)
                }
                catch(err) {
                    setLoading(false)
                    setError(err)
                }
            })()
        }
    }, [route])
    return { response, error, loading }
}

export default useFetchPost






// try {
//     const apiShot = await fetch(`http://movies.cerassus.usermd.net/user/${route}`, {
//         headers: {
//             "Content-Type": "application/json"
//         },
//         method: "POST",
//         body: JSON.stringify({
//           username: login,
//           password: password
//         })
//       })
//     const api_response = await apiShot.json()
//     setResponse(api_response)
//     setLoading(false)
// }
// catch(err) {
//     setLoading(false)
//     setError(err)
// }