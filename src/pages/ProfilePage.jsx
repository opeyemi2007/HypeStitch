import React from 'react'

import { RiMedal2Fill } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { IoReloadCircle } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import '../styles/ProfilePage.css'

const ProfilePage = () => {
  return (
    <div className='profileWrapper'>
     


      <div className="rightSideBar">
        <div className="profileInfoHolder">
          <div className="profilePic"><MdModeEditOutline className='editProfilePic'/></div>

          <div className="profileName"><h1>Kingsley Adio</h1> <p>Lagos, Nigeria</p> <span>kingsleyadio0e@gmail.com</span></div>
        </div>


        <div className="alldetailsContainer">
          <div className="alldetailsInnerLeftContainer">

            <div className="accountBalanceContainer">
              <h1>Balance</h1>
              <div className="balace">
                <h1>$135.8</h1>
                <div className="buttonsWrapper">
                  <button>Add Cash</button>
                  <button>Cash Out</button>
                </div>
              </div>
            </div>


            <div className="membershipLevelContainer"><h1>Membership Level</h1> <h2>Regular<RiMedal2Fill color='gold'/></h2></div>
            <div className="myOrdersContainer"><h1>Pending Orders</h1> <span>No Pending Orders...</span></div>

            <div className="AuthVerificationsContainer">
              <h2>Confirm Details</h2>
              <span>kingsleyadio0e@gmail.com  <IoMdCheckmark color='green'/></span>
              <span>Credit Card  <IoMdCheckmark color='green'/></span>
              <span>Number  <FaXmark color='red'/></span>
            </div>

          </div>

          <div className="alldetailsInnerRightContainer">
            <div className="depositHistoryContainer">
              <h1>Deposit History</h1>
              <div className="depositCards"><h1>$23</h1> <p>Successful</p> <IoIosCheckmarkCircle size={35} color='green'/></div>
              <div className="depositCards"><h1>$12</h1> <p>Failed</p> <MdCancel size={35} color='red'/></div>
              <div className="depositCards"><h1>$40</h1> <p>Pending</p> <IoReloadCircle size={35} color='grey'/></div>
              <div className="depositCards"><h1>$40</h1> <p>Pending</p> <IoReloadCircle size={35} color='grey'/></div>
              <div className="depositCards"><h1>$40</h1> <p>Pending</p> <IoReloadCircle size={35} color='grey'/></div>
            </div>

            <div className="orderHistoryContainer"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage