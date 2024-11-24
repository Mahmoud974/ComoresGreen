"use client";

import { textSection } from "@/app/db/textSection";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

type MiniNavProps = {
  slug: string;
};

export default function MiniNav({ slug }: MiniNavProps) {
  const currentSection = textSection.find((section) => section.slug === slug);
  console.log(currentSection);

  if (!currentSection) {
    return;
  }

  return (
    <section className="mx-auto container text-black">
      <div className="flex lg:flex-row flex-col  mt-3  container text-xl xl:flex-row items-center justify-between  xl:py-10">
        <div className="   p-5 xl:mt-0 -mt-24">
          <Image
            width={800}
            height={800}
            src={currentSection.img}
            alt="Élagage Image"
            className="xl:w-[37rem] w-80 rounded-xl xl:mt-0 mt-6 "
          />
        </div>

        {/* Text Section */}
        <div className="xl:w-1/2 w-full p-5 xl:text-center    xl:space-y-4 -mt-2">
          <p className="text-lime-500 font-bold text-xs text-center   xl:text-xl">
            GIGALAND MARKET
          </p>
          <h1 className="font-bold xl:text-5xl text-2xl xl:mx-0 mx-1 text-center ">
            Clôture & terrasse
          </h1>
          <p className="text-base xl:text-xl xl:mt-3 xl:w-auto xl:text-left text-center mx-auto  w-96">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard
          </p>
          <ul className="grid grid-cols-2 gap-4 text-xs xl:text-xl">
            <li className="flex items-center xl:justify-center justify-end">
              <CircleCheck className="mr-2 text-green-700" /> Le Lorem Ipsum est
            </li>
            <li className="flex items-center xl:justify-center ">
              <CircleCheck className="mr-2 text-green-700" /> Le Lorem Ipsum est
            </li>
            <li className="flex items-center xl:justify-center justify-end">
              <CircleCheck className="mr-2 text-green-700" /> Le Lorem Ipsum est
            </li>
            <li className="flex items-center xl:justify-center">
              <CircleCheck className="mr-2 text-green-700" /> Le Lorem Ipsum est
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
