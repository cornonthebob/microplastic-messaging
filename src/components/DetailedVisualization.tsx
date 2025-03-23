
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Droplets, Fish, Leaf, Trash, Waves } from 'lucide-react';

const plasticLifecycleStages = [
  {
    id: 'production',
    title: 'Production',
    icon: <Trash className="w-6 h-6 text-teal-600" />,
    content: {
      description: 'The global plastic production has increased exponentially from 2.3 million tons in 1950 to over 448 million tons in 2015. The majority of plastics are produced from fossil fuels through energy-intensive processes that involve extraction of raw materials (primarily petroleum), refining, and polymerization. This rapid growth represents a 200-fold increase over 65 years, with an annual growth rate of approximately 8.4%. Single-use plastics account for nearly 50% of all plastic waste, with packaging being the dominant sector.',
      chemistry: 'Polyethylene terephthalate (PET) synthesis:\nTerephthalic acid + Ethylene glycol → PET + Water\n(C₈H₆O₄ + 2C₂H₆O₂ → C₁₀H₈O₄ + 2H₂O)\n\nPolyethylene (PE) synthesis:\nEthylene undergoes free-radical polymerization:\nnCH₂=CH₂ → –(CH₂–CH₂)n–\n\nPolypropylene (PP) synthesis:\nPropylene polymerizes via Ziegler-Natta catalysis:\nnCH₂=CHCH₃ → –[CH₂–CH(CH₃)]n–',
      impact: 'Production of plastics accounts for approximately 4-8% of annual global oil consumption. The manufacturing process generates greenhouse gases and other pollutants, contributing to climate change and air pollution. The carbon footprint of plastic production is estimated at 1.7 kg CO₂ equivalent per kg of plastic produced, meaning global plastic production contributes over 850 million tons of CO₂ equivalent annually. Beyond carbon emissions, plastic manufacturing facilities release numerous airborne toxins including benzene, toluene, ethylbenzene, xylenes, dioxins, and heavy metals that affect local communities and ecosystems.',
      stats: [
        { label: 'Global Annual Production', value: '448+ million tons' },
        { label: 'Energy Used', value: '~8% of global oil production' },
        { label: 'CO₂ Emissions', value: '~850 million tons annually' },
        { label: 'Production Growth Rate', value: '8.4% annually' },
        { label: 'Fossil Fuel Feedstock', value: '99% of all plastics' },
        { label: 'Water Usage', value: '~185 billion liters annually' }
      ]
    },
    color: 'bg-blue-50 border-blue-200'
  },
  {
    id: 'distribution',
    title: 'Distribution & Use',
    icon: <Waves className="w-6 h-6 text-blue-600" />,
    content: {
      description: 'After production, plastics are distributed globally through complex supply chains involving shipping, trucking, and air freight. Single-use plastics account for approximately 40% of all plastic production, with packaging being the largest sector (36% of all plastics). The distribution phase involves significant fossil fuel consumption for transportation, while the use phase varies dramatically based on application—from minutes for a plastic bag to decades for construction materials. An estimated 40% of plastic products become waste within one month of manufacture, highlighting the ephemeral nature of many plastic applications.',
      chemistry: 'During use, plastics may release additives through processes like leaching:\nPlastic + Heat/UV → Plastic + Released Additives\nFor example, BPA release: C₁₅H₁₆O₂ → Surface migration → Environment/Food\n\nPlasticizers like phthalates are not chemically bound to polymers and gradually migrate out:\nPVC + DEHP → PVC + Released DEHP (C₂₄H₃₈O₄)\n\nAdditive release rates increase with temperature, acidity/alkalinity, fat content, and mechanical stress.',
      impact: 'Convenience of plastic has led to a "throwaway culture" with the average use time of many plastic products measured in minutes, while their environmental persistence is measured in centuries. During use, plastic products can leach chemical additives including plasticizers, stabilizers, flame retardants, and colorants—many of which are endocrine disruptors. Microplastics begin shedding during normal use of items like synthetic textiles (up to 700,000 fibers per wash), tires (20% of ocean microplastics), and plastic food containers (especially when heated). The carbon footprint of plastic distribution adds approximately 0.2 kg CO₂ equivalent per kg of plastic.',
      stats: [
        { label: 'Packaging Sector', value: '36% of all plastics' },
        { label: 'Single-use Plastics', value: '40% of production' },
        { label: 'Average Use Time', value: '12 minutes (plastic bag)' },
        { label: 'Microfiber Shedding', value: '700,000 fibers per wash' },
        { label: 'Annual Waste Generation', value: '300 million tons' },
        { label: 'Recycling Rate (Global)', value: 'Only 9% historically' }
      ]
    },
    color: 'bg-teal-50 border-teal-200'
  },
  {
    id: 'degradation',
    title: 'Environmental Degradation',
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    content: {
      description: 'In the environment, plastics are exposed to various degradation processes including photodegradation (UV light), oxidation, mechanical abrasion, and hydrolysis, which slowly break down the polymer chains. Degradation rates vary dramatically by polymer type, environmental conditions, and additives present. For example, polyethylene in marine environments degrades approximately 100 times slower than on land due to lower temperatures and UV exposure. Biodegradable plastics often require specific industrial conditions (temperature, microorganisms) to truly biodegrade and may persist just as long as conventional plastics in natural environments.',
      chemistry: 'Photodegradation process:\nUV radiation → Excitation of chromophoric groups → Free radical formation → Chain scission\nC-C bonds + hν → C• + •C → oxidation → aldehyde, ketone, carboxylic acid formation\n\nOxidative degradation:\nPolymer-H + O₂ → Polymer• + •OOH → Polymer-OOH → Chain scission\n\nHydrolysis of ester bonds (in polyesters like PET):\nPolymer-COO-Polymer + H₂O → Polymer-COOH + HO-Polymer',
      impact: 'Rather than fully degrading, most plastics fragment into smaller and smaller pieces, eventually forming microplastics (<5mm) and nanoplastics (<1μm), which can persist for centuries in the environment. As plastics fragment, their surface area increases dramatically—a 1mm³ fragment broken into 1μm³ pieces increases its surface area by a factor of 1,000. This greater surface area accelerates both leaching of internal additives and adsorption of environmental contaminants. Darker colored plastics generally degrade faster due to increased heat absorption. Microplastic concentrations in marine sediments have doubled approximately every 15 years since the 1940s.',
      stats: [
        { label: 'Degradation Time (PET)', value: '450+ years' },
        { label: 'Surface Area Increase', value: 'Up to 30x as fragmentation occurs' },
        { label: 'Toxin Concentration', value: 'Up to 1,000,000x surrounding water' },
        { label: 'Microplastic Identification', value: '5,500+ different types' },
        { label: 'Ocean Plastics', value: '14 million tons annually' },
        { label: 'Beach Plastic Density', value: 'Up to 100,000 pieces/m²' }
      ]
    },
    color: 'bg-green-50 border-green-200'
  },
  {
    id: 'transport',
    title: 'Environmental Transport',
    icon: <Droplets className="w-6 h-6 text-blue-600" />,
    content: {
      description: 'Microplastics are transported through environmental systems via water currents, wind, precipitation, and biological vectors. They can travel thousands of kilometers from their source. Transport pathways include atmospheric deposition (microplastics have been found in remote mountain snow), riverine systems (which act as conveyor belts to oceans), ocean currents (creating accumulation zones like the Great Pacific Garbage Patch), groundwater percolation, and even trophic transfer (movement through food webs). The buoyancy, size, and shape of plastic particles significantly influence their transport—with some floating on surface waters while others sink to deep-sea sediments.',
      chemistry: 'During transport, microplastics interact with environmental pollutants:\nMicroplastic-CH₂ + Persistent Organic Pollutants (POPs) → Microplastic-CH₂···POPs\nHydrophobic attraction leads to strong adsorption of contaminants.\n\nPartitioning coefficient (Kp) determines adsorption affinity:\nKp = (concentration on plastic) / (concentration in water)\nFor many pollutants, log Kp values range from 3-7, indicating strong plastic affinity.\n\nBiofilm formation on microplastics:\nPlastic surface + Organic matter → Conditioning film → Bacterial colonization → Mature biofilm',
      impact: 'Transport mechanisms have distributed microplastics globally, with particles found from deep sea trenches to mountain tops, remote wilderness areas, and Arctic ice. The small size allows them to enter food webs and eventually human bodies. Microplastics act as vectors for invasive species and pathogens, enabling "rafting" of organisms to new habitats. The "plastisphere"—microbial communities that colonize floating plastics—differ significantly from surrounding water communities and may include harmful bacteria such as Vibrio. As plastics weather during transport, they release not only additives but also the adsorbed environmental pollutants when environmental conditions (pH, temperature) change or when ingested by organisms.',
      stats: [
        { label: 'Oceanic Distribution', value: 'Present in all major oceans' },
        { label: 'Atmospheric Transport', value: 'Up to 100km from source' },
        { label: 'Concentration in Snow', value: 'Up to 154,000 particles/liter' },
        { label: 'Great Pacific Garbage Patch', value: '1.6 million km²' },
        { label: 'Deep Sea Presence', value: 'Found at 10,890m depth' },
        { label: 'Arctic Ice Concentration', value: '12,000 particles/liter' }
      ]
    },
    color: 'bg-blue-50 border-blue-200'
  },
  {
    id: 'biological',
    title: 'Biological Interactions',
    icon: <Fish className="w-6 h-6 text-teal-600" />,
    content: {
      description: 'As microplastics enter ecosystems, they interact with organisms through ingestion, adhesion to tissue surfaces, cellular uptake, and even transfer across biological barriers. The size of microplastics determines their biological fate—particles under 150μm can cross epithelial barriers, those under 20μm can enter the circulatory system, and nanoplastics under 1μm can penetrate cells and even access the nucleus. Microplastics have been documented in the tissues of more than 800 marine and freshwater species spanning all levels of the food web, from zooplankton to large marine mammals. Laboratory studies have demonstrated that ingested microplastics can translocate from the digestive system to the circulatory system and accumulate in organs including the liver, kidneys, and brain.',
      chemistry: 'Cellular interactions involve:\nPhysical damage to cell membranes\nOxidative stress: Plastic particles → ROS generation → Lipid peroxidation\nInflammatory response: Particles → Cytokine release (IL-6, TNF-α)\n\nMechanistic toxicity pathways:\nEndocytosis of nanoplastics: Clathrin-mediated uptake → Lysosomal disruption\nInteraction with cellular proteins: Plastic particles + Protein → Corona formation → Altered protein function\nMitochondrial dysfunction: Particles → Decreased membrane potential → ATP depletion',
      impact: 'Microplastics have been found in over 800 marine and freshwater species. They can cause physical damage like intestinal blockage, pseudo-satiation, and deliver adsorbed toxins. Effects include reduced growth, reproductive impairment, altered behavior, and tissue inflammation. Microplastics can induce multigenerational effects, with studies showing that exposure in parental generations can impact offspring that were never directly exposed. Bioaccumulation and biomagnification processes concentrate microplastics in predatory species, with apex predators showing the highest body burdens. In humans, microplastics have been detected in blood, lungs, placenta, breast milk, and feces—raising concerns about potential impacts on immunity, metabolism, reproduction, and development.',
      stats: [
        { label: 'Affected Marine Species', value: '800+' },
        { label: 'Bioaccumulation Factor', value: 'Up to 200x in predatory fish' },
        { label: 'Human Consumption', value: '~5g plastic weekly (credit card)' },
        { label: 'Blood Concentration', value: 'Up to 1.6 particles/ml' },
        { label: 'Lung Detection Rate', value: 'Present in 11 of 13 samples' },
        { label: 'Placental Transfer', value: 'Confirmed in multiple studies' }
      ]
    },
    color: 'bg-teal-50 border-teal-200'
  }
];

