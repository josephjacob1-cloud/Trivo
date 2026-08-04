import React, { useContext, useState } from 'react'
import UserContext from '../UserContext'
import { useNavigate } from 'react-router-dom';

export default function DestinationEdit() {
    const destination = useContext(UserContext).destination;
    const navigate = useNavigate()
    const [name, setName] = useState(destination.name)
    const [slug, setSlug] = useState(destination.slug)
    const [city, setCity] = useState(destination.city)
    const [country, setCountry] = useState(destination.country)
    const [category, setCategory] = useState(destination.category)
    const [description, setDescription] = useState(destination.description)
  return (
     <div className='container d-flex justify-content-center align-items-center'>
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '600px' }}>
                <div className="card-body">
                    <p className='h3 card-title text-center mb-4'>Edit Destination</p>
                    <div className='mb-3'>
                        <label htmlFor="">Destination Name :</label><br />
                        <input type="text" className='form-control' placeholder='Enter Destination Name' value={name}  />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Nick Name / Second Name : </label><br />
                        <input type="text" className='form-control' placeholder='Example - South India Explorer ' value={slug}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Country : </label><br />
                        <input type="text" className='form-control' placeholder='Country Name : ' value={country}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">City : </label><br />
                        <input type="text" className='form-control' placeholder='City Name' value={city} />
                    </div>                    
                    <div className='mb-3'>
                        <label htmlFor="">category: </label><br />
                        <input type="text" className='form-control' placeholder='Example - Monument / Wildlige / Adventure ' value={category} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Description: </label><br />
                        <textarea placeholder='Few words about the destination:' style={{width:'100%'}} className='form-control' value={description}></textarea>                       
                    </div>
                    
                     <div className='text-end mb-3'>
                        <button  className='btn btn-primary bgTeal mx-4 ' onClick={(e)=>navigate('/packages/adddestination/destinationlist',{replace:true})} >Cancel</button>
                        <button className='btn btn-primary bgTeal' onClick={(e) => navigate("/packages/adddestination/destinationlist",{replace:true})}>Update</button>                        
                    </div>
                </div>
            </div>
        </div>
  )
}
