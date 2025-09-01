import Image from "next/image";
import GreenBar from "./composants/GreenBar";
import Navbar from "./composants/Navbar";
import Home from "./composants/Home";
import Footer from "./composants/Footer";
import Informations from "./composants/Informations";
import AccordionFaq from "./composants/AccordionFaq";
import Contact from "./composants/Contact";
import Realisation from "./composants/Realisations";
import BannerCenter from "./composants/BannerCenter";
import About from "./composants/About";
 
import Service from "./composants/Service";
import Prestations from "./composants/Prestations";
import Services from "./composants/Services";
import DevisClient from "./composants/DevisClient";

export default function page() {
  return (
   <>
    <GreenBar/>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Service/>
   <Prestations/>
   
   <Informations/>
  <DevisClient/>
    
   <BannerCenter/>
   <Realisation/>
   <AccordionFaq/>
   <Contact/>
   <Footer/>
 
   </>
  )
}
