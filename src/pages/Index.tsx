import { useState, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Newsletter } from "@/components/Newsletter";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  const contactRef = useRef<HTMLElement>(null);

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation onContactClick={handleContactClick} />
      <div className="pt-[96px] sm:pt-[108px] overflow-x-hidden">
        <Hero onContactClick={handleContactClick} />
        <Services />
        <About />
        <Newsletter />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
