import React from 'react';
import { Microscope, TestTubes, AlertTriangle, Fish, Droplets } from 'lucide-react';

const HealthImpacts = () => {
  return (
    <section className="bg-white relative">
      {/* Decorative microplastic particles */}
      <div className="absolute w-6 h-6 rounded-sm bg-blue-100/20 top-20 left-[15%] transform rotate-12 floating-plastic"></div>
      <div className="absolute w-10 h-3 rounded-full bg-teal-100/20 bottom-40 right-[10%] transform -rotate-6 floating-plastic animation-delay-500"></div>
      <div className="absolute w-4 h-10 rounded-sm bg-blue-50/20 top-40 right-[20%] transform rotate-45 floating-plastic animation-delay-300"></div>
      
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4">
            Health Implications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Impact on Human Health</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 opacity-0 animate-slide-up">
          <div className="space-y-6">
            <div className="flex items-center">
              <Microscope className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold">How Microplastics Affect Us</h3>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-soft h-48 mb-4">
              <img 
                src="/images/microplastics-human-body.jpg" 
                alt="Microplastics in human body diagram" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-start justify-end p-4">
                <span className="text-white text-sm">Microplastics can enter and accumulate in various human organs</span>
              </div>
            </div>
            
            <p className="text-gray-600">
              Research on human health effects is still emerging, but studies have found microplastics in human blood, placenta, and organs. The particles' small size allows them to pass through protective barriers in the body. A 2022 study published in Environment International detected microplastic particles in 17 of 22 healthy human blood samples, with concentrations ranging from 1.1 to 7.4 μg/ml. Another study found microplastics in human placenta, with particles detected on both the maternal and fetal sides, raising concerns about potential developmental impacts. Smaller particles (under 20μm) can enter the circulatory system, while nanoplastics (under 0.1μm) can penetrate most biological barriers including the blood-brain barrier.
            </p>
            
            <div className="space-y-4">
              <div className="glass-card p-4 relative overflow-hidden before:absolute before:-inset-1 before:bg-blue-50/30 before:rounded-2xl">
                <div className="relative z-10">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                    <h4 className="font-medium">Potential Health Effects</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 flex-shrink-0">•</span>
                      <span><strong>Inflammation and oxidative stress</strong>: In vitro and animal studies show microplastics trigger inflammatory cytokine release (IL-1β, IL-6, TNF-α) and generate reactive oxygen species that damage cells. Exposure to polystyrene microplastics (20μm) increased inflammatory markers by 30-120% in mouse models.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 flex-shrink-0">•</span>
                      <span><strong>Endocrine disruption</strong>: Plastics and their additives can interfere with hormone systems. Bisphenol A binds to estrogen receptors with affinities 1,000-10,000 times lower than estradiol but at concentrations 100-1,000 times higher. Phthalates disrupt testosterone synthesis, with epidemiological studies linking urinary phthalate metabolites to reduced semen quality and altered reproductive development.</span>
                    </li>
                    
                    <div className="relative rounded-lg overflow-hidden my-3 ml-4 h-32">
                      <img 
                        src="/images/microplastics-cells.jpg" 
                        alt="Microplastics interacting with cells" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                        <span className="text-xs text-white">Microscopic view of microplastics interacting with human cells</span>
                      </div>
                    </div>
                    
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 flex-shrink-0">•</span>
                      <span><strong>Accumulation in organs</strong>: Studies have detected microplastics in human lung, liver, kidney, spleen, and brain tissue. Autopsy studies found 12-20 particles per 10g of tissue, with highest concentrations in liver and kidneys. Particle size, shape, and polymer type influence distribution, with smaller particles (1-10μm) penetrating deeper into tissues.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 flex-shrink-0">•</span>
                      <span><strong>Neurodevelopmental impacts</strong>: Animal studies demonstrate that nanoplastics can cross the blood-brain barrier and placental barrier. Polystyrene nanoparticles (50nm) administered to pregnant mice transferred to fetal tissues and affected neurodevelopment, with exposed offspring showing altered behavior. Microplastics may interfere with neurotransmitter systems including dopamine and serotonin.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 flex-shrink-0">•</span>
                      <span><strong>Transport of environmental toxins</strong>: Microplastics serve as vectors for persistent organic pollutants (POPs), heavy metals, and pathogens. PCBs and PBDEs adsorbed to microplastics have been shown to transfer to tissues upon ingestion, with bioavailability ranging from 1-80% depending on polymer type, gut conditions, and chemical properties. Studies found that fish exposed to microplastics containing environmentally relevant concentrations of PCBs accumulated 1.2-20 times more PCBs than those exposed to contaminated water alone.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="glass-card p-4">
                <div className="flex items-center mb-2">
                  <TestTubes className="h-5 w-5 text-blue-500 mr-2" />
                  <h4 className="font-medium">Chemical Concerns</h4>
                </div>
                <p className="text-gray-600">
                  Microplastics often contain or absorb harmful chemicals:
                </p>
                <ul className="space-y-2 text-gray-600 mt-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 flex-shrink-0">•</span>
                    <span><strong>Additives:</strong> Plastics contain numerous additives that can leach out, including:
                      <ul className="list-disc list-inside ml-6 mt-1">
                        <li>Plasticizers (phthalates, adipates): Make up 10-60% of PVC products</li>
                        <li>Flame retardants (PBDEs, HBCD): Present at 5-30% by weight in some plastics</li>
                        <li>Stabilizers (lead compounds, organotin, barium/cadmium): 0.5-3% of polymer formulations</li>
                        <li>Antioxidants (hindered phenols, phosphites): 0.05-3% concentration</li>
                        <li>Colorants and pigments (including heavy metals): 0.001-10% concentration</li>
                      </ul>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 flex-shrink-0">•</span>
                    <span><strong>Absorbed toxins:</strong> Environmental contaminants concentrate on microplastic surfaces:
                      <ul className="list-disc list-inside ml-6 mt-1">
                        <li>PCBs: Found at concentrations of 1-10,000 ng/g on environmental microplastics</li>
                        <li>PAHs: Detected at 1-24,000 ng/g on marine microplastics</li>
                        <li>DDT and other pesticides: 0.1-100 ng/g on environmental microplastics</li>
                        <li>Heavy metals: Lead (1-10,000 μg/g), cadmium (0.1-10 μg/g), mercury (0.01-1 μg/g)</li>
                        <li>Pathogenic bacteria: Including Vibrio spp. at 100-10,000x ambient concentrations</li>
                      </ul>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-semibold">Environmental Impact</h3>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-soft h-48 mb-4">
              <img 
                src="/images/ocean-microplastics.jpg" 
                alt="Microplastics in ocean" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-start justify-end p-4">
                <span className="text-white text-sm">Ocean contamination with microplastic particles</span>
              </div>
            </div>
            
            <p className="text-gray-600">
              Microplastics have become ubiquitous in our environment, found from the deepest ocean trenches to mountain peaks, affecting ecosystems worldwide. Concentrations in marine environments range from 0.1-10,000 particles/m³ in surface waters and 10-100,000 particles/kg in sediments. Freshwater systems contain 0.1-1,000 particles/m³, while soil concentrations reach 300-67,500 particles/kg depending on proximity to human activity. The varied sizes, shapes, and polymer compositions result in complex environmental interactions, with different plastics exhibiting distinct fates and effects based on their physical and chemical properties.
            </p>
            
            <div className="glass-card p-5 space-y-4">
              <h4 className="font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ecosystem Effects
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-blue-50"></div>
                  <div className="relative z-10">
                    <h5 className="font-medium text-blue-700 mb-2 flex items-center">
                      <Fish className="h-4 w-4 mr-1" />
                      Marine Life
                    </h5>
                    <p className="text-sm text-gray-600">
                      Ingestion by marine organisms disrupts feeding, growth, and reproduction. Over 800 marine species have been documented to ingest or become entangled in plastic debris. Zooplankton exposed to microplastics show 40% decreased feeding capacity and 94% reduced reproductive output. Filter feeders like mussels accumulate 0.36 ± 0.07 microplastics/g tissue.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg relative overflow-hidden">
                  <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-green-50"></div>
                  <div className="relative z-10">
                    <h5 className="font-medium text-blue-700 mb-2">Soil Systems</h5>
                    <p className="text-sm text-gray-600">
                      Alters soil structure, affects earthworms and other soil organisms, impacts plant growth. Microplastics reduce soil bulk density by 8-14% and water holding capacity by 10-22% at concentrations of 7% by weight. Earthworms exposed to microplastic-contaminated soil show inflammation of gut tissues, reduced burrowing activity (30-70%), and mortality rates 8-25% higher than controls.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-blue-50"></div>
                  <div className="relative z-10">
                    <h5 className="font-medium text-blue-700 mb-2 flex items-center">
                      <Droplets className="h-4 w-4 mr-1" />
                      Freshwater
                    </h5>
                    <p className="text-sm text-gray-600">
                      Accumulates in lakes and rivers, affecting aquatic organisms and potentially drinking water sources. Microplastic concentrations in lakes average 0.068-157 particles/m³ in surface waters and 5-242 particles/kg in sediments. River systems show increasing concentrations downstream of urban areas (20-3,000× higher than upstream).
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg relative overflow-hidden">
                  <div className="absolute -left-4 -bottom-4 w-12 h-12 rounded-full bg-teal-50"></div>
                  <div className="relative z-10">
                    <h5 className="font-medium text-blue-700 mb-2">Air Quality</h5>
                    <p className="text-sm text-gray-600">
                      Airborne microplastics can travel long distances and impact respiratory health of wildlife and humans. Atmospheric concentrations range from 0.3-1.5 particles/m³ outdoors and 1.7-16.2 particles/m³ indoors. Synthetic textile fibers predominate (58-93% of airborne microplastics), followed by fragments from larger debris and vehicle tire wear.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
                <div className="w-1/3">
                  <img 
                    src="/images/microplastics-marine.jpg" 
                    alt="Marine microplastics effects" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="w-1/3">
                  <img 
                    src="/images/microplastics-fish.jpg" 
                    alt="Microplastics in fish"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="w-1/3">
                  <img 
                    src="/images/microplastics-soil.jpg" 
                    alt="Soil contamination"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h5 className="font-medium text-blue-700 mb-2">Chemical Amplification Effect</h5>
                <p className="text-sm text-gray-600">
                  Microplastics act as vectors for other pollutants, concentrating toxins up to 1 million times higher than surrounding waters. This amplification effect varies by polymer type and chemical properties. Polyethylene shows the highest affinity for hydrophobic organic contaminants, with partition coefficients (log Kd) of 5-7 for PCBs and 4-6 for PAHs. Weathered microplastics adsorb 10-100× more contaminants than virgin materials due to increased surface area, surface cracking, and oxidized functional groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthImpacts;
