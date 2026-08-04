import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../css/style.css'

export default function PackageManagement() {
    return (
        <div>

            <div>
                {/* Make sure subNav itself allows items to sit side-by-side */}
                <div className="subNav" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <NavLink to={''} end><span>Create Package</span></NavLink>
                    <NavLink to={'packagelist'} ><span>Package List</span></NavLink>
                    <NavLink to={'packageapprovals'} replace="true"><span>Approvals</span></NavLink>

                   
                    <div className="ms-auto" style={{ marginLeft: 'auto' }}>
                        <NavLink to={'/packages/adddestination'} replace="true" className='text-decoration-none'>
                            <span className='text-success fw-bold'>+ Add Destination</span>
                        </NavLink>
                    </div>
                </div>

              
            </div>

           
            <Outlet />
        </div>
    )
}
