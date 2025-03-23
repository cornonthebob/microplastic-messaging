
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface Stage {
  id: number;
  title: string;
  description: string;
  chemistry: string;
  impact: string;
}

const petStages: Stage[] = [
  {
    id: 1,
    title: "Production & Use",
    description: "PET (polyethylene terephthalate) bottles are manufactured from petroleum-derived terephthalic acid and ethylene glycol through a two-step polymerization process. The production begins with the extraction of crude oil or natural gas, followed by refining to obtain the necessary monomers. These monomers undergo esterification and polycondensation reactions at high temperatures (250-280°C) and under vacuum to form PET polymer chains. The resulting polymer is melted, formed into preforms, and then blow-molded into the familiar bottle shape. After a typically brief use period (minutes to hours for beverages), the bottles are often discarded improperly, with only 29% entering recycling streams globally.",
    chemistry: "PET synthesis: Terephthalic acid + Ethylene glycol → Polyethylene terephthalate + Water\nC₈H₆O₄ + 2C₂H₆O₂ → C₁₀H₈O₄ + 2H₂O\n\nStep 1 (Esterification): HOOC-C₆H₄-COOH + 2HOCH₂CH₂OH → HOCH₂CH₂OOC-C₆H₄-COOCH₂CH₂OH + 2H₂O\n\nStep 2 (Polycondensation): n(HOCH₂CH₂OOC-C₆H₄-COOCH₂CH₂OH) → HO-[CH₂CH₂OOC-C₆H₄-COO]n-H + (n-1)HOCH₂CH₂OH\n\nTypical catalyst: Antimony trioxide (Sb₂O₃)",
    impact: "Production requires significant fossil fuels and generates greenhouse gases with a carbon footprint of approximately 6 kg CO₂ equivalent per kg of PET produced. Each kilogram of PET requires about 2 kg of oil equivalent for raw materials and energy. The manufacturing process releases volatile organic compounds (VOCs), particulate matter, and potential endocrine-disrupting chemicals including antimony compounds used as catalysts. Water usage is intensive, with up to 10 liters required per bottle produced. Global annual production exceeds 70 million tons, with approximately 1 million bottles purchased worldwide every minute and less than one-third recycled. A single PET bottle can persist in the environment for over 450 years while continuously releasing microplastics."
  },
  {
    id: 2,
    title: "Environmental Exposure",
    description: "Once in the environment, PET bottles are subject to various degradation processes. UV radiation from sunlight triggers photodegradation, breaking chemical bonds in the polymer chains and causing yellowing, brittleness, and eventual fragmentation. Mechanical forces from wind, waves, and abrasion accelerate the breakdown, especially in marine environments where sand and rocks create a sandpaper-like effect. Temperature fluctuations cause thermal oxidation and expansion/contraction cycles that create microfractures. Hydrolysis reactions slowly attack the ester bonds in the polymer, particularly in acidic or basic conditions. These combined stressors work synergistically to degrade the plastic's structural integrity, though complete mineralization to carbon dioxide and water is extremely slow, taking centuries.",
    chemistry: "Photodegradation: UV light breaks polymer chains\nC-O bond cleavage → Free radical formation\nThe Norrish Type I mechanism: C₁₀H₈O₄ + hν → C₉H₈O₂• + •COOCH₂CH₂OH\nNorrish Type II reaction: Formation of carboxylic acid end groups and vinyl end groups\n\nOxidative degradation: (C₁₀H₈O₄)n + O₂ → C=O, -OH, and -COOH groups\nRH + O₂ → R• + •OOH → ROOH → RO• + •OH\n\nHydrolysis of ester bonds:\nR-COO-R' + H₂O ⇌ R-COOH + HO-R'\nRate increases with temperature and pH extremes",
    impact: "PET bottles take 450+ years to degrade naturally. During this time, they release microplastics and leach chemicals into surroundings. Antimony, a potential carcinogen used as a catalyst in PET production, can leach into the environment with concentrations increasing over time, especially under acidic conditions or elevated temperatures. Studies have found antimony levels up to 100 times higher in organisms living near PET waste. Environmental exposure alters soil microbial communities, reducing biodiversity and disrupting nutrient cycling in terrestrial ecosystems. In aquatic environments, plastic debris creates artificial habitats ('plastisphere') that harbor microbial communities distinct from surrounding waters, including potential pathogens like Vibrio. The economic impact of marine plastic pollution is estimated at $13 billion annually through damage to fishing, tourism, and increased cleanup costs."
  },
  {
    id: 3,
    title: "Fragmentation",
    description: "As degradation continues, the plastic breaks into increasingly smaller fragments, eventually becoming microplastics (<5mm) and nanoplastics (<1μm). This fragmentation follows a power law distribution, with each breakdown event creating multiple smaller pieces. When a 1cm² piece of plastic degrades into 1mm² fragments, the total surface area increases 10-fold, dramatically enhancing chemical reactivity. The jagged, irregular shapes of these fragments provide abundant surface area for adsorption of environmental contaminants. The fragmentation rate accelerates over time as the surface-to-volume ratio increases. Microplastics continue to weather, eventually reaching nanoscale dimensions where their behavior changes dramatically, becoming more bioavailable and capable of crossing cellular membranes. These nanoplastics can potentially enter cells through mechanisms like endocytosis and disrupt cellular functions.",
    chemistry: "Chain scission: Larger polymers (C₁₀H₈O₄)n → Shorter chains (C₁₀H₈O₄)m where m < n\nSurface area increases dramatically, enhancing chemical reactivity and contaminant adsorption.\n\nAdsorption mechanisms:\nHydrophobic interactions: Non-polar contaminants attracted to hydrophobic plastic surfaces\nVan der Waals forces: Weak but additive intermolecular attractions\nπ-π interactions: Between aromatic rings in plastics and organic pollutants\n\nPartitioning coefficients:\nPCBs to PE: log Kd = 5-7\nPAHs to PVC: log Kd = 4-6\nHeavy metals with oxidized plastics: complex formation with -COOH and -OH groups",
    impact: "Increased surface area enables absorption of environmental pollutants like PCBs, pesticides, and heavy metals at concentrations up to 1 million times higher than surrounding water. This phenomenon turns microplastics into concentrated toxic carriers. The small size facilitates ingestion by organisms throughout the food web—from plankton to apex predators. Studies have demonstrated that microplastics transfer additives and adsorbed pollutants to organism tissues upon ingestion, with bioavailability depending on gut residence time, pH, temperature, and lipid content. In marine food webs, microplastic concentrations biomagnify up to 100-fold from filter feeders to predatory fish. Laboratory studies show microplastic exposure causes reduced growth, reproductive impairment, behavioral changes, inflammation, and oxidative stress in various organisms. The non-nutritive filling of digestive systems creates false satiation, leading to malnutrition in affected organisms."
  },
  {
    id: 4,
    title: "Environmental Transport",
    description: "Microplastics move through ecosystems via water systems, wind, and other environmental processes. They can travel thousands of miles from their source. Riverine transport is a major pathway, with rivers acting as conveyor belts that transfer an estimated 1.15-2.41 million tons of plastic to oceans annually. Ocean currents distribute these particles globally, creating accumulation zones in subtropical gyres (like the Great Pacific Garbage Patch) where convergent currents concentrate floating debris. Vertical transport occurs through biofouling, which increases particle density causing sinking, and through marine snow—aggregates of organic matter that incorporate microplastics. Atmospheric transport has been documented with microplastics detected in remote mountain air and precipitation, carried by wind over vast distances. Estimates suggest that millions of tons of microplastics are stored in deep ocean sediments, acting as long-term sinks that preserve plastic pollution for geologic time scales.",
    chemistry: "Hydrophobic surface properties allow adsorption of pollutants: Microplastic-CH₂ + POPs → Microplastic-CH₂···POPs\nParticle density and size determine transport dynamics.\n\nBiofilm formation alters buoyancy:\nVirginal plastic (hydrophobic) → Surface conditioning (protein adsorption) → Bacterial colonization → Mature biofilm formation\nClean PE (0.92 g/cm³, floats) → Biofouled PE (>1.02 g/cm³, sinks)\n\nVertical mixing models:\nStokes' Law settling velocity: vs = (2gr²/9η)(ρp-ρf)\nWhere g = gravity, r = radius, η = fluid viscosity, ρp = particle density, ρf = fluid density",
    impact: "Microplastics have been found in every environment studied: deep sea trenches, mountain tops, Arctic ice, and remote wilderness. The ubiquity of microplastics means no ecosystem remains uncontaminated. Their presence has been documented in every major ocean basin from surface waters to hadal trenches 10,000+ meters deep. Atmospheric fallout deposits an estimated 1,000-3,000 tons of microplastics on protected areas in the western US annually. Vertical transport to deep ocean sediments effectively removes plastics from surface environments but creates long-term contamination of benthic ecosystems. Microplastics serve as vectors for invasive species and pathogens, allowing them to travel beyond their natural ranges ('plastic rafting'). Studies have found more than 1,200 species associated with marine plastic debris, including harmful algal bloom species and pathogenic bacteria. The 'Plastisphere'—microbial communities that colonize plastic surfaces—differ significantly from surrounding water communities and may include harmful bacteria such as Vibrio."
  },
  {
    id: 5,
    title: "Human Exposure",
    description: "Humans are exposed to microplastics through multiple pathways including ingestion (food and water), inhalation, and dermal contact. Dietary exposure occurs primarily through seafood (especially shellfish which are consumed whole), but also through other foods, beverages, and drinking water. Commercial sea salt contains 0-1,674 microplastic particles/kg, bottled water 2-241 particles/liter, and beer 2-241 particles/liter. Inhalation exposure occurs through airborne microplastics, particularly fibers from textiles and tire wear particles, with indoor air typically containing higher concentrations than outdoor air (1.7-16.2 particles/m³). Dermal exposure happens through contact with synthetic textiles, personal care products, and dust. Microplastics can also cross the placental barrier, with studies detecting various polymer types in human placentas. The average person is estimated to ingest approximately 5 grams of plastic weekly—equivalent to consuming a credit card.",
    chemistry: "Microplastics may release monomers, additives, and adsorbed chemicals through chemical desorption: Microplastic-CH₂···POPs → Microplastic-CH₂ + POPs\nHydrolysis reactions in digestive environment can accelerate chemical release.\n\nGut fluid extraction efficiency:\nKbioaccessibility = (Concentration in gut fluid extract) / (Concentration in plastic)\nTypical values range from 0.1% to 80% depending on:\n- Chemical properties (log Kow, molecular weight)\n- Digestive conditions (pH, temperature, enzymes, bile salts)\n- Plastic type and age (weathering increases release rates)\n\nPlasticizer migration:\nRate = D(dC/dx) where D = diffusion coefficient, dC/dx = concentration gradient\nD values for phthalates in PVC range from 10⁻¹⁴ to 10⁻¹⁶ m²/s at body temperature",
    impact: "Average person ingests approximately 5 grams of plastic weekly (equivalent to a credit card). Microplastics have been detected in human blood, lungs, placenta, and feces. A 2022 study found microplastics in 17 of 22 healthy human blood samples, with PET and polyethylene most common (77% and 55% of samples, respectively). Investigations of human tissues have revealed microplastics in the lungs (11 of 13 samples), placenta (4 of 6 samples), and colonic tissue (20 of 20 samples from patients with inflammatory bowel disease). Health impacts remain incompletely understood, but experimental models suggest potential for inflammation, oxidative stress, metabolic disturbances, gut microbiome alterations, and immune dysfunction. Particulate exposure is associated with cardiovascular disease, respiratory conditions, and neurological effects. Of particular concern are nanoplastics (<1μm) which can cross biological barriers including the blood-brain barrier and placenta. Plastics can contain and absorb chemicals of concern including endocrine disruptors, carcinogens, mutagens, and reproductive toxicants."
  },
  {
    id: 6,
    title: "Cellular Interactions",
    description: "Once inside the body, microplastics can interact with cells and tissues through various mechanisms. They may cross biological barriers depending on their size. Particles below 10μm can be taken up by specialized cells like M cells in intestinal Peyer's patches, while those below 1μm can enter most cell types through endocytosis. Nanoplastics below 100nm can cross the blood-brain barrier and potentially access the cell nucleus. The physical presence of particles can disrupt cell membranes, interfere with organelle function, and trigger inflammatory responses. Cellular uptake typically occurs through energy-dependent mechanisms including clathrin-mediated endocytosis, caveolae-mediated endocytosis, and macropinocytosis. Once internalized, particles may be contained within lysosomes or vesicles, but can also escape into the cytoplasm where they interfere with cellular machinery. Recent research has demonstrated that nanoplastics can interact with proteins and potentially disrupt their folding, aggregation, and function.",
    chemistry: "Particle interactions with cell membranes: Physical damage, oxidative stress\nRelease of additives like antimony compounds: Sb₂O₃ → Sb³⁺\nEndocrine disruption: Microplastic compounds bind to hormone receptors.\n\nOxidative stress mechanisms:\nParticle surface → Reactive Oxygen Species (ROS) generation\n2O₂ + NADPH → 2O₂•⁻ + NADP⁺ + H⁺ (superoxide formation)\n2O₂•⁻ + 2H⁺ → H₂O₂ + O₂ (hydrogen peroxide formation)\nH₂O₂ + Fe²⁺ → OH• + OH⁻ + Fe³⁺ (hydroxyl radical formation via Fenton reaction)\n\nInflammatory cascade:\nParticle recognition → NF-κB activation → Cytokine/chemokine production (IL-1β, IL-6, TNF-α) → Immune cell recruitment → Chronic inflammation",
    impact: "Potential health impacts include inflammation, oxidative stress, endocrine disruption, and transport of environmental toxins to tissues. In laboratory studies, micro- and nanoplastics induce cytotoxicity, genotoxicity, oxidative stress, inflammatory responses, metabolic disturbances, and neurotoxicity. Polystyrene nanoparticles (50nm) have been shown to cross the blood-brain barrier in mice and accumulate in the brain, with associated behavioral changes including reduced spatial learning and memory. Microplastics induce gut dysbiosis—altering the intestinal microbiome composition with downstream effects on immunity and metabolism. The particle size, surface properties, and polymer type strongly influence biological outcomes, with smaller particles and weathered materials typically having greater impacts. Aging and weathering of plastics enhances toxicity through increased surface area, reactive surface groups, and leaching of additives. Multiple studies have demonstrated transgenerational effects, with microplastic exposure affecting reproductive success and embryonic development across multiple generations, suggesting potential epigenetic mechanisms."
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

        {/* Interactive timeline */}
        <div className="mb-12 opacity-0 animate-slide-up">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 md:w-full h-full md:h-1 bg-gray-200 top-0 md:top-8 z-0"></div>
            
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
                      "w-16 h-16 rounded-full flex items-center justify-center transition-all z-10",
                      activeStage.id === stage.id
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                        : "bg-white text-gray-500 border border-gray-200 group-hover:border-blue-300"
                    )}
                  >
                    <span className="text-lg font-bold">{stage.id}</span>
                  </div>
                  <div className="mt-2 text-center">
                    <p 
                      className={cn(
                        "font-medium transition-colors",
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

        {/* Content display */}
        <div 
          className={cn(
            "bg-white rounded-2xl shadow-soft p-6 md:p-8 transition-opacity duration-300 opacity-0 animate-slide-up animation-delay-300",
            isAnimating ? "opacity-0" : "opacity-100"
          )}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Stage {activeStage.id}: {activeStage.title}
          </h3>
          <p className="text-gray-600 mb-6">{activeStage.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <h4 className="font-semibold text-lg mb-3 text-blue-700">Chemical Process</h4>
              <div className="whitespace-pre-line font-mono text-sm text-gray-700">
                {activeStage.chemistry}
              </div>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-lg mb-3 text-blue-700">Environmental & Health Impact</h4>
              <p className="text-gray-700">{activeStage.impact}</p>
            </div>
          </div>

          {/* Visual representation */}
          <div className="mt-8 flex justify-center items-center min-h-60">
            {activeStage.id === 1 && (
              <div className="relative h-40 w-40 opacity-0 animate-fade-in animation-delay-200">
                <div className="absolute inset-0 bg-blue-100 rounded-lg animate-pulse-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-20 h-20 text-blue-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2V5M16 2V5M16 13H18M18 13V15M18 13H20M12 14C12 14.5304 11.7893 15.0391 11.4142 15.4142C11.0391 15.7893 10.5304 16 10 16C9.46957 16 8.96086 15.7893 8.58579 15.4142C8.21071 15.0391 8 14.5304 8 14C8 13.4696 8.21071 12.9609 8.58579 12.5858C8.96086 12.2107 9.46957 12 10 12C10.5304 12 11.0391 12.2107 11.4142 12.5858C11.7893 12.9609 12 13.4696 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 10H21M3 16H13M5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            )}

            {activeStage.id === 2 && (
              <div className="relative h-40 w-full max-w-md opacity-0 animate-fade-in animation-delay-200">
                <div className="absolute left-10 top-5 w-20 h-20 bg-blue-100 rounded-lg animate-float"></div>
                <div className="absolute right-10 top-15 w-16 h-16 bg-blue-200 rounded-lg animate-float animation-delay-500"></div>
                <div className="absolute left-1/3 bottom-0 w-14 h-14 bg-blue-300 rounded-lg animate-float animation-delay-300"></div>
                <svg className="absolute inset-0" viewBox="0 0 100 100" width="100%" height="100%">
                  <line x1="30" y1="20" x2="50" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-gray-300" />
                  <line x1="65" y1="25" x2="55" y2="42" stroke="currentColor" strokeWidth="0.5" className="text-gray-300" />
                  <line x1="45" y1="62" x2="42" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-gray-300" />
                </svg>
              </div>
            )}

            {activeStage.id === 3 && (
              <div className="relative h-40 w-full max-w-md opacity-0 animate-fade-in animation-delay-200">
                <div className="absolute left-0 top-0 w-20 h-20 bg-blue-200 rounded-lg animate-pulse-slow"></div>
                <div className="absolute left-5 top-5 w-14 h-14 bg-blue-300 rounded-lg animate-pulse-slow animation-delay-300"></div>
                <div className="absolute left-10 top-10 w-10 h-10 bg-blue-400 rounded-lg animate-pulse-slow animation-delay-500"></div>
                <div className="absolute left-15 top-15 w-6 h-6 bg-blue-500 rounded-lg animate-pulse-slow animation-delay-700"></div>
                <div className="absolute left-18 top-18 w-4 h-4 bg-blue-600 rounded-lg animate-pulse-slow animation-delay-900"></div>
                <div className="absolute left-20 top-20 w-2 h-2 bg-blue-700 rounded-lg animate-pulse-slow animation-delay-1000"></div>

                <div className="absolute right-0 bottom-0 w-20 h-20 bg-blue-200 rounded-lg animate-pulse-slow"></div>
                <div className="absolute right-5 bottom-5 w-14 h-14 bg-blue-300 rounded-lg animate-pulse-slow animation-delay-400"></div>
                <div className="absolute right-10 bottom-10 w-10 h-10 bg-blue-400 rounded-lg animate-pulse-slow animation-delay-600"></div>
                <div className="absolute right-15 bottom-15 w-6 h-6 bg-blue-500 rounded-lg animate-pulse-slow animation-delay-800"></div>
                <div className="absolute right-18 bottom-18 w-4 h-4 bg-blue-600 rounded-lg animate-pulse-slow animation-delay-1000"></div>
                <div className="absolute right-20 bottom-20 w-2 h-2 bg-blue-700 rounded-lg animate-pulse-slow animation-delay-200"></div>
              </div>
            )}

            {activeStage.id === 4 && (
              <div className="h-40 w-full max-w-md opacity-0 animate-fade-in animation-delay-200">
                <div className="h-full w-full bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 rounded-lg relative overflow-hidden">
                  <div className="absolute w-3 h-3 bg-blue-400 rounded-full left-[10%] top-[30%] animate-float"></div>
                  <div className="absolute w-2 h-2 bg-blue-500 rounded-full left-[25%] top-[45%] animate-float animation-delay-300"></div>
                  <div className="absolute w-2 h-2 bg-blue-600 rounded-full left-[40%] top-[20%] animate-float animation-delay-500"></div>
                  <div className="absolute w-1 h-1 bg-blue-700 rounded-full left-[60%] top-[50%] animate-float animation-delay-200"></div>
                  <div className="absolute w-2 h-2 bg-blue-500 rounded-full left-[75%] top-[35%] animate-float animation-delay-600"></div>
                  <div className="absolute w-1 h-1 bg-blue-600 rounded-full left-[85%] top-[60%] animate-float animation-delay-400"></div>
                </div>
              </div>
            )}

            {activeStage.id === 5 && (
              <div className="h-40 w-full max-w-md opacity-0 animate-fade-in animation-delay-200">
                <div className="h-full w-full relative flex justify-center items-center">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 text-gray-300">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3492 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6224L5.51575 16.2955L4 18L6 20L7.78896 18.5466L10.4463 19.6275L11 22H13L13.6046 19.6225L16.2552 18.5247L18 20L20 18L18.517 16.2647L19.6303 13.5578L22 13.0647V11.0653L19.6224 10.3954Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  
                  <div className="absolute w-2 h-2 bg-blue-500 rounded-full top-[30%] left-[40%] animate-pulse-slow"></div>
                  <div className="absolute w-1 h-1 bg-blue-600 rounded-full top-[35%] left-[50%] animate-pulse-slow animation-delay-300"></div>
                  <div className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full top-[45%] left-[65%] animate-pulse-slow animation-delay-600"></div>
                  <div className="absolute w-1 h-1 bg-blue-700 rounded-full top-[55%] left-[45%] animate-pulse-slow animation-delay-900"></div>
                  <div className="absolute w-2 h-2 bg-blue-600 rounded-full top-[60%] left-[55%] animate-pulse-slow animation-delay-500"></div>
                  <div className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full top-[65%] left-[35%] animate-pulse-slow animation-delay-700"></div>
                </div>
              </div>
            )}

            {activeStage.id === 6 && (
              <div className="h-40 w-full max-w-md opacity-0 animate-fade-in animation-delay-200">
                <div className="h-full w-full relative">
                  <div className="absolute inset-8 bg-orange-100 rounded-full border-8 border-orange-200 flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute w-2 h-2 bg-blue-500 rounded-full top-[30%] left-[40%] animate-pulse-slow"></div>
                      <div className="absolute w-1 h-1 bg-blue-600 rounded-full top-[35%] left-[50%] animate-pulse-slow animation-delay-300"></div>
                      <div className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full top-[45%] left-[65%] animate-pulse-slow animation-delay-600"></div>
                      <div className="absolute w-1 h-1 bg-blue-700 rounded-full top-[55%] left-[45%] animate-pulse-slow animation-delay-900"></div>
                      <div className="absolute w-2 h-2 bg-blue-600 rounded-full top-[60%] left-[55%] animate-pulse-slow animation-delay-500"></div>
                      <div className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full top-[65%] left-[35%] animate-pulse-slow animation-delay-700"></div>
                    </div>
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
