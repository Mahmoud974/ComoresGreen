import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-sand text-black h-auto py-4">
      <div className="container mx-auto h-full flex items-center justify-between gap-12">
        <Image
          src="/images/logo.png"
          className="h-auto w-1/8 rounded-xl"
          alt=""
          width={100}
          height={100}
        />
        <ul className="flex items-center font-['Montserrat'] space-x-8">
          {["HOME", "REALISATION", "À PROPOS", "CONTACT", "SERVICES"].map((item, index) => (
            <li key={index} className="text-xl font-bold relative group">
              <Link
                href="#"
                className="px-3 py-1 transition duration-300 group-hover:bg-green group-hover:text-fluo"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <button className="px-8 py-2 font-bold text-fluo bg-green hover:bg-fluo hover:text-green hover:shadow-xl cursor-pointer leading-tight">
          DEVIS
        </button>
      </div>
    </nav>
  );
}