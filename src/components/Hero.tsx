import React from 'react';
import { ArrowDown, Droplets, Fish, Waves } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen-small flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-gray-100/30 rounded-full blur-3xl opacity-70 animate-pulse-slow animation-delay-500"></div>
      </div>

      {/* Microplastic floating particles - enhanced with more particles */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute w-6 h-1 rounded-md bg-blue-200/50 top-1/5 left-1/4 transform rotate-45 floating-plastic"></div>
        <div className="absolute w-3 h-3 rounded-full bg-teal-100/40 top-1/3 right-1/4 transform -rotate-12 floating-plastic animation-delay-300"></div>
        <div className="absolute w-4 h-4 rounded-sm bg-white/30 bottom-1/2 left-1/3 transform rotate-12 floating-plastic animation-delay-600"></div>
        <div className="absolute w-5 h-2 rounded-md bg-blue-300/40 top-2/3 right-1/3 transform -rotate-6 floating-plastic animation-delay-200"></div>
        <div className="absolute w-2 h-5 rounded-sm bg-teal-200/30 bottom-1/4 right-1/4 transform rotate-45 floating-plastic animation-delay-400"></div>
        <div className="absolute w-4 h-4 rounded-md bg-blue-100/40 top-1/4 right-1/5 transform rotate-12 floating-plastic animation-delay-100"></div>
        <div className="absolute w-3 h-6 rounded-sm bg-teal-200/30 bottom-1/3 left-1/5 transform -rotate-6 floating-plastic animation-delay-500"></div>
        <div className="absolute w-5 h-5 rounded-full bg-white/20 top-1/2 right-1/2 transform rotate-45 floating-plastic animation-delay-700"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-block animate-fade-in-slow">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-blue-50 text-blue-700 mb-6">
              Environmental Crisis
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 opacity-0 animate-fade-in">
            <span className="text-blue-600">Microplastics</span>: The Hidden Threat
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in animation-delay-200">
            Tiny plastic particles are infiltrating our environment and bodies. Discover their impact and solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animation-delay-400">
            <Link
              to="/about" 
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Learn More
            </Link>
            <Link
              to="/interactive"
              className="px-6 py-3 rounded-full bg-teal-50 text-teal-800 border border-teal-200 font-medium transition-all hover:bg-teal-100"
            >
              Interactive Experience
            </Link>
          </div>
        </div>
      </div>

      {/* Improved ocean visualization at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden opacity-0 animate-fade-in animation-delay-500">
        <div className="relative h-full">
          {/* Ocean base gradient */}
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-blue-300/50 via-blue-200/30 to-transparent"></div>
          
          {/* Improved wave effect */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
              <path fill="rgba(240, 249, 255, 0.7)" d="M0,160L48,149.3C96,139,192,117,288,117.3C384,117,480,139,576,165.3C672,192,768,224,864,224C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full absolute bottom-0" preserveAspectRatio="none">
              <path fill="white" d="M0,192L60,197.3C120,203,240,213,360,229.3C480,245,600,267,720,261.3C840,256,960,224,1080,213.3C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
          </div>
          
          {/* Ocean decorative elements */}
          <div className="absolute inset-x-0 bottom-10 h-20 overflow-hidden">
            <div className="absolute w-8 h-2 rounded-md bg-blue-200/40 left-1/5 bottom-1/2 transform rotate-12 floating-plastic"></div>
            <div className="absolute w-4 h-4 rounded-full bg-teal-200/30 right-1/4 bottom-1/3 transform -rotate-6 floating-plastic animation-delay-500"></div>
            <div className="absolute w-6 h-6 rounded-sm bg-white/20 left-1/2 bottom-1/4 transform rotate-45 floating-plastic animation-delay-700"></div>
            <div className="absolute w-5 h-3 rounded-md bg-blue-100/30 right-1/3 bottom-1/2 transform -rotate-12 floating-plastic animation-delay-400"></div>
            
            <div className="absolute right-1/4 bottom-4">
              <svg width="30" height="50" viewBox="0 0 30 50" stroke="rgba(147, 197, 253, 0.5)" fill="none" className="transform rotate-12 swimming-fish">
                <path d="M10 10 V5 H20 V10 C20 10 25 15 25 20 C25 25 22.5 35 20 45 C17.5 55 15 55 15 55 C15 55 12.5 55 10 45 C7.5 35 5 25 5 20 C5 15 10 10 10 10 Z" strokeWidth="1" />
              </svg>
            </div>
            
            <div className="absolute left-1/4 bottom-8">
              <svg width="30" height="20" viewBox="0 0 30 20" stroke="rgba(79, 195, 247, 0.7)" fill="rgba(79, 195, 247, 0.2)" className="swimming-fish">
                <path d="M5 10 C5 10 10 0 20 10 C10 20 5 10 5 10 Z" strokeWidth="1" />
                <path d="M22 10 L28 15" strokeWidth="1" />
                <path d="M22 10 L28 5" strokeWidth="1" />
                <circle cx="7" cy="8" r="1" fill="rgba(79, 195, 247, 0.7)" />
              </svg>
            </div>
            
            <div className="absolute right-1/3 bottom-12">
              <svg width="20" height="12" viewBox="0 0 20 12" stroke="rgba(79, 195, 247, 0.6)" fill="rgba(79, 195, 247, 0.15)" className="swimming-reverse">
                <path d="M15 6 C15 6 10 0 5 6 C10 12 15 6 15 6 Z" strokeWidth="1" />
                <path d="M3 6 L0 8" strokeWidth="1" />
                <path d="M3 6 L0 4" strokeWidth="1" />
                <circle cx="13" cy="5" r="0.5" fill="rgba(79, 195, 247, 0.6)" />
              </svg>
            </div>
          </div>
          
          <div className="absolute -bottom-2 left-1/4 bg-white p-3 rounded-full shadow-lg transform -rotate-6">
            <Fish className="w-5 h-5 text-blue-600" />
          </div>
          <div className="absolute -bottom-2 right-1/4 bg-white p-3 rounded-full shadow-lg transform rotate-6">
            <Droplets className="w-5 h-5 text-teal-500" />
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
            <Waves className="w-5 h-5 text-blue-400" />
          </div>
        </div>
      </div>

      {/* Scroll indicator with Link to About page */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-0 animate-fade-in animation-delay-800"
      >
        <Link to="/about">
          <ArrowDown className="h-6 w-6 text-gray-500" />
        </Link>
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
