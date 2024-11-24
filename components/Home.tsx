import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { navImg } from "./Header/NavPrestation"; // Assurez-vous que `navImg` est correctement défini

export default function Home() {
  const [value, setValue] = React.useState<string>("contractyearly");

  return (
    <section className="container mx-auto flex items-center text-wrap xl:justify-between justify-center mt-7">
      <div className="h-96 space-y-2 justify-start xl:items-start w-[32rem] text-center xl:text-left">
        <p className="text-lime-500 font-bold text-xs xl:text-xl">
          GIGALAND MARKET
        </p>
        <h1 className="font-bold xl:text-xl lg:text-4xl text-2xl xl:mx-0 mx-1">
          Navigating the digital landscape for success
        </h1>
        <p className="text-base xl:text-xl">
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de
        </p>
        <section>
          <div>
            <div className="flex flex-row space-x-5 xl:space-x-5 xl:space-y-0 gap-4 xl:justify-start justify-center">
              {/* Premier compteur */}
              <div className="relative flex items-center justify-center">
                <div className="rounded-xl transform transition-transform duration-300 hover:scale-105 text-center">
                  <h3 className=" lg:text-6xl text-3xl font-bold text-green-700">
                    <CountUp start={0} end={550} duration={1} />+
                  </h3>
                  <p className="text-gray-600 text-left mt-2 xl:text-xl text-xs">
                    Arbres coupés
                  </p>
                </div>
                {/* Trait vert séparateur */}
                <span className="hidden xl:inline-block h-20 border-l-4 border-green-700 mx-5"></span>
              </div>

              {/* Deuxième compteur */}
              <div className="relative flex items-center justify-center">
                <div className="xl:text-left text-center rounded-xl transform transition-transform duration-300 hover:scale-105  ">
                  <h3 className="lg:text-6xl  text-3xl font-bold text-green-700">
                    <CountUp start={0} end={100} duration={1} suffix="m²" />
                  </h3>
                  <p className="text-gray-600 mt-2 text-left   xl:text-xl text-xs">
                    Gazon coupé
                  </p>
                </div>
                {/* Trait vert séparateur */}
                <span className="hidden xl:inline-block h-20 border-l-4 border-green-700 mx-5"></span>
              </div>

              {/* Troisième compteur */}
              <div className="xl:text-left text-center rounded-xl transform transition-transform duration-300 hover:scale-105">
                <h3 className="lg:text-6xl  text-3xl font-bold text-green-700">
                  <CountUp start={0} end={20} duration={1} />
                </h3>
                <p className="text-gray-600 mt-2 text-left whitespace-nowrap xl:text-xl text-xs">
                  Jardins créés
                </p>
              </div>
            </div>
          </div>
          <div className="space-x-5">
            <button className="bg-green-700 xl:p-4 mt-6 px-5 py-2 rounded-xl xl:text-xl text-xs text-white">
              Obtenir un devis
            </button>

            {/* Mini menu intégré */}
            <div className="dropdown dropdown-end">
              <button
                className="  border-green-700 text-green-700 xl:p-4 mt-6 px-14 py-2 rounded-xl xl:text-xl text-xs xl:hidden flex font-bold border-2"
                tabIndex={0}
                role="button"
              >
                Mini menu
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content menu  rounded-box z-[1] w-52 p-2 shadow bg-white"
              >
                {navImg.map((item) => (
                  <li
                    key={item.url}
                    onClick={() => setValue(item.url || "")}
                    className={`flex flex-row text-center rounded-xl shadow-xl cursor-pointer my-1      ${
                      value === item.url
                        ? "bg-green-600 text-white"
                        : "bg-white text-gray-500"
                    } hover:bg-[#799429] hover:text-white`}
                  >
                    <p className="font-semibold text-xs">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="hidden xl:flex xl:mt-0 -mt-48">
        <Image
          width={1000}
          height={1000}
          src="/lowpoly.png"
          alt="Élagage Image"
          className="xl:w-[30rem] h-full object-cover"
        />
      </div>
    </section>
  );
}
