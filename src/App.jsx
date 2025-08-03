import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import About from "./components/About"; // adjust path if needed
import Services from "./components/Service";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <About />
      <Features/>
      <Services/>
      <Testimonial />
      <FAQ />
      <Contact />
    </div>
  );
};

export default App;
