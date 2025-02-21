import React, {useState} from 'react'
import { IoCardSharp } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import '../styles/checkOutpage.css'

const CheckOutPage = () => {
    const handlePaymentSelection = (e) => {
        console.log(e.target.innerText)
    }

    // return (
    //     <div className='checkOutPageWrapper'>
    //         <div className="checkOutForm">
    //             <div className="paymentSeletorWrapper"><p>Pay With Credit Card</p> <p>Transfer</p></div>
    //             </div>    
    //     </div>  
    // )
    
    
    const [stateDropdown, setStateDropdown] = useState(false);

    const handleStateDropdownToggle = () => {
        setStateDropdown(!stateDropdown);
    }
        


  return (
    <div className='checkOutPageWrapper'>
        <div className="checkOutForm">
           <div className="paymentSeletorWrapper"><p>Pay With Credit Card</p> <p>Transfer</p></div>

           
                <div className="EmailAddress">
                    <p>Email Address</p>
                    <input type="text" placeholder="e.g. John@gmail.com" />
                </div>
           
           <div className="paymentForm">
            <div className="firstChoice">
                <IoCardSharp className='paymentIcons'/>
                <p>Card</p>
            </div>
            <div className="secondChoice">
                <img src="images/KoraLogo.svg" alt="Visa" className='paymentIcons'/>
                <p>Kora Pay</p>
            </div>
            <span><CiLock color='green'/>Secured</span>
           </div>


           <div className="cardDetails">
                    <p>Card Number</p>
                    <div className='cardNumberInputHolder'>
                    <input type="text" placeholder="0234 2934 456 441" />
                    <FaCcVisa />
                    <FaCcMastercard />
                    </div>
                </div>


                   <div className="dateAndcvvInputWrapper">
                        <div className="expiryDate">
                                <p>Expiry Date</p>
                            <div className='expiryDateInputHolder'>
                                <input type="text" placeholder="MM / YY" />
                            </div>
                        </div>
                        <div className="expiryDate">
                                <p>CVV</p>
                            <div className='expiryDateInputHolder'>
                                <input type="text" placeholder="CVV" />
                            </div>
                        </div>
                    </div>

                    <div className="spanHolder">
                    <span>By providing your card information, you allow HypeStitch to charge your card for future payment in accordance with their terms</span>
                    </div>
                    

                <div className="EmailAddress">
                    <p>Cardholder name</p>
                    <input type="text" placeholder="John smith" />
                </div>


                <div className="billingAddressTable">
                    <p>Billing address</p>
                    <div className="addressTableWrapper">
                        <input type="text" placeholder="123 Main St" />
                        <input type="text" placeholder="CA 12345" />
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="ZIP Code" />
                        <input type="text" placeholder="Select a State" />
                        <span onClick={handleStateDropdownToggle}><IoMdArrowDropdown /> Select</span>
                    </div>

                    {
                        stateDropdown ? <div className="SelectStateDropDown"></div> : null
                    }
                </div>


                <div className="totalAndAllWrapper">
                    <div className="totalPrice">
                        <p>Subtotal</p>
                        <p>$150</p>
                    </div>
                    <div className="totalPrice">
                        <p>Shipping</p>
                        <p>$5</p>
                    </div>
                    <div className="totalPrice">
                        <p>Tax</p>
                        <p>$7.50</p>
                    </div>
                    <div className="totalPrice">
                        <p style={{fontWeight: 600, fontSize: 20}}>Total</p>
                        <p>$162.50</p>
                    </div>
                </div>


                
               
                <button onClick={handlePaymentSelection} className='payBtn'>Pay $162.50</button>
                
                
                
                   <div className="spanHolder">
                    <span>By clicking 'Submit', you agree to our Terms of Service and Privacy Policy</span>
                    </div>

                  
        </div>
    </div>
  )
}

export default CheckOutPage