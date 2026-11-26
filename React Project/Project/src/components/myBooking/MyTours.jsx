import React, { useEffect, useState } from 'react'

import '../../css/style.css'
import { getCustomerBooking } from '../../api/customerApi'
import { useNavigate } from 'react-router-dom'

export default function MyTours() {
  const [bookings, setBookings] = useState([])
  const navigate = useNavigate()
  // setBookings(bookings_jsoc)
  const role = localStorage.getItem("role");
  const getBookings = async()=>{
    let data;
    if(role == "customer"){
      data = await getCustomerBooking()
    } 
    else if(role == "agent"){
      // data = await getAllBooking()
    }
    console.log(data)
    setBookings(data)
  }
  useEffect(()=>{
    getBookings()
  },[])
  const cleanKey = (key) => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();
  return (
    <div>
      
      <p className='h3'>My Tour Booking</p>
      <div>
        <table className='consultantTable'>
          <tr>            
            <th>ID</th>
            <th>Package</th>
            <th>Booking Number</th>
            <th>Date</th>
            <th>Adults</th>
            <th>Children</th>
            <th>Amount</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
          {
            bookings.map((tour, i) =>
              
                <Details key={i} tour={tour} id={i+1} ></Details>
              
            )
          }
        </table>
      </div>
    </div>
  )
}
function Details({ tour, id}) {
  const navigate = useNavigate()
  const showPackage = async(id)=>{
    console.log(id)
    navigate("/packages/view/"+tour.package_id)
  }
  return <>
  <tr onClick={(e)=>showPackage(tour.package_id)}>
  <td>{id}</td>
  <td>{tour.package_name}</td>
  <td>{tour.booking_number}</td>
   <td>{tour.travel_date}</td>
   <td>{tour.number_of_adults}</td>
   <td>{tour.number_of_children}</td>
   <td>{tour.total_amount}</td>
   <td>{tour.payment_status}</td>
   <td>{tour.status}</td>
  
  </tr>
   
  </>
}
