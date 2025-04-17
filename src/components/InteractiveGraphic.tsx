
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Beaker, FlaskConical, Waves, Wind, User, Microscope } from 'lucide-react';

interface Stage {
  id: number;
  title: string;
  description: string;
  chemistry: string;
  impact: string;
  icon: React.ReactNode;
  image?: string;
}

const petStages: Stage[] = [
  {
    id: 1,
    title: "Production & Use",
    description: "PET bottles are made from petroleum-derived chemicals through polymerization. The process begins with oil extraction, followed by refining to create monomers. These undergo reactions at high temperatures to form PET chains, which are molded into bottles. Most bottles are discarded after brief use, with only 29% entering recycling streams globally.",
    chemistry: "PET synthesis: Terephthalic acid + Ethylene glycol → PET + Water\nC₈H₆O₄ + 2C₂H₆O₂ → C₁₀H₈O₄ + 2H₂O",
    impact: "Production requires fossil fuels and generates greenhouse gases. Each kg of PET needs about 2 kg of oil for materials and energy. Manufacturing releases VOCs and potential endocrine disruptors. Global production exceeds 70 million tons, with 1 million bottles purchased every minute worldwide.",
    icon: <FlaskConical />,
    image: "/lovable-uploads/c9a7905d-4ba0-47c8-ab89-f97b314e317b.png"
  },
  {
    id: 2,
    title: "Environmental Exposure",
    description: "In the environment, PET bottles degrade through various processes. UV radiation causes photodegradation, breaking chemical bonds. Mechanical forces from wind and waves accelerate breakdown. Temperature changes create microfractures. Hydrolysis attacks the polymer bonds. Complete breakdown takes centuries.",
    chemistry: "Photodegradation: UV light breaks polymer chains\nOxidative degradation: Polymer + O₂ → Polymer with C=O, -OH, -COOH groups\nHydrolysis: R-COO-R' + H₂O ⇌ R-COOH + HO-R'",
    impact: "PET bottles persist for 450+ years while releasing microplastics. Antimony, a potential carcinogen used in production, leaches into surroundings. Plastic debris creates 'plastisphere' habitats for microbes different from surrounding waters, including potential pathogens.",
    icon: <Wind />,
    image: "/lovable-uploads/60a64ae3-4f6d-43a1-8112-a9585ddd5f7c.png"
  },
  {
    id: 3,
    title: "Fragmentation",
    description: "As degradation continues, plastic breaks into smaller pieces, eventually becoming microplastics (<5mm) and nanoplastics (<1μm). When a 1cm² piece degrades into 1mm² fragments, surface area increases 10-fold, enhancing chemical reactivity. Smaller particles are more bioavailable and can cross cellular membranes.",
    chemistry: "Chain scission: Large polymers → Shorter chains\nIncreased surface area enhances contaminant adsorption\nMicroplastics adsorb pollutants through hydrophobic attraction",
    impact: "Microplastics absorb environmental pollutants at concentrations up to 1 million times higher than surrounding water. Their small size allows ingestion by organisms throughout the food web. Studies show microplastic exposure causes reduced growth, reproductive problems, and oxidative stress in various organisms.",
    icon: <Beaker />,
    image: "/lovable-uploads/2f390fcb-9f1e-4625-8dcc-0e6c5391266c.png"
  },
  {
    id: 4,
    title: "Environmental Transport",
    description: "Microplastics move through ecosystems via water, wind, and other processes. Rivers transport an estimated 1.15-2.41 million tons of plastic to oceans annually. Ocean currents distribute particles globally, creating accumulation zones like the Great Pacific Garbage Patch. Atmospheric transport carries microplastics to remote areas.",
    chemistry: "Hydrophobic properties allow adsorption of pollutants\nBiofilm formation alters buoyancy: Clean plastic (floats) → Biofouled plastic (sinks)",
    impact: "Microplastics are now found everywhere: deep sea trenches, mountain tops, Arctic ice, and remote wilderness. Atmospheric fallout deposits microplastics even in protected areas. These particles serve as vectors for invasive species and pathogens, allowing them to travel beyond natural ranges.",
    icon: <Waves />,
    image: "/lovable-uploads/fd18a98f-9dd2-4ee9-bf53-0574962da021.png"
  },
  {
    id: 5,
    title: "Human Exposure",
    description: "Humans are exposed to microplastics through multiple pathways. We ingest them via food (especially seafood), water, and beverages. We inhale airborne microplastics from textiles and tire particles. Skin contact occurs through synthetic fabrics and cosmetics. Microplastics can cross the placental barrier.",
    chemistry: "Chemicals leach through: Microplastic + Environmental factors → Released additives and adsorbed pollutants\nExtraction efficiency depends on chemical properties and digestive conditions",
    impact: "The average person ingests about 5g of plastic weekly (equivalent to a credit card). Microplastics have been found in human blood, lungs, placenta, and feces. Health impacts remain partially unknown, but studies suggest inflammation, oxidative stress, and metabolic disturbances.",
    icon: <User />,
    image: "/lovable-uploads/81bc86d2-2964-44f0-a18d-cf80c0c77285.png"
  },
  {
    id: 6,
    title: "Cellular Interactions",
    description: "Inside the body, microplastics interact with tissues depending on their size. Particles below 10μm can be taken up by specialized cells, while those below 1μm can enter most cell types. Nanoplastics below 100nm can cross the blood-brain barrier. These particles can disrupt cell membranes and trigger inflammation.",
    chemistry: "Particle interactions cause: Physical damage, oxidative stress, inflammatory response\nParticle surface generates Reactive Oxygen Species (ROS)",
    impact: "Laboratory studies show microplastics cause cytotoxicity, oxidative stress, and inflammatory responses. Polystyrene nanoparticles cross the blood-brain barrier in mice, affecting behavior. Microplastics alter the gut microbiome, with effects on immunity and metabolism. Smaller and weathered particles typically have greater impacts.",
    icon: <Microscope />,
    image: "/lovable-uploads/e4fecb7b-66b3-4897-a0cd-55975cb0c316.png"
  }
];

