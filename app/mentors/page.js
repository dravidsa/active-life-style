import React from 'react'

export default function page() {
  return (
    <div>
      
<a href="#" class="m-4 w-auto flex  items-center  bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="nisha.jpeg" alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nisha Kamble</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Nisha is fitness instructor with specialization in Yoga , Pranamyam and Strength training .</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I treat asthma patients, migraine, anxiety and phobia ,paralysed patients etc..</p>
 {/* Links */}
 <div className="flex flex-wrap items-center rounded-b-xl border-t-2 bg-white">
        <button className="border rounded-2xl bg-blue-600 text-white shadow-sm p-1 px-2 m-2">
          Book Appointment
        </button>
        <button className="border-2 border-blue-600 rounded-2xl text-blue-600 shadow-sm p-1 px-2 m-2">
          Quick Chat
        </button>
      </div>    

    </div>
    <div className="flex flex-wrap items-center m-2">
        <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1 text-amber-900">
          #Yoga
        </span>
        <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1 text-amber-900">
          #Strength Training 
        </span>
        <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
          #Pranayam
        </span>
      </div>

      
     
</a>

    </div>
  )
}
