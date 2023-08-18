import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {AiFillInfoCircle} from 'react-icons/ai' 
import {MdGroups2} from 'react-icons/md'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {GrUserExpert} from 'react-icons/gr' 
import {AiFillWallet} from 'react-icons/ai'

import {GrContact} from 'react-icons/gr'
import {GrCatalogOption} from 'react-icons/gr' 



export default function Header () {
  return (
    <div>
      
      <header className="sticky text-gray-600 body-font flex">
      <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
        <img alt="logo" src="/activelife_icon.jpeg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
         
          <span className="ml-3 text-xl hidden lg:block">Active Life Style</span>
        </a>
      <div className="sticky top-0 container mx-auto flex  flex-col md:flex-row items-center">
        <nav className=" flex items-center text-base md:ml-auto ">
        <MenuItem title="Home" address="/" Icon={AiFillHome}/> 
        <MenuItem title="Events" address="/events" Icon={MdEmojiEvents}  /> 
        <MenuItem title="Mentors" address="/mentors" Icon={GrUserExpert}  /> 
        <MenuItem title="Products" address="/products" Icon={GrCatalogOption}  /> 
        <MenuItem title="Contact-Us" address="/contact-us" Icon={GrContact} /> 
        <MenuItem title="About-Us" address="/about" Icon={FcAbout} /> 
        </nav>
        
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 hidden lg:block">Login

          </button>
        </div>
      </div>
    </header>


    </div>
  )
}
