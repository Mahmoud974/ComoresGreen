import React from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogCancel,
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
            className=" py-16 text-white -mt-12 md:w-screen md:px-0 px-12"
            id="realisations"
          >
            <div className="container mx-auto text-center">
              <div className="flex justify-center text-center flex-col mx-auto">
                <p className="text-lime-500 font-bold">GIGALAND MARKET</p>
                <h1 className="font-bold text-5xl text-black ">
                  Our Mission Is To Make
                  <br /> Your Business.
                </h1>
              </div>
              <div className="flex mt-8 ">
                {[...Array(3)].map((ok, i) => (
                  <div key={i} className="grid grid-cols-1 mx-12 gap-3 ">
                    {/* Carte Élagage */}
                    <div className="bg-green-900 rounded-lg p-6 shadow-lg">
                      <Image
                        src="/cut.jpg"
                        alt="Paysage"
                        width={500}
                        height={250}
                        className="rounded-lg mb-6"
                      />
                      <h3 className="text-2xl font-semibold mb-4">Élagage</h3>
                      <p className="text-white">
                        Nos élagueurs diagnostiquent l’état sanitaire de vos
                        arbres. En fonction de notre analyse, nous pratiquons le
                        type de taille appropriée : taille raisonnée, taille
                        d’adaptation, taille d’entretien et taille de formation.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white w-[80vw] h-[80vh] max-w-none overflow-y-scroll">
        <AlertDialogCancel className="flex justify-start ml-auto w-12">
          <p className="text-2xl">× </p>
        </AlertDialogCancel>
        <Galery />
      </AlertDialogContent>
    </AlertDialog>
  );
}
