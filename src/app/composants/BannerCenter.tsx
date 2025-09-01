import React from 'react'
import Image from 'next/image'

export default function BannerCenter() {
  return (
    <section className='w-full py-20 relative overflow-hidden'>
 
      <div className='absolute inset-0'>
        <Image
          src="/images/bannerCenter.png"
          alt="Green foliage background"
          fill
          className='object-cover'
          priority
        />
     
        <div className='absolute inset-0 bg-black/40'></div>
      </div>
      
      {/* Content */}
      <div className='relative z-10 container mx-auto px-4 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-white text-2xl md:text-2xl lg:text-4xl font-bold leading-tight mb-8 drop-shadow-lg'>
            We are right here to help you realize
            <br />
            your green dream
          </h2>
          
          <button className='bg-green hover:bg-[#3d6a4a] text-white font-bold text-lg px-8 py-4  transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  )
}
