
import React from 'react';
import { Droplets, Microscope, FlaskConical } from 'lucide-react';

const AboutMicroplastics = () => {
  return (
    <section className="bg-white relative overflow-hidden" id="about">
      <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
      
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4">
            Understanding The Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">About Microplastics</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6 opacity-0 animate-slide-up animation-delay-200">
            <h3 className="text-2xl font-semibold">What Are Microplastics?</h3>
            <p className="text-gray-600">
              Microplastics are tiny plastic bits smaller than 5mm. They come from bigger plastics breaking down or from products like face scrubs. They're small enough to enter our bodies through food, water, and air.
            </p>
            
            <div className="relative rounded-xl overflow-hidden shadow-soft plastic-accent h-56">
              <img 
                src="/lovable-uploads/b4433057-41db-4b84-b3bd-7c0a055258a9.png" 
                alt="Microplastics in water sample" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-sm font-medium">Microplastics in water sample</span>
              </div>
            </div>
            
            <p className="text-gray-600">
              As plastics break down, they soak up harmful chemicals. They've been found everywhere - oceans, mountains, drinking water, and even in the food we eat.
            </p>
          </div>

          <div className="glass-card p-6 opacity-0 animate-slide-up animation-delay-400 relative overflow-hidden before:absolute before:-inset-1 before:bg-blue-50/50 before:rounded-2xl">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Microscope className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold">How Do Microplastics Form?</h4>
              </div>
              
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">1</div>
                  <div>
                    <span className="font-medium">Physical Breakdown</span>: Bigger plastics break apart from sunlight, waves, and weather. Sun makes plastic brittle, and waves break it into smaller pieces.
                  </div>
                </li>
                
                <div className="relative h-40 rounded-lg overflow-hidden my-3 ml-11">
                  <img 
                    src="/lovable-uploads/6ccdb053-aa89-486a-94db-455bebae5d55.png" 
                    alt="Plastic degradation process" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                    <span className="text-xs text-white">Plastic breaking down in ocean</span>
                  </div>
                </div>
                
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">2</div>
                  <div>
                    <span className="font-medium">Chemical Breakdown</span>: Oxygen and water break down plastic over time, making it weak and crumbly. This happens faster in hot weather or acidic conditions.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">3</div>
                  <div>
                    <span className="font-medium">Made On Purpose</span>: Some tiny plastic beads are made for products like face scrubs and toothpaste. Many countries now ban these in wash-off products.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">4</div>
                  <div>
                    <span className="font-medium">Clothing Fibers</span>: Washing synthetic clothes releases tiny plastic fibers. One wash can release thousands of these microfibers into water systems.
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="absolute w-10 h-10 rounded-sm bg-blue-100/50 -bottom-5 -right-5 transform rotate-12"></div>
            <div className="absolute w-6 h-6 rounded-full bg-teal-100/50 -top-3 right-20 transform rotate-45"></div>
          </div>
        </div>

        <div className="mt-16 glass-card p-8 opacity-0 animate-slide-up animation-delay-600 relative overflow-hidden">
          <div className="relative flex items-center justify-center mb-6">
            <FlaskConical className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-semibold">Pathways Into Human Body</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="relative h-32 w-full mb-4 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/a106fa0a-dab3-4256-8736-fc2e3ad37af6.png" 
                  alt="Food contaminated with microplastics" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <span className="text-white text-xs p-2">Seafood with microplastics</span>
                </div>
              </div>
              <h4 className="font-semibold mb-2">Eating</h4>
              <p className="text-gray-600 text-sm">
                We eat microplastics in food (especially seafood), drinking water, and from food packaging. Shellfish and bottled water contain the most plastic particles.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
              <div className="relative h-32 w-full mb-4 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/b5288b58-824f-45df-9c1b-e1f342269780.png" 
                  alt="Airborne microplastics" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <span className="text-white text-xs p-2">Microplastic fibers in air</span>
                </div>
              </div>
              <h4 className="font-semibold mb-2">Breathing</h4>
              <p className="text-gray-600 text-sm">
                We breathe in microplastics floating in air. Indoor air has more plastic particles than outdoor air. House dust contains thousands of microplastic bits.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="relative h-32 w-full mb-4 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/39faa72b-69f2-44dd-882f-6bfa775d6fd3.png" 
                  alt="Dermal contact with microplastics" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <span className="text-white text-xs p-2">Clothing releasing microplastics</span>
                </div>
              </div>
              <h4 className="font-semibold mb-2">Skin Contact</h4>
              <p className="text-gray-600 text-sm">
                Microplastics touch our skin through cosmetics, cleaning products, and synthetic clothes. Most can't pass through skin, but the smallest ones might.
              </p>
            </div>
          </div>
          
          <div className="absolute w-8 h-2 rounded-sm bg-blue-100/40 top-4 right-8 transform rotate-12 floating-plastic"></div>
          <div className="absolute w-4 h-4 rounded-full bg-teal-100/40 bottom-8 left-8 transform -rotate-6 floating-plastic animation-delay-300"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMicroplastics;
