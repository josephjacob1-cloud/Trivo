import React, { useContext, useEffect, useRef, useState } from 'react'
import UserContext from './UserContext'
import '../css/style.css'
import { useNavigate } from 'react-router-dom'
import { LOGIN_URL } from '../config/api'

export default function Login() {
    const userData = useContext(UserContext)
    const [username, setName] = useState("syamb@syam.com")
    const [password, setPwd] = useState("syam")
    const [serverResponse, setServerResponse] = useState("")
    const navigate = useNavigate()
    useEffect(()=>{
        setServerResponse("");
    },[username]);
    const userLogin = async() => {
        try{
            if (username.trim() === "" || password === "") {
                setServerResponse("Please enter valid inputs");
                return false;
            }
            const params = new URLSearchParams({username,password})
            const request = await fetch(LOGIN_URL,
                {
                    method:'POST',
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                    body:params
                }
            )
            const response = await request.json();
            if(!request.ok){
                setServerResponse("Login failed")
            }
            else{
                console.log(response.role)
                console.log(response.name)
                console.log(response.access_token)
                localStorage.setItem('access_token', {"token":response.access_token,"role":response.role})
                userData.setIsLogin(true)
                userData.setUserName(String(response.name).toUpperCase())
                navigate(-1)
            }

            
        }catch(error){
            setServerResponse("Error : "+error.message)
        }

    }
    return (
        <div className='login container vh-100 d-flex justify-content-center align-items-center'>
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }} >
                <div className='card-body'>
                    <p className='h3 card-title text-center mb-4 '>Login to explore the world</p>
                    <div className='mb-3'>
                        <label htmlFor="">User Name</label><br />
                        <input type="text" className='form-control' placeholder='Enter your user name' onChange={(e) => setName(e.target.value)} value={username}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Password:</label><br />
                        <input type="password" className='form-control' placeholder='Password' onChange={(e) => setPwd(e.target.value)} value={password} />
                    </div>
                    <p className='small text-primary fw-bold text-end'>Forgott Password</p>
                    <div className='text-end'>
                        <button className='btn btn-primary bgTeal mx-4' onClick={(e) => userLogin()}>Login</button>
                        <button  className='btn btn-primary bgTeal ' onClick={(e)=> navigate('/signup',{replace:true})}>Sign Up!</button>
                    </div>
                    <div>
                        <p style={{height:'20px'}}>{serverResponse}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
