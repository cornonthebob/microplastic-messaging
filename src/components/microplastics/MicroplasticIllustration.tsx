
import React from 'react';
import { Droplets, FlaskConical, Fish, Trash } from 'lucide-react';

const MicroplasticIllustration = () => {
  return (
    <div className="relative h-60 md:h-80 mb-8 opacity-0 animate-fade-in animation-delay-200">
      {/* Main water container */}
      <div className="absolute inset-0 mx-auto w-3/4 h-full rounded-3xl bg-gradient-to-b from-blue-200/40 to-blue-400/30 border border-blue-200 backdrop-blur-sm glass-effect overflow-hidden">
        {/* Floating microplastic particles */}
        <div className="absolute w-6 h-6 rounded-sm bg-white/70 top-1/4 left-1/4 transform -rotate-12 floating-plastic"></div>
        <div className="absolute w-4 h-4 rounded-full bg-teal-200/70 bottom-1/3 right-1/4 transform rotate-45 floating-plastic animation-delay-300"></div>
        <div className="absolute w-8 h-2 rounded-sm bg-blue-100/70 top-1/2 right-1/3 transform rotate-12 floating-plastic animation-delay-500"></div>
        <div className="absolute w-5 h-5 rounded-sm bg-white/70 bottom-1/4 left-1/3 transform -rotate-6 floating-plastic animation-delay-700"></div>
        <div className="absolute w-3 h-8 rounded-sm bg-teal-100/70 top-1/3 right-1/5 transform rotate-45 floating-plastic"></div>
        <div className="absolute w-7 h-3 rounded-full bg-blue-200/70 bottom-1/5 left-1/5 transform -rotate-12 floating-plastic animation-delay-200"></div>
        
        {/* Wave effect at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-20 animate-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                  fill="rgba(255,255,255,0.8)"></path>
          </svg>
        </div>
      </div>
      
      {/* Decorative icons */}
      <div className="absolute -bottom-5 left-1/4 bg-white p-4 rounded-2xl shadow-soft transform -rotate-6 opacity-0 animate-fade-in animation-delay-400">
        <FlaskConical className="w-8 h-8 text-blue-500" />
      </div>
      <div className="absolute -top-5 right-1/4 bg-white p-4 rounded-2xl shadow-soft transform rotate-6 opacity-0 animate-fade-in animation-delay-500">
        <Droplets className="w-8 h-8 text-teal-500" />
      </div>
      <div className="absolute bottom-10 right-10 bg-white p-4 rounded-2xl shadow-soft transform -rotate-3 opacity-0 animate-fade-in animation-delay-600">
        <Fish className="w-8 h-8 text-blue-600" />
      </div>
      <div className="absolute top-10 left-10 bg-white p-4 rounded-2xl shadow-soft transform rotate-12 opacity-0 animate-fade-in animation-delay-700">
        <Trash className="w-8 h-8 text-red-400" />
      </div>
    </div>
  );
};

export default MicroplasticIllustration;
