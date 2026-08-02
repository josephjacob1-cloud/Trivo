import React, { useContext } from 'react'
import UserContext from './UserContext';
import { useNavigate } from 'react-router-dom';

export default function ConsultantList() {
  const cList = [
    {
      "id": 1,
      "employeeCode": "TC001",
      "fullName": "Aarav Sharma",
      "gender": "Male",
      "email": "aarav.sharma@example.com",
      "phone": "+91 9876543210",
      "designation": "Senior Tour Consultant",
      "specialization": "Europe Tours",
      "languages": [
        "English",
        "Hindi"
      ],
      "office": "Delhi",
      "status": "Active",
      "rating": 4.9,
    },
    {
      "id": 2,
      "employeeCode": "TC002",
      "fullName": "Ananya Nair",
      "gender": "Female",
      "email": "ananya.nair@example.com",
      "phone": "+91 9876543211",
      "designation": "Tour Consultant",
      "specialization": "Kerala Packages",
      "languages": [
        "English",
        "Malayalam",
        "Hindi"
      ],
      "office": "Kochi",
      "status": "Active",
      "rating": 4.8,
    },
    {
      "id": 3,
      "employeeCode": "TC003",
      "fullName": "Rahul Verma",
      "gender": "Male",
      "email": "rahul.verma@example.com",
      "phone": "+91 9876543212",
      "designation": "International Tour Consultant",
      "specialization": "Dubai & UAE",
      "languages": [
        "English",
        "Hindi"
      ],
      "office": "Mumbai",
      "status": "Active",
      "rating": 4.7,
    },
    {
      "id": 4,
      "employeeCode": "TC004",
      "fullName": "Sneha Menon",
      "gender": "Female",
      "email": "sneha.menon@example.com",
      "phone": "+91 9876543213",
      "designation": "Holiday Consultant",
      "specialization": "Family Tours",
      "languages": [
        "English",
        "Malayalam",
        "Tamil"
      ],
      "office": "Thrissur",
      "status": "Active",
      "rating": 4.6,
    },
    {
      "id": 5,
      "employeeCode": "TC005",
      "fullName": "Vikram Singh",
      "gender": "Male",
      "email": "vikram.singh@example.com",
      "phone": "+91 9876543214",
      "designation": "Tour Consultant",
      "specialization": "Adventure Tours",
      "languages": [
        "English",
        "Hindi"
      ],
      "office": "Bengaluru",
      "status": "inActive",
      "rating": 4.8,
    },
    {
      "id": 6,
      "employeeCode": "TC006",
      "fullName": "Meera Thomas",
      "gender": "Female",
      "email": "meera.thomas@example.com",
      "phone": "+91 9876543215",
      "designation": "Travel Advisor",
      "specialization": "Honeymoon Packages",
      "languages": [
        "English",
        "Malayalam"
      ],
      "office": "Thrissur",
      "status": "Active",
      "rating": 4.5,
    }
  ]
  const userData = useContext(UserContext)
  const navigate = useNavigate()
  const cleanKey = (key) => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();
  const allKeys = Object.keys(cList[0]);
  const visibleKeys = allKeys.filter(key => !Array.isArray(cList[0][key]))
  return (
    <div>
      <h1>Consultant list</h1>
      <div className="tableContainer">
        <table className='consultantTable'>
          <tr>
            {
              visibleKeys.map((key) =>
                <th>{cleanKey(key)}</th>
              )
            }

            {/* {
            Object.keys(cList[0]).map((key, value)=>
            <th key={key}>{cleanKey(key)}</th>
            )
          } */}
          </tr>

          {
            cList.map((c, i) =>
              <tr  onClick={(e)=>{
                userData.setConsultants(c);
                navigate("addnew");
                
                }}>
                <Details data={c} allowedKeys={visibleKeys} />

              </tr>
            )
          }

        </table>
      </div>

    </div>
  )
}
function Details({ data, allowedKeys }) {
  return <>
    {
      allowedKeys.map((key) => {
        const value = data[key]
        return <td className={key} >{value}</td>
      })
    }
  </>
}
