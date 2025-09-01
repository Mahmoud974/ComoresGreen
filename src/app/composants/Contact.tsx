import { Accordion, AccordionContent } from '@/components/ui/accordion'
import React from 'react'

export default function AccordionFaq() {
  return (
    <section className='text-center'>
         <p className='text-green font-bold uppercase'>Contact</p>
         <h3 className='font-bold text-3xl'>Why choose our garder?</h3>
 
 

 
    <section className='w-full  text-white py-16'>
      <div className='container mx-auto px-4'>
       
        
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Left Column - Map */}
          <div className='lg:w-2/3 w-full'>
            <div className='bg-gray-800 rounded-lg p-6 h-96 flex items-center justify-center'>
              <div className='text-center text-gray-400'>
                <div className='w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/>
                  </svg>
                </div>
                <p className='text-lg font-semibold'>Map Location</p>
                <p className='text-sm'>Beauvallon Area</p>
              </div>
            </div>
          </div>
          
       
          <div className='lg:w-1/3 w-full'>
            <div className='bg-white text-gray-900 rounded-lg p-6'>
              <form className='space-y-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Fullname</label>
                  <input 
                    type='text' 
                    placeholder='Ex: Rasyidin Arsyad Nasution'
                    className='w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-green-500 placeholder-gray-400'
                  />
                </div>
                
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
                  <input 
                    type='email' 
                    placeholder='Ex: rasyid.arsyad@gmail.com'
                    className='w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-green-500 placeholder-gray-400'
                  />
                </div>
                
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Phone Number</label>
                  <input 
                    type='tel' 
                    placeholder='Ex: 089111888999'
                    className='w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-green-500 placeholder-gray-400'
                  />
                </div>
                
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Shipping Address</label>
                  <input 
                    type='text' 
                    placeholder='Ex: Patriot Street Number 666, Ngaklik, Sleman'
                    className='w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-green-500 placeholder-gray-400'
                  />
                </div>
                
                <button 
                  type='submit'
                  className='w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    </section>
  )
}
