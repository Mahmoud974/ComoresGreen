import React from "react";
import Image from "next/image";
import { NavigationMenuDemo } from "./NavMenu";

export default function Header() {
  return (
    <>
      <aside className="mx-auto container flex items-center justify-between mt-6 text-black  ">
        <Image
          width={1000}
          height={1000}
          src="/logo.webp"
          alt="Élagage Image"
          className="w-44 h-full object-cover"
        />
        <NavigationMenuDemo />
      </aside>
    </>
  );
}
