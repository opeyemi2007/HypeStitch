import React from 'react'
import { Outlet } from 'react-router'

const ProfileRoute = () => {
  return (
    <div className='profileRouteWropper'>
        <Outlet/>   
    </div>
  )
}

export default ProfileRoute