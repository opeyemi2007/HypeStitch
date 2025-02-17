import React from 'react'
import ProfileSideBar from '../components/profileSideBar/ProfileSideBar'
import { Outlet } from 'react-router'

const ProfileRoute = () => {
  return (
    <div className='profileRouteWropper'>
        <ProfileSideBar/>
        <Outlet/>   
    </div>
  )
}

export default ProfileRoute