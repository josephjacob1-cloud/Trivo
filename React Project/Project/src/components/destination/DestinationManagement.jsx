import React from 'react'
import '../../css/style.css'
import { NavLink, Outlet } from 'react-router-dom'

export default function DestinationManagement() {
  return (
     <div>
            <div>
                
                <div className="subNav" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    {/* <p className='mt-1 h6'><span><i class="bi bi-arrow-left-square-fill colTeal me-2"></i>Back</span></p> */}
                    <NavLink to={'/packages/addpackage'} end replace="true"><span><i class="bi bi-arrow-left-square-fill colTeal me-2"></i>Back</span></NavLink>
                    <NavLink to={''} end replace="true"><span>Create Destination</span></NavLink>
                    <NavLink to={'destinationlist'} replace='true'><span>Destination List</span></NavLink> 
                </div>
            </div>
            <Outlet />
        </div>
  )
}
