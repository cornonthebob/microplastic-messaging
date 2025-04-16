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

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 opacity-0 animate-slide-up animation-delay-200">
            <h3 className="text-2xl font-semibold">What Are Microplastics?</h3>
            <p className="text-gray-600">
              Microplastics are tiny plastic particles less than 5mm in diameter. They originate from larger plastic breakdown or direct manufacturing, often invisible to the naked eye. These particles can penetrate cells and tissues, posing potential environmental and health risks.
            </p>
            
            <div className="relative rounded-xl overflow-hidden shadow-soft plastic-accent h-56">
              <img 
                src="/images/microplastics-water.jpg" 
                alt="Microplastics in water sample" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-sm font-medium">Microscopic view of microplastics in water sample</span>
              </div>
            </div>
            
            <p className="text-gray-600">
              As plastics degrade, their surface area increases dramatically, enhancing their ability to absorb environmental toxins. They've been found in every environment studied, from ocean depths to mountaintops, drinking water to food.
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
                    <span className="font-medium">Physical Breakdown</span>: Larger plastics fragment due to UV radiation (photodegradation), mechanical abrasion, and weathering. This process accelerates in marine environments where wave action and sand particles create a "plastic sand" effect. Freeze-thaw cycles and thermal stress further contribute to fragmentation by creating microcracks that propagate through the material.
                  </div>
                </li>
                
                <div className="relative h-40 rounded-lg overflow-hidden my-3 ml-11">
                  <img 
                    src="/images/plastic-degradation.jpg" 
                    alt="Plastic degradation process" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                    <span className="text-xs text-white">Degradation of plastic in marine environment</span>
                  </div>
                </div>
                
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">2</div>
                  <div>
                    <span className="font-medium">Chemical Degradation</span>: Oxidation and hydrolysis weaken polymer chains, causing structural breakdown. Oxidative degradation introduces carbonyl groups (-C=O) into the polymer backbone, making it more brittle. Hydrolysis attacks ester linkages in polymers like polyethylene terephthalate (PET) and polyurethane, cleaving the polymer chain. These processes are catalyzed by environmental factors including pH extremes, elevated temperatures, and the presence of certain metal ions.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">3</div>
                  <div>
                    <span className="font-medium">Direct Manufacturing</span>: Some microplastics (microbeads) are purposely manufactured for products like exfoliants and cosmetics. These primary microplastics are typically 10μm to 1mm in size and made from polyethylene, polypropylene, or polystyrene. Though banned in rinse-off cosmetics in many countries since 2015-2018, they remain legal in leave-on products and industrial applications. An estimated 15-51 trillion microbeads enter aquatic environments annually from cosmetic sources alone.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">4</div>
                  <div>
                    <span className="font-medium">Synthetic Fibers</span>: Washing synthetic textiles releases microfibers into wastewater systems. A single wash of polyester garments can release 700,000 to 6 million microfibers. These fibers (typically 100μm-5mm in length and 10-20μm in diameter) are particularly concerning as their high surface-to-volume ratio enhances contaminant adsorption. Studies have found synthetic fibers in 83% of tap water samples globally and in the digestive tracts of numerous marine organisms.
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
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
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
                  src="/images/food-microplastics.jpg" 
                  alt="Food contaminated with microplastics" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <span className="text-white text-xs p-2">Seafood with microplastic contamination</span>
                </div>
              </div>
              <h4 className="font-semibold mb-2">Ingestion</h4>
              <p className="text-gray-600 text-sm">
                Through contaminated food (especially seafood), drinking water, and food packaging. Seafood is a major source, with shellfish containing 0.2-4 particles/g and fish 1-7 particles/individual. Drinking water contains 0-61 particles/L (tap) and 2-241 particles/L (bottled). Food packaging contributes through migration, with studies showing 100-700 particles/kg in packaged foods.
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
                  src="/images/air-microplastics.jpg" 
                  alt="Airborne microplastics" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <span className="text-white text-xs p-2">Microplastic fibers in air</span>
                </div>
              </div>
              <h4 className="font-semibold mb-2">Inhalation</h4>
              <p className="text-gray-600 text-sm">
                Breathing in airborne microplastic particles and fibers suspended in air. Indoor air typically contains higher concentrations (1.7-16.2 particles/m³) than outdoor air (0.3-1.5 particles/m³), with synthetic textiles being a major source. Measurements in household dust show 1,000-60,000 microplastic particles per gram, dominated by PET and nylon fibers.
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
                  src="/images/skin-microplastics.jpg" 
                  alt="Dermal contact with microplastics" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <span className="text-white text-xs p-2">Cosmetics with microplastic particles</span>
                </div>
              </div>
              <h4 className="font-semibold mb-2">Dermal Contact</h4>
              <p className="text-gray-600 text-sm">
                Absorption through skin from cosmetics, cleaning products, and synthetic clothing. The skin presents a significant barrier, but nanoparticles below 100nm may penetrate, particularly through hair follicles or damaged skin. Cosmetics are a significant source, with leave-on products (lotions, makeup) containing up to 24% microplastic content by weight.
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
