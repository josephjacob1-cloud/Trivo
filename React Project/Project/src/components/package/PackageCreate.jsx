import React from 'react'
import DestinationSelector from '../destination/DestinationSelector'

export default function PackageCreate() {
  return (

    <div className='container'>
      <div className="row">
        <p>Create New Package</p>
        <div className="col-sm-6">
          <div className="card-body shadow px-4">
            <div className='mb-2'>
              <label htmlFor="">Package Name</label><br />
              <input type="text" className='form-control' placeholder='Enter Package Name' />
            </div>
            {/* <div className='mb-2 '>
              <label htmlFor="">Destination</label><br />
              <div style={{ display: 'flex' }}>
                <input type="text" className='form-control me-4' placeholder='Enter Package Name' />
                <button className='btn btn-info' style={{ minWidth: '170px' }}>Insert Destination</button>
              </div>
            </div> */}
            <div className='mb-2 '>
              <label htmlFor="">Category</label><br />
              <input type="radio" name='category' />International
              <input type="radio" name='category' />National
            </div>
            <div className='mb-2 '>
              <label htmlFor="">Days:</label><br />
              <input type="text" className='form-control' placeholder='Days' />
            </div>
            <div className='mb-2 '>
              <label htmlFor="">Price:</label><br />
              <input type="text" className='form-control' placeholder='Total Amount' />
            </div>



          

          </div>
        </div>
        <div className="col-sm-6 shadow">
          <div className='mb-2 '>
            <label htmlFor="">Image Upload : </label>
            <label style={{
              backgroundColor: 'teal',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontSize: '0.76rem',
              fontWeight: '600',
              padding: '0.38rem 0.85rem',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: 'background .2s'
            }}>
              <i class="bi bi-upload"></i> Upload Image
              <input type="file" class="d-none" id="fileUpload" accept=".jpg,.jpeg,.png,.webp,.gif " />
            </label>
          </div>

          <div>
             <label htmlFor="">Select Destination:</label><br />
            <DestinationSelector></DestinationSelector>
          </div>
          <div>
            <button className='btn btn-info' style={{
              marginTop:'120px'
            }}>Creare Package</button>
          </div>
          
        </div>
      </div>

    </div>

  )
}
