import React from 'react'
import { assets } from '../data/assets'
import { Link } from 'react-router-dom'
import { Download } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full bg-black flex justify-between items-center px-10 py-2.5 z-50'>
        <div className='flex justify-between items-center gap-2.5'>
           <img src={assets.spotify_logo} className='w-10 shrink-0 grayscale-100 mr-20' />

        <span className='p-1.5 rounded-full bg-white/20'>
            <img src={assets.home_icon} className='w-8'/>
        </span>
        <div className='flex justify-between gap-2.5 items-center h-13 rounded-full bg-white/20 overflow-hidden px-2.5 w-100 border-2 border-white' >
        <img src={assets.search_icon} className='w-6 h-6'/>
        <input type="text" placeholder='what do you wants to play?' className='flex-1 h-full outline-0'/>
        </div>

        </div>
        <div className='flex items-center gap-2.5'>
            <div className='flex gap-2.5'>
             <Link className='font-bold text-white/70 hover:text-white'>Premuim</Link>
            <Link className='font-bold text-white/70 hover:text-white'>Support</Link>
            <Link className='font-bold text-white/70 hover:text-white'>Download</Link>   
            </div>
            <div className='h-10 w-0.5 bg-white/70'/>

            <p className='flex items-center font-medium text-white/70 hover:text-white cursor-pointer gap-1'> <Download/> Install App</p>

            <a href="/" className='font-medium text-white/70 hover:text-white cursor-pointer ml-20'>Sign Up</a>
            <button className='bg-white text-black rounded-full px-5 py-2.5 font-medium cursor-pointer hover:bg-white/80'>Log in</button>
            

        </div>
        
    </div>
  )
}

export default Navbar