import React from "react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Galery from "../Galery";
import CardRealisation from "../CardRealisation";
export default function Realisation() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <section>
          <section
            className=" py-16 text-white -mt-12 xl:w-screen xl:px-0 px-12"
            id="realisations"
          >
            <div className="container mx-auto text-center">
              <div className="flex justify-center text-center flex-col mx-auto">
                <p className="text-lime-500 font-bold text-xs  xl:text-xl">
                  GIGALAND MARKET
                </p>
                <h1 className="font-bold xl:text-5xl text-black text-2xl xl:mx-0 mx-1">
                  Our Mission Is To Make
                  <br /> Your Business.
                </h1>
              </div>
              <CardRealisation />

              {/* Card realisaition */}
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
