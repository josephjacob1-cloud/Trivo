import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/style.css'


export default function ConsultantReports() {
  return (
    <div>
      <p className='h3'>Reports</p>
      <div className="container">
        <div className="row mt-2">
          <div className="col-sm-4 text-center shadow  ">
            <p className='h5'>

              Total Booking
            </p>
            <p className='h2 colTeal fw-bold'>16</p>
            <p className='reportLink bgTeal '><NavLink to={'/mybooking'}><span >View Booking</span></NavLink></p>
          </div>
          <div className="col-sm-4 text-center shadow  ">
            <p className='h5'>

              Enquiries
            </p>
            <p className='h2 text-warning fw-bold'>10</p>
            <p className='reportLink bg-warning'><NavLink to={'/mybooking/enquiry'}><span>View Enquiries</span></NavLink></p>
          </div>
          <div className="col-sm-4 text-center shadow  ">
            <p className='h5'>

              Packages
            </p>
            <p className='h2 text-danger fw-bold'>72</p>
            <p className='reportLink bg-danger'><NavLink to={'/packages'}><span>View Packages</span></NavLink></p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-4 text-center shadow  ">
            <p className='h5'>
              Support 
            </p>
            <p className='h2 text-primary fw-bold'>13</p>
            <p className='reportLink bg-primary '><NavLink to={'/mybooking/support'}><span >View Support</span></NavLink></p>
          </div>
          
          <div className="col-sm-4 text-center shadow  ">
            <p className='h5'>

              Active Consultants
            </p>
            <p className='h2 text-info fw-bold'>40</p>
            <p className='reportLink bg-info'><NavLink to={'/packages'}><span>View Consultants</span></NavLink></p>
          </div>
          <div className="col-sm-4 text-center shadow  ">
            <p className='h5'>
              Walk in
            </p>
            <p className='h2 text-success fw-bold'>12</p>
            <p className='reportLink bg-success'><NavLink to={'/mybooking/enquiry'}><span>View Enquiries</span></NavLink></p>
          </div>
        </div>
      </div>
    </div>
  )
}
