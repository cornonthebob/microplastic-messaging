
import React from 'react';

const HealthImpacts = () => {
  return (
    <section className="bg-white">
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
            <h3 className="text-2xl font-semibold">How Microplastics Affect Us</h3>
            <p className="text-gray-600">
              Research on human health effects is still emerging, but studies have found microplastics in human blood, placenta, and organs. The particles' small size allows them to pass through protective barriers in the body. A 2022 study published in Environment International detected microplastic particles in 17 of 22 healthy human blood samples, with concentrations ranging from 1.1 to 7.4 μg/ml. Another study found microplastics in human placenta, with particles detected on both the maternal and fetal sides, raising concerns about potential developmental impacts. Smaller particles (under 20μm) can enter the circulatory system, while nanoplastics (under 0.1μm) can penetrate most biological barriers including the blood-brain barrier.
            </p>
            
            <div className="space-y-4">
              <div className="glass-card p-4">
                <h4 className="font-medium mb-2">Potential Health Effects</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 flex-shrink-0">•</span>
                    <span><strong>Inflammation and oxidative stress</strong>: In vitro and animal studies show microplastics trigger inflammatory cytokine release (IL-1β, IL-6, TNF-α) and generate reactive oxygen species that damage cells. Exposure to polystyrene microplastics (20μm) increased inflammatory markers by 30-120% in mouse models.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 flex-shrink-0">•</span>
                    <span><strong>Endocrine disruption</strong>: Plastics and their additives can interfere with hormone systems. Bisphenol A binds to estrogen receptors with affinities 1,000-10,000 times lower than estradiol but at concentrations 100-1,000 times higher. Phthalates disrupt testosterone synthesis, with epidemiological studies linking urinary phthalate metabolites to reduced semen quality and altered reproductive development.</span>
                  </li>
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
              
              <div className="glass-card p-4">
                <h4 className="font-medium mb-2">Chemical Concerns</h4>
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
            <h3 className="text-2xl font-semibold">Environmental Impact</h3>
            <p className="text-gray-600">
              Microplastics have become ubiquitous in our environment, found from the deepest ocean trenches to mountain peaks, affecting ecosystems worldwide. Concentrations in marine environments range from 0.1-10,000 particles/m³ in surface waters and 10-100,000 particles/kg in sediments. Freshwater systems contain 0.1-1,000 particles/m³, while soil concentrations reach 300-67,500 particles/kg depending on proximity to human activity. The varied sizes, shapes, and polymer compositions result in complex environmental interactions, with different plastics exhibiting distinct fates and effects based on their physical and chemical properties.
            </p>
            
            <div className="glass-card p-5 space-y-4">
              <h4 className="font-medium">Ecosystem Effects</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-700 mb-2">Marine Life</h5>
                  <p className="text-sm text-gray-600">
                    Ingestion by marine organisms disrupts feeding, growth, and reproduction. Over 800 marine species have been documented to ingest or become entangled in plastic debris. Zooplankton exposed to microplastics show 40% decreased feeding capacity and 94% reduced reproductive output. Filter feeders like mussels accumulate 0.36 ± 0.07 microplastics/g tissue. Predatory fish can biomagnify microplastic concentrations by factors of 10-100x relative to their prey. Laboratory studies demonstrate decreased growth rates (10-30%), reduced reproductive success (15-50%), and altered behavior in exposed organisms. Coral reef systems exposed to microplastics show necrosis rates 4-89% higher than controls, with effects varying by polymer type.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-700 mb-2">Soil Systems</h5>
                  <p className="text-sm text-gray-600">
                    Alters soil structure, affects earthworms and other soil organisms, impacts plant growth. Microplastics reduce soil bulk density by 8-14% and water holding capacity by 10-22% at concentrations of 7% by weight. Earthworms exposed to microplastic-contaminated soil show inflammation of gut tissues, reduced burrowing activity (30-70%), and mortality rates 8-25% higher than controls. Plant studies demonstrate reduced germination rates (5-15%), stunted root development (15-40%), and decreased crop yields (10-30%) in contaminated soils, with effects varying by polymer type and concentration. Soil microbial communities show altered composition and reduced diversity, with decreases in nitrogen fixation (10-56%) and carbon cycling rates (5-38%).
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-700 mb-2">Freshwater</h5>
                  <p className="text-sm text-gray-600">
                    Accumulates in lakes and rivers, affecting aquatic organisms and potentially drinking water sources. Microplastic concentrations in lakes average 0.068-157 particles/m³ in surface waters and 5-242 particles/kg in sediments. River systems show increasing concentrations downstream of urban areas (20-3,000× higher than upstream). Freshwater fish ingest 3-12 microplastic particles per individual, with smaller species at greater risk. Studies on amphibians show developmental abnormalities increasing by 15-60% when exposed to microplastic concentrations of 10-100 mg/L. Water treatment removes 72-99.9% of microplastics but doesn't eliminate smaller particles completely, resulting in 0-61 particles/L in treated drinking water depending on treatment technologies.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-700 mb-2">Air Quality</h5>
                  <p className="text-sm text-gray-600">
                    Airborne microplastics can travel long distances and impact respiratory health of wildlife and humans. Atmospheric concentrations range from 0.3-1.5 particles/m³ outdoors and 1.7-16.2 particles/m³ indoors. Synthetic textile fibers predominate (58-93% of airborne microplastics), followed by fragments from larger debris and vehicle tire wear. Particles can remain airborne for 2-6 days and travel 95-660 km from source. Deposition rates of 29-280 particles/m²/day have been measured in remote areas. Inhalation studies in rodents demonstrate pulmonary inflammation at exposures of 10-2,000 particles/m³, with particles below 5μm penetrating to alveoli. Microplastics have been detected in lung tissue from 87% of human samples examined, raising concerns about chronic respiratory effects.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h5 className="font-medium text-blue-700 mb-2">Chemical Amplification Effect</h5>
                <p className="text-sm text-gray-600">
                  Microplastics act as vectors for other pollutants, concentrating toxins up to 1 million times higher than surrounding waters. This amplification effect varies by polymer type and chemical properties. Polyethylene shows the highest affinity for hydrophobic organic contaminants, with partition coefficients (log Kd) of 5-7 for PCBs and 4-6 for PAHs. Weathered microplastics adsorb 10-100× more contaminants than virgin materials due to increased surface area, surface cracking, and oxidized functional groups. The presence of biofilms on environmental microplastics further enhances sorption capacity by 2-10×. Contaminant loading increases over time, with equilibrium typically reached within 1-6 months in marine environments. Transfer efficiency to organisms varies from 1-80% depending on gut pH, residence time, and lipid content. This vector effect can bypass normal environmental dilution processes, delivering concentrated doses of multiple toxicants simultaneously to organisms that would otherwise experience minimal exposure.
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