const DetailedVisualization = () => {
  const [expandedStage, setExpandedStage] = useState<string | null>('production');
  const [selectedTab, setSelectedTab] = useState<string>('description');

  const handleStageToggle = (stageId: string) => {
    if (expandedStage === stageId) {
      setExpandedStage(null);
    } else {
      setExpandedStage(stageId);
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-12 h-12 opacity-20 bg-blue-300 rounded-full animate-blob"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 opacity-20 bg-teal-300 rounded-full animate-blob animation-delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 opacity-20 bg-green-300 rounded-full animate-blob animation-delay-700"></div>
      </div>

      <div className="section-container z-10 relative">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-700/10 mb-4">
            Lifecycle Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            Microplastics: A Detailed Exploration
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Follow the journey of plastics from production to their environmental fate, exploring the chemical processes 
            and impacts at each stage of the lifecycle. This comprehensive view illustrates how plastics transform from useful
            materials to persistent environmental pollutants over time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {plasticLifecycleStages.map((stage, index) => (
            <motion.div 
              key={stage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`mb-4 rounded-xl overflow-hidden ${stage.color} border shadow-sm`}
            >
              <button 
                onClick={() => handleStageToggle(stage.id)}
                className="w-full p-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-white shadow-sm">
                    {stage.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{stage.title}</h3>
                </div>
                {expandedStage === stage.id ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>

              {expandedStage === stage.id && (
                <div className="bg-white p-6">
                  <div className="mb-4 border-b border-gray-200">
                    <div className="flex space-x-2 -mb-px">
                      {['description', 'chemistry', 'impact', 'stats'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setSelectedTab(tab)}
                          className={`px-4 py-2 border-b-2 transition-colors ${
                            selectedTab === tab 
                              ? 'border-blue-500 text-blue-600 font-medium' 
                              : 'border-transparent text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="py-2">
                    {selectedTab === 'description' && (
                      <p className="text-gray-700 leading-relaxed">
                        {stage.content.description}
                      </p>
                    )}

                    {selectedTab === 'chemistry' && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-2">Chemical Processes</h4>
                        <div className="bg-gray-50 p-4 rounded-md font-mono text-sm whitespace-pre-line text-gray-700">
                          {stage.content.chemistry}
                        </div>
                      </div>
                    )}

                    {selectedTab === 'impact' && (
                      <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                        <h4 className="text-sm font-semibold text-blue-700 mb-2">Environmental & Health Impact</h4>
                        <p className="text-gray-700">
                          {stage.content.impact}
                        </p>
                      </div>
                    )}

                    {selectedTab === 'stats' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {stage.content.stats.map((stat, i) => (
                          <div key={i} className="bg-gray-50 p-4 rounded-md text-center">
                            <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
                            <p className="text-blue-600 font-semibold text-lg">{stat.value}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedVisualization;
