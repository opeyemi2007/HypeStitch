import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import './Navigates.css'
import nigeriaFlag from '../../images/Flag of Nigeria.jpg'
import usa from '../../images/use Flag.jpg'
import uk from '../../images/uk flag.jpg'
import ghana from '../../images/ghana flag.jpg'
import { useNavigate } from 'react-router';

const countries = [
    { name: 'Nigeria', currency: 'NGN', flag: nigeriaFlag },
    { name: 'Ghana', currency: 'GHS', flag: ghana },
    { name: 'USA', currency: 'USD', flag: usa },
    { name: 'UK', currency: 'GBP', flag: uk },
  ];


const Navigates = () => {
    const navigate = useNavigate()
    const [dropDown, setDropDown] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);


    const handleDropDownClick = () =>{
        setDropDown(!dropDown)
    }

    const handleCountrySelection = (country) => {
      setSelectedCountry(country);
      setDropDown(false);
      if (onSelect) {
        onSelect(country);
      }
    };




      
  return (
    <div className='navigatesWrapper'>


 <div className="countrySelectorWrapper" onClick={handleDropDownClick}>
      <div className="countryFlagHolder">
        <img src={selectedCountry.flag} className="countryFlag" alt={`${selectedCountry.name} flag`} />
      </div>
      <div className="countryName">{selectedCountry.name}</div>
      <div className="currencyName">{selectedCountry.currency}</div>
      {dropDown ? <MdArrowDropUp className="dropIcon" /> : <IoMdArrowDropdown className="dropIcon" />}

      {dropDown && (
        <div className="countrydropdown">
          <div className="dropdownContent">
            {countries.map((country) => (
              <a
                key={country.name}
                href="#"
                onClick={() => handleCountrySelection(country)}
              >
                {country.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>

        {/* <div className="countrySelectorWrapper" onClick={handleDropDownClick}>
            
          
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
                <div className="dropdownContent">
                    <a href="#">Nigeria</a>
                    <a href="#">Ghana</a>
                    <a href="#">USA</a>
                    <a href="#">UK</a>
                </div>
            </div> : null
            }
           
        </div>
         */}
        <div className="userProfile"><FaUserCircle cursor={'pointer'} onClick={()=> navigate('/login')}/></div>

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