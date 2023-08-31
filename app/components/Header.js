import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {GrUserExpert} from 'react-icons/gr' 
import {GrContact} from 'react-icons/gr'
import {GrCatalogOption} from 'react-icons/gr' 
import {BsFillCalendarEventFill} from 'react-icons/bs'


export default function Header () {
  return (
    <div>
       
      <header className=" text-gray-600 body-font flex">
      <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
        <img alt="logo" src="/activelife_icon.jpeg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
         
          <span className="ml-3 text-xl hidden lg:block">Active Life Style</span>
        </a>
      <div className=" container mx-auto flex  flex-col md:flex-row items-center">
        <nav className=" fixed top-0 flex items-center text-base md:ml-auto text-bold">
        <MenuItem title="Home" address="/" Icon={AiFillHome}/> 
        <MenuItem title="Events" address="/events" Icon={BsFillCalendarEventFill}  /> 
        <MenuItem title="Mentors" address="/mentors" Icon={GrUserExpert}  /> 
        <MenuItem title="Products" address="/products" Icon={GrCatalogOption}  /> 
        <MenuItem title="Contact-Us" address="/contact-us" Icon={GrContact} /> 
        <MenuItem title="About-Us" address="/about" Icon={FcAbout} /> 
        </nav>
        
       
      </div>
    </header>


    </div>
  )
}
