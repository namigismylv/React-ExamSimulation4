import React from 'react'
import Header from '../../Layouts/Site/Header/Header'
import Footer from '../../Layouts/Site/Footer/Footer'
import { Outlet  } from "react-router-dom";
const SiteRoot = () => {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/> 
    </>
  )
}

export default SiteRoot
