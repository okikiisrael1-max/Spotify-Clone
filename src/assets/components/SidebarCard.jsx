import React from 'react'

const SidebarCard = ({title, desc, btnTxt}) => {
  return (
    <div className='bg-white/5 rounded p-2.5'>
        <h1 className='font-bold'>{title}</h1>
        <p className='font-medium mt-2.5 text-sm'>{desc}</p>
        <button className='bg-white font-black text-sm rounded-full mt-2.5 text-black px-5 py-2.5'>{btnTxt}</button>
    </div>
  )
}

export default SidebarCard