import React from "react";
import Image from "next/image";
import { NavigationMenuDemo } from "./NavMenu";

export default function Header() {
  return (
    <>
      <aside className="xl:mx-auto  justify-between   container flex items-center xl:justify-between mt-6 text-black  ">
        <Image
          width={1000}
          height={1000}
          src="/logo.webp"
          alt="Élagage Image"
          className="xl:w-44 xl:h-full w-32 object-cover"
        />
        <NavigationMenuDemo />
      </aside>
    </>
  );
}
