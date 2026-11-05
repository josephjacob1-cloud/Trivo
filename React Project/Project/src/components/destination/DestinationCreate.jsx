import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {DESTINATION_CATEGORY, ADD_DESTINATION } from '../../config/api';

export default function DestinationCreate() {
    const [categories, setCategories] = useState([]);
    const [category_id, setSelectedCategory] = useState('');
    const [name, setNmae]=useState("");
    const [nickname, setNickName]=useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [description, setDescription]= useState("")

    const [message, setMessage] = useState("")

    const navigate = useNavigate()
    const laodDestinationCategories = async () => {
    try {        
        const response = await fetch(DESTINATION_CATEGORY)
        const data = await response.json()
        console.log(JSON.stringify(data))
        setCategories(data)
        if(!response.ok){
            throw new Error("Failed to fetch destination categories")
        }
    } catch (err) {
        console.log(err.message)
    }
  }
  const addDestination = async () => {
    setMessage("");
    console.log(category_id)
    const fields = [name, nickname, city, country, description];
    const hasEmptyField = fields.some(field => !field || field.trim() === "");
    if (hasEmptyField) {
        setMessage("Please fill the form. Input fields should not be empty.");
        return false
    }
    if(!category_id){
        setMessage("Please select a category");
        return false
    }
    try{
        const params = {name, nickname, country, city, description, category_id,"active":true};
        const request = await fetch(ADD_DESTINATION,
            {
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify(params)
            }
        )
        console.log(JSON.stringify(params))
        const response = await request.json()
        if(!request.ok){
            throw new Error(
                typeof response.detail === 'string' ? response.detail : "Registration Failed"
            )
        }
        setMessage('Destination ' + response.name + ' has been added');
        // navigate('/packages/adddestination/destinationlist');

    }
    catch(error){
        setMessage(error)
    }
    


  }
  useEffect(() => {
    laodDestinationCategories()
  },[])
  return (
     <div className='container d-flex justify-content-center align-items-center'>
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '600px' }}>
                <div className="card-body">
                    <p className='h3 card-title text-center mb-4'>Add Destination</p>
                    <div className='mb-3'>
                        <label htmlFor="">Destination Name :</label><br />
                        <input type="text" className='form-control' placeholder='Enter Destination Name' value={name} onChange={(e)=> setNmae(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Nick Name / Second Name : </label><br />
                        <input type="text" className='form-control' placeholder='Example - South India Explorer ' value={nickname} onChange={(e)=>setNickName(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Country : </label><br />
                        <input type="text" className='form-control' placeholder='Country Name : ' value={country} onChange={(e)=> setCountry(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">City : </label><br />
                        <input type="text" className='form-control' placeholder='City Name' value={city} onChange={(e)=> setCity(e.target.value)}  />
                    </div>                    
                    <div className='mb-3'>
                        <label htmlFor="">category: </label><br />
                        {/* <input type="text" className='form-control' placeholder='Example - Monument / Wildlige / Adventure '  /> */}
                        <select value={category_id} className='form-control' onChange={(e) => setSelectedCategory(e.target.value)}>
                            <option value="">--Select Category--</option>
                                {categories.map((category) => (
                                   <option key={category.id} value={category.id}>{category.name}</option>
                                ))
                            }
                        </select>

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Description: </label><br />
                        <textarea placeholder='Few words about the destination:' style={{width:'100%'}} className='form-control' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>                       
                    </div>
                    
                     <div className='text-end mb-3' style={{display:'flex',textAlign:'right'}}>
                        <p style={{width:'100%', textAlign:'left'}}>{message}</p>
                        <button className='btn btn-primary bgTeal' onClick={(e) => addDestination()}>Add</button>                        
                        {/* <button className='btn btn-primary bgTeal' onClick={(e) => navigate('/packages/adddestination/destinationlist')}>Add</button>                         */}
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
  )
}
