import Link from 'next/link'
import React from 'react'


export default function MenuItem({ title, address}) {
  return (
    
      <div>
        <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <p className='hidden sm:inline my-2 text-2xl '> {title}</p>
        </Link>
      </div>
    
      

  )
}