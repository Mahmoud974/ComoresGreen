import React from "react";

export default function About() {
  return (
    <>
      <section className=" mb-12 py-12 " id="about">
        <div className="max-w-4xl mx-auto px-4 my-3">
          <div className="flex justify-center text-center flex-col mx-auto">
            <p className="text-lime-500 font-bold">GIGALAND MARKET</p>
            <h1 className="font-bold text-5xl text-black mb-6">
              Our Mission Is To Make
              <br /> Your Business.
            </h1>
          </div>
          <p className="text-lg mb-6 text-gray-700">
            Chez <strong>Green Comores</strong>,{" "}
            {`nous sommes passionnés par l'art
          de l'élagage et de l'entretien des espaces verts. Forts d'une
          expérience de plusieurs années, nous offrons des services
          professionnels adaptés aux besoins spécifiques de chaque client. Notre
          équipe de spécialistes est dédiée à fournir des solutions de qualité
          pour maintenir et améliorer la beauté de vos jardins et espaces
          extérieurs. `}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mb-6 md:text-left text-center">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Notre Mission
              </h3>
              <p className="text-gray-600">
                {`Notre mission est de transformer vos espaces verts en véritables
              havres de paix en alliant expertise technique et passion pour le
              jardinage. Nous nous engageons à offrir un service de qualité,
              respectueux de l'environnement et des normes de sécurité les plus
              strictes.`}
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-4 md:text-left text-center ">
                Nos Services
              </h3>
              <ul className="md:list-disc md:text-left text-center  list-inside text-gray-600">
                <li>Élagage et taille des arbres</li>
                <li>Entretien des jardins</li>
                <li>Aménagement paysager</li>
                <li>Évacuation des déchets verts</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700">
              {`Nous croyons que chaque projet est unique, c'est pourquoi nous
            travaillons en étroite collaboration avec nos clients pour répondre
            à leurs attentes. Contactez-nous dès aujourd'hui pour discuter de
            votre projet et découvrir comment nous pouvons vous aider à réaliser
            vos rêves de jardinage`}
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
