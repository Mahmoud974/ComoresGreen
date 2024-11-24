import * as React from "react";
import { Fence } from "lucide-react";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { RiTreeFill } from "react-icons/ri";
import { GiGardeningShears } from "react-icons/gi";
import { TbGardenCart } from "react-icons/tb";
import MiniNav from "@/app/optiondescription/contractyearly/page";
import { GiOakLeaf } from "react-icons/gi";
type NavImg = {
  icon: React.JSX.Element;
  text: string;
  url?: string;
};

export const navImg: NavImg[] = [
  {
    icon: <RiFilePaper2Line className="text-6xl mx-auto" />,
    text: "Contrat annuel",
    url: "contractyearly",
  },
  {
    icon: <FaSearch className="text-6xl mx-auto" />,
    text: "Diagnostic phytosanitaire",
    url: "diagnostic",
  },
  {
    icon: <RiTreeFill className="text-6xl mx-auto" />,
    text: "Élagage & Tonte",
    url: "elegage",
  },
  {
    icon: <Fence className="text-xl mx-auto" />,
    text: "Clôture & Terrasse",
    url: "cloture",
  },
  {
    icon: <GiGardeningShears className="text-6xl mx-auto" />,
    text: "Outil de jardinage",
    url: "tools",
  },
  {
    icon: <GiOakLeaf className="text-6xl mx-auto  rotate-90" />,
    text: "Création de jardin",
    url: "creations",
  },
  {
    icon: <TbGardenCart className="text-6xl mx-auto" />,
    text: "Terrassement",
    url: "terrassement",
  },
];

export default function NavPrestation() {
  const [value, setValue] = React.useState<string>("contractyearly");

  return (
    <section className="mx-auto container relative xl:mt-14">
      <ul className="   space-x-7 justify-center xl:mt-16 xl:flex hidden ">
        {navImg.map((item: NavImg, index: number) => (
          <li
            key={index}
            onClick={() => setValue(item.url || "")}
            className={`text-center w-48 h-40 rounded-xl shadow-xl cursor-pointer flex flex-col justify-center items-center p-2 transition-transform duration-300 ${
              value === item.url
                ? "bg-green-600 text-white"
                : "bg-white text-gray-500"
            } hover:bg-[#799429] hover:text-white`}
          >
            <div className="mb-2 ">{item.icon}</div>
            <p className="font-semibold text-xl">{item.text}</p>
          </li>
        ))}
      </ul>
      <MiniNav slug={value} />
    </section>
  );
}
