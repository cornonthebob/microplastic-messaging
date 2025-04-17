
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Beaker, FlaskConical, Waves, Wind, User, Microscope, Sun, Droplets, Mountain, Repeat, ArrowDownToLine, Zap } from 'lucide-react';

interface Stage {
  id: number;
  title: string;
  description: string;
  chemistry: string;
  impact: string;
  icon: React.ReactNode;
}

const petStages: Stage[] = [
  {
    id: 1,
    title: "Production & Use",
    description: "PET (polyethylene terephthalate) bottles are manufactured from petroleum-derived terephthalic acid and ethylene glycol through a two-step polymerization process. The production begins with the extraction of crude oil or natural gas, followed by refining to obtain the necessary monomers. These monomers undergo esterification and polycondensation reactions at high temperatures (250-280°C) and under vacuum to form PET polymer chains. The resulting polymer is melted, formed into preforms, and then blow-molded into the familiar bottle shape. After a typically brief use period (minutes to hours for beverages), the bottles are often discarded improperly, with only 29% entering recycling streams globally.",
    chemistry: "PET synthesis: Terephthalic acid + Ethylene glycol → Polyethylene terephthalate + Water\nC₈H₆O₄ + 2C₂H₆O₂ → C₁₀H₈O₄ + 2H₂O\n\nStep 1 (Esterification): HOOC-C₆H₄-COOH + 2HOCH₂CH₂OH → HOCH₂CH₂OOC-C₆H₄-COOCH₂CH₂OH + 2H₂O\n\nStep 2 (Polycondensation): n(HOCH₂CH₂OOC-C₆H₄-COOCH₂CH₂OH) → HO-[CH₂CH₂OOC-C₆H₄-COO]n-H + (n-1)HOCH₂CH₂OH\n\nTypical catalyst: Antimony trioxide (Sb₂O₃)",
    impact: "Production requires significant fossil fuels and generates greenhouse gases with a carbon footprint of approximately 6 kg CO₂ equivalent per kg of PET produced. Each kilogram of PET requires about 2 kg of oil equivalent for raw materials and energy. The manufacturing process releases volatile organic compounds (VOCs), particulate matter, and potential endocrine-disrupting chemicals including antimony compounds used as catalysts. Water usage is intensive, with up to 10 liters required per bottle produced. Global annual production exceeds 70 million tons, with approximately 1 million bottles purchased worldwide every minute and less than one-third recycled. A single PET bottle can persist in the environment for over 450 years while continuously releasing microplastics.",
    icon: <FlaskConical />
  },
  {
    id: 2,
    title: "Environmental Exposure",
    description: "Once in the environment, PET bottles are subject to various degradation processes. UV radiation from sunlight triggers photodegradation, breaking chemical bonds in the polymer chains and causing yellowing, brittleness, and eventual fragmentation. Mechanical forces from wind, waves, and abrasion accelerate the breakdown, especially in marine environments where sand and rocks create a sandpaper-like effect. Temperature fluctuations cause thermal oxidation and expansion/contraction cycles that create microfractures. Hydrolysis reactions slowly attack the ester bonds in the polymer, particularly in acidic or basic conditions. These combined stressors work synergistically to degrade the plastic's structural integrity, though complete mineralization to carbon dioxide and water is extremely slow, taking centuries.",
    chemistry: "Photodegradation: UV light breaks polymer chains\nC-O bond cleavage → Free radical formation\nThe Norrish Type I mechanism: C₁₀H₈O₄ + hν → C₉H₈O₂• + •COOCH₂CH₂OH\nNorrish Type II reaction: Formation of carboxylic acid end groups and vinyl end groups\n\nOxidative degradation: (C₁₀H₈O₄)n + O₂ → C=O, -OH, and -COOH groups\nRH + O₂ → R• + •OOH → ROOH → RO• + •OH\n\nHydrolysis of ester bonds:\nR-COO-R' + H₂O ⇌ R-COOH + HO-R'\nRate increases with temperature and pH extremes",
    impact: "PET bottles take 450+ years to degrade naturally. During this time, they release microplastics and leach chemicals into surroundings. Antimony, a potential carcinogen used as a catalyst in PET production, can leach into the environment with concentrations increasing over time, especially under acidic conditions or elevated temperatures. Studies have found antimony levels up to 100 times higher in organisms living near PET waste. Environmental exposure alters soil microbial communities, reducing biodiversity and disrupting nutrient cycling in terrestrial ecosystems. In aquatic environments, plastic debris creates artificial habitats ('plastisphere') that harbor microbial communities distinct from surrounding waters, including potential pathogens like Vibrio. The economic impact of marine plastic pollution is estimated at $13 billion annually through damage to fishing, tourism, and increased cleanup costs.",
    icon: <Wind />
  },
  {
    id: 3,
    title: "Fragmentation",
    description: "As degradation continues, the plastic breaks into increasingly smaller fragments, eventually becoming microplastics (<5mm) and nanoplastics (<1μm). This fragmentation follows a power law distribution, with each breakdown event creating multiple smaller pieces. When a 1cm² piece of plastic degrades into 1mm² fragments, the total surface area increases 10-fold, dramatically enhancing chemical reactivity. The jagged, irregular shapes of these fragments provide abundant surface area for adsorption of environmental contaminants. The fragmentation rate accelerates over time as the surface-to-volume ratio increases. Microplastics continue to weather, eventually reaching nanoscale dimensions where their behavior changes dramatically, becoming more bioavailable and capable of crossing cellular membranes. These nanoplastics can potentially enter cells through mechanisms like endocytosis and disrupt cellular functions.",
    chemistry: "Chain scission: Larger polymers (C₁₀H₈O₄)n → Shorter chains (C₁₀H₈O₄)m where m < n\nSurface area increases dramatically, enhancing chemical reactivity and contaminant adsorption.\n\nAdsorption mechanisms:\nHydrophobic interactions: Non-polar contaminants attracted to hydrophobic plastic surfaces\nVan der Waals forces: Weak but additive intermolecular attractions\nπ-π interactions: Between aromatic rings in plastics and organic pollutants\n\nPartitioning coefficients:\nPCBs to PE: log Kd = 5-7\nPAHs to PVC: log Kd = 4-6\nHeavy metals with oxidized plastics: complex formation with -COOH and -OH groups",
    impact: "Increased surface area enables absorption of environmental pollutants like PCBs, pesticides, and heavy metals at concentrations up to 1 million times higher than surrounding water. This phenomenon turns microplastics into concentrated toxic carriers. The small size facilitates ingestion by organisms throughout the food web—from plankton to apex predators. Studies have demonstrated that microplastics transfer additives and adsorbed pollutants to organism tissues upon ingestion, with bioavailability depending on gut residence time, pH, temperature, and lipid content. In marine food webs, microplastic concentrations biomagnify up to 100-fold from filter feeders to predatory fish. Laboratory studies show microplastic exposure causes reduced growth, reproductive impairment, behavioral changes, inflammation, and oxidative stress in various organisms. The non-nutritive filling of digestive systems creates false satiation, leading to malnutrition in affected organisms.",
    icon: <Beaker />
  },
  {
    id: 4,
    title: "Environmental Transport",
    description: "Microplastics move through ecosystems via water systems, wind, and other environmental processes. They can travel thousands of miles from their source. Riverine transport is a major pathway, with rivers acting as conveyor belts that transfer an estimated 1.15-2.41 million tons of plastic to oceans annually. Ocean currents distribute these particles globally, creating accumulation zones in subtropical gyres (like the Great Pacific Garbage Patch) where convergent currents concentrate floating debris. Vertical transport occurs through biofouling, which increases particle density causing sinking, and through marine snow—aggregates of organic matter that incorporate microplastics. Atmospheric transport has been documented with microplastics detected in remote mountain air and precipitation, carried by wind over vast distances. Estimates suggest that millions of tons of microplastics are stored in deep ocean sediments, acting as long-term sinks that preserve plastic pollution for geologic time scales.",
    chemistry: "Hydrophobic surface properties allow adsorption of pollutants: Microplastic-CH₂ + POPs → Microplastic-CH₂···POPs\nParticle density and size determine transport dynamics.\n\nBiofilm formation alters buoyancy:\nVirginal plastic (hydrophobic) → Surface conditioning (protein adsorption) → Bacterial colonization → Mature biofilm formation\nClean PE (0.92 g/cm³, floats) → Biofouled PE (>1.02 g/cm³, sinks)\n\nVertical mixing models:\nStokes' Law settling velocity: vs = (2gr²/9η)(ρp-ρf)\nWhere g = gravity, r = radius, η = fluid viscosity, ρp = particle density, ρf = fluid density",
    impact: "Microplastics have been found in every environment studied: deep sea trenches, mountain tops, Arctic ice, and remote wilderness. The ubiquity of microplastics means no ecosystem remains uncontaminated. Their presence has been documented in every major ocean basin from surface waters to hadal trenches 10,000+ meters deep. Atmospheric fallout deposits an estimated 1,000-3,000 tons of microplastics on protected areas in the western US annually. Vertical transport to deep ocean sediments effectively removes plastics from surface environments but creates long-term contamination of benthic ecosystems. Microplastics serve as vectors for invasive species and pathogens, allowing them to travel beyond their natural ranges ('plastic rafting'). Studies have found more than 1,200 species associated with marine plastic debris, including harmful algal bloom species and pathogenic bacteria. The 'Plastisphere'—microbial communities that colonize plastic surfaces—differ significantly from surrounding water communities and may include harmful bacteria such as Vibrio.",
    icon: <Waves />
  },
  {
    id: 5,
    title: "Human Exposure",
    description: "Humans are exposed to microplastics through multiple pathways including ingestion (food and water), inhalation, and dermal contact. Dietary exposure occurs primarily through seafood (especially shellfish which are consumed whole), but also through other foods, beverages, and drinking water. Commercial sea salt contains 0-1,674 microplastic particles/kg, bottled water 2-241 particles/liter, and beer 2-241 particles/liter. Inhalation exposure occurs through airborne microplastics, particularly fibers from textiles and tire wear particles, with indoor air typically containing higher concentrations than outdoor air (1.7-16.2 particles/m³). Dermal exposure happens through contact with synthetic textiles, personal care products, and dust. Microplastics can also cross the placental barrier, with studies detecting various polymer types in human placentas. The average person is estimated to ingest approximately 5 grams of plastic weekly—equivalent to consuming a credit card.",
    chemistry: "Microplastics may release monomers, additives, and adsorbed chemicals through chemical desorption: Microplastic-CH₂···POPs → Microplastic-CH₂ + POPs\nHydrolysis reactions in digestive environment can accelerate chemical release.\n\nGut fluid extraction efficiency:\nKbioaccessibility = (Concentration in gut fluid extract) / (Concentration in plastic)\nTypical values range from 0.1% to 80% depending on:\n- Chemical properties (log Kow, molecular weight)\n- Digestive conditions (pH, temperature, enzymes, bile salts)\n- Plastic type and age (weathering increases release rates)\n\nPlasticizer migration:\nRate = D(dC/dx) where D = diffusion coefficient, dC/dx = concentration gradient\nD values for phthalates in PVC range from 10⁻¹⁴ to 10⁻¹⁶ m²/s at body temperature",
    impact: "Average person ingests approximately 5 grams of plastic weekly (equivalent to a credit card). Microplastics have been detected in human blood, lungs, placenta, and feces. A 2022 study found microplastics in 17 of 22 healthy human blood samples, with PET and polyethylene most common (77% and 55% of samples, respectively). Investigations of human tissues have revealed microplastics in the lungs (11 of 13 samples), placenta (4 of 6 samples), and colonic tissue (20 of 20 samples from patients with inflammatory bowel disease). Health impacts remain incompletely understood, but experimental models suggest potential for inflammation, oxidative stress, metabolic disturbances, gut microbiome alterations, and immune dysfunction. Particulate exposure is associated with cardiovascular disease, respiratory conditions, and neurological effects. Of particular concern are nanoplastics (<1μm) which can cross biological barriers including the blood-brain barrier and placenta. Plastics can contain and absorb chemicals of concern including endocrine disruptors, carcinogens, mutagens, and reproductive toxicants.",
    icon: <User />
  },
  {
    id: 6,
    title: "Cellular Interactions",
    description: "Once inside the body, microplastics can interact with cells and tissues through various mechanisms. They may cross biological barriers depending on their size. Particles below 10μm can be taken up by specialized cells like M cells in intestinal Peyer's patches, while those below 1μm can enter most cell types through endocytosis. Nanoplastics below 100nm can cross the blood-brain barrier and potentially access the cell nucleus. The physical presence of particles can disrupt cell membranes, interfere with organelle function, and trigger inflammatory responses. Cellular uptake typically occurs through energy-dependent mechanisms including clathrin-mediated endocytosis, caveolae-mediated endocytosis, and macropinocytosis. Once internalized, particles may be contained within lysosomes or vesicles, but can also escape into the cytoplasm where they interfere with cellular machinery. Recent research has demonstrated that nanoplastics can interact with proteins and potentially disrupt their folding, aggregation, and function.",
    chemistry: "Particle interactions with cell membranes: Physical damage, oxidative stress\nRelease of additives like antimony compounds: Sb₂O₃ → Sb³⁺\nEndocrine disruption: Microplastic compounds bind to hormone receptors.\n\nOxidative stress mechanisms:\nParticle surface → Reactive Oxygen Species (ROS) generation\n2O₂ + NADPH → 2O₂•⁻ + NADP⁺ + H⁺ (superoxide formation)\n2O₂•⁻ + 2H⁺ → H₂O₂ + O₂ (hydrogen peroxide formation)\nH₂O₂ + Fe²⁺ → OH• + OH⁻ + Fe³⁺ (hydroxyl radical formation via Fenton reaction)\n\nInflammatory cascade:\nParticle recognition → NF-κB activation → Cytokine/chemokine production (IL-1β, IL-6, TNF-α) → Immune cell recruitment → Chronic inflammation",
    impact: "Potential health impacts include inflammation, oxidative stress, endocrine disruption, and transport of environmental toxins to tissues. In laboratory studies, micro- and nanoplastics induce cytotoxicity, genotoxicity, oxidative stress, inflammatory responses, metabolic disturbances, and neurotoxicity. Polystyrene nanoparticles (50nm) have been shown to cross the blood-brain barrier in mice and accumulate in the brain, with associated behavioral changes including reduced spatial learning and memory. Microplastics induce gut dysbiosis—altering the intestinal microbiome composition with downstream effects on immunity and metabolism. The particle size, surface properties, and polymer type strongly influence biological outcomes, with smaller particles and weathered materials typically having greater impacts. Aging and weathering of plastics enhances toxicity through increased surface area, reactive surface groups, and leaching of additives. Multiple studies have demonstrated transgenerational effects, with microplastic exposure affecting reproductive success and embryonic development across multiple generations, suggesting potential epigenetic mechanisms.",
    icon: <Microscope />
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
    <section id="interactive" className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4">
            Interactive Visualization
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">PET Plastic Journey</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Follow the comprehensive journey of PET (polyethylene terephthalate) from production to its presence in the human body as microplastics.
            This visualization tracks the entire lifecycle of the most common plastic polymer used in beverage bottles, exploring the complex chemical,
            environmental, and biological processes that transform useful materials into persistent pollutants.
            Click on each stage to learn detailed information about the chemical processes and environmental impact.
          </p>
        </div>

        {/* Enhanced interactive timeline with better styling */}
        <div className="mb-12 opacity-0 animate-slide-up">
          <div className="relative bg-white p-4 rounded-xl shadow-md">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 md:w-full h-full md:h-1 bg-blue-200 top-0 md:top-12 z-0"></div>
            
            {/* Timeline points */}
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

        {/* Content display with enhanced visuals */}
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

          {/* Enhanced visual representations for each stage */}
          <div className="mt-8 flex justify-center items-center min-h-60">
            {activeStage.id === 1 && (
              <div className="relative h-60 w-full max-w-lg opacity-0 animate-fade-in animation-delay-200">
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-200"></div>
                
                {/* Production process visualization */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-300 rounded-lg flex items-center justify-center shadow-md">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 22V8L12 2L21 8V22H3Z" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V13H15V22" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="absolute -bottom-6 text-xs font-medium text-gray-600">Raw Materials</div>
                </div>
                
                <div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-300 rounded-lg flex items-center justify-center shadow-md">
                  <FlaskConical size={32} className="text-blue-600" />
                  <div className="absolute -bottom-6 text-xs font-medium text-gray-600">Polymerization</div>
                </div>
                
                <div className="absolute right-1/3 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-green-100 to-green-300 rounded-lg flex items-center justify-center shadow-md">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L19 7V17L12 22L5 17V7L12 2Z" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="absolute -bottom-6 text-xs font-medium text-gray-600">Molding</div>
                </div>
                
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-red-100 to-red-300 rounded-lg flex items-center justify-center shadow-md">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22V12H15V22" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 12V9C6 8.44772 6.44772 8 7 8H17C17.5523 8 18 8.44772 18 9V12" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V4" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="absolute -bottom-6 text-xs font-medium text-gray-600">Consumption</div>
                </div>
                
                {/* Flow arrows */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 50 L120 50" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4" />
                  <path d="M130 50 L220 50" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4" />
                  <path d="M230 50 L320 50" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4" />
                </svg>
              </div>
            )}

            {activeStage.id === 2 && (
              <div className="relative h-60 w-full max-w-lg opacity-0 animate-fade-in animation-delay-200">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg overflow-hidden flex flex-col">
                  {/* Improved environmental degradation illustration */}
                  <div className="flex-1 relative">
                    {/* Sky with sun */}
                    <div className="absolute top-4 right-6 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-yellow-300 shadow-lg relative flex items-center justify-center">
                        <Sun className="w-8 h-8 text-yellow-600" />
                      </div>
                      <span className="text-xs font-medium mt-1">UV Radiation</span>
                      <div className="absolute -bottom-16 w-24 h-8">
                        <svg viewBox="0 0 100 40" className="w-full h-full">
                          <path d="M 10,30 Q 50,0 90,30" stroke="#FBBF24" strokeWidth="2" strokeDasharray="4" fill="none" />
                          <path d="M 20,35 Q 50,10 80,35" stroke="#FBBF24" strokeWidth="2" strokeDasharray="4" fill="none" />
                          <path d="M 30,38 Q 50,20 70,38" stroke="#FBBF24" strokeWidth="2" strokeDasharray="4" fill="none" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Wind effect */}
                    <div className="absolute top-4 left-6 flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-50 shadow rounded-full flex items-center justify-center">
                        <Wind className="w-8 h-8 text-blue-400" />
                      </div>
                      <span className="text-xs font-medium mt-1">Wind & Abrasion</span>
                      <div className="absolute -bottom-12 w-32 h-8">
                        <svg viewBox="0 0 120 30" className="w-full h-full">
                          <path d="M 10,15 Q 20,10 30,15 Q 40,20 50,15 Q 60,10 70,15 Q 80,20 90,15 Q 100,10 110,15" stroke="#93C5FD" strokeWidth="2" fill="none" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Water/moisture */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-100 shadow rounded-full flex items-center justify-center">
                        <Droplets className="w-8 h-8 text-blue-500" />
                      </div>
                      <span className="text-xs font-medium mt-1">Hydrolysis</span>
                    </div>
                  </div>
                  
                  {/* Bottle with degradation visualization */}
                  <div className="mx-auto my-2 relative">
                    <div className="relative w-16 h-32 mx-auto bg-blue-200/30 rounded-t-lg flex flex-col items-center justify-center border border-blue-300/50">
                      {/* Bottle neck */}
                      <div className="absolute -top-6 w-6 h-6 bg-blue-200/30 rounded-t-md border border-blue-300/50"></div>
                      
                      {/* Degradation effects */}
                      <div className="absolute top-1/4 left-0 w-4 h-1 bg-yellow-100 rounded-full transform -rotate-30"></div>
                      <div className="absolute top-1/3 right-0 w-3 h-2 bg-gray-300/50 rounded-full transform rotate-15"></div>
                      <div className="absolute top-1/2 left-1/4 w-8 h-0.5 bg-gray-400/30 rounded-full transform"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-5 h-0.5 bg-yellow-100 rounded-full transform rotate-45"></div>
                      
                      {/* Breaking points animation */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg viewBox="0 0 50 100" className="w-full h-full opacity-70">
                          <path d="M 10,20 L 40,20" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="2" />
                          <path d="M 20,40 L 30,40" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="2" />
                          <path d="M 15,60 L 35,60" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="2" />
                          <path d="M 10,80 L 40,80" stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="2" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Process labels */}
                    <div className="text-center mt-2">
                      <div className="text-xs font-medium text-gray-700">Physical & Chemical Degradation</div>
                      <div className="text-xs text-gray-500 mt-1">450+ years to fully degrade</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStage.id === 3 && (
              <div className="relative h-60 w-full max-w-lg opacity-0 animate-fade-in animation-delay-200">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-blue-50 rounded-lg overflow-hidden">
                  {/* Staged fragmentation of a plastic bottle */}
                  <div className="absolute top-6 left-6">
                    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 0 V10 H40 V0 M20 10 C20 10 10 20 10 30 C10 40 15 60 20 70 C25 80 30 80 30 80 C30 80 35 80 40 70 C45 60 50 40 50 30 C50 20 40 10 40 10 Z" 
                            stroke="#93C5FD" fill="rgba(147, 197, 253, 0.3)"/>
                    </svg>
                    <div className="absolute -bottom-6 text-xs font-medium text-center w-full">Intact Bottle</div>
                  </div>
                  
                  <div className="absolute top-6 right-6">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0 V5 H20 V0 M10 5 C10 5 5 10 5 15 C5 20 8 30 10 35 C12 40 15 40 15 40 C15 40 18 40 20 35 C22 30 25 20 25 15 C25 10 20 5 20 5 Z" 
                            stroke="#93C5FD" fill="rgba(147, 197, 253, 0.3)" className="transform translate-x-20"/>
                      <path d="M20 15 L25 20 L15 35 L10 30 Z" 
                            stroke="#93C5FD" fill="rgba(147, 197, 253, 0.3)"/>
                    </svg>
                    <div className="absolute -bottom-6 text-xs font-medium text-center w-full">Large Fragments</div>
                  </div>
                  
                  <div className="absolute bottom-16 left-6">
                    <div className="flex flex-wrap gap-2 max-w-[120px]">
                      <div className="w-5 h-5 bg-blue-200/60 rounded-sm transform rotate-12"></div>
                      <div className="w-4 h-4 bg-blue-200/60 rounded-sm transform -rotate-12"></div>
                      <div className="w-6 h-3 bg-blue-200/60 rounded-sm transform rotate-45"></div>
                      <div className="w-3 h-3 bg-blue-200/60 rounded-sm"></div>
                      <div className="w-5 h-2 bg-blue-200/60 rounded-sm transform -rotate-20"></div>
                      <div className="w-4 h-4 bg-blue-200/60 rounded-sm"></div>
                    </div>
                    <div className="absolute -bottom-6 text-xs font-medium text-center w-full">Microplastics</div>
                  </div>
                  
                  <div className="absolute bottom-16 right-6">
                    <div className="flex flex-wrap gap-1 max-w-[100px] justify-center">
                      <div className="w-2 h-2 bg-blue-300/70 rounded-full"></div>
                      <div className="w-1 h-1 bg-blue-300/70 rounded-full"></div>
                      <div className="w-2 h-1 bg-blue-300/70 rounded-full"></div>
                      <div className="w-1 h-1 bg-blue-300/70 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-blue-300/70 rounded-full"></div>
                      <div className="w-1 h-1 bg-blue-300/70 rounded-full"></div>
                      <div className="w-2 h-1 bg-blue-300/70 rounded-full"></div>
                      <div className="w-1 h-1 bg-blue-300/70 rounded-full"></div>
                      <div className="w-1 h-1 bg-blue-300/70 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-blue-300/70 rounded-full"></div>
                    </div>
                    <div className="absolute -bottom-6 text-xs font-medium text-center w-full">Nanoplastics</div>
                  </div>
                  
                  {/* Flow arrows */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 40 L200 40" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4" />
                    <path d="M300 40 L350 80" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4" />
                    <path d="M80 80 L40 140" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4" />
                    <path d="M300 80 L250 140" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4" />
                  </svg>
                </div>
              </div>
            )}
            
            {activeStage.id === 4 && (
              <div className="relative h-60 w-full max-w-lg opacity-0 animate-fade-in animation-delay-200">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-300 rounded-lg overflow-hidden">
                  {/* Main section labels */}
                  <div className="absolute top-2 left-0 right-0 flex justify-around">
                    <div className="bg-white/80 rounded px-2 py-1 text-xs font-semibold">Atmosphere</div>
                    <div className="bg-white/80 rounded px-2 py-1 text-xs font-semibold">Land</div>
                    <div className="bg-white/80 rounded px-2 py-1 text-xs font-semibold">Ocean</div>
                  </div>
                  
                  {/* Atmosphere section */}
                  <div className="absolute top-8 left-4 w-1/4">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Wind className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      {/* Air particles */}
                      <div className="relative h-20 w-20">
                        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/60 rounded-full"></div>
                        <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-white/60 rounded-full"></div>
                        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white/60 rounded-full"></div>
                        <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-blue-200/70 rounded-full"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-200/70 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Land section */}
                  <div className="absolute top-8 left-1/3 right-1/3">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Mountain className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      {/* Land with river */}
                      <div className="relative h-20 w-24 bg-green-200/30 rounded-lg">
                        <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/2 bg-blue-300/50 rounded transform rotate-45"></div>
                        <div className="absolute w-2 h-2 top-1/4 left-1/3 bg-blue-200/60 rounded-sm"></div>
                        <div className="absolute w-1.5 h-1.5 bottom-1/3 right-1/4 bg-blue-200/60 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Ocean section */}
                  <div className="absolute top-8 right-4 w-1/4">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Waves className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      {/* Ocean with currents */}
                      <div className="relative h-20 w-20 bg-blue-400/30 rounded-lg">
                        <svg className="absolute inset-0" viewBox="0 0 100 100">
                          <path d="M 20,30 Q 50,20 80,30" stroke="white" strokeWidth="1" fill="none" strokeDasharray="2" />
                          <path d="M 20,50 Q 50,40 80,50" stroke="white" strokeWidth="1" fill="none" strokeDasharray="2" />
                          <path d="M 20,70 Q 50,60 80,70" stroke="white" strokeWidth="1" fill="none" strokeDasharray="2" />
                        </svg>
                        <div className="absolute w-2 h-2 top-1/4 left-1/4 bg-blue-200/60 rounded-sm"></div>
                        <div className="absolute w-1.5 h-1.5 bottom-1/4 right-1/3 bg-blue-200/60 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Transport arrows */}
                  <div className="absolute bottom-16 left-0 right-0 flex justify-center">
                    <div className="relative w-full flex justify-center">
                      <Repeat className="w-12 h-12 text-blue-700/50" />
                      <div className="absolute -bottom-8 text-xs font-semibold bg-white/90 px-2 py-1 rounded">
                        Global Transport Cycle
                      </div>
                    </div>
                  </div>
                  
                  {/* Ocean floor with sediments */}
                  <div className="absolute bottom-0 inset-x-0 h-12 flex items-end">
                    <div className="w-full h-8 bg-gray-300/30 flex justify-around items-start relative">
                      <ArrowDownToLine className="w-6 h-6 text-gray-700/50 absolute left-1/4 -top-8" />
                      <ArrowDownToLine className="w-6 h-6 text-gray-700/50 absolute right-1/4 -top-8" />
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium px-2 py-0.5 bg-gray-100 rounded">
                        Deep Ocean Sediments
                      </div>
                      <div className="w-2 h-2 bg-blue-200/60 rounded-sm mt-1"></div>
                      <div className="w-3 h-1 bg-blue-200/60 rounded-sm mt-2"></div>
                      <div className="w-2 h-1 bg-blue-200/60 rounded-sm mt-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeStage.id === 5 && (
              <div className="relative h-60 w-full max-w-lg opacity-0 animate-fade-in animation-delay-200">
                <div className="absolute inset-0 bg-white rounded-lg overflow-hidden border border-gray-100">
                  {/* Human silhouette */}
                  <div className="absolute inset-x-0 top-4 flex justify-center">
                    <div className="relative">
                      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M70 30 A15 15 0 0 1 70 60 A15 15 0 0 1 70 30" fill="#E2E8F0"/>
                        <path d="M70 60 L70 110" stroke="#E2E8F0" strokeWidth="20" strokeLinecap="round"/>
                        <path d="M70 70 L40 90" stroke="#E2E8F0" strokeWidth="10" strokeLinecap="round"/>
                        <path d="M70 70 L100 90" stroke="#E2E8F0" strokeWidth="10" strokeLinecap="round"/>
                        <path d="M70 110 L50 140" stroke="#E2E8F0" strokeWidth="10" strokeLinecap="round"/>
                        <path d="M70 110 L90 140" stroke="#E2E8F0" strokeWidth="10" strokeLinecap="round"/>
                      </svg>
                      
                      {/* Microplastic exposure points */}
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-20 h-20">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                          </div>
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium bg-blue-50 rounded px-2 py-0.5 border border-blue-100">
                            Inhalation
                          </div>
                        </div>
                        
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping animation-delay-300"></div>
                          </div>
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium bg-green-50 rounded px-2 py-0.5 border border-green-100">
                            Ingestion
                          </div>
                        </div>
                        
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                          <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-red-400 rounded-full animate-ping animation-delay-600"></div>
                          </div>
                          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium bg-red-50 rounded px-2 py-0.5 border border-red-100">
                            Dermal Contact
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Exposure source examples */}
                  <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-xs text-gray-600">Ambient Air</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-gray-600">Food & Water</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="text-xs text-gray-600">Textiles & Products</span>
                    </div>
                  </div>
                  
                  {/* Exposure statistics */}
                  <div className="absolute bottom-4 right-4 bg-gray-50 rounded-lg p-2 border border-gray-100 max-w-[150px]">
                    <p className="text-xs text-gray-900 font-semibold mb-1">Weekly Human Intake:</p>
                    <p className="text-xs text-gray-600">~5g of plastic</p>
                    <p className="text-xs text-gray-600 font-medium mt-1">(equivalent to a credit card)</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeStage.id === 6 && (
              <div className="relative h-60 w-full max-w-lg opacity-0 animate-fade-in animation-delay-200">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg overflow-hidden">
                  {/* Cell membrane */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-purple-200"></div>
                  
                  {/* Cell nucleus */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center">
                    <div className="text-xs font-medium text-purple-800">Nucleus</div>
                  </div>
                  
                  {/* Cell organelles with labels */}
                  <div className="absolute top-1/3 left-1/3 w-10 h-6 rounded-full bg-green-100 border border-green-200 flex items-center justify-center">
                    <div className="text-[8px] font-medium text-green-800">Mitochondria</div>
                  </div>
                  <div className="absolute bottom-1/3 right-1/3 w-12 h-7 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center">
                    <div className="text-[8px] font-medium text-amber-800">Lysosome</div>
                  </div>
                  <div className="absolute top-2/3 right-1/4 w-8 h-5 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center">
                    <div className="text-[8px] font-medium text-blue-800">Vesicle</div>
                  </div>
                  
                  {/* Title at the top */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-800 bg-white/80 px-3 py-1 rounded-full">
                    Cellular Interactions
                  </div>
                  
                  {/* Microplastic interactions */}
                  <div className="absolute top-1/3 left-1/4">
                    <div className="w-4 h-4 bg-blue-400/60 rounded-sm transform rotate-12 relative">
                      <svg className="absolute -right-8 -top-8" width="30" height="30" viewBox="0 0 30 30">
                        <path d="M 5,25 Q 15,5 25,25" stroke="#3B82F6" strokeWidth="1" fill="none" />
                        <text x="12" y="5" fontSize="6" fill="#3B82F6" fontWeight="bold">Endocytosis</text>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-1/3 right-1/5">
                    <div className="w-3 h-3 bg-blue-400/60 rounded-full relative">
                      <svg className="absolute -left-8 -top-8" width="30" height="30" viewBox="0 0 30 30">
                        <path d="M 5,5 Q 15,25 25,5" stroke="#3B82F6" strokeWidth="1" fill="none" />
                        <text x="8" y="28" fontSize="6" fill="#3B82F6" fontWeight="bold">Membrane Damage</text>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Nanoplastic in nucleus */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-2 h-2 bg-red-400/70 rounded-full"></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-[8px] font-medium bg-red-50/90 px-1 py-0.5 rounded text-red-600 whitespace-nowrap">
                      Nanoplastic (<1μm)
                    </div>
                  </div>
                  
                  {/* ROS (Reactive Oxygen Species) generation */}
                  <div className="absolute bottom-1/4 left-1/4 flex flex-col items-center">
                    <div className="w-8 h-8 relative">
                      <div className="absolute inset-0 w-6 h-6 bg-yellow-100 rounded-full opacity-30 animate-ping"></div>
                      <Zap className="w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-600" />
                    </div>
                    <div className="text-[8px] font-medium bg-yellow-50 px-1 py-0.5 rounded text-yellow-700 mt-1">
                      ROS Generation
                    </div>
                  </div>
                  
                  {/* Inflammation indicator */}
                  <div className="absolute bottom-8 right-1/4 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-red-100/50 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-red-200/50 animate-pulse"></div>
                    </div>
                    <div className="text-[8px] font-medium bg-red-50 px-1 py-0.5 rounded text-red-700 mt-1">
                      Inflammation
                    </div>
                  </div>
                  
                  {/* Key microplastic impacts */}
                  <div className="absolute bottom-2 left-2 right-2 bg-white/80 rounded p-1 text-[9px] text-center text-gray-700">
                    <strong>Key Effects:</strong> Oxidative Stress, DNA Damage, Cell Death, Immune System Activation
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveGraphic;
