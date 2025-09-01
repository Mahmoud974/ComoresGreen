import React from "react";
import Image from "next/image";

export default function Informations() {
  return (
    <section className="w-full font-['Montserrat']">
      <div className="flex flex-col md:flex-row">
        {/* Colonne gauche */}
        <div className="w-full md:w-3/5   bg-[#6b8e23] text-white h-[360px] md:h-[520px] flex">
          <div className="px-8 md:px-12 my-auto">
            <p className="text-[11px] md:text-lg font-semibold tracking-widest text-fluo">
              BEST SERVICE FOR YOU
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight">
              When You Plant a seed
              <br />
              You plant hope
            </h2>

            {/* Paragraphe encadré en pointillés */}
            <div className="mt-4    inline-block">
              <p className="  text-sm md:text-base text-white/90 max-w-md">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an …
              </p>
            </div>

            {/* Boutons fléchés */}
            <div className="mt-6 flex gap-3">
              <button
                aria-label="Previous"
                className="w-11 h-11 grid place-items-center bg-black/20 hover:bg-black/30 transition rounded-none"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path
                    d="M15 6l-6 6 6 6"
                    stroke="#9bd246"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                aria-label="Next"
                className="w-11 h-11 grid place-items-center bg-black/20 hover:bg-black/30 transition rounded-none"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="#9bd246"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Colonne droite (image) */}
        <div className="relative w-full md:w-3/5 h-[240px] md:h-[520px]">
          <Image
            src="/images/img-hand.png"
            alt="Hands holding soil"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}