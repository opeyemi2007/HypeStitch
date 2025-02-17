import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router'
import Navigates from '../components/navigates/Navigates'
import Footer from '../components/footer/Footer'

const GlobalRoutes = () => {
  return (
    <div>
        <Navigates/>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default GlobalRoutes