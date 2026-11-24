import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
// import UserContext from './UserContext'

export default function ProtectedRoute({allowedRoles}) {
    // const userData = useContext(UserContext)
    const token = localStorage.getItem("access_token")
    const role = localStorage.getItem("role")
    if(!token){
      return <Navigate to={"/login"} replace />
    }
    if (allowedRoles && !allowedRoles.includes(role)) {
        return <Navigate to="/" replace />;
    }
  return (
    // <div>
    //   {
    //      userData.isLogin ?<Outlet /> : <Navigate to={"/login"} replace />
    //   }
    // </div>
    <Outlet /> 
  )
}
