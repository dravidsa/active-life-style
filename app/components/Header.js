import React from 'react'
import MenuItem from './MenuItem'


export default function Header () {
  return (
    <div>
      
      <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <MenuItem title="Home" address="/"/> 
        <MenuItem title="Events" address="/events"  /> 
        <MenuItem title="Contact Us" address="/contact-us"  /> 
        <MenuItem title="About Us" address="/about"  /> 
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
        <img alt="logo" src="/activelife_icon.jpeg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
         
          <span className="ml-3 text-xl">Active Life Style</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>


    </div>
  )
}
