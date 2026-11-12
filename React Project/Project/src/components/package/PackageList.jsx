import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../UserContext';
import { getPackages, disablePackage } from '../../api/packageApi';

export default function PackageList() {
  // const packages = useContext(UserContext).places;
  const userData = useContext(UserContext);
  const [packages, setPackages] = useState([])
  const loadPackags = async () => {
    try {
      const data = await getPackages()
      setPackages(data)
    } catch (error) {
      console.log(error)
    }
  }
  const editPackage = (pack) =>{
    userData.setSelectedPackage(pack);
  }
  const deletePackage = async (id) => {
    console.log(id)
    const confirmDelete = window.confirm(
      'Do you want to disable this package?'
    );

    if (!confirmDelete) return;
    try {
      const data = await disablePackage(id);
      console.log("Deleted the destination")
      loadPackags();
    } catch (error) {
      console.log('Disable destination error:', error);
      // setMessage(error.message);
    }
  }
  useEffect(() => {
    loadPackags()
  }, [])
  return (
    <div>
      <p>Package List View</p>
      <table className='consultantTable'>
        <tr>
          <th>No</th>
          <th>Package Name</th>
          <th>Destination</th>
          <th>City</th>
          <th>Country</th>
          <th>Category</th>
          <th>Duration</th>
          <th>Price</th>
          <th>Description</th>
          {/* <th>Created On</th> */}
          <th>Status</th>
          <th>Action</th>
        </tr>
        {packages.map((pack, index) => (
          <Details
            key={pack.id || index} // React requires a unique key property for lists
            pack={pack}
            id={index + 1}
            editPack = {editPackage}
            delPack={deletePackage}
          />
        ))}

      </table>
    </div>
  )
}
function Details({ pack, id, editPack, delPack }) {
  return (<>
    <tr>
      <td>{id}</td>
      <td className='fw-bold colTeal'>{pack.packageName}</td>
      <td>{pack.destination[0].name}</td>
      <td>{pack.destination[0].city}</td>
      <td>{pack.destination[0].country}</td>
      <td>{pack.category}</td>
      <td>{pack.days}</td>
      <td>{pack.price.currency} {pack.price.original}</td>
      <td>{String(pack.description).slice(0, 20) + "..."}</td>
      {/* <td>{pack.createdDate}</td> */}
      <td>{String(pack.status)}</td>
      <td>
        <span title='Edit' onClick={(e)=>editPack(pack)}><i class="bi bi-pencil-square text-info mx-4"></i></span>
        <span title='Delete' onClick={(e) => delPack(pack.id)}><i class="bi bi-trash3-fill text-danger"></i></span>
      </td>
    </tr>
  </>)
}
