
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface PlasticType {
  id: string;
  name: string;
  abbreviation: string;
  fullName: string;
  structure: string;
  formation: string;
  concerns: string;
  processing: string;
  biodegradability: string;
  commonItems: string[];
}

const plasticTypes: PlasticType[] = [
  {
    id: 'pet',
    name: 'Polyethylene Terephthalate',
    abbreviation: 'PET',
    fullName: 'Polyethylene Terephthalate',
    structure: 'Linear thermoplastic polymer created through polycondensation of terephthalic acid and ethylene glycol. Contains benzene rings connected by ester linkages.',
    formation: 'Formed through esterification: HO–C₆H₄–COOH + HOCH₂CH₂OH → HO–C₆H₄–COO–CH₂CH₂OH + H₂O\nFollowed by polycondensation under high temperature (250-280°C) and vacuum.',
    concerns: 'May leach antimony trioxide catalyst and acetaldehyde when exposed to heat. Studies suggest potential endocrine disruption effects when microplastics form. Absorbs and concentrates contaminants from environment.',
    processing: 'Recyclable (Code #1). Often collected, cleaned, melted and reformed. However, approximately 70% ends up in landfills or environment where it slowly fragments into microplastics over 450+ years.',
    biodegradability: 'Not readily biodegradable. Takes hundreds of years to degrade in natural environments. Photodegradation and mechanical abrasion cause fragmentation into smaller microplastics rather than complete breakdown.',
    commonItems: ['Water bottles', 'Soda bottles', 'Food containers', 'Polyester clothing']
  },
  {
    id: 'hdpe',
    name: 'High-Density Polyethylene',
    abbreviation: 'HDPE',
    fullName: 'High-Density Polyethylene',
    structure: 'Linear polymer with minimal branching, consisting of repeating ethylene (–CH₂–CH₂–) units with high crystallinity.',
    formation: 'Produced via Ziegler-Natta polymerization: nCH₂=CH₂ → –(CH₂–CH₂)n–\nUses catalysts (typically titanium and aluminum compounds) under low pressure (2-4 MPa) and moderate temperature (70-300°C).',
    concerns: 'Generally considered one of the safer plastics but can release estrogenic chemicals when degrading. Microplastics from HDPE interact with persistent organic pollutants, potentially transferring these toxins into organisms.',
    processing: 'Recyclable (Code #2). Can be processed into lumber-like products. Non-recycled HDPE persists in landfills or environment, fragmenting into microplastics through mechanical weathering and UV exposure.',
    biodegradability: 'Not biodegradable under normal environmental conditions. Takes 100+ years to degrade. Degrades primarily through photodegradation, creating smaller and smaller plastic fragments.',
    commonItems: ['Milk jugs', 'Detergent bottles', 'Toys', 'Pipe systems']
  },
  {
    id: 'pvc',
    name: 'Polyvinyl Chloride',
    abbreviation: 'PVC',
    fullName: 'Polyvinyl Chloride',
    structure: 'Vinyl polymer with chlorine atoms attached to carbon backbone: –(CH₂–CHCl)n–. Requires plasticizers to be flexible.',
    formation: 'Free radical polymerization: nCH₂=CHCl → –(CH₂–CHCl)n–\nInitiated by peroxides at 40-70°C. Suspension polymerization is common industrial method.',
    concerns: 'Contains chlorine (57% by weight). Releases toxic compounds including dioxins when burned. Phthalate plasticizers are endocrine disruptors that can leach out over time. Manufacturing process uses carcinogenic vinyl chloride monomer.',
    processing: 'Rarely recycled (Code #3) due to chlorine content and additives. Mostly sent to landfills where plasticizers can leach into groundwater. Incineration produces hydrochloric acid and dioxins.',
    biodegradability: 'Extremely resistant to biodegradation, with estimated degradation times of 1000+ years. Plasticizers may biodegrade but the polymer backbone remains intact, shedding microplastics into the environment.',
    commonItems: ['Pipes', 'Vinyl flooring', 'Window frames', 'Medical tubing']
  }
];

