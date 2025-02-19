import React, { useState } from "react";
import "../../styles/SignUpPage.css";
import { useNavigate } from "react-router";
import axios from "axios";
import {SyncLoader} from 'react-spinners';
import { ToastContainer, toast } from "react-toastify";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [loadingState, setLoadingState] = useState(false);
  const [userInput, setUserInput] = useState({
    fullName: "",
    email: "",
    password: "",
  });

   const [errorState, setErrorState] = useState({
        message: "",
        isError: false,
        type: "",
    });



  const [confirmPassword, setConfirmPassword] = useState("");

  const Api = "https://movie-app-ch5.onrender.com/api/user/sign-up";

  const handleLogin = async () => {
    setLoadingState(true);


    if (!userInput.fullName.trim() || !userInput.email.trim() || !userInput.password.trim() || !confirmPassword.trim() ) {
        toast.error("Please fill in all fields");
      setLoadingState(false);
      return;
    }


    if (confirmPassword !== userInput.password) {
      toast.error("Passwords do not match");
      setLoadingState(false);
      return;
    }else if(!userInput.email.includes('@')){
      toast.error('email must include [@]')
      return setLoadingState(false);

    }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/.test(userInput.password)) {
      toast.error(
        "Password must contain at least 9 characters, including uppercase, lowercase, numbers, and special characters."
      );
      setLoadingState(false);
      return;
    }

    try {
      const res = await axios.post(Api, userInput);
      toast.success("Sign up successful");
      console.log(res.data);
      if(res.status === 200){
        localStorage.setItem("userData", JSON.stringify(res.data));
        setTimeout(()=>{
          navigate("/login"); 
        }, 3000)
      }

    } catch (error) {
      console.error("Sign up error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Sign up failed");
    } finally {
      setLoadingState(false);
    }
  };


  const checkAllField = () =>{
    if(userInput.fullName && userInput.email && userInput.password){
     return true
    }else{
     return false
    }
  }

  return (
    <div className="loginWrapper">
      <div className="loginHeader">
        <div className="headerCover">
          <h1>Sign up</h1>
        </div>
      </div>
      <ToastContainer/>

      <div className="loginContainer">
        <div className="signUpside">
          <h1>Already have an Account?</h1>
          <p>
            Log in to access your personalized shopping experience! Stay updated
            with exclusive offers, track your orders, and enjoy faster
            checkouts. Sign in now to make shopping easier and faster!
          </p>
          <button className="signupBtn" onClick={() => navigate("/login")}>
            LOG IN
          </button>
        </div>

        <div className="loginForm">
          <h1 style={{margin: 0, fontSize: 20}}>
            Welcome ! <br />
            Please Sign Up now
          </h1>

          <input
            type="text"
            placeholder="Full Name"
            value={userInput.fullName}
            className="loginInput"
            onChange={(e) =>
              setUserInput((prev) => ({ ...prev, fullName: e.target.value }))
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={userInput.email}
            className="loginInput"
            onChange={(e) =>
              setUserInput((prev) => ({ ...prev, email: e.target.value }))
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={userInput.password}
            className="loginInput"
            onChange={(e) =>
              setUserInput((prev) => ({ ...prev, password: e.target.value }))
            }
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            className="loginInput"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <p style={{margin: 0, fontSize: 12}}>By signing up, you agree to our Terms & Conditions and Privacy Policy.</p>
          <div className="rememberMeAndSignupLinkHolder">
            <p style={{margin:0}}>Already have and account?</p><a style={{color: 'blue'}} className="signupLink" onClick={()=> navigate('/login')}>
              Login
            </a>
          </div>



          <button className="loginBtn" onClick={handleLogin} disabled={loadingState}>
            {loadingState ? <SyncLoader color="white" size={14}/> : "SIGN UP"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
