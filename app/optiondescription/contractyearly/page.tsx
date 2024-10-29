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
      <div className="flex mt-3  container text-xl md:flex-row flex-col items-center justify-between  py-10">
        {/* Image Section */}
        <div className="  p-5">
          <Image
            width={800}
            height={800}
            src={currentSection.img}
            alt="Élagage Image"
            className="w-[37rem] rounded-lg "
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full p-5 ">
          <p className="text-lime-500 font-bold text-lg">GIGALAND MARKET</p>
          <h1 className="font-bold text-5xl">Clôture & terrasse</h1>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard
          </p>
          <ul className="grid grid-cols-2 gap-4 mt-3">
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
          {/* <ul className="md:list-disc  md:text-left text-center md:pl-6 mb-6 md:space-y-4">
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