const PlasticInfo = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [activePlastic, setActivePlastic] = useState(plasticTypes[0]);

  return (
    <>
      <section id="about" className="bg-white">
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
                Microplastics are tiny plastic particles less than 5mm in diameter, barely visible to the naked eye. They come in various forms including fragments, fibers, beads, films, and foams. These minuscule particles are created either intentionally for products (primary microplastics) or through the breakdown of larger plastic items (secondary microplastics).
              </p>
              <p className="text-gray-600">
                As plastics break down into microplastics, their surface area increases dramatically, enhancing their ability to absorb and concentrate environmental toxins up to a million times their levels in surrounding water.
              </p>
            </div>

            <div className="glass-card p-6 opacity-0 animate-slide-up animation-delay-400">
              <h4 className="text-xl font-semibold mb-4">How Do Microplastics Form?</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">1</div>
                  <div>
                    <span className="font-medium">Physical Breakdown</span>: Larger plastics fragment due to UV radiation, mechanical abrasion, and weathering.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">2</div>
                  <div>
                    <span className="font-medium">Chemical Degradation</span>: Oxidation and hydrolysis weaken polymer chains, causing structural breakdown.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">3</div>
                  <div>
                    <span className="font-medium">Direct Manufacturing</span>: Some microplastics (microbeads) are purposely manufactured for products like exfoliants and cosmetics.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">4</div>
                  <div>
                    <span className="font-medium">Synthetic Fibers</span>: Washing synthetic textiles releases microfibers into wastewater systems.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 glass-card p-8 opacity-0 animate-slide-up animation-delay-600">
            <h3 className="text-2xl font-semibold mb-6 text-center">Pathways Into Human Body</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Ingestion</h4>
                <p className="text-gray-600 text-sm">Through contaminated food (especially seafood), drinking water, and food packaging.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Inhalation</h4>
                <p className="text-gray-600 text-sm">Breathing in airborne microplastic particles and fibers suspended in air.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Dermal Contact</h4>
                <p className="text-gray-600 text-sm">Absorption through skin from cosmetics, cleaning products, and synthetic clothing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="types" className="bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4">
              Chemical Composition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Common Plastic Types</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-8 rounded-full"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Different types of plastic have unique chemical structures, properties, and environmental impacts. Here we examine three of the most common plastics found in everyday items.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10 opacity-0 animate-fade-in animation-delay-200">
            {plasticTypes.map((plastic) => (
              <button
                key={plastic.id}
                onClick={() => setActivePlastic(plastic)}
                className={cn(
                  "px-6 py-3 rounded-full transition-all",
                  activePlastic.id === plastic.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                )}
              >
                {plastic.abbreviation}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 opacity-0 animate-fade-in animation-delay-400">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">{activePlastic.name} <span className="text-blue-600">({activePlastic.abbreviation})</span></h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Type #{plasticTypes.findIndex(p => p.id === activePlastic.id) + 1}</span>
              </div>
              <p className="text-gray-500 mt-2">{activePlastic.fullName}</p>
            </div>

            <div className="mb-6">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('about')}
                  className={cn(
                    "px-4 py-2 font-medium text-sm transition-colors border-b-2 -mb-px",
                    activeTab === 'about'
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  )}
                >
                  Chemical Structure
                </button>
                <button
                  onClick={() => setActiveTab('concerns')}
                  className={cn(
                    "px-4 py-2 font-medium text-sm transition-colors border-b-2 -mb-px",
                    activeTab === 'concerns'
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  )}
                >
                  Health Concerns
                </button>
                <button
                  onClick={() => setActiveTab('processing')}
                  className={cn(
                    "px-4 py-2 font-medium text-sm transition-colors border-b-2 -mb-px",
                    activeTab === 'processing'
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  )}
                >
                  Processing & Fate
                </button>
              </div>
            </div>

            <div className="min-h-56">
              {activeTab === 'about' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Chemical Structure</h4>
                    <p className="text-gray-600">{activePlastic.structure}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Formation Reaction</h4>
                    <div className="p-4 bg-gray-50 rounded-lg text-gray-800 font-mono text-sm whitespace-pre-line">
                      {activePlastic.formation}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Common Products</h4>
                    <div className="flex flex-wrap gap-2">
                      {activePlastic.commonItems.map((item, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'concerns' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Health & Environmental Concerns</h4>
                    <p className="text-gray-600">{activePlastic.concerns}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Biodegradability</h4>
                    <p className="text-gray-600">{activePlastic.biodegradability}</p>
                  </div>
                </div>
              )}

              {activeTab === 'processing' && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">End-of-Life Processing</h4>
                  <p className="text-gray-600">{activePlastic.processing}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="health" className="bg-white">
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
                Research on human health effects is still emerging, but studies have found microplastics in human blood, placenta, and organs. The particles' small size allows them to pass through protective barriers in the body.
              </p>
              
              <div className="space-y-4">
                <div className="glass-card p-4">
                  <h4 className="font-medium mb-2">Potential Health Effects</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 flex-shrink-0">•</span>
                      <span>Inflammation and oxidative stress at cellular level</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 flex-shrink-0">•</span>
                      <span>Disruption of endocrine (hormone) system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 flex-shrink-0">•</span>
                      <span>Accumulation in organs including lungs, liver, and kidneys</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 flex-shrink-0">•</span>
                      <span>Potential neurodevelopmental impacts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 flex-shrink-0">•</span>
                      <span>Transport of other environmental toxins into the body</span>
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
                      <span><strong>Additives:</strong> Plasticizers, flame retardants, stabilizers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 flex-shrink-0">•</span>
                      <span><strong>Absorbed toxins:</strong> PCBs, pesticides, heavy metals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Environmental Impact</h3>
              <p className="text-gray-600">
                Microplastics have become ubiquitous in our environment, found from the deepest ocean trenches to mountain peaks, affecting ecosystems worldwide.
              </p>
              
              <div className="glass-card p-5 space-y-4">
                <h4 className="font-medium">Ecosystem Effects</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-blue-700 mb-2">Marine Life</h5>
                    <p className="text-sm text-gray-600">
                      Ingestion by marine organisms disrupts feeding, growth, and reproduction. Can transfer up food chain.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-blue-700 mb-2">Soil Systems</h5>
                    <p className="text-sm text-gray-600">
                      Alters soil structure, affects earthworms and other soil organisms, impacts plant growth.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-blue-700 mb-2">Freshwater</h5>
                    <p className="text-sm text-gray-600">
                      Accumulates in lakes and rivers, affecting aquatic organisms and potentially drinking water sources.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-blue-700 mb-2">Air Quality</h5>
                    <p className="text-sm text-gray-600">
                      Airborne microplastics can travel long distances and impact respiratory health of wildlife and humans.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h5 className="font-medium text-blue-700 mb-2">Chemical Amplification Effect</h5>
                  <p className="text-sm text-gray-600">
                    Microplastics act as vectors for other pollutants, concentrating toxins up to 1 million times higher than surrounding waters. This amplifies exposure to chemicals that would otherwise be diluted in the environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlasticInfo;
