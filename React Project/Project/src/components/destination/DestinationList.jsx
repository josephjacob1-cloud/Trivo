import React, { useContext } from 'react'
import UserContext from '../UserContext'
import { useNavigate } from 'react-router-dom'

export default function DestinationList() {
  const packages = useContext(UserContext).places
  return (
    <div>
      <p>Destination List</p>
      <table>
      <tr>
        <th>Name</th>
        <th>City</th>
        <th>Country</th>
        <th>category</th>
        <th>Description</th>
      </tr>
      
      {

        packages.map((p, i) =>
          // <p>{p.destination.name}</p>
          <Details des = {p.destination} id={i+1}></Details>
        )
      }
      </table>
    </div>
  )
}
function Details({des, id}){
  const userData = useContext(UserContext)
  const navigate = useNavigate()
  return(<>
  <tr>
    <td>{id}</td>
    <td className='fw-bold colTeal'>{des.name}</td>
    <td>{des.city}</td>
    <td>{des.country}</td>
    <td>{des.category}</td>
    <td>{String(des.description).slice(0, 40)+"..."}</td>
    <td onClick={(e)=> {userData.setDestination(des);
      navigate('/packages/adddestination/editDestination');      
    }
    }><i class="bi bi-pencil-square text-info mx-4"></i></td>
    <td><i class="bi bi-trash3-fill text-danger"></i></td>
  </tr>
  </>)
}
