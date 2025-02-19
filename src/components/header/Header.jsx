import React, { useState, useEffect } from 'react';
import './Header.css';
import 'animate.css';
import { FiSearch } from "react-icons/fi";
import { GoHeartFill } from "react-icons/go";
import { IoIosCart } from "react-icons/io";
import { MdWhatshot } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router';

const Header = () => {
  const [latestdropDown, setLatestDropDown] = useState(false);
  const [blogdropDown, setBlogDropDown] = useState(false);
  const [mobileDropDown, setMobileDropDown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate()

  const handleLogoClick = () => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }
 
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const latestToggles = () => {
    setLatestDropDown(!latestdropDown);
    setBlogDropDown(false);
  };

  const blogToggles = () => {
    setLatestDropDown(false);
    setBlogDropDown(!blogdropDown);
  };

  const mobileDropDownToggle = () =>{
    setMobileDropDown(!mobileDropDown)
    setBlogDropDown(false)
    setLatestDropDown(false)
  }

  const cartCount = cartItems.length;
  const favoriteCount = favorites.length;


  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) { 
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`headerWrapper ${isFixed ? "fixed" : ""}`}>

        <IoIosMenu className='mobileBurgermenu animate__fadeInLeft' onClick={mobileDropDownToggle}/>
        {
          mobileDropDown?  <div className="MobileDropDown animate__animated ">
            <div className="dropHeading"><RxCross2 onClick={mobileDropDownToggle}/></div>

            <div className="mobileNavHolder">
              <p onClick={()=> navigate('/')}>Home</p>

              <p>Category</p>
            
              <p onClick={latestToggles}>Latest {latestdropDown?<FaChevronUp />:<FaChevronDown />} </p>

              {
                latestdropDown? <div>
              <p>Celebrity-Inspired Looks</p>
              <p>Sustainable Fashion</p>
              <p>Streetwear</p>
              <p>Collaborations</p>
              <p>Seasonal Trends</p>
              </div> : null
              }
              
              <p onClick={blogToggles}>Products {blogdropDown?<FaChevronUp />:<FaChevronDown />}</p>

              {
                blogdropDown? <div>
              <p>NIKE</p>
              <p>Allbirds</p>
              <p>Louis Vuitton</p>
              <p>ASOS</p>
              <p>Off-White</p>
              </div> : null
              }

              <p onClick={()=> navigate('/contact')}>Contact</p>
             
            </div>
            
          </div> : null
        }
       

      <img src="images/site-Logo.jpg" alt="" className="logo" onClick={handleLogoClick}/>

      <ul className="navLinks">
        <a onClick={()=> navigate('/')}>Home</a>
        <a  onClick={()=> navigate('/category')}>Category</a>
        <div className="hotHolder"><MdWhatshot /></div>
        <a onClick={latestToggles}>Latest</a>
        <a onClick={blogToggles}>Products</a>  

        {latestdropDown && <div className="LatestdropDown animate__animated animate__fadeIn">
          <p>Celebrity-Inspired Looks</p>
          <p>Sustainable Fashion</p>
          <p>Streetwear</p>
          <p>Collaborations</p>
          <p>Seasonal Trends</p>
        </div>}

        {blogdropDown && <div className="BlogdropDown animate__animated animate__fadeIn">
          <p>NIKE</p>
          <p>Allbirds</p>
          <p>Louis Vuitton</p>
          <p>ASOS</p>
          <p>Off-White</p>
        </div>}

        <a onClick={()=>navigate('/contact')}>Contact</a>
      </ul>

      <div className="headerIconsAndSearch">
        <div className="searchWrapper">
          <input type="search" placeholder='Search...' />
          <FiSearch size={20} cursor={"pointer"} />
        </div>

        <div className="headerIcons">
          <div className="favoritesWrapper">
            <GoHeartFill className='headerIcon' />
            <div className="favoriteCount">{favoriteCount}</div> 
          </div>
          <div className="cartWrapper">
            <IoIosCart className='headerIcon'  onClick={()=> navigate('/cart')}/>
            <div className="cartCount">{cartCount}</div> 
          </div>
        </div>

        <button className="signInBtn" onClick={()=> navigate('/privateroute')}>Sign in</button>
      </div>
    </div>
  );
}

export default Header;
