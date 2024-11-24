"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Fence } from "lucide-react";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { RiTreeFill } from "react-icons/ri";
import { GiGardeningShears, GiMonsteraLeaf } from "react-icons/gi";
import { TbGardenCart } from "react-icons/tb";
import MiniNav from "@/app/optiondescription/contractyearly/page";

type NavImg = {
  icon: React.JSX.Element;
  text: string;
  url?: string;
};

const navImg: NavImg[] = [
  {
    icon: <RiFilePaper2Line className="text-4xl mx-auto" />,
    text: `Contrat \n annuel`,
    url: "contractyearly",
  },
  {
    icon: <FaSearch className="text-4xl mx-auto" />,
    text: "Diagnostic phytosanitaire",
    url: "diagnostic",
  },
  {
    icon: <RiTreeFill className="text-4xl mx-auto" />,
    text: "Élagage & Tonte",
    url: "elegage",
  },
  {
    icon: <Fence className="text-4xl mx-auto" />,
    text: "Clôture & Terrasse",
    url: "cloture",
  },
  {
    icon: <GiGardeningShears className="text-4xl mx-auto" />,
    text: "Outil de jardinage",
    url: "tools",
  },
  {
    icon: <GiMonsteraLeaf className="text-4xl mx-auto -rotate-45" />,
    text: "Création de jardin",
    url: "creations",
  },
  {
    icon: <TbGardenCart className="text-4xl mx-auto" />,
    text: "Terrassement",
    url: "terrassement",
  },
];

export default function NavPrestation() {
  const [value, setValue] = React.useState<string>("");

  const handleSelect = (selectedValue: string) => {
    setValue(selectedValue === value ? "" : selectedValue);
  };

  return (
    <section className="mx-auto container relative -mt-12">
      <div className="block xl:hidden text-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={true}
              className="w-[200px] justify-between"
            >
              {value
                ? navImg.find((item) => item.url === value)?.text
                : "Select service..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search service..." />
              <CommandList>
                <CommandEmpty>No service found.</CommandEmpty>
                <CommandGroup>
                  {navImg.map((item) => (
                    <CommandItem
                      key={item.url}
                      value={item.url}
                      onSelect={(currentValue) => {
                        handleSelect(currentValue);
                        // Optionally handle navigation or display change here
                      }}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${
                          value === item.url ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      {item.text}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Affiche la section en fonction du slug actif */}
      {value && <MiniNav slug={value} />}
    </section>
  );
}
