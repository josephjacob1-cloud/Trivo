import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../UserContext'
import { useNavigate } from 'react-router-dom'

export default function ConsultantRegistration() {
  const userData = useContext(UserContext)
  const consultant = userData.consultants
  
  const navigate = useNavigate()
  const [heading, setHaeding] = useState("Add New Consultant")
  const [label, setLabel] = useState("Name:")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [designation, setDesignation] = useState("")
  const [specialization, SetSpecialization] = useState("")
  const [office, setOffice] = useState("")
  const [gender, setGender] = useState("")
  const [languages, setLanguages] = useState([])
  const [button, setButton] = useState("Register")

  useEffect(() => {
    if (consultant !== null) {
      setHaeding("Update Consultant")
      setLabel(consultant.employeeCode)
      setFullName(consultant.fullName)
      setEmail(consultant.email)
      setPhone(consultant.phone)
      setDesignation(consultant.designation)
      setOffice(consultant.office)
      SetSpecialization(consultant.specialization)
      setGender(consultant.gender)
      setLanguages(consultant.languages)
      setButton("Update")
    }



  }, [consultant])
  const onRegister = ()=>{
    consultant.fullName = fullName;
     navigate(-1)
  }
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '600px' }}>
        <div className="card-body">
          <p className='h3 card-title text-center mb-4'>{heading}</p>

          <div className='mb-3'>
            <label htmlFor="">{label}</label><br />
            <input type="text" className='form-control' placeholder='Enter fullname' value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor="">Phone: </label><br />
            <input type="text" className='form-control' value={phone} placeholder='Enter your phone number' />
          </div>
          <div className='mb-3'>
            <label htmlFor="">Email: </label><br />
            <input type="text" className='form-control' value={email} placeholder='Email ID' />
          </div>
          <div className='mb-3'>
            <label htmlFor="">Designation: </label><br />
            <input type="text" className='form-control' value={designation} placeholder='Designation' />
          </div>
          <div className='mb-3'>
            <label htmlFor="">Specialisation: </label><br />
            <input type="text" className='form-control' value={specialization} placeholder='specialisation' />
          </div>
          <div className='mb-3'>
            <label htmlFor="">Office Address: </label><br />
            <textarea placeholder='Office address:' style={{ width: '100%' }} className='form-control' value={office}></textarea>
          </div>
          <div className='mb-3'>
            <label htmlFor="">Gender:</label><br />
            <input type="radio" className='' name="gender" value="Male" checked={gender === 'Male'} />Male
            <input type="radio" className='' name="gender" value="Female" checked={gender === 'Female'} />Female
          </div>
          <div className='mb-3'>
            <label htmlFor="">Language: </label><br />
            <input type="checkbox" className='' checked={languages.includes('English')} />English
            <input type="checkbox" className='' checked={languages.includes('Hindi')} />Hindi
            <input type="checkbox" className='' checked={languages.includes('Tamil')} />Tamil
            <input type="checkbox" className='' checked={languages.includes("Malayalam")} />Malayalam
            <input type="checkbox" className='' checked={languages.includes("French")} onChange={(e) =>
              setLanguages([...languages, 'French'])
            } />French
          </div>
          <div className='text-end mb-3'>
            <input type="radio" className='' name="status" value="Active" />Active
            <input type="radio" className='' name="status" value="inActive" />inActive

            <button className='btn btn-primary bgTeal mx-4' onClick={(e)=>userData.setConsultants(null)}  style={{visibility: consultant !== null ? 'visible' : 'hidden ' }} >Add New</button>
            <button className='btn btn-primary bgTeal mx-2' onClick={(e)=>{userData.setConsultants(null); navigate(-1)}}>Cancel</button>
            <button className='btn btn-primary bgTeal' onClick={(e)=>onRegister()} >{button}</button>

          </div>

        </div>
      </div>

    </div>
  )
}

