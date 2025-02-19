import React from 'react'
import './Footer.css'
import { FaTwitter } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { FaEarthAfrica } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footerWrapper'>
      <div className="topinFooter">
        <div className="textWrappers">
          <img src="images/site-Logo.jpg" alt="" />
          <span>
          Welcome to <b>HypeStitch</b> – where every stitch tells a 
          story and every piece speaks your vibe. We’re all about 
          fresh, bold looks that push boundaries and celebrate individuality.
           From streetwear to the latest trends, our clothes are made to move, 
           groove, and catch eyes. Step in, stand out, and let’s rewrite the rules
            of style.
          </span>
        </div>

        <div className="textWrappers">
          <h2>Quick Links</h2>
          <p>About</p>
          <p>Offers & Discounts</p>
          <p>Get Coupon</p>
          <p>Contact Us</p>
        </div>

        <div className="textWrappers">
          <h2>New Products</h2>
          <p>Woman Clothes</p>
          <p>Fashion accesories</p>
          <p>Man accessories</p>
          <p>Rubber made Toys</p>
        </div>

        <div className="textWrappers">
          <h2>Support</h2>
          <p>Frequently Asked Questions</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Report a Payment Issue</p>
        </div>

      </div>

      <div className="bottominFooter">
      <FaTwitter cursor={"pointer"}/>
      <BiLogoFacebook cursor={"pointer"}/>
      <AiFillInstagram cursor={"pointer"}/>
      <FaEarthAfrica cursor={"pointer"}/>
      </div>
    </div>
  )
}

export default Footer