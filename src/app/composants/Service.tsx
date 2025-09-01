import React from 'react'

export default function Service() {
  const services = [
    {
      icon: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
        </svg>
      ),
      title: "99.9% Uptime",
      description: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."
    },
    {
      icon: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
        </svg>
      ),
      title: "Blazing Fast Web Hosting",
      description: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."
    },
    {
      icon: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
        </svg>
      ),
      title: "Free SSL Certificates",
      description: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."
    },
    {
      icon: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z' />
        </svg>
      ),
      title: "24x7 Friendly Support",
      description: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."
    }
  ]

  return (
    <section className='w-full bg-[#F5F5DC] py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <p className='text-green-600 font-bold text-sm tracking-widest uppercase mb-4'>BEST SERVICE FOR YOU</p>
          <h3 className='font-bold text-3xl lg:text-4xl text-gray-900 leading-tight'>
            Why choose our garden?
          </h3>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => (
            <div key={index} className='text-center'>
              {/* Circular Icon */}
              <div className='w-20 h-20 mx-auto mb-6 bg-green-800 border-4 border-green-400 rounded-full flex items-center justify-center text-white'>
                {service.icon}
              </div>
              
              {/* Title */}
              <h4 className='font-bold text-xl text-gray-900 mb-4'>
                {service.title}
              </h4>
              
              {/* Description */}
              <p className='text-gray-600 leading-relaxed text-sm'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
