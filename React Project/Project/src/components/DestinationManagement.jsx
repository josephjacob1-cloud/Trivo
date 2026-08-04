import React from 'react'
import '../css/style.css'
import { NavLink, Outlet } from 'react-router-dom'

export default function DestinationManagement() {
  return (
     <div>
            <div>
                {/* Make sure subNav itself allows items to sit side-by-side */}
                <div className="subNav" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <NavLink to={''} end replace="true"><span>Create Destination</span></NavLink>
                    <NavLink to={'destinationlist'} replace='true'><span>Destination List</span></NavLink> 
                </div>
            </div>
            <Outlet />
        </div>
  )
}
