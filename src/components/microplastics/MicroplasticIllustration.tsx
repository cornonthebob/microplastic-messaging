
import React from 'react';
import { Droplets, FlaskConical, Fish, Trash, Shell, AlertTriangle } from 'lucide-react';

const MicroplasticIllustration = () => {
  return (
    <div className="relative h-60 md:h-80 mb-8 opacity-0 animate-fade-in animation-delay-200">
      {/* Main water container */}
      <div className="absolute inset-0 mx-auto w-3/4 h-full rounded-3xl bg-gradient-to-b from-blue-200/40 to-blue-400/30 border border-blue-200 backdrop-blur-sm glass-effect overflow-hidden">
        {/* Swimming fish */}
        <div className="absolute top-1/3 left-[10%] transform -translate-y-1/2 swimming-fish">
          <Fish className="w-8 h-8 text-blue-600/70" />
        </div>
        <div className="absolute bottom-1/4 right-[15%] transform rotate-12 swimming-fish animation-delay-500 swimming-reverse">
          <Fish className="w-6 h-6 text-blue-500/70" />
        </div>
        <div className="absolute top-2/3 right-[30%] transform -rotate-12 swimming-fish animation-delay-300">
          <Fish className="w-5 h-5 text-teal-600/70" />
        </div>
        
        {/* Floating microplastic particles */}
        <div className="absolute w-6 h-6 rounded-sm bg-white/70 top-1/4 left-1/4 transform -rotate-12 floating-plastic"></div>
        <div className="absolute w-4 h-4 rounded-full bg-teal-200/70 bottom-1/3 right-1/4 transform rotate-45 floating-plastic animation-delay-300"></div>
        <div className="absolute w-8 h-2 rounded-sm bg-blue-100/70 top-1/2 right-1/3 transform rotate-12 floating-plastic animation-delay-500"></div>
        <div className="absolute w-5 h-5 rounded-sm bg-white/70 bottom-1/4 left-1/3 transform -rotate-6 floating-plastic animation-delay-700"></div>
        <div className="absolute w-3 h-8 rounded-sm bg-teal-100/70 top-1/3 right-1/5 transform rotate-45 floating-plastic"></div>
        <div className="absolute w-7 h-3 rounded-full bg-blue-200/70 bottom-1/5 left-1/5 transform -rotate-12 floating-plastic animation-delay-200"></div>
        
        {/* Plastic waste items */}
        <div className="absolute bottom-8 left-[20%] transform rotate-12 floating-plastic animation-delay-400">
          <Trash className="w-7 h-7 text-red-400/80" />
        </div>
        <div className="absolute right-[25%] bottom-12 transform -rotate-6 floating-plastic animation-delay-600">
          <AlertTriangle className="w-6 h-6 text-amber-500/80" />
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 rotate-3 floating-plastic animation-delay-200">
          <Shell className="w-10 h-10 text-pink-200/80" />
        </div>
        
        {/* Additional microplastic particles for enhanced visual */}
        <div className="absolute w-5 h-5 rounded-sm bg-white/60 top-1/6 right-1/3 transform rotate-12 floating-plastic animation-delay-400"></div>
        <div className="absolute w-4 h-4 rounded-full bg-teal-100/60 bottom-1/6 left-1/4 transform -rotate-6 floating-plastic animation-delay-600"></div>
        <div className="absolute w-6 h-2 rounded-md bg-blue-200/60 top-2/5 left-1/2 transform rotate-45 floating-plastic animation-delay-300"></div>
        
        {/* Realistic plastic bottle outline floating */}
        <div className="absolute bottom-14 right-[10%] w-8 h-16 border-2 border-white/50 rounded-lg transform rotate-[30deg] floating-plastic animation-delay-300">
          <div className="w-4 h-3 border-2 border-white/50 rounded-t-lg mx-auto -mt-2"></div>
        </div>
        
        {/* Wave effect at bottom - improved shape */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-12">
            <path fill="rgba(255,255,255,0.8)" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,170.7C672,149,768,139,864,154.7C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Decorative icons with enhanced positioning and styling */}
      <div className="absolute -bottom-5 left-1/4 bg-white p-4 rounded-2xl shadow-md transform -rotate-6 opacity-0 animate-fade-in animation-delay-400">
        <FlaskConical className="w-8 h-8 text-blue-500" />
      </div>
      <div className="absolute -top-5 right-1/4 bg-white p-4 rounded-2xl shadow-md transform rotate-6 opacity-0 animate-fade-in animation-delay-500">
        <Droplets className="w-8 h-8 text-teal-500" />
      </div>
      <div className="absolute bottom-10 right-10 bg-white p-4 rounded-2xl shadow-md transform -rotate-3 opacity-0 animate-fade-in animation-delay-600">
        <Fish className="w-8 h-8 text-blue-600" />
      </div>
      <div className="absolute top-10 left-10 bg-white p-4 rounded-2xl shadow-md transform rotate-12 opacity-0 animate-fade-in animation-delay-700">
        <Trash className="w-8 h-8 text-red-400" />
      </div>
      
      {/* Additional microplastic visual elements in background */}
      <div className="absolute -z-10 w-full h-full">
        <div className="absolute w-12 h-3 rounded-lg bg-blue-100/30 -left-10 top-1/3 transform rotate-12"></div>
        <div className="absolute w-10 h-10 rounded-full bg-teal-50/30 -right-5 bottom-1/4 transform -rotate-6"></div>
        <div className="absolute w-16 h-4 rounded-lg bg-blue-50/40 -left-5 bottom-10 transform rotate-6"></div>
      </div>
    </div>
  );
};

export default MicroplasticIllustration;
