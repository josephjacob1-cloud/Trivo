import React from 'react'

export default function MySupport() {
  const support = [
    {
      "id": 1,
      "ticketId": "TKT001",
      "customerName": "John Mathew",
      "subject": "Unable to complete booking",
      "priority": "High",
      "createdDate": "2026-08-01",
      "status": "Open"
    },
    {
      "id": 2,
      "ticketId": "TKT002",
      "customerName": "Anjali Nair",
      "subject": "Payment not reflected",
      "priority": "High",
      "createdDate": "2026-08-02",
      "status": "Processing"
    },
    {
      "id": 3,
      "ticketId": "TKT003",
      "customerName": "Rahul Kumar",
      "subject": "Need to change travel date",
      "priority": "Medium",
      "createdDate": "2026-08-03",
      "status": "Pending"
    },
    {
      "id": 4,
      "ticketId": "TKT004",
      "customerName": "Sneha Thomas",
      "subject": "Request for booking cancellation",
      "priority": "Low",
      "createdDate": "2026-08-04",
      "status": "Resolved"
    },
    {
      "id": 5,
      "ticketId": "TKT005",
      "customerName": "Arun George",
      "subject": "Refund status enquiry",
      "priority": "Medium",
      "createdDate": "2026-08-05",
      "status": "Closed"
    }
  ]
  const cleanKey = (key) => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();

  return (
    <div>
      <p className='h3'>Support Tickets</p>
      <div>
        <table className='consultantTable'>
          <tr>
            {
              Object.keys(support[0]).map((key, value) =>

                <th key={key}>
                  {cleanKey(key)}
                </th>
              )
            }
          </tr>
          {
            support.map((e, i) =>
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
