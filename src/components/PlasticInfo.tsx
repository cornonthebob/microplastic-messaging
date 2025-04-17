
import React from 'react';
import AboutMicroplastics from './microplastics/AboutMicroplastics';
import PlasticTypesDetail from './microplastics/PlasticTypesDetail';
import MicroplasticIllustration from './microplastics/MicroplasticIllustration';
import { Waves, FlaskConical } from 'lucide-react';

const PlasticInfo = () => {
  return (
    <>
      <section className="bg-blue-50/50 relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-bubbles opacity-30"></div>
        <div className="section-container relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              Microplastic Crisis
            </h1>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Tiny plastic bits are everywhere - in our oceans, food, and even our bodies. Learn what this means for our planet.
            </p>
          </div>
          
          <MicroplasticIllustration />
          
          {/* Floating plastic particles for visual effect */}
          <div className="relative h-24 mt-12 mb-4">
            <div className="absolute w-5 h-5 rounded-sm bg-blue-200/60 top-1/4 left-1/4 transform rotate-12 floating-plastic"></div>
            <div className="absolute w-3 h-3 rounded-full bg-teal-300/60 top-2/3 right-1/3 transform -rotate-12 floating-plastic animation-delay-200"></div>
            <div className="absolute w-6 h-2 rounded-md bg-blue-100/70 top-1/2 right-2/3 transform rotate-45 floating-plastic animation-delay-400"></div>
            <div className="absolute w-4 h-4 rounded-sm bg-white/50 bottom-1/4 left-1/2 transform -rotate-12 floating-plastic animation-delay-300"></div>
            <div className="absolute w-7 h-3 rounded-lg bg-teal-200/60 top-1/3 right-1/4 transform rotate-12 floating-plastic animation-delay-500"></div>
          </div>
        </div>
      </section>
      
      <div className="relative overflow-hidden">
        <AboutMicroplastics />
        
        {/* Wave divider with improved styling and shape */}
        <div className="relative h-24 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path fill="rgba(236, 254, 255, 0.8)" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <PlasticTypesDetail />
        
        {/* Bottom decorative elements */}
        <div className="flex justify-center gap-12 py-10 bg-blue-50/50">
          <div className="p-4 bg-white rounded-full shadow-lg">
            <Waves className="w-8 h-8 text-blue-500" />
          </div>
          <div className="p-4 bg-white rounded-full shadow-lg">
            <FlaskConical className="w-8 h-8 text-teal-500" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlasticInfo;
