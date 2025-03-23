
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen-small flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-gray-100/30 rounded-full blur-3xl opacity-70 animate-pulse-slow animation-delay-500"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-block animate-fade-in-slow">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-6">
              Environmental Crisis
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 opacity-0 animate-fade-in">
            <span className="text-blue-600">Microplastics</span>: The Invisible Threat
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in animation-delay-200">
            Tiny plastic particles are infiltrating our environment and bodies. Discover what they are, how they affect us, and what we can do about them.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animation-delay-400">
            <button 
              onClick={scrollToAbout}
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-0 animate-fade-in animation-delay-800"
        onClick={scrollToAbout}
      >
        <ArrowDown className="h-6 w-6 text-gray-500" />
      </div>

      {/* Floating particles for visual effect */}
      <div className={cn(
        "absolute w-4 h-4 rounded-full bg-blue-200 top-1/4 left-1/4 opacity-0 animate-fade-in-slow animation-delay-500",
        "animate-float"
      )}></div>
      <div className={cn(
        "absolute w-3 h-3 rounded-full bg-blue-300 bottom-1/3 right-1/4 opacity-0 animate-fade-in-slow animation-delay-700",
        "animate-float animation-delay-300"
      )}></div>
      <div className={cn(
        "absolute w-5 h-5 rounded-full bg-gray-200 top-1/3 right-1/3 opacity-0 animate-fade-in-slow animation-delay-600",
        "animate-float animation-delay-600"
      )}></div>
    </section>
  );
};

export default Hero;
