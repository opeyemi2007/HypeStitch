import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router'
import Navigates from '../components/navigates/Navigates'
import Footer from '../components/footer/Footer'
import LoadScreen from '../components/loadScreen/LoadScreen'

const GlobalRoutes = () => {
  const [screenLoadIn, setScreenLoadIn] = useState(true);

  useEffect(() => {
    const Loading = setTimeout(() => {
      setScreenLoadIn(false);
    }, 4000);
  
    return () => clearTimeout(Loading); 
  }, []);

  return (
    <>
    {
      screenLoadIn ? <LoadScreen/> :  <div>
        <Navigates/>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
    }
   </>
  )
}

export default GlobalRoutes