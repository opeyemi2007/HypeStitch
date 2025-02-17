import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import './Navigates.css'
import { useNavigate } from 'react-router';

const Navigates = () => {
    const navigate = useNavigate()
    const [dropDown, setDropDown] = useState(false)

    const handleDropDownClick = () =>{
        setDropDown(!dropDown)
    }

    const countries = [
        {
            name: 'Nigeria',
            currency: 'NGN',
            flag: 'src/assets/images/Flag of Nigeria.jpg'
        },
        {
            name: 'Ghana',
            currency: 'GHS',
            flag: 'src/assets/images/Flag of Ghana.jpg'
        },
        {
            name: 'USA',
            currency: 'USD',
            flag: 'src/assets/images/Flag of USA.jpg'
        },
        {
            name: 'UK',
            currency: 'GBP',
            flag: 'src/assets/images/Flag of UK.jpg'
        }
    ]
  return (
    <div className='navigatesWrapper'>

        <div className="countrySelectorWrapper" onClick={handleDropDownClick}>
            
          
                <div className="countryFlagHolder">
                  <img src="src/assets/images/Flag of Nigeria.jpg" className='countryFlag'/>
                 </div>
            <div className="countryName">NIGERIA</div>
            <div className="currencyName">NGN</div>
            
            
           

           {
            dropDown?  <MdArrowDropUp className='dropIcon'/> : <IoMdArrowDropdown className='dropIcon'/>
           }
                
            
            
           
            {
                dropDown?  <div className="countrydropdown">
                <div className="dropdownContent" key={id}>
                    <a href="#">Nigeria</a>
                    <a href="#">Ghana</a>
                    <a href="#">USA</a>
                    <a href="#">UK</a>
                </div>
            </div> : null
            }
           
        </div>
        
        <div className="userProfile"><FaUserCircle cursor={'pointer'} onClick={()=> navigate('/profileroutes')}/></div>

        <ul className='linksWrapper'>
            <li>My Account</li>
            <li>Wish List</li>
            <li>shopping</li>
            <li>Cart</li>
            <li>Checkout</li>
        </ul>

        
    </div>
  )
}

export default Navigates