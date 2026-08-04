import React, { useContext, useState } from 'react'
import DestinationSelector from '../destination/DestinationSelector'
import UserContext from '../UserContext'

export default function PackageCreate() {
  const packages = useContext(UserContext).places;
  const [selectedDestination, setSelectedDestination] = useState([])
  return (

    <div className='container'>
      <div className="row">
        <p>Create New Package</p>
        <div className="col-sm-6 ">
          <div className="card-body shadow px-4 pb-4">
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
              <input type="radio" name='category' />Domestic
            </div>
            <div className='mb-2 '>
              <label htmlFor="">Days:</label><br />
              <input type="text" className='form-control' placeholder='Days' />
            </div>
            <div className='mb-2 '>
              <label htmlFor="">Price:</label><br />
              <input type="text" className='form-control' placeholder='Total Amount' />
            </div>
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
                transition: 'background .2s',
                marginLeft: '52px'
              }}>
                <i class="bi bi-upload"></i> Upload Image
                <input type="file" class="d-none" id="fileUpload" accept=".jpg,.jpeg,.png,.webp,.gif " />
              </label>
            </div>

            <div className='mb-2 '>
              <label htmlFor="">Includes & Excludes : </label>
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
                transition: 'background .2s',
                marginLeft: '10px'
              }}>
                Upload Includes & Excludes
                <input type="file" class="d-none" id="fileUpload" accept=".pdf " />
              </label>
            </div>

            <div className='mb-2 '>
              <label htmlFor="">Itinerary : </label>
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
                transition: 'background .2s',
                marginLeft: '101px'
              }}>
                Upload Itinerary
                <input type="file" class="d-none" id="fileUpload" accept=".pdf " />
              </label>
            </div>

            <div className='mb-2 '>
              <label htmlFor="">Terms & Conditions : </label>
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
                transition: 'background .2s',
                marginLeft: '11px'
              }}>
                Upload Terms & Conditions
                <input type="file" class="d-none" id="fileUpload" accept=".pdf " />
              </label>
            </div>





          </div>
        </div>
        <div className="col-sm-6 shadow">
          <div>
            <label htmlFor="">Select Destination:</label><br />
            <div style={{
              maxHeight: "156px",
              overflowY: "auto",
              overflowX: "hidden",
              width: '100%',
              zIndex: 1050,
              border: '1px solid #CCC',
              padding: '10px'
            }}>
              {
                packages.map((p, i) =>
                  <Details key={i} des={p.destination} id={i + 1} select={setSelectedDestination}></Details>
                )
              }
            </div>
          </div>
          <div>
            <label htmlFor="">Description:</label><br />
            <textarea name="" id="" placeholder='Description' style={{ width: "100%" }}></textarea>
          </div>
          <div class="d-flex justify-content-end mt-4 pt-2">
                <button class="btn btn-info bgTeal text-white">Add Package</button>
            </div>


        </div>
      </div>

    </div>

  )
}
function Details({ des, id, select }) {
  return (<>
    <div>
      <input type='checkbox' className='mx-2' />{des.name} : <i style={{ fontSize: '12px' }}>{des.city}, {des.country}</i></div>
  </>)
}