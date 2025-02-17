import React from 'react'
import '../styles/AboutPage.css'
import { IoLocationSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { FaEarthAfrica } from "react-icons/fa6";
import GoogleMapEmbed from '../components/map/GoogleMapEmbed'
import Subscription from '../components/subscription/Subscription';

const AboutPage = () => {
  return (
    <div className='aboutWrapper'>
         <div className="loginHeader">
           <div className="headerCover"><h1>contact us</h1></div> 
         </div>

        <div className="mapandContentHolder">
            <div className="contactUsHolder">
               <h1>Contact Us</h1>
                <p>We’d love to hear from you! Whether you have questions about our products, 
                    need help with an order, or just want to say hello, our team is here to assist you.
                </p>
                </div>

                <div className="contactUsHolder">
                <h2>Get in Touch</h2>

                <span><IoLocationSharp /><b>Location</b>: AMUWO-Odofin Festac Side</span> <br />
                <span><MdPhone /><b>Phone</b>: +234 811 079 0615</span><br />
                <span><SiMinutemailer /><b>Email</b>: hypeStitch02@gmail.com</span>
            </div>  

           <div className="contactUsHolder">
            <h2>Customer Support</h2>
                <p>Our support team is available  9 AM – 6 PM to assist you. Expect a response within  24 hours (or faster if possible).</p>

            </div>



            <div className="contactUsHolder">
               <h2>Follow Us</h2>
                <p>Stay updated on new arrivals, exclusive offers, and style tips by following us on:</p>
                <div className="socialIcons">
                    <FaTwitter cursor={"pointer"}/>
                    <BiLogoFacebook cursor={"pointer"}/>
                    <AiFillInstagram cursor={"pointer"}/>
                    <FaEarthAfrica cursor={"pointer"}/>
                </div>
                </div>

            
            


           
        </div> 
        <div className="mapHolder">
               <GoogleMapEmbed/>
            </div>
        <Subscription/>
    </div>
  )
}

export default AboutPage