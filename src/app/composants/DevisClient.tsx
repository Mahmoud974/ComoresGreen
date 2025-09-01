"use client"
import React, { useState } from "react";
import Image from "next/image";

export default function DevisClient() {
  const [selectedOption, setSelectedOption] = useState(0)

  const options = [
    "Création et aménagement d'un jardin",
    "Création et aménagement d'un jardin"
  ]
  return (
    <section className="w-full font-['Montserrat']">
      <div className="flex flex-col md:flex-row">
           {/* Colonne dgauche (image) */}
           <div className="relative w-full md:w-3/5 h-[240px] md:h-[520px]">
          <Image
            src="/images/pelle.png"
            alt="Hands holding soil"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        {/* Colonne droite  */}
        <div className="w-full md:w-3/5     text-white h-[360px] md:h-[520px] flex">
         {/* Right Column - Quote Form */}
         <div className='lg:w-1/2 w-full mx-auto justify-center flex items-center'>
            <div className='max-w-lg mx-auto text-center'>
              <p className='text-green font-bold text-sm tracking-widest uppercase mb-4'>DEVIS</p>
              <h3 className='font-bold text-2xl lg:text-3xl text-gray-900 mb-8 leading-tight'>
                Vous souhaitez aménager ou entretenir votre jardin ?
              </h3>
              
              <div className='space-y-4'>
                {options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedOption(index)}
                    className='w-full bg-green-700 hover:bg-green-800 text-white p-4 transition-colors duration-200 flex items-center justify-between group'
                  >
                    <div className='flex items-center gap-4'>
                      {/* Radio Button */}
                      <div className='w-5 h-5 border-2 border-white rounded-full flex items-center justify-center'>
                        {selectedOption === index && (
                          <div className='w-2.5 h-2.5 bg-white rounded-full'></div>
                        )}
                      </div>
                      <span className='font-medium text-left'>{option}</span>
                    </div>
                    
                    {/* Arrow Icon */}
                    <svg 
                      className='w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200' 
                      fill='none' 
                      stroke='currentColor' 
                      viewBox='0 0 24 24'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                  </button>
                ))}
              </div>
         
            </div>
          </div>
        </div>

     
      </div>
    </section>
  );
}