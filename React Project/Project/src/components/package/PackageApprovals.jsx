import React, { useContext } from 'react'
import UserContext from '../UserContext';

export default function PackageApprovals() {
  const packages = useContext(UserContext).places;
  return (
    <div>
      <p>Package approvals</p>
      <table className='consultantTable'>
        <tr>
          <th>No</th>
          <th>Package Name</th>
          <th>Destination</th>          
          <th>Price</th>          
          <th>Created On</th>
          <th>Modified On</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        {packages.map((pack, index) => (
              <Details 
                key={pack.id || index} // React requires a unique key property for lists
                pack={pack} 
                id={index + 1} 
              />
            ))}

      </table>
    </div>
  )
}
function Details({pack, id}){
  return(<>
  <tr>
    <td>{id}</td>
    <td className='fw-bold colTeal'>{pack.packageName}</td>
    <td>{pack.destination.name}</td>    
    <td>{pack.price.currency} {pack.price.original}</td>
    <td>{pack.createdDate}</td>
    <td>{pack.updatedDate}</td>
    <td style={{color:pack.status==="Active" ? 'green' : 'red'}}>{pack.status}</td>
    <td>
      <span><i class="bi bi-pencil-square text-info mx-4"></i></span>
    <span><i class="bi bi-trash3-fill text-danger"></i></span>
    </td>
  </tr>
  </>)
 }
