import React, { useContext, useEffect, useRef, useState } from 'react'
import UserContext from './UserContext'
import '../css/style.css'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../api/authAPI'
import {loginUser} from "../utils/authUtils"

export default function Login() {
    const userData = useContext(UserContext)
    const [username, setName] = useState("jj@jj.com")
    const [password, setPwd] = useState("jj")
    const [serverResponse, setServerResponse] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        setServerResponse("");
    }, [username]);
    const handleLogin = async () => {
        try {
            if (username.trim() === "" || password === "") {
                setServerResponse("Please enter valid inputs");
                return false;
            }
            const params = { username, password }
            const data = await userLogin(params)           
            loginUser(data);            
            navigate(-1)
            
        } catch (error) {
            setServerResponse("Error : " + error.message)
        }

    }
    return (
        <div className='login container vh-100 d-flex justify-content-center align-items-center'>
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }} >
                <div className='card-body'>
                    <p className='h3 card-title text-center mb-4 '>Login to explore the world</p>
                    <div className='mb-3'>
                        <label htmlFor="">User Name</label><br />
                        <input type="text" className='form-control' placeholder='Enter your user name' onChange={(e) => setName(e.target.value)} value={username} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Password:</label><br />
                        <input type="password" className='form-control' placeholder='Password' onChange={(e) => setPwd(e.target.value)} value={password} />
                    </div>
                    <p className='small text-primary fw-bold text-end'>Forgott Password</p>
                    <div className='text-end'>
                        <button className='btn btn-primary bgTeal mx-4' onClick={(e) => handleLogin()}>Login</button>
                        <button className='btn btn-primary bgTeal ' onClick={(e) => navigate('/signup', { replace: true })}>Sign Up!</button>
                    </div>
                    <div>
                        <p style={{ height: '20px' }}>{serverResponse}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
