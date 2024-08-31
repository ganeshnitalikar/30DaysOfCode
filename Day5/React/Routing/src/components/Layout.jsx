import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Nav';
import Footer from './Footer';


function Layout() {
  return (
   <>
      <Navbar></Navbar>

     <div className="main  min-h-full flex justify-center items-center">
      <Outlet />
     </div>

    <Footer></Footer>
   </>
  )
}

export default Layout