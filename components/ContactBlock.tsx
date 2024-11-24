import React from "react";
import Image from "next/image";
import ContactForm from "./Formulaire";

export default function ContactBlock() {
  return (
    <section className="flex text-black " id="contact">
      {/* Colonne gauche : Formulaire */}
      <div className="bg-green-200 w-full h-[45rem] xl:flex hidden">
        <Image
          width={1000}
          height={1000}
          src="/cut.jpg"
          alt="Élagage Image"
          className="shadow-xl w-full h-full object-cover "
        />
      </div>
      <div className="xl:bg-gradient-to-b xl:from-green-800 xl:to-green-700 bg-black w-full h-[45rem] ">
        <ContactForm />
      </div>

      {/* Colonne droite : Image */}
    </section>
  );
}
