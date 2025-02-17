import React from 'react'
import './Subscription.css'

const Subscription = () => {
  return (
    <div className='subscriptionWrapper'>
        <div className="subscriptionTextHolder">
            <h1>Get Our
            Latest Offers News</h1>
            <span>Subscribe news latter</span>
        </div>
        <div className="mailInputHolder">
            <input type="email" placeholder='Your email here'/>
            <button className='emailBtn'>Subscribe</button>
            </div>
    </div>
  )
}

export default Subscription