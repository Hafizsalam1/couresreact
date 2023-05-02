import { useEffect, useState } from "react";

const useQuery = (query, opts) => {
    const [data, setData] = useState([])
    const [reload, setReload] = useState(true)
    const [error, setError] = useState(false)

    const refetch = () => {
        setReload(true)
    }

    useEffect(()=>{
        refetch()
    },[opts.page])

    useEffect(()=>{
        const fetchQuery = async () =>{
            try{
                setReload(true)
                const response = await query(opts)
                setData(response.data)
            } catch(error){
                setError(true)
            } finally{
                setReload(false)
            }
        }
        if(reload){
            fetchQuery()
        }
    },[reload])


    return{
        data, loading:reload, reload
    }
}

export default useQuery