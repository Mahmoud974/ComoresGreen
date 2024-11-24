import React from "react";

export default function AboutSection() {
  return (
    <section className="relative font-inter antialiased bg-gray-100 py-12">
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 xl:px-6 py-24">
          <h2 className="text-3xl font-bold mb-6 text-center text-green-800">
            À propos de <span className="text-green-600">Green Comores</span>
          </h2>
          <p className="text-xl mb-6 text-gray-700 text-center">
            Chez <strong>Green Comores</strong>,{" "}
            {`nous sommes passionnés par
            l'art de l'élagage et de l'entretien des espaces verts. Forts d'une
            expérience de plusieurs années, nous offrons des services
            professionnels adaptés aux besoins spécifiques de chaque client.
            Notre équipe de spécialistes est dédiée à fournir des solutions de
            qualité pour maintenir et améliorer la beauté de vos jardins et
            espaces extérieurs.`}
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Notre Mission
              </h3>
              <p className="text-gray-600">
                {`Notre mission est de transformer vos espaces verts en véritables
                havres de paix en alliant expertise technique et passion pour le
                jardinage. Nous nous engageons à offrir un service de qualité,
                respectueux de l'environnement et des normes de sécurité les
                plus strictes.`}
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Nos Services
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Élagage et taille des arbres</li>
                <li>Entretien des jardins</li>
                <li>Aménagement paysager</li>
                <li>Évacuation des déchets verts</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-xl text-gray-700">
              {` Nous croyons que chaque projet est unique, c'est pourquoi nous
              travaillons en étroite collaboration avec nos clients pour
              répondre à leurs attentes. Contactez-nous dès aujourd'hui pour
              discuter de votre projet et découvrir comment nous pouvons vous
              aider à réaliser vos rêves de jardinage.`}
            </p>
          </div>
        </div>
      </main>
      <footer className="absolute left-6 right-6 xl:left-12 xl:right-auto bottom-4 xl:bottom-8 text-center xl:text-left">
        <a
          className="text-xs text-slate-500 hover:underline"
          href="https://cruip.com"
        >
          &copy; Cruip - Tailwind CSS templates
        </a>
      </footer>
      <div className="fixed bottom-0 right-0 w-full xl:bottom-6 xl:right-12 xl:w-auto z-50">
        <div className="bg-slate-800 text-sm p-3 xl:rounded shadow flex justify-between">
          <div className="text-slate-500 inline-flex">
            <a
              className="font-medium hover:underline text-slate-300"
              href="https://cruip.com/how-to-make-an-animated-number-counter-with-tailwind-css/"
            >
              Read Tutorial
            </a>
            <span className="italic px-1.5">or</span>
            <a
              className="font-medium hover:underline text-indigo-500 flex items-center"
              href="https://github.com/cruip/cruip-tutorials/blob/main/animated-number-counter/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <span>Download</span>
              <svg
                className="fill-indigo-400 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
              >
                <path d="m1.649 8.514-.91-.915 5.514-5.523H2.027l.01-1.258h6.388v6.394H7.158l.01-4.226z" />
              </svg>
            </a>
          </div>
          <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-slate-700">
            <span className="sr-only">Close</span>
            <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
              <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
