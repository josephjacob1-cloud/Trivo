import React from 'react'

export default function MyApprovals() {
  const approvals = [
    {
      "id": 1,
      "approvalId": "APR001",
      "requestType": "Package Booking",
      "customerName": "John Mathew",
      "requestedDate": "2026-08-01",
      "status": "Pending"
    },
    {
      "id": 2,
      "approvalId": "APR002",
      "requestType": "Cancellation",
      "customerName": "Anjali Nair",
      "requestedDate": "2026-08-02",
      "status": "Approved"
    },
    {
      "id": 3,
      "approvalId": "APR003",
      "requestType": "Refund",
      "customerName": "Rahul Kumar",
      "requestedDate": "2026-08-03",
      "status": "Rejected"
    },
    {
      "id": 4,
      "approvalId": "APR004",
      "requestType": "Travel Date Change",
      "customerName": "Sneha Thomas",
      "requestedDate": "2026-08-04",
      "status": "Pending"
    },
    {
      "id": 5,
      "approvalId": "APR005",
      "requestType": "Package Upgrade",
      "customerName": "Arun George",
      "requestedDate": "2026-08-05",
      "status": "Approved"
    }
  ]
  const cleanKey = (key) => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();

  return (
    <div>
      <p className='h3'>Approvals</p>
      <div>
        <table>
          <tr>
            {
              Object.keys(approvals[0]).map((key, value) =>

                <th key={key}>
                  {cleanKey(key)}
                </th>
              )
            }
          </tr>
          {
            approvals.map((e, i) =>
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
          <td className={String(data[key].toString().toLowerCase())}>{data[key]}</td>
        )
      }
    </tr>
  </>
}

