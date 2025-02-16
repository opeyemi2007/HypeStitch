import React from 'react'
import '../../styles/LogInPage.css'
import { useNavigate } from 'react-router'

const LogInPage = () => {
  const navigate = useNavigate()
  return (
    <div className='loginWrapper'>
        <div className="loginHeader">
            <div className="headerCover"><h1>Login</h1></div> 
        </div>

         <div className="loginContainer">  
            <div className="signUpside">
                <h1>New to our Shop?</h1>
                <p>
                Sign up today for exclusive deals, early access to new styles,
                 and personalized fashion picks. Enjoy faster checkout and special
                  discounts—join us now!
                </p>
                <button className='signupBtn' onClick={()=> navigate('/signup')}>CREATE AN ACCOUNT</button>
            </div>


            <div className="loginForm">
                <h1>Welcome Back ! <br />
                Please Sign in now
                </h1>

                <input type="email" placeholder='email' className='loginInput'/>
                <input type="password" placeholder='Password' className='loginInput'/>
                <div className="rememberMeAndSignupLinkHolder">
                  <span>Don't have an account? <a className='signupLink' onClick={()=> navigate('/signup')} style={{color: 'blue'}}>SignUp</a></span>
                  <a href='#' className='forgotPasswordLink'>Forgot Password?</a>
                </div>
                <span><input type="checkbox"  name="remeber" value="RememberMe" className='rememberMer'/> Remember Me</span>
                
                <button className="loginBtn">LOG IN</button>
            </div>
         </div>
    </div>
  )
}

export default LogInPage