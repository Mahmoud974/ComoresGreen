"use client";
import Image from "next/image";
import MiniNav from "@/app/optiondescription/contractyearly/page";
import NavPrestation from "@/components/Header/NavPrestation";
import Header from "@/components/Header/Header";
import Block from "@/components/Devis";
import Footer from "@/components/Footer.tsx/Footer";
import Realisation from "@/components/Realisation/Realisation";
import About from "@/components/About";
import ContactBlock from "@/components/ContactBlock";
import CountUp from "react-countup";
import Home from "@/components/Home";
import useCounter from "./hook/useCounter";
import Devis from "@/components/Devis";

export default function Page() {
  const { count, increment, decrement } = useCounter(10);
  return (
    <>
      <section className="mx-auto max-w-7xl container  text-black md:mb-8">
        <Header />
        <Home />
        <NavPrestation />
        <MiniNav />
      </section>
      <Devis />

      <Realisation />
      <About />
      <ContactBlock />
      <Footer />
    </>
  );
}
