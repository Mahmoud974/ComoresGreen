// pages/404.tsx
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-100 to-green-700 text-center">
      {/* Image / SVG */}
      <div className="relative">
        <Image
          src="/branch.png"
          alt="Branches Illustration"
          className="w-full h-32"
          width={100}
          height={100}
        />
      </div>

      {/* Titre principal */}
      <h1 className="text-7xl font-extrabold text-green-900">404</h1>

      {/* Message d'erreur */}
      <p className="text-xl text-green-900 mt-4 mb-8">
        Oups! Cette branche ne mène nulle part...
      </p>

      {/* Bouton de retour */}
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:bg-green-800 transition duration-300 ease-in-out"
      >
        {`Retour à l'accueil`}
      </Link>

      {/* Décorations supplémentaires */}
      <div className="absolute bottom-0 left-0 w-full"></div>
    </div>
  );
}
