import React from 'react'

import '../../css/style.css'
export default function MyTours() {
  const bookings = [
    {
      "id": 1,
      "packageName": "Amazing Kerala",
      "bookingId": "BK1001",
      "customerName": "John Mathew",
      
      "consultantId": "TC001",
      "consultantName": "Aarav Sharma",
      "travelDate": "2026-09-10",
      "persons": 2,
      "totalAmount": 25000,
      "status": "Confirmed"
    },
    {
      "id": 2,
      "bookingId": "BK1002",
      "customerName": "Anjali Nair",
      "packageName": "Goa Beach Holiday",
      "consultantId": "TC002",
      "consultantName": "Ananya Nair",
      "travelDate": "2026-10-05",
      "persons": 4,
      "totalAmount": 64000,
      "status": "Pending"
    },
    {
      "id": 3,
      "bookingId": "BK1003",
      "customerName": "Rahul Kumar",
      "packageName": "Dubai Explorer",
      "consultantId": "TC003",
      "consultantName": "Rahul Verma",
      "travelDate": "2026-11-15",
      "persons": 2,
      "totalAmount": 100000,
      "status": "Confirmed"
    },
    {
      "id": 4,
      "bookingId": "BK1004",
      "customerName": "Sneha Thomas",
      "packageName": "Paris Vacation",
      "consultantId": "TC004",
      "consultantName": "Sneha Menon",
      "travelDate": "2026-12-20",
      "persons": 3,
      "totalAmount": 345000,
      "status": "Completed"
    },
    {
      "id": 5,
      "bookingId": "BK1005",
      "customerName": "Arun George",
      "packageName": "Maldives Escape",
      "consultantId": "TC005",
      "consultantName": "Vikram Singh",
      "travelDate": "2026-08-25",
      "persons": 2,
      "totalAmount": 140000,
      "status": "Cancelled"
    },
    {
      "id": 6,
      "bookingId": "BK1006",
      "customerName": "Meera Joseph",
      "packageName": "Ooty Weekend Trip",
      "consultantId": "TC006",
      "consultantName": "Meera Thomas",
      "travelDate": "2026-09-18",
      "persons": 5,
      "totalAmount": 55000,
      "status": "Pending"
    }
  ]
  const cleanKey = (key) => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();
  return (
    <div>
      <p className='h3'>My Tour Booking</p>
      <div>
        <table>
          <tr>
            {
              Object.keys(bookings[0]).map((key, value) =>
                <th key={key} >{cleanKey(key)}</th>
              )
            }
          </tr>
          {
            bookings.map((tour, i) =>
              
                <Details tour={tour} bookings={bookings}></Details>
              
            )
          }
        </table>
      </div>
    </div>
  )
}
function Details({ tour, bookings }) {
  return <>
    <tr>
      {
        Object.keys(bookings[0]).map((key, i) => 
          <td key={key} className={`${key} ${String(tour[key]).toLowerCase()}`}>
            {             
              tour[key]
            }
          </td>       
        )
      }
    </tr>
  </>
}
