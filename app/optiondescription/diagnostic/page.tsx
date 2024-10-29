import Image from "next/image";
import React from "react";

export default function MiniNav() {
  return (
    <div className="mx-auto container">
      <div className="flex mx-auto container flex-col lg:flex-row items-center justify-between p-10">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full p-5">
          <Image
            width={800}
            height={800}
            src="/contact.jpg"
            alt="Élagage Image"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full p-5">
          <h2 className="text-2xl font-bold mb-4">{`Le Métier de l'Élagage`}</h2>
          <ul className="list-disc pl-6 mb-6 space-y-4">
            <li>
              <strong>Soin des arbres :</strong>{" "}
              {`L'élagage est une opération délicate qui vise à tailler les branches d'un arbre pour en assurer la bonne santé et la croissance.`}
            </li>
            <li>
              <strong>Prévention des risques :</strong>{" "}
              {`L'élagage permet de prévenir les dangers liés à la chute de branches mortes, protégeant ainsi les personnes, les biens et les infrastructures.`}
            </li>
            <li>
              <strong>{`Techniques spécialisées :`}</strong>{" "}
              {`Les professionnels
              de l'élagage utilisent des outils spécifiques et des techniques
              avancées pour atteindre les branches difficiles d'accès tout en
              respectant l'arbre.`}
            </li>
            <li>
              <strong>{`Respect de l'environnement :`}</strong>{" "}
              {`Les élagueurs veillent à respecter l'équilibre naturel des arbres et de leur écosystème tout en maintenant leur esthétique.`}
            </li>
          </ul>

          <div className="flex space-x-6">
            <div>
              <h3 className="text-6xl font-bold">550+</h3>
              <p className="text-gray-600">Arbre coupés</p>
            </div>
            <div>
              <h3 className="text-6xl font-bold">100m2</h3>
              <p className="text-gray-600">Gazon coupé</p>
            </div>
            <div>
              <h3 className="text-6xl font-bold">20</h3>
              <p className="text-gray-600">Créations de jardin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
