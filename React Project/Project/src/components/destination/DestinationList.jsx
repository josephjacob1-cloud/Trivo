// import React, { useContext, useEffect, useState } from 'react'
// import UserContext from '../UserContext'
// import { useNavigate } from 'react-router-dom'
// import { GET_DESTINATION, DISABLE_DESTINATION } from '../../config/api';

// export default function DestinationList() {
//   const packages = useContext(UserContext).places;
//   const [destinations, setDestination] = useState([]);
//   const [message, setMessage] = useState("");
//   const getDestinations = async () => {
//     try{
//       console.log("request to "+ GET_DESTINATION)
//       const response = await fetch(GET_DESTINATION);
//       const data = await response.json();
//       setDestination(data);
//       if(!response.ok){
//           throw new Error("Failed to fetch Destinations")
//       }
//     }catch(error){
//       setMessage(error)
//     }
//   }
//   const deleteDestination = async(id)=>{
//     console.log("Delete function called. ID:", id);
//     const confirm = window.confirm("Do you want to delete this destination?");
//     if(confirm){
//       try{        
//         const response  = await fetch( `${DISABLE_DESTINATION}/${id}`,
//           {
//             method:"patch"               
//           })
//           const data = await response.json()
//           if(!response.ok){
//             throw new Error("Failed to diable the destination" )
//           }
//       }catch(error){
//         console.log(error)
//       }
//     }
//   }
//   useEffect(()=>{
//     getDestinations()
//   },[]);
//   return (
//     <div>
//       <p>Destination List</p>    

//       <table className='consultantTable'>
//       <tr>
//         <th>No</th>
//         <th>Name</th>
//         <th>City</th>
//         <th>Country</th>
//         <th>category</th>
//         <th>Description</th>
//         <th>Action</th>
//       </tr>
      
      
//       {

//         destinations.map((p, i) =>
//           // <p>{p.destination.name}</p>
//           <Details key={i} des = {p} id={i+1} delDes={deleteDestination}></Details>
//         )
//       }
      
//       </table>
//     </div>
//   )
// }
// function Details({des, id, delDes}){
//   const userData = useContext(UserContext)
//   const navigate = useNavigate()
//   return(<>
//   <tr>
//     <td>{id}</td>
//     <td className='fw-bold colTeal'>{des.name}</td>
//     <td>{des.city}</td>
//     <td>{des.country}</td>
//     <td>{des.category}</td>
//     <td>{String(des.description).slice(0, 80)+"..."}</td>
//     <td><span onClick={(e)=> {userData.setDestination(des);
//       navigate('/packages/adddestination/editDestination');      
//     }
//     }><i class="bi bi-pencil-square text-info mx-4"></i></span></td>
//     <td>
//       <span
//         type="button"
//         className="btn btn-link p-0 text-danger"
//         onClick={() => delDes(des.id) }
//       >
//         <i className="bi bi-trash3-fill"></i> 
//       </span>
//   </td>
//   </tr>
//   </>)
// }




import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';
import { useNavigate } from 'react-router-dom';
import { GET_DESTINATION, DISABLE_DESTINATION } from '../../config/api';

export default function DestinationList() {

  const userData = useContext(UserContext);

  const [destinations, setDestination] = useState([]);
  const [message, setMessage] = useState('');

  // Fetch all destinations
  const getDestinations = async () => {
    try {
      const response = await fetch(GET_DESTINATION);

      if (!response.ok) {
        throw new Error('Failed to fetch destinations');
      }

      const data = await response.json();

      setDestination(data);
      setMessage('');

    } catch (error) {
      console.error('Fetch destinations error:', error);
      setMessage(error.message);
    }
  };

  // Disable destination
  const deleteDestination = async (id) => {

    const confirmDelete = window.confirm(
      'Do you want to disable this destination?'
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${DISABLE_DESTINATION}/${id}`,
        {
          method: 'PATCH'
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || 'Failed to disable destination'
        );
      }

      console.log('Destination disabled successfully:', data);

      // Update the React state
      setDestination((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, active: false }
            : item
        )
      );

      setMessage('Destination disabled successfully');

    } catch (error) {
      console.error('Disable destination error:', error);
      setMessage(error.message);
    }
  };

  // Load destinations when component mounts
  useEffect(() => {
    getDestinations();
  }, []);

  return (
    <div>

      <p>Destination List</p>

      {message && (
        <p className="text-info">{message}</p>
      )}

      <table className="consultantTable">

        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
            <th>Category</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {destinations.map((p, i) => (
            <Details
              key={p.id}
              des={p}
              id={i + 1}
              delDes={deleteDestination}
              setDestination={setDestination}
            />
          ))}
        </tbody>

      </table>

    </div>
  );
}


// Child component
function Details({ des, id, delDes }) {

  const userData = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <tr>

      <td>{id}</td>

      <td className="fw-bold colTeal">
        {des.name}
      </td>

      <td>{des.city}</td>

      <td>{des.country}</td>

      <td>{des.category}</td>

      <td>
        {String(des.description || '').slice(0, 80)}...
      </td>

      <td>

        {/* Edit destination */}
        <span
          role="button"
          title="Edit destination"
          onClick={() => {
            userData.setDestination(des);
            navigate('/packages/adddestination/editDestination');
          }}
        >
          <i className="bi bi-pencil-square text-info mx-3"></i>
        </span>

        {/* Disable destination */}
        <span
          role="button"
          title="Disable destination"
          className="text-danger"
          onClick={() => delDes(des.id)}
        >
          <i className="bi bi-trash3-fill"></i>
        </span>

      </td>

    </tr>
  );
}
