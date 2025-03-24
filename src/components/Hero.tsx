
import React from 'react';
import { ArrowDown, Droplets, Fish, Waves } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToAbout = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
        {/* Additional microplastic particles */}
        <div className="absolute w-4 h-4 rounded-md bg-blue-100/40 top-1/4 right-1/5 transform rotate-12 floating-plastic animation-delay-100"></div>
        <div className="absolute w-3 h-6 rounded-sm bg-teal-200/30 bottom-1/3 left-1/5 transform -rotate-6 floating-plastic animation-delay-500"></div>
        <div className="absolute w-5 h-5 rounded-full bg-white/20 top-1/2 right-1/2 transform rotate-45 floating-plastic animation-delay-700"></div>
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

      {/* Microplastic illustration at bottom - enhanced with more visual elements */}
      <div className="absolute bottom-24 left-0 right-0 h-40 opacity-0 animate-fade-in animation-delay-600">
        <div className="relative max-w-3xl mx-auto h-full">
          {/* Water-like base with microplastics */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-100/50 to-transparent rounded-2xl overflow-hidden">
            {/* Floating plastic particles - enhanced with more particles */}
            <div className="absolute w-5 h-5 rounded-sm bg-white/30 top-1/3 left-1/4 transform -rotate-12 floating-plastic"></div>
            <div className="absolute w-4 h-4 rounded-full bg-teal-200/40 bottom-1/4 right-1/3 transform rotate-45 floating-plastic animation-delay-300"></div>
            <div className="absolute w-6 h-2 rounded-md bg-blue-200/30 top-1/2 right-1/4 transform rotate-12 floating-plastic animation-delay-500"></div>
            <div className="absolute w-3 h-3 rounded-sm bg-white/20 bottom-1/3 left-2/3 transform -rotate-6 floating-plastic animation-delay-200"></div>
            <div className="absolute w-4 h-4 rounded-full bg-teal-100/30 top-1/4 right-1/5 transform rotate-12 floating-plastic animation-delay-400"></div>
          </div>
          
          {/* Wave overlay with improved positioning */}
          <div className="absolute bottom-0 left-0 w-full h-12 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <path fill="rgba(224, 242, 254, 0.5)" d="M0,128L48,117.3C96,107,192,85,288,85.3C384,85,480,107,576,133.3C672,160,768,192,864,186.7C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          
          {/* Decorative icons */}
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

      {/* New microplastic visual element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <div className="relative h-full max-w-screen-xl mx-auto">
          <div className="absolute inset-x-0 bottom-0 h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-50/80 to-transparent"></div>
            
            {/* Additional floating microplastic particles */}
            <div className="absolute w-8 h-2 rounded-md bg-blue-200/40 left-1/5 bottom-1/3 transform rotate-12"></div>
            <div className="absolute w-4 h-4 rounded-full bg-teal-200/30 right-1/4 bottom-1/2 transform -rotate-6"></div>
            <div className="absolute w-6 h-6 rounded-sm bg-white/20 left-1/2 bottom-1/4 transform rotate-45"></div>
            <div className="absolute w-5 h-3 rounded-md bg-blue-100/30 right-1/3 bottom-1/6 transform -rotate-12"></div>
            
            {/* Improved wave effect at bottom */}
            <div className="absolute bottom-0 left-0 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
                <path fill="white" d="M0,192L40,186.7C80,181,160,171,240,186.7C320,203,400,245,480,261.3C560,277,640,267,720,234.7C800,203,880,149,960,144C1040,139,1120,181,1200,192C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
              </svg>
            </div>
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
