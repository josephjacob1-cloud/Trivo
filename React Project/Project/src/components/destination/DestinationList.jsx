
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';
import { useNavigate } from 'react-router-dom';
// import { GET_DESTINATION, DISABLE_DESTINATION } from '../../api/api';
import { getAllDestinations, deleteDestination } from '../../api/destinationApi';

export default function DestinationList() {

  const userData = useContext(UserContext);

  const [destinations, setDestination] = useState([]);
  const [message, setMessage] = useState('');

  // Fetch all destinations
  const getDestinations = async () => {
    try {
      const data = await getAllDestinations();
      setDestination(data)
    } catch (error) {
      setError(error.message);
    }

  };

  // Disable destination
  const handleDeleteDestination = async (id) => {
    console.log("clicked on ", id)
    const confirmDelete = window.confirm(
      'Do you want to disable this destination?'
    );

    if (!confirmDelete) return;
    try {
      const data = await deleteDestination(id);
      console.log("Deleted the destination")
      getDestinations();
    } catch (error) {
      console.log('Disable destination error:', error);
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
              key={i}
              des={p}
              id={i + 1}
              delDes={handleDeleteDestination}
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
        {String(des.description || '').slice(0, 60)}...
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
