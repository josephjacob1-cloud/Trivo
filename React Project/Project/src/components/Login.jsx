import React, { useContext, useRef, useState } from 'react'
import UserContext from './UserContext'
import '../css/style.css'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const userData = useContext(UserContext)
    const [name, setName] = useState("")
    const pwdRef = useRef(null)
    const navigate = useNavigate()
    const login = () => {
         if (name.trim() === "" || pwdRef.current.value === "") {
             alert("Please enter valid inputs");
             return false;
         }

        userData.setIsLogin(true)
        userData.setUserName(name)
        navigate(-1)

    }
    return (
        <div className='login container vh-100 d-flex justify-content-center align-items-center'>
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }} >
                <div className='card-body'>
                    <p className='h3 card-title text-center mb-4 '>Login to explore the world</p>
                    <div className='mb-3'>
                        <label htmlFor="">User Name</label><br />
                        <input type="text" className='form-control' placeholder='Enter your user name' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Password:</label><br />
                        <input type="password" className='form-control' placeholder='Password' ref={pwdRef} />
                    </div>
                    <p className='small text-primary fw-bold text-end'>Forgott Password</p>
                    <div className='text-end'>
                        <button className='btn btn-primary bgTeal mx-4' onClick={(e) => login()}>Login</button>
                        <button  className='btn btn-primary bgTeal ' onClick={(e)=> navigate('/signup',{replace:true})}>Registration</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
