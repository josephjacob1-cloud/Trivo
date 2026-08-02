import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const navigate = useNavigate()
    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '600px' }}>
                <div className="card-body">
                    <p className='h3 card-title text-center mb-4'>Create Account</p>
                    <p className='h5 card-title text-center mb-4'>Join us and explore the world</p>
                    <div className='mb-3'>
                        <label htmlFor="">User Name</label><br />
                        <input type="text" className='form-control' placeholder='Enter your user name'  />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Phone: </label><br />
                        <input type="number" className='form-control' placeholder='Enter your phone number'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Email: </label><br />
                        <input type="text" className='form-control' placeholder='Email ID'  />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Bate of Birth: </label><br />
                        <input type="date" className='form-control' placeholder='Date of Birth'  />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Passport Number: </label><br />
                        <input type="text" className='form-control' placeholder='Passport Number:'  />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Address: </label><br />
                        <textarea placeholder='Your contact address:' style={{width:'100%'}} className='form-control'></textarea>                       
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Set Password</label><br />
                        <input type="password" className='form-control' placeholder='Set your password'  />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Confirm Password: </label><br />
                        <input type="text" className='form-control' placeholder='Confirm your password'  />
                    </div>
                     <div className='text-end mb-3'>
                        <button  className='btn btn-primary bgTeal mx-4 ' onClick={(e)=>navigate('/login',{replace:true})} >Back to Login</button>
                        <button className='btn btn-primary bgTeal' onClick={(e) => navigate("/login",{replace:true})}>Register</button>
                        
                    </div>

                </div>
            </div>

        </div>
    )
}
