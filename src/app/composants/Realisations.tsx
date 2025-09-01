"use client"
import React, { useState } from 'react'
import Image from 'next/image'

export default function Realisation() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const cards = [
    {
      image: "/images/banner.png",
      headline: "When You Plant a seed",
      subheadline: "You plant hope",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
      image:"/images/banner.png", 
      headline: "Growing Together",
      subheadline: "Building community", 
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
      image: "/images/banner.png",
      headline: "Nature's Beauty", 
      subheadline: "In every season",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
      image: "/images/banner.png",
      headline: "Sustainable Future",
      subheadline: "For generations",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
      image: "/images/banner.png", 
      headline: "Fresh Harvest",
      subheadline: "Every day", 
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
      image: "/images/banner.png",
      headline: "Green Innovation", 
      subheadline: "Modern gardening",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    }
  ]

  // Calculer le nombre maximum d'index pour éviter les espaces vides
  const cardsPerView = 3
  const maxIndex = Math.max(0, cards.length - cardsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

 
  const goToSlide = (index:number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  return (
    <section className='w-full bg-[#F5F5DC] py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <p className='text-green-600 font-bold text-sm tracking-widest uppercase'>REALISATIONS</p>
          <h3 className='font-bold text-3xl mt-2 text-gray-900'>Why choose our garden?</h3>
        </div>
        
        <div className='relative max-w-6xl mx-auto'>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 text-white rounded-lg flex items-center justify-center transition-colors shadow-lg ${
              currentIndex === 0 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-green-800 hover:bg-green-900'
            }`}
            aria-label="Previous slide"
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 text-white rounded-lg flex items-center justify-center transition-colors shadow-lg ${
              currentIndex === maxIndex 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-green-800 hover:bg-green-900'
            }`}
            aria-label="Next slide"
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>
          
          {/* Carousel Container */}
          <div className='overflow-hidden'>
            <div 
              className='flex transition-transform duration-300 ease-in-out'
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {cards.map((card, index) => (
                <div key={index} className='w-1/3 flex-shrink-0 px-4'>
                  <div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                    <div className='relative h-48'>
                      <Image
                        src={card.image}
                        alt="Garden work"
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div className='p-6'>
                      <h4 className='text-green-800 font-bold text-xl leading-tight'>
                        {card.headline}
                        <br />
                        {card.subheadline}
                      </h4>
                      <p className='text-gray-700 mt-3 text-sm leading-relaxed'>
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Indicators */}
          <div className='flex justify-center mt-8 space-x-2'>
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-green-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        
        </div>
      </div>
    </section>
  )
}