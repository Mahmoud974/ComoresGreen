import React from "react";
import Image from "next/image";
export default function CardRealisation() {
  return (
    <>
      <div className="xl:hidden flex carousel carousel-center bg-neutral rounded-box max-w-xs space-x-4 p-4">
        <div className="carousel-item">
          <div className="bg-green-900 rounded-xl max-w-xs shadow-xl p-6">
            <Image
              src="/cut.jpg"
              alt="Paysage"
              width={500}
              height={250}
              className="rounded-xl mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">Élagage</h3>
            <p className="text-white text-base ">
              Nos élagueurs diagnostiquent l’état sanitaire de vos arbres. En
              fonction de notre analyse, nous pratiquons le type de taille
              appropriée : taille raisonnée, taille d’adaptation, taille
              d’entretien et taille de formation.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-green-900 rounded-xl max-w-xs shadow-xl p-6">
            <Image
              src="/cut.jpg"
              alt="Paysage"
              width={500}
              height={250}
              className="rounded-xl mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">Élagage</h3>
            <p className="text-white text-base ">
              Nos élagueurs diagnostiquent l’état sanitaire de vos arbres. En
              fonction de notre analyse, nous pratiquons le type de taille
              appropriée : taille raisonnée, taille d’adaptation, taille
              d’entretien et taille de formation.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-green-900 rounded-xl max-w-xs shadow-xl p-6">
            <Image
              src="/cut.jpg"
              alt="Paysage"
              width={500}
              height={250}
              className="rounded-xl mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">Élagage</h3>
            <p className="text-white ">
              Nos élagueurs diagnostiquent l’état sanitaire de vos arbres. En
              fonction de notre analyse, nous pratiquons le type de taille
              appropriée : taille raisonnée, taille d’adaptation, taille
              d’entretien et taille de formation.
            </p>
          </div>
        </div>
      </div>

      <div className="xl:flex hidden  xl:flex-row  mt-8 ">
        {[...Array(3)].map((ok, i) => (
          <div key={i} className="grid grid-cols-1 mx-12 gap-3 ">
            {/* Carte Élagage */}
            <div className="bg-green-900 rounded-xl p-6 shadow-xl">
              <Image
                src="/cut.jpg"
                alt="Paysage"
                width={500}
                height={250}
                className="rounded-xl mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">Élagage</h3>
              <p className="text-white ">
                Nos élagueurs diagnostiquent l’état sanitaire de vos arbres. En
                fonction de notre analyse, nous pratiquons le type de taille
                appropriée : taille raisonnée, taille d’adaptation, taille
                d’entretien et taille de formation.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
