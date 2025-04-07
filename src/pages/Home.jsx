import React from "react";
import FAQ from "../components/FAQ";
import Services from "../components/Services";
import ServiceBenefits from "../components/ServiceBenefits";
import EscrowAnimation from "../components/EscrowAnimation"
import Testimonial from "../components/Testimonial";
import Hero from "../components/Hero";



const Home = () => {
  return (
    <div>
      <Hero />
      <EscrowAnimation/>
      <Services />
      <ServiceBenefits />
      <FAQ />
      <Testimonial/> 
    </div>
  );
};

export default Home;
