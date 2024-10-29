import React from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Galery from "../Galery";
export default function Realisation() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <section>
          <section
            className="bg-black py-16 text-white -mt-12"
            id="realisations"
          >
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold mb-12">Nos realisations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Carte Élagage */}
                <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                  <Image
                    src="/cut.jpg" // Remplacer avec le bon chemin d'image
                    alt="Paysage"
                    width={500}
                    height={250}
                    className="rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-semibold mb-4">Élagage</h3>
                  <p className="text-gray-400">
                    Nos élagueurs diagnostiquent l’état sanitaire de vos arbres.
                    En fonction de notre analyse, nous pratiquons le type de
                    taille appropriée : taille raisonnée, taille d’adaptation,
                    taille d’entretien et taille de formation.
                  </p>
                </div>

                {/* Carte Paysage */}
                <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                  <Image
                    src="/cut.jpg" // Remplacer avec le bon chemin d'image
                    alt="Paysage"
                    width={500}
                    height={250}
                    className="rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-semibold mb-4">Paysage</h3>
                  <p className="text-gray-400">
                    Quel que soit votre type de jardin, les paysagistes de Green
                    Comores interviennent pour la tonte, l’entretien des
                    massifs, la plantation, et bien plus.
                  </p>
                </div>

                {/* Carte Création */}
                <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                  <Image
                    src="/cut.jpg" // Remplacer avec le bon chemin d'image
                    alt="Paysage"
                    width={500}
                    height={250}
                    className="rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-semibold mb-4">Création</h3>
                  <p className="text-gray-400">
                    Notre équipe conçoit des plans pour la plantation de fleurs,
                    d’arbres et d’arbustes, ainsi que l’installation de dallages
                    et d’arrosage intégré.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Border Penché */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="-mt-8"
          >
            <path
              fill="#000"
              fillOpacity="1"
              d="M0,32L1440,224L1440,0L0,0Z"
            ></path>
          </svg>
        </section>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white w-[80vw] h-[80vh] max-w-none overflow-y-scroll">
        <Galery />
      </AlertDialogContent>
    </AlertDialog>
  );
}
