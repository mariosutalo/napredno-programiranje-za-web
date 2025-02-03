import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            // go to api and fetch data to display
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch data for that resource')
                    }
                    return res.json()
                })
                .then((data) => {
                    setIsPending(false)
                    setData(data)
                    setError(null)
                    console.log(data)
                })
                .catch(err => {
                    setError(err.message)
                    setIsPending(false)
                })
        }, 1000);
    }, [])

    return { data, isPending, error }
}

export default useFetch