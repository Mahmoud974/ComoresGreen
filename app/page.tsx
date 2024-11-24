"use client";

import MiniNav from "@/app/optiondescription/contractyearly/page";
import NavPrestation from "@/components/Header/NavPrestation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer.tsx/Footer";
import Realisation from "@/components/Realisation/Realisation";
import About from "@/components/About";
import ContactBlock from "@/components/ContactBlock";
import Home from "@/components/Home";
import Devis from "@/components/Devis";

export default function Page() {
  return (
    <>
      <section className="xl:mx-auto  max-w-7xl container  text-black xl:mb-8">
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
