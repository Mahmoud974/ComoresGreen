"use client"
import React, { useState } from 'react'

export default function AccordionFaq() {
  const [openItem, setOpenItem] = useState(0)

  const faqItems = [
    {
      question: "Qu'est-ce que le générateur de légendes Instagram ?",
      answer: "Le générateur de légendes Instagram est un outil alimenté par l'IA conçu pour vous aider à créer des légendes captivantes et engageantes pour vos publications Instagram. Il utilise des algorithmes avancés pour analyser le contenu de votre publication et générer des légendes qui correspondent à votre style et à votre thème."
    },
    {
      question: "Comment utiliser le générateur de légendes Instagram ?",
      answer: "Il suffit de télécharger votre image ou de décrire le contenu de votre publication, et notre IA générera plusieurs options de légendes parmi lesquelles vous pourrez choisir. Vous pouvez ensuite personnaliser et modifier les légendes générées pour mieux correspondre à votre voix et à votre marque."
    },
    {
      question: "Puis-je personnaliser les légendes générées ?",
      answer: "Oui, absolument ! Toutes les légendes générées sont entièrement modifiables, vous permettant d'ajouter votre touche personnelle, d'inclure des hashtags pertinents, ou de modifier le ton pour mieux correspondre à la voix et au style de votre marque."
    },
    {
      question: "Quels types de légendes puis-je générer ?",
      answer: "Notre outil peut générer divers types de légendes incluant des citations inspirantes, des descriptions de produits, du contenu lifestyle, des publications de voyage, de la photographie culinaire, et plus encore. L'IA s'adapte à votre contenu et génère des légendes contextuellement pertinentes."
    },
    {
      question: "Mes données sont-elles sécurisées lors de l'utilisation de l'outil ?",
      answer: "Oui, nous priorisons votre vie privée et la sécurité de vos données. Tout le contenu téléchargé est traité de manière sécurisée et n'est pas stocké de façon permanente. Nous utilisons des mesures de chiffrement et de sécurité conformes aux standards de l'industrie pour protéger vos informations."
    },
    {
      question: "L'utilisation de légendes générées par IA améliore-t-elle vraiment l'engagement ?",
      answer: "Les légendes générées par IA peuvent considérablement améliorer l'engagement en fournissant du contenu optimisé, pertinent et engageant. Cependant, les meilleurs résultats proviennent de la combinaison des suggestions de l'IA avec votre touche personnelle et l'authenticité de votre marque."
    }
  ]

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? -1 : index)
  }

  return (
    <section className='w-full bg-gray-50 py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <p className='text-green-600 font-bold text-sm tracking-widest'>FAQ</p>
          <h3 className='font-bold text-3xl mt-2 text-gray-900'>Questions fréquemment posées</h3>
        </div>
        
        <div className='max-w-3xl mx-auto'>
          <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'>
            {faqItems.map((item, index) => (
              <div key={index} className='border-b border-gray-100 last:border-b-0'>
                <button
                  onClick={() => toggleItem(index)}
                  className='w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between'
                >
                  <span className='font-semibold text-gray-900 text-lg cursor-pointer'>{item.question}</span>
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