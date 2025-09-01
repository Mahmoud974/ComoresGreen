import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section className='w-full bg-white py-20'>
      <div className='container mx-auto px-4 mt-80'>
        <div className='flex flex-col lg:flex-row gap-12 items-center'>
 
          <div className='lg:w-1/2 w-full'>
            <div className='max-w-lg'>
              <p className='text-green-600 font-bold text-sm tracking-widest uppercase mb-4'>ABOUT US</p>
              <h3 className='font-bold text-3xl lg:text-4xl text-gray-900 mb-6 leading-tight'>
                Why choose our garden?
              </h3>
              <div className='space-y-4 text-gray-700 leading-relaxed'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                  Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                  Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image with Green Shapes */}
          <div className='lg:w-1/2 w-full relative'>
            <div className='relative'>
              {/* Main Image */}
              <div className='relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden'>
                <Image
                  src="/images/about.png"
                  alt="Business presentation"
                  fill
                  className='object-cover'
                />
              </div>
              
              {/* Large Green Circle - Top Left */}
              <div className='absolute -top-8 -left-8 w-32 h-32 bg-green-500 rounded-full opacity-90 z-10'></div>
              
              {/* Small Dark Green Curved Shape - Bottom Right */}
              <div className='absolute -bottom-6 -right-6 w-24 h-24 bg-green-700 rounded-tr-full opacity-90 z-10'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
