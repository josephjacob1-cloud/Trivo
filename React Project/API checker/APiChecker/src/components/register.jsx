import { useState } from "react"

export default function Register(){
    const [email, setEmail] = useState("abcd@abcd.com")
    const [name, setName] = useState("ABCD")
    const [phone, setPhone] = useState("9655444")
    const [dob, setDOB] = useState("")
    const [passport, setPassport] = useState("56565")
    const [address, setAddress] = useState("Bangkore")
    const [password, setPassword] = useState("abcd")
    
    const [result, setResult] = useState("....")
    // const handleRegister = async() =>{
    //     try{
    //         setResult("Registering....")
    //         const param = new URLSearchParams({ email, name, phone, dob, passport, address, password });
    //         const request  = await fetch("http://127.0.0.1:8000/auth/signup",{
    //             method:"post",
    //             headers: { "Content-Type": "application/x-www-form-urlencoded" }, // 1. Correct form header
    //             body: param.toString() 
    //         })
    //         const response = await request.json()
    //         if(!request.ok){
    //             console.log("Registration failed")
    //         }
    //         else{
    //             setResult(response.email)
    //         }

    //         console.log(result)
    //     }
    //     catch(error){
    //         setResult("Error : "+error.message)
    //     }
    // }
    const handleRegister = async () => {
        try {
            setResult("Registering...")

            const payload = {
                email,
                name,
                phone,
                dob,
                passport,
                address,
                password
            }

            const request = await fetch(
                "http://127.0.0.1:8000/auth/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                }
            )

            const response = await request.json()

            if (!request.ok) {
                throw new Error(
                    typeof response.detail === "string"
                        ? response.detail
                        : JSON.stringify(response.detail || "Registration failed")
                )
            }

            setResult(`Registration successful: ${JSON.stringify(response)}`)

        } catch (error) {
            setResult(`Error: ${error.message}`)
        }
    }
    return(<>
        <div>
            <h3>Sign up</h3>
            <h4>Create Account</h4>
            <div>
                <div style={{margin:'10px 0'}}>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Email ID" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div style={{margin:'10px 0'}}>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Your Full Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div style={{margin:'10px 0'}}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" placeholder="Contact Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div style={{margin:'10px 0'}}>
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" placeholder="Date of Birth" value={dob} onChange={(e)=>setDOB(e.target.value)}/>
                </div>
                <div style={{margin:'10px 0'}}>
                    <label htmlFor="passport">Passport Number</label>
                    <input type="text" placeholder="Passport Number" value={passport} onChange={(e)=>setPassport(e.target.value)}/>
                </div>
                <div style={{margin:'10px 0'}}>
                    <label htmlFor="">Address: </label><br />
                    <textarea placeholder='Your contact address:' value={address} onChange={(e)=>setAddress(e.target.value)} ></textarea>  
                </div>
                
                <div style={{margin:'10px 0'}}>
                    <label htmlFor="password">Set Password</label>
                    <input type="text" placeholder="Set PAssword" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button onClick={(e)=> handleRegister()}>Register</button>
            </div>
            <p>{result}</p>
        </div>
    
    </>)
}