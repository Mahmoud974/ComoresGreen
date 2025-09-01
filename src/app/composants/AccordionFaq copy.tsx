"use client"
import React, { useState } from 'react'

export default function AccordionFaq() {
  const [openItem, setOpenItem] = useState(0)

  const faqItems = [
    {
      question: "What is the Instagram Caption Generator?",
      answer: "The Instagram Caption Generator is an AI-powered tool designed to assist you in crafting compelling and engaging captions for your Instagram posts. It uses advanced algorithms to analyze your post content and generate captions that match your style and theme."
    },
    {
      question: "How do I use the Instagram Caption Generator?",
      answer: "Simply upload your image or describe your post content, and our AI will generate multiple caption options for you to choose from. You can then customize and edit the generated captions to better fit your voice and brand."
    },
    {
      question: "Can I personalize the generated captions?",
      answer: "Yes, absolutely! All generated captions are fully editable, allowing you to add your personal touch, include relevant hashtags, or modify the tone to better match your brand's voice and style."
    },
    {
      question: "What types of captions can I generate?",
      answer: "Our tool can generate various types of captions including inspirational quotes, product descriptions, lifestyle content, travel posts, food photography, and more. The AI adapts to your content and generates contextually relevant captions."
    },
    {
      question: "Is my data safe and private when using the tool?",
      answer: "Yes, we prioritize your privacy and data security. All uploaded content is processed securely and is not stored permanently. We use industry-standard encryption and security measures to protect your information."
    },
    {
      question: "Will using AI-generated captions really boost engagement?",
      answer: "AI-generated captions can significantly improve engagement by providing optimized, relevant, and engaging content. However, the best results come from combining AI suggestions with your personal touch and brand authenticity."
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? -1 : index)
  }

  return (
    <section className='w-full bg-gray-50 py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <p className='text-green-600 font-bold text-sm tracking-widest'>FAQ</p>
          <h3 className='font-bold text-3xl mt-2 text-gray-900'>Frequently asked questions</h3>
        </div>
        
        <div className='max-w-3xl mx-auto'>
          <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'>
            {faqItems.map((item, index) => (
              <div key={index} className='border-b border-gray-100 last:border-b-0'>
                <button
                  onClick={() => toggleItem(index)}
                  className='w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between'
                >
                  <span className='font-semibold text-gray-900 text-lg'>{item.question}</span>
                  <span className='text-gray-600 text-xl font-light'>
                    {openItem === index ? '×' : '+'}
                  </span>
                </button>
                
                {openItem === index && (
                  <div className='px-6 py-4 bg-gray-50'>
                    <p className='text-gray-700 leading-relaxed'>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
