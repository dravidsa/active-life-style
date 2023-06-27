import Image from 'next/image'
import Header from '../components/Header'

export default function Events() {
  return (

 <div> 

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
        <h1 className="title-font font-medium text-xl mb-2 text-gray-900">An unique opportunity to cycle in North Eastern part of India. </h1>
        <div className="leading-relaxed">Announcing Bramhaputra Cycling Expedition 4.0 </div>
        <div className="leading-relaxed text-bold text-amber-900">Date : 18th Dec 2023 to 23rd Dec 2023  </div>
      </div>
   
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img className="object-cover object-center w-full h-full" src="bcs_hero_2.jpg" alt="stats" />
    </div>
  </div>
</section>



<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Bramhaputra Cycling Expedition</h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Choose one option from below 3 options available </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/wbc.jpeg" />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">WBC</h2>
        <p className="text-base leading-relaxed mt-2">Difficulty Level : Easy </p>
        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="cbc.jpeg" /> 
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">CBC</h2>
        <p className="text-base leading-relaxed mt-2">Difficulty Level : Moderate </p>
        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="ebc.jpeg" />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">EBC</h2>
        <p className="text-base leading-relaxed mt-2">Difficulty Level : Moderate plus</p>
        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>





</div>
  )
}