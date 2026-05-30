import React from 'react'
import { assets } from '../data/assets'
import SidebarCard from './SidebarCard'
import { Globe } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='md:w-1/4 w-70% md:sticky absolute h-screen overflow-y-scroll px-2.5 bg-white/5 flex flex-col gap-5 shrink-0'>
        <div className='flex justify-between items-center py-2.5'>
            <p className='font-medium'>Your Library</p>
            <span className='bg-white/20 p-1.5 rounded-full cursor-pointer'>
                <img src={assets.plus_icon} className='w-5' />
            </span>
        </div>
        
        <SidebarCard title={'Create Your First Playlist'} desc={`it's easy we'll help you`} btnTxt={'Create PlayList'}/>

        <SidebarCard title={`Let's find some podcast to follow`} desc={`we'll keep you updated on new episodes`} btnTxt={'Browse Podcasts'}/>

        <div className='flex flex-col gap-5 mt-5'>
            <span className='flex gap-5 text-sm opacity-50'><li>legal</li>
            <li>Safety&privacyCenter</li>
            <li>PrivacyPolicy</li></span>
            <span className='flex gap-5 text-sm opacity-50'><li>cookie</li>
            <li>AboutAds</li>
            <li>Accessibilty</li></span>
            
            <li>cookies</li>

            <span className='rounded-full h-10 flex border-2 border-white cursor-pointer w-38 justify-center items-center gap-1.5'>
               <Globe/> English
            </span>
        </div>
    </div>
  )
}

export default Sidebar