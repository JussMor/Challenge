import React from "react";

import Footer from "../../../components/layout/Footer/Footer";
import Gallery from "./Gallery/Gallery";
import Testimonial  from "./Testimonials/Testimonial"
import Hero from "./Hero/Hero";
import Programs from "./Programs/Programs"
import NavBar from "../../../components/layout/Navbar/Navbar";
import Partners from "./Partners/Partners";
import Contact from "./Contact/Contact";

export default function Home() {
  return (
    <>
    
      <NavBar/> {/*Listo  */}

      <Hero/> {/* Listo*/}

      <Programs/> {/*Listo*/}

      <Gallery /> {/*Listo*/}

      <Testimonial/> {/* Listo*/}

      <Partners/> {/* Listo*/}

      <Contact/> {/*Listo */}
      
      <Footer /> {/*Listo */}
    </>
  );
}
