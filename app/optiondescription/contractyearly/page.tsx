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
      <div className="flex mt-3  container text-xl xl:flex-row flex-col items-center justify-between  xl:py-10">
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
        <div className="xl:w-1/2 w-full p-5 text-center xl:text-left xl:space-y-4 -mt-2">
          <p className="text-lime-500 font-bold text-xs  xl:text-xl">
            GIGALAND MARKET
          </p>
          <h1 className="font-bold xl:text-5xl text-2xl xl:mx-0 mx-1">
            Clôture & terrasse
          </h1>
          <p className="text-base xl:text-xl xl:mt-3  ">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard
          </p>
          <ul className="grid grid-cols-2 gap-4 mt-3 text-xs xl:text-xl">
            <li className="flex items-center">
              <CircleCheck className="mr-2 text-green-700" /> Le Lorem Ipsum est
            </li>
            <li className="flex items-center">
              <CircleCheck className="mr-2 text-green-700" /> Le Lorem Ipsum est
            </li>
            <li className="flex items-center">
              <CircleCheck className="mr-2 text-green-700" /> Le Lorem Ipsum est
            </li>
            <li className="flex items-center">
              <CircleCheck className="mr-2 text-green-700" /> Le Lorem Ipsum est
            </li>
          </ul>
          {/* <ul className="xl:list-disc  xl:text-left text-center xl:pl-6 mb-6 xl:space-y-4">
            {currentSection.items.map((item, index) => (
              <li key={index}>
                <strong>{item.strongText}</strong>{" "}
                <p className="">{item.description}</p>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </section>
  );
}
