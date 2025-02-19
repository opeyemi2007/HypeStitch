import React from 'react'
import LogInPage from '../pages/auth/LogInPage'
import { Outlet } from 'react-router'

const PrivateRoute = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  return (
    <div>
      {
        userData? <Outlet/> : <LogInPage/>
      }
    </div>
  )
}

export default PrivateRoute