import React from 'react'

export default function MyEnquiry() {
  const enquiry = [
    {
      "id": 1,
      "enquiryId": "ENQ001",
      "customerName": "John Mathew",
      "phone": "+91 9876543210",
      "destination": "Munnar",
      "travelDate": "2026-09-15",
      "persons": 2,
      "status": "New"
    },
    {
      "id": 2,
      "enquiryId": "ENQ002",
      "customerName": "Anjali Nair",
      "phone": "+91 9876543211",
      "destination": "Goa",
      "travelDate": "2026-10-05",
      "persons": 4,
      "status": "Contacted"
    },
    {
      "id": 3,
      "enquiryId": "ENQ003",
      "customerName": "Rahul Kumar",
      "phone": "+91 9876543212",
      "destination": "Dubai",
      "travelDate": "2026-11-20",
      "persons": 2,
      "status": "Quotation Sent"
    },
    {
      "id": 4,
      "enquiryId": "ENQ004",
      "customerName": "Sneha Thomas",
      "phone": "+91 9876543213",
      "destination": "Paris",
      "travelDate": "2026-12-18",
      "persons": 3,
      "status": "Confirmed"
    },
    {
      "id": 5,
      "enquiryId": "ENQ005",
      "customerName": "Arun George",
      "phone": "+91 9876543214",
      "destination": "Maldives",
      "travelDate": "2027-01-10",
      "persons": 2,
      "status": "Closed"
    }
  ]
  const cleanKey = (key) => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();

  return (
    <div>
      <p className='h3'>Enquiries</p>
      <div>
        <table>         
          <tr>
            {
              Object.keys(enquiry[0]).map((key, value) =>

                <th key={key}>
                  {cleanKey(key)}
                </th>
              )
            }
          </tr>
          {
            enquiry.map((e, i) =>
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
