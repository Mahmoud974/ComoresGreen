"use client";
import React, { useState } from "react";
import Image from "next/image";

type TabKey = "elagage" | "jardinage" | "paysage" | "entretien";

const OLIVE = "#6b8e23";
const OLIVE_DARK = "#2f4708";
const TABS: { key: TabKey; label: string }[] = [
  { key: "elagage", label: "ÉLÉGAGE" },
  { key: "jardinage", label: "JARDINAGE" },
  { key: "paysage", label: "PAYSAGE" },
  { key: "entretien", label: "ENTRETIEN" },
  { key: "entretien", label: "ENTRETIEN" },
  { key: "entretien", label: "ENTRETIEN" },
  { key: "entretien", label: "ENTRETIEN" },
];

export default function Prestations() {
  const [active, setActive] = useState<TabKey>("elagage");

  return (
    <section className="w-full bg-white">
      {/* Onglets collés en haut */}
      <nav className="flex flex-wrap justify-center gap-5">
        {TABS.map(({ key, label }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={[
                "w-44 h-14",
                "px-6 text-white text-sm font-semibold",
                "bg-black",
                "",
                "rounded-b-[22px]", 
                "transition-colors",
                isActive ? `bg-[${OLIVE_DARK}]` : "hover:bg-neutral-900",
              ].join(" ")}
            >
              {label}
            </button>
          );
        })}
      </nav>

      {/* Contenu sous les onglets */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Colonne gauche */}
          <div className="w-full lg:w-1/2">
            <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative h-64 md:h-72">
                <Image
                  src="/images/banner.png"
                  alt="Exemple de prestation"
                  fill
                  priority
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center justify-between text-[13px] text-gray-600 mb-2">
                  <span>Site web</span>
                  <span>26/05/2025</span>
                </div>
                <h3 className="font-bold text-lg md:text-xl text-gray-900 leading-tight">
                  Des contenus pensés pour vous informer, vous inspirer, vous guider
                </h3>
              </div>
            </article>
          </div>

          {/* Colonne droite */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-xl">
              <h2
                className="font-bold text-[28px] md:text-[36px] leading-tight mb-6"
                style={{ color: OLIVE }}
              >
                Des prestations complètes
                <br className="hidden md:block" /> pour votre confort
              </h2>

              <div className="space-y-5 text-[15px] md:text-base text-gray-900 leading-relaxed">
                <p>
                  Mon expertise va bien au-delà de la plomberie classique. Je propose également des
                  services d’<span className="text-green-600 underline decoration-green-600 decoration-2">
                    installation de systèmes de chauffage
                  </span>{" "}
                  performants et économiques, et de
                  <span className="text-green-600 underline decoration-green-600 decoration-2"> climatisations</span>{" "}
                  adaptées pour votre confort en toute saison.
                </p>

                <p>
                  Mon objectif est de vous offrir des
                  <span className="text-green-600 underline decoration-green-600 decoration-2"> solutions complètes</span>{" "}
                  pour l’aménagement et l’entretien de votre habitation, avec soin, fiabilité et
                  réactivité.
                </p>
              </div>

              <div
                className="mt-7 p-5 bg-gray-50 rounded-r-lg border-l-4"
                style={{ borderLeftColor: OLIVE }}
              >
                <p className="font-medium text-gray-900 leading-relaxed">
                  Un professionnel polyvalent pour prendre en main vos travaux de plomberie, de
                  chauffage, de climatisation et d’électricité à Castelginest
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}