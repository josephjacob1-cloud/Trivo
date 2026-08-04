import React from 'react'

import '../../css/style.css'
export default function ConsultantAssign() {
  const tours = [
  {
    "id": 1,
    "assignmentId": "AT001",
    "packageName": "Amazing Kerala",
    "customerName": "John Mathew",
    "consultantName": "Aarav Sharma",
    "assignedDate": "2026-08-01",
    "status": "Assigned"
  },
  {
    "id": 2,
    "assignmentId": "AT002",
    "packageName": "Goa Beach Holiday",
    "customerName": "Anjali Nair",
    "consultantName": "Ananya Nair",
    "assignedDate": "2026-08-02",
    "status": "Assigned"
  },
  {
    "id": 3,
    "assignmentId": "AT003",
    "packageName": "Dubai Explorer",
    "customerName": "Rahul Kumar",
    "consultantName": "Rahul Verma",
    "assignedDate": "2026-08-03",
    "status": "Processing"
  },
  {
    "id": 4,
    "assignmentId": "AT004",
    "packageName": "Paris Vacation",
    "customerName": "Sneha Thomas",
    "consultantName": "Sneha Menon",
    "assignedDate": "2026-08-04",
    "status": "Completed"
  },
  {
    "id": 5,
    "assignmentId": "AT005",
    "packageName": "Maldives Escape",
    "customerName": "Arun George",
    "consultantName": "Vikram Singh",
    "assignedDate": "2026-08-05",
    "status": "Pending"
  }
]
  const cleanKey = (key) => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();

  return (
    <div>      
      <p className='h3'>Assign Tours to Consultants</p>
     <div>
        <table className='consultantTable'>
          <tr>
            {
              Object.keys(tours[0]).map((key, value) =>

                <th key={key}>
                  {cleanKey(key)}
                </th>
              )
            }
          </tr>
          {
            tours.map((e, i) =>
              <Details data={e} ></Details>
            )
          }
        </table>
      </div>
    </div>
  )
}
function Details({ data }) {
  return <>
    <tr>
      {
        Object.keys(data).map((key, value) =>
          <td className={`${key} ${String(data[key].toString().toLowerCase())}`}>{data[key]}</td>
        )
      }
    </tr>
  </>
}

