import React, { useState } from 'react';
import '../../styles/LogInPage.css';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import {SyncLoader} from 'react-spinners';
import axios from 'axios'; // Import axios

const LogInPage = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const Api = 'https://movie-app-ch5.onrender.com/api/user/log-in';

  const handleLogin = async () => {
    if (!userInput.email && !userInput.password) {
      toast.error('Please input your informations');
      return;
    }

    try {
      setLoadingState(true);
      const res = await axios.post(Api, userInput);
      toast.success(`You are logged in as ${userInput.email}`);
      if (res.status === 200) {
        localStorage.setItem('clientData', JSON.stringify(res.data)); // Corrected 'ress' to 'res'

        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    } finally {
      setLoadingState(false); // Reset loading state
    }
  };

  
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

                <ToastContainer/>

                <input type="email" placeholder='email' className='loginInput'
                onChange={(e)=> setUserInput((prev)=> ({...prev, email: e.target.value}))}
                value={userInput.email}
                />

                <input type="password" placeholder='Password' className='loginInput'
                onChange={(e)=> setUserInput((prev)=>({...prev, password: e.target.value}))}
                value={userInput.password}
                />


                <div className="rememberMeAndSignupLinkHolder">
                  <span>Don't have an account? <a className='signupLink' onClick={()=> navigate('/signup')} style={{color: 'blue'}}>SignUp</a></span>
                  <a href='#' className='forgotPasswordLink'>Forgot Password?</a>
                </div>
                <span><input type="checkbox"  name="remeber" value="RememberMe" className='rememberMer'/> Remember Me</span>
                
                <button className="loginBtn" onClick={handleLogin} disabled={loadingState}>
                     {loadingState ? <SyncLoader color="white" size={14}/> : "LOG IN"}
                </button>
            </div>
         </div>
    </div>
  )
}

export default LogInPage