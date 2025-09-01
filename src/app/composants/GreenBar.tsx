import { MapPin, Phone, Mail, Clock2, Facebook, Instagram } from 'lucide-react'
import React from 'react'

export default function GreenBar() {
  return (
    <div className="flex justify-between bg-green py-1 text-white font-['Montserrat']">
    <div className='flex container justify-between mx-auto'>
    <ul className='flex gap-5'>
        <li className='flex'>
        <MapPin  className='text-fluo'/>
          <p className='ml-1'>Mitsamiouli, Comores</p>
        </li>
        <li className='flex'>
          <Phone className='text-fluo'/>
          <p className='ml-1'>08.90.12.43.17</p>
        </li>
        <li className='flex'>
          <Mail className='text-fluo'/>
          <p className='ml-1'>support@gmail.com</p>
        </li>
        <li className='flex'>
        <Clock2  className='text-fluo'/>
          <p className='ml-1'>Lundi - Vendredi  7h00 - 18h00</p>
        </li>

      </ul>
      <ul className='flex gap-6'>
      <li className='flex'>
        <Facebook className='text-fluo' />
         
        </li>
        <li className='flex'>
        <Instagram  className='text-fluo'/>
         
        </li>
        
      </ul>
    </div>

    </div>
  )
}
