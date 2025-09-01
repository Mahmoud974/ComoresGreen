import React from 'react'
import Image from "next/image";
import { ArrowRight } from 'lucide-react';
export default function Home() {
  return (
   <>
    <div className="relative w-full h-[55vh]">
    <Image
      src="/images/banner.png"
      alt=""
      fill
      priority
      quality={100}
      className="object-cover"
    />
    <div className="absolute inset-0 flex items-center">
     <div className="container mx-auto px-4">
       <div className="inline-block bg-green text-4xl -rotate-2 text-fluo tracking-widest font-['Montserrat']   py-3 shadow-md  mb-4 px-5">
         INSTANT · SIMPLE · SMART
       </div>
       <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-['Montserrat'] text-shadow-lg/20  font-black leading-tight drop-shadow">
  GREENING & <span className="text-[#9BE44D]">SMART</span>
  <br />
  SOLUTIONS
</h1>
       <div className="mt-4">
         <button className="inline-flex items-center gap-3 bg-white/90 hover:bg-white box-shadow text-green font-thin text-2xl tracking-widest  px-4 py-2  ">
           READ MORE
          <ArrowRight/>
         </button>
       </div>
     </div>
    </div>
    </div>
     <section className='flex container mx-auto justify-between py-7'>
     {/* <div className="bg-white  text-black h-auto py-4 ">
      <div className="container mx-auto h-12 flex items-center justify-between gap-12">
     <div className="flex gap-4">
     <Image src="/images/logo.png"
            className="h-auto  w-auto rounded-xl"
            alt=""
            width={100}
            height={100}
          />
          <p className="font-bold  ">99% <br/> de clients<br/> satisfaits</p>
     </div>
        
        </div>
        
        </div> */}

        {/* <div className="bg-white  text-black h-auto py-4 ">
      <div className="container mx-auto h-12 flex items-center justify-between gap-12">
     <div className="flex gap-4">
     <Image src="/images/logo.png"
            className="h-auto  w-auto rounded-xl"
            alt=""
            width={100}
            height={100}
          />
          <p className="font-bold  ">99% <br/> de clients<br/> satisfaits</p>
     </div>
        
        </div>
        
        </div>
        <div className="bg-white  text-black h-auto py-4 ">
      <div className="container mx-auto h-12 flex items-center justify-between gap-12">
     <div className="flex gap-4">
     <Image src="/images/logo.png"
            className="h-auto  w-auto rounded-xl"
            alt=""
            width={100}
            height={100}
          />
          <p className="font-bold  ">99% <br/> de clients<br/> satisfaits</p>
     </div>
        
        </div>
        
        </div>
        <div className="bg-white  text-black h-auto py-4 ">
      <div className="container mx-auto h-12 flex items-center justify-between gap-12">
     <div className="flex gap-4">
     <Image src="/images/logo.png"
            className="h-auto  w-auto rounded-xl"
            alt=""
            width={100}
            height={100}
          />
          <p className="font-bold  ">99% <br/> de clients<br/> satisfaits</p>
     </div>
        
        </div>
        
        </div> */}
     </section>
   </>
  )
}
