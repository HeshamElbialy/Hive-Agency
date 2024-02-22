import React from "react";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Elementor from "../../components/elementor/Elementor";
import Works from "../../components/works/Works";
import Contact from "../../components/contact/Contact";
import ContactInfo from "../../components/contactInfo/ContactInfo";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Elementor />
      <Works />
      <Contact />
      <ContactInfo />
    </>
  );
};

export default Home;
