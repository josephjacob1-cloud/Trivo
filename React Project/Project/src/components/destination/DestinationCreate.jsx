import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DestinationCreate() {
  const navigate = useNavigate()
  return (
     <div className='container d-flex justify-content-center align-items-center'>
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '600px' }}>
                <div className="card-body">
                    <p className='h3 card-title text-center mb-4'>Add Destination</p>
                    <div className='mb-3'>
                        <label htmlFor="">Destination Name :</label><br />
                        <input type="text" className='form-control' placeholder='Enter Destination Name'  />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Nick Name / Second Name : </label><br />
                        <input type="text" className='form-control' placeholder='Example - South India Explorer '/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Country : </label><br />
                        <input type="text" className='form-control' placeholder='Country Name : '/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">City : </label><br />
                        <input type="text" className='form-control' placeholder='City Name'  />
                    </div>                    
                    <div className='mb-3'>
                        <label htmlFor="">category: </label><br />
                        <input type="text" className='form-control' placeholder='Example - Monument / Wildlige / Adventure '  />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Description: </label><br />
                        <textarea placeholder='Few words about the destination:' style={{width:'100%'}} className='form-control'></textarea>                       
                    </div>
                    
                     <div className='text-end mb-3'>
                        <button className='btn btn-primary bgTeal' onClick={(e) => navigate('/packages/adddestination/destinationlist')}>Add</button>                        
                    </div>
                </div>
            </div>
        </div>
  )
}
