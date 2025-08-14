import { useState, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
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
    <div className="min-h-screen bg-background">
      <Navigation onContactClick={handleContactClick} />
      <div className="pt-[108px]">
        <Hero onContactClick={handleContactClick} />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
