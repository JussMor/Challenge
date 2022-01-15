import React from "react";

import Footer from "../../../components/layout/Footer/Footer";
import Gallery from "./Gallery/Gallery";
import Testimonial  from "./Testimonials/Testimonial"
import Hero from "./Hero/Hero";
import Programs from "./Programs/Programs"

export default function Home() {
  return (
    <>
      
      {/* <Gallery /> */}
      {/* <Testimonial/> */}
      <Hero/>
      <Programs/>
      <Footer />
    </>
  );
}
