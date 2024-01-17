import React from 'react'
import logo from '../assets/logo.svg'
import { nav } from '../Constants'



function NavBar() {
  return (
    <nav className='padding-x py-16 max-containor absolute z-10 top-0 w-full'>
      <div className='w-full flex justify-around items-center'>
        <div className='flex gap-2 items-center '>
          <a href='/' className='cursor-pointer hover:rotate-180 transition-transform '>
            <img src={logo} alt='logo' className='w-[50px] h-[50px]'/>
          </a>
          <h2 className='font-montserrat text-lg text-coral-red font-semibold  hover:text-slate-gray cursor-pointer'>My Portofolio</h2>
        </div>
        <ul className='flex gap-10 font-montserrat text-lg text-slate-gray'>
          {nav.map((nv) => (
            <a className='cursor-pointer hover:text-coral-red' href={`#${nv}`} key={nv}><li>{nv}</li></a>

          ))}

        </ul>
      
      </div>
    </nav>
  )
}

export default NavBar