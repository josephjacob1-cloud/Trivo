import { useState } from "react"

export default function ViewPackage(){
    const [packages, setapackages] = useState("")

    const handlePackages = async()=>{
        try{
            const token = localStorage.getItem("access_token")
            const request = await fetch("http://127.0.0.1:8000/customer/viewCustomerPackages",
                {
                    method:"get",
                    headers:{"Authorization": `Bearer ${token}`}
                }
            )
            const response = await request.json()
            if(!request.ok){
                throw new Error(typeof response.detail === "string"
                        ? response.detail
                        : JSON.stringify(response.detail || "request failed"))
            }
            setapackages(JSON.stringify(response))
        }catch(error){
            setapackages("Error: "+ error.message)
        }
    }
    return(<>
    <div>
        <button onClick={(e)=>handlePackages()}>Packages</button>
        <p>{packages}</p>
    </div>
    </>)
}