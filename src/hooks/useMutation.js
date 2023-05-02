import { useState } from "react";

const useMutation = (mutation, opts) =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const onMutation = async (payload) =>{
        try{
            setLoading(true)

            const response = await mutation(payload)

            setData(response.data)
            opts?.onSuccess()
        } catch (e){
            setError(true)
            opts?.onError?. ()
        } finally {
            setLoading(false)
        }
    }

    return {
        data, loading, error, onMutation
    }

}
export default useMutation