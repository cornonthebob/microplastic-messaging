
import React, { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PlasticInfo from "@/components/PlasticInfo";
import InteractiveGraphic from "@/components/InteractiveGraphic";
import Solutions from "@/components/Solutions";
import Citations from "@/components/Citations";
import Footer from "@/components/Footer";
import DetailedVisualization from "@/components/DetailedVisualization";
import OceanHealth from "@/components/OceanHealth";

const Index = () => {
  useEffect(() => {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Add intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            // Use element.classList instead of element.style for TypeScript compatibility
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    document.querySelectorAll('.opacity-0').forEach((elem) => {
      observer.observe(elem);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="overflow-x-hidden microplastic-cursor">
      <Navbar />
      <Hero />
      <PlasticInfo />
      <DetailedVisualization />
      <InteractiveGraphic />
      <OceanHealth />
      <Solutions />
      <Citations />
      <Footer />
    </div>
  );
};

export default Index;
