import React, { useContext } from 'react'
import UserContext from '../UserContext'

export default function DestinationSelector() {
      const packages = useContext(UserContext).places
  return (
    <div
    className="position-absolute bg-white border rounded shadow mt-1 "
    style={{
      maxHeight: "100px",
      overflowY: "auto",
      overflowX: "hidden",
      width:'400px',
      zIndex: 1050
    }}
  >
      
        {

        packages.map((p, i) =>
          // <p>{p.destination.name}</p>
        
          <Details key={i} des = {p.destination} id={i+1}></Details>
        )
      }
      
    </div>
  )
}
function Details({des, id}){
  return(<>
 
    <div>
    <input type='checkbox' />{des.name}</div>
  
    
  
  </>)
}
