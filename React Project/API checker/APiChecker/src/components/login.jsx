import { useContext, useRef, useState } from "react"

export default function Login(){
    // const [serverResponse, setserverResponse] = useContext("...")
    const [result, setResult] = useState("---")
    const userRef = useRef(null)
    const pwdRef = useRef(null)
    const handleLogin = async() => {
        console.log(userRef.current.value)
        console.log(pwdRef.current.value)
        const username = userRef.current.value;
        const password = pwdRef.current.value
        const params = new URLSearchParams(
            {username, password}
        )
        const response = await fetch("http://127.0.0.1:8000/auth/login", {
            method:"post",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            body:params
        })
        const data = await response.json()
        // setserverResponse(result.message)
         if (!response.ok) {
            console.log("Login failed")
            setResult(data.detail)
         }
         else{
            console.log("ok")
            console.log(data)
            // setResult(data)
            console.log(data.access_token + data.name)
         }
        
    }
    return(<>

   
    <div>
        <h3>Login</h3>
        <div>
            <label>Username</label>
            <input type="text" placeholder="Username" ref={userRef}/><br></br>
            <label>Password</label>
            <input type="password" placeholder="Password" ref={pwdRef}/> <br /><br />
            <button onClick={(e)=> handleLogin(e.target)}>Login</button>
        </div>
        <div>
            <h4>SERVER RESPONSE</h4>
            <p>{result} </p>
        </div>
    </div>
        
    </>)
}