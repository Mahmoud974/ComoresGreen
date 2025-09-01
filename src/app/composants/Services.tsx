"use client"
import {  CircleChevronRight } from 'lucide-react'
import React from 'react'

export default function Services() {
  const services = [
    {
      icon: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
        </svg>
      ),
      title: "Hydropower Plants Services",
      description: "A PV module is an assembly of photo-voltaic cells mounted in a framework for installation."
    },
    {
      icon: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4' />
        </svg>
      ),
      title: "Wind Turbines Services",
      description: "The smallest turbines are used for applications such as the battery charging for auxiliary"
    },
    {
      icon: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' />
        </svg>
      ),
      title: "Hydropower Plants Services",
      description: "Hydroelectric power plants can include a reservoir to exploit the energy of falling  "
    },
    {
      icon: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
        </svg>
      ),
      title: "Fossil Resources Services",
      description: "Green chemistry is attracting interest as it provides clean and green technologies."
    }
  ]
  return (
    <section className='bg-white max-w-6xl h-12 mx-auto z-10 -mt-32 relative  font-["Montserrat"]'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4     shadow-xl bg-white '>
          {services.map((service, index) => (
            <div key={index} className=' cursor-pointer hover:bg-green hover:text-white bg-white p-6   hover:shadow-xl transition-shadow duration-300'>
          
              <div className='w-16 h-16   mb-6 border-2 border-green-500 rounded-full flex items-center justify-center text-green-500'>
                {service.icon}
              </div>
              
            
              <h3 className='font-bold text-xl   mb-4  '>
                {service.title}
              </h3>
              
             
              <p className='  leading-relaxed text-sm  mb-4  '>
                {service.description}
              </p>
              
           
              <button className='w-full font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center  gap-2'>
                Read More
                <CircleChevronRight />
               
              </button>
            </div>
          ))}
        </div>

    </section>
  )
}
