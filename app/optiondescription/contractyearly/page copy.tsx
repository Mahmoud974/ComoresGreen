import Image from "next/image";
import React from "react";

export default function MiniNav() {
  return (
    <section className="mx-auto container text-black">
      <div className="flex mx-auto container text-xl lg:flex-row items-center justify-between p-10">
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
        <div className="lg:w-1/2 w-full p-5 ">
          <h2 className="text-2xl font-bold mb-4">{`Contrat Annuel d'Élagage`}</h2>
          <ul className="list-disc pl-6 mb-6 space-y-4">
            <li>
              <strong>Élagage saisonnier :</strong> Des interventions planifiées
              selon les besoins spécifiques de chaque arbre, garantissant leur
              santé et leur croissance optimale.
            </li>
            <li>
              <strong>Nettoyage après intervention :</strong> Après chaque
              prestation, nous veillons à laisser vos espaces propres, sans
              branches ni débris.
            </li>
            <li>
              <strong>Inspection de sécurité :</strong>{" "}
              {`Identification des
              branches mortes, malades ou dangereuses afin d'assurer la sécurité
              autour de votre propriété.`}
            </li>
            <li>
              <strong>{`Conseils d'entretien :`}</strong> Recommandations
              personnalisées pour améliorer la santé de vos arbres et préserver
              la beauté de vos espaces verts.
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
    </section>
  );
}
