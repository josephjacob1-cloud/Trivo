import { useEffect } from "react"
import { Navigate } from "react-router-dom"

export default function Unauthorized(){

    const token = localStorage.getItem("access_token")
    if(!token){
      return <Navigate to={""} replace />
    }
    useEffect(()=>{
        token = localStorage.getItem("access_token")
    if(!token){
      Navigate("")
    }
    },[token])
    return(
        (<>
        <h4>Unauthorized attempt</h4>
        </>)
    )
}
