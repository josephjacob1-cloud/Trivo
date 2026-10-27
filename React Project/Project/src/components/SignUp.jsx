import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SIGNUP_URL } from '../config/api'

export default function SignUp() {
    const navigate = useNavigate()    
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [dob, setDOB] = useState("")
    const [passport, setPassport] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [serverResponse, setServerResponse] = useState("")

    const userRegister = async() =>{
        // if(email.trim() === "" || name.trim() === "" || phone.trim() === "" || dob.trim()==="" || passport .trim() === "" || address.trim() === "" ){
        //     setServerResponse("Please fill the form. Inpit Feilds should not empty ")
        // }
        setServerResponse("")
        const fields = [email, name, phone, dob, passport, address];
        const hasEmptyField = fields.some(field => !field || field.trim() === "");

        if (hasEmptyField) {
            setServerResponse("Please fill the form. Input fields should not be empty.");
            return false
        }
        if(password === "" || password2===""){
            setServerResponse("Enter values in password fields")
            return false
        }
        if(password != password2){
            setServerResponse("Passwords are not matching!")
            return false
        }
        try{
            const  params =
                { email,
                name,
                phone,
                dob,
                passport,
                address,
                password
                }
            
            const request = await fetch(SIGNUP_URL,
                {
                    method:"POST",
                    headers:{"Content-Type": "application/json"},
                    body:JSON.stringify(params)
                }
            )
            const response = await request.json()
            if(!request.ok){
                throw new Error(
                    typeof response.detail === 'string' ? response.detail : "Registration Failed"
                )
            }
            setServerResponse('Registration Completed! Please login');
            navigate("/login",{replace:true});
        }catch(error){
            setServerResponse(`Error : ${error.message}`)
        }

    }
    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '600px' }}>
                <div className="card-body">
                    <p className='h3 card-title text-center mb-4'>Create Account</p>
                    <p className='h5 card-title text-center mb-4'>Join us and explore the world</p>
                    <div className='mb-3'>
                        <label htmlFor="">User Name</label><br />
                        <input type="text" className='form-control' placeholder='Enter your user name'  value={name}  onChange={(e)=>setName(e.target.value)}  />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Phone: </label><br />
                        <input type="number" className='form-control' placeholder='Enter your phone number' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Email: </label><br />
                        <input type="text" className='form-control' placeholder='Email ID' value={email} onChange={(e)=>setEmail(e.target.value)}  />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Bate of Birth: </label><br />
                        <input type="date" className='form-control' placeholder='Date of Birth' value={dob} onChange={(e)=>setDOB(e.target.value)}  />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Passport Number: </label><br />
                        <input type="text" className='form-control' placeholder='Passport Number:' value={passport} onChange={(e)=>setPassport(e.target.value)}  />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Address: </label><br />
                        <textarea placeholder='Your contact address:' style={{width:'100%'}} className='form-control' value={address} onChange={(e)=>setAddress(e.target.value)}></textarea>                       
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Set Password</label><br />
                        <input type="password" className='form-control' placeholder='Set your password'  value={password} onChange={(e)=>setPassword1(e.target.value)}  />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Confirm Password: </label><br />
                        <input type="text" className='form-control' placeholder='Confirm your password' value={password2} onChange={(e)=>setPassword2(e.target.value)}  />
                    </div>
                     <div className='text-end mb-3'>
                        <button  className='btn btn-primary bgTeal mx-4 ' onClick={(e)=>navigate('/login',{replace:true})} >Back to Login</button>
                        <button className='btn btn-primary bgTeal' onClick={(e) => userRegister()}>Register</button>
                        {/* <button className='btn btn-primary bgTeal' onClick={(e) => navigate("/login",{replace:true})}>Register</button> */}
                        
                    </div>
                    <div>
                        <p>{serverResponse}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
