import React from 'react'
import Sidebar from './../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <Navbar/>
        <div className='flex gap-2.5 mt-20'>
          <Sidebar />
        <div className='flex md:w-[70%] flex-1'>
            <Outlet/>
        </div>  
        </div>
        
    </>
  )
}

export default Layout