const InteractiveGraphic = () => {
  const [activeStage, setActiveStage] = useState<Stage>(petStages[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStageClick = (stage: Stage) => {
    if (activeStage.id !== stage.id) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStage(stage);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div id="interactive" className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4">
            Interactive Visualization
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">PET Plastic Journey</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm">
            Explore the journey of PET plastic from production to its impact on human health, revealing how everyday materials become environmental pollutants.
          </p>
        </div>

        <div className="mb-12 opacity-0 animate-slide-up">
          <div className="relative bg-white p-4 rounded-xl shadow-md">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 md:w-full h-full md:h-1 bg-blue-200 top-0 md:top-12 z-0"></div>
            
            <div className="grid md:grid-cols-6 gap-8 relative z-10">
              {petStages.map((stage) => (
                <div 
                  key={stage.id} 
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => handleStageClick(stage)}
                >
                  <div 
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center transition-all z-10 border-2",
                      activeStage.id === stage.id
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 border-blue-700"
                        : "bg-white text-gray-500 border-blue-300 group-hover:border-blue-500 group-hover:bg-blue-50"
                    )}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-bold">{stage.id}</span>
                      <div className={cn(
                        "text-xs",
                        activeStage.id === stage.id ? "text-white" : "text-gray-500"
                      )}>
                        {React.cloneElement(stage.icon as React.ReactElement, { 
                          className: "w-4 h-4", 
                          strokeWidth: 2.5 
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <p 
                      className={cn(
                        "font-medium transition-colors text-sm",
                        activeStage.id === stage.id ? "text-blue-600" : "text-gray-600"
                      )}
                    >
                      {stage.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div 
          className={cn(
            "bg-white rounded-2xl shadow-soft p-6 md:p-8 transition-opacity duration-300 opacity-0 animate-slide-up animation-delay-300",
            isAnimating ? "opacity-0" : "opacity-100"
          )}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
            <div className="p-2 bg-blue-100 rounded-full mr-3 text-blue-600">
              {React.cloneElement(activeStage.icon as React.ReactElement, { className: "w-5 h-5" })}
            </div>
            Stage {activeStage.id}: {activeStage.title}
          </h3>
          <p className="text-gray-600 mb-6">{activeStage.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <h4 className="font-semibold text-lg mb-3 text-blue-700 flex items-center">
                <FlaskConical className="w-4 h-4 mr-2" />
                Chemical Process
              </h4>
              <div className="whitespace-pre-line font-mono text-sm text-gray-700">
                {activeStage.chemistry}
              </div>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-lg mb-3 text-blue-700 flex items-center">
                <Waves className="w-4 h-4 mr-2" />
                Environmental & Health Impact
              </h4>
              <p className="text-gray-700">{activeStage.impact}</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center items-center">
            {activeStage.image && (
              <div className="max-w-lg overflow-hidden rounded-lg shadow-md">
                <img 
                  src={activeStage.image} 
                  alt={`${activeStage.title} visualization`} 
                  className="w-full h-auto max-h-60 object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveGraphic;
