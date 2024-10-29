import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

export default function Home() {
  return (
    <section className="container mx-auto flex items-center text-wrap  justify-between mt-7">
      <div className="h-96 space-y-2  justify-start items-start w-[32rem] ">
        <p className="text-lime-500 font-bold">GIGALAND MARKET</p>
        <h1 className="font-bold text-5xl">
          Navigating the digital landscape for success
        </h1>
        <p>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de
        </p>
        <section className="  ">
          <div className=" ">
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-5 justify-start items-center">
              {/* Premier compteur */}
              <div className="relative  flex items-center">
                <div className="rounded-lg transform transition-transform duration-300 hover:scale-105 text-center">
                  <h3 className="text-6xl font-bold text-green-700">
                    <CountUp start={0} end={550} duration={1} />+
                  </h3>
                  <p className="text-gray-600 text-left mt-2">Arbres coupés</p>
                </div>
                {/* Trait vert séparateur */}
                <span className="hidden md:inline-block h-20 border-l-4 border-green-700 mx-5"></span>
              </div>

              {/* Deuxième compteur */}
              <div className="relative  flex items-center">
                <div className=" rounded-lg transform transition-transform duration-300 hover:scale-105 text-left">
                  <h3 className=" text-6xl font-bold text-green-700">
                    <CountUp start={0} end={100} duration={1} suffix="m²" />
                  </h3>
                  <p className="text-gray-600 mt-2 text-left">Gazon coupé</p>
                </div>
                {/* Trait vert séparateur */}
                <span className="hidden md:inline-block h-20 border-l-4 border-green-700 mx-5"></span>
              </div>

              {/* Troisième compteur */}
              <div className="text-left rounded-lg transform transition-transform duration-300 hover:scale-105  ">
                <h3 className="text-6xl font-bold text-green-700">
                  <CountUp start={0} end={20} duration={1} />
                </h3>
                <p className="text-gray-600 mt-2 text-left whitespace-nowrap">
                  Jardins créés
                </p>
              </div>
            </div>
          </div>
          <button className="bg-green-700 p-4 mt-6    rounded-xl text-white  ">
            Obtenir un devis
          </button>
        </section>
      </div>

      <div>
        <Image
          width={1000}
          height={1000}
          src="/lowpoly.png"
          alt="Élagage Image"
          className="w-[30rem] h-full  object-cover"
        />
      </div>
    </section>
  );
}
