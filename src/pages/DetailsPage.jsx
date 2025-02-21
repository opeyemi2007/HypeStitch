import React from 'react'
import { FaStar } from "react-icons/fa6";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import '../styles/detailsPage.css'

const DetailsPage = () => {
  return (
    <div className='detailsPageWrapper'>
        <div className="detailPageHeading"></div>

        <div className="productInformationWrapper">
            <div className="imageHolder">
                <img src="images/Baggy Rigid Distressed Jeans _ boohooMAN USA.jpeg" alt="" />
            </div>
            <div className="detailPageTextAndInfoWrapper">
                <h1>Baggy Rigid Jeans</h1>
                <div className="productRateHolder">2.06k <FaStar /></div>
                <span>$56.12</span>

                <span className="productDescription">Lorem ipsum dolor sit amet
                     consectetur adipisicing elit. Ea omnis laudantium natus distinctio,
                      assumenda officia quo, deserunt aliquam a deleniti repellat minima 
                      ratione? Harum fugiat, reprehenderit magnam quis sequi culpa!
                </span>

                <div className="CartCounter"><button><IoMdArrowDropleftCircle /></button> <span>0</span> <button><IoMdArrowDroprightCircle /></button></div>

                <button className="addToCartBtn">Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default DetailsPage