import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UserContext from './UserContext'

export default function ProtectedRoute() {
    const userData = useContext(UserContext)
  return (
    <div>
      {
         userData.isLogin ?<Outlet /> : <Navigate to={"/login"} replace />
      }
    </div>
  )
}
