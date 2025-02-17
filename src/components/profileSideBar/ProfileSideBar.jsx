import React from 'react'
import './ProfileSideBar.css'
import { TiArrowBack } from "react-icons/ti";
import { CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useNavigate } from 'react-router';

const ProfileSideBar = () => {
    const navigate = useNavigate()
  return (
    
     <div className="leftSideBar">
            <div className="leftSideBarIconHolder"><TiArrowBack cursor={'pointer'} onClick={()=> navigate('/')}/></div>
    
            <div className="insideLeftHolder">
              <h1>User Profile</h1>
    
              <div className="navHolder">
                <p onClick={()=> navigate('/profileroutes')}><CiUser />User Profile</p>
                <p onClick={()=> navigate('/profileroutes/settings')}><IoSettingsOutline />Settings</p>
                <p><IoMdNotificationsOutline />Notifications</p>
              </div>
            </div>
            <span><RiLogoutCircleLine />Log Out</span>
          </div>
  )
}

export default ProfileSideBar