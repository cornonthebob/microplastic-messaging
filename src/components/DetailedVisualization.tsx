
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Droplets, Fish, Leaf, Trash, Waves } from 'lucide-react';

const plasticLifecycleStages = [
  {
    id: 'production',
    title: 'Production',
    icon: <Trash className="w-6 h-6 text-teal-600" />,
    content: {
      description: 'The global plastic production has increased exponentially from 2.3 million tons in 1950 to over 448 million tons in 2015. The majority of plastics are produced from fossil fuels through energy-intensive processes.',
      chemistry: 'Polyethylene terephthalate (PET) synthesis:\nTerephthalic acid + Ethylene glycol → PET + Water\n(C₈H₆O₄ + 2C₂H₆O₂ → C₁₀H₈O₄ + 2H₂O)',
      impact: 'Production of plastics accounts for approximately 4-8% of annual global oil consumption. The manufacturing process generates greenhouse gases and other pollutants, contributing to climate change and air pollution.',
      stats: [
        { label: 'Global Annual Production', value: '448+ million tons' },
        { label: 'Energy Used', value: '~8% of global oil production' },
        { label: 'CO₂ Emissions', value: '~400 million tons annually' }
      ]
    },
    color: 'bg-blue-50 border-blue-200'
  },
  {
    id: 'distribution',
    title: 'Distribution & Use',
    icon: <Waves className="w-6 h-6 text-blue-600" />,
    content: {
      description: 'After production, plastics are distributed globally through complex supply chains. Single-use plastics account for approximately 40% of all plastic production, with packaging being the largest sector (36% of all plastics).',
      chemistry: 'During use, plastics may release additives through processes like leaching:\nPlastic + Heat/UV → Plastic + Released Additives\nFor example, BPA release: C₁₅H₁₆O₂ → Surface migration → Environment/Food',
      impact: 'Convenience of plastic has led to a "throwaway culture" with the average use time of many plastic products measured in minutes, while their environmental persistence is measured in centuries.',
      stats: [
        { label: 'Packaging Sector', value: '36% of all plastics' },
        { label: 'Single-use Plastics', value: '40% of production' },
        { label: 'Average Use Time', value: '12 minutes (plastic bag)' }
      ]
    },
    color: 'bg-teal-50 border-teal-200'
  },
  {
    id: 'degradation',
    title: 'Environmental Degradation',
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    content: {
      description: 'In the environment, plastics are exposed to various degradation processes including photodegradation (UV light), oxidation, mechanical abrasion, and hydrolysis, which slowly break down the polymer chains.',
      chemistry: 'Photodegradation process:\nUV radiation → Excitation of chromophoric groups → Free radical formation → Chain scission\nC-C bonds + hν → C• + •C → oxidation → aldehyde, ketone, carboxylic acid formation',
      impact: 'Rather than fully degrading, most plastics fragment into smaller and smaller pieces, eventually forming microplastics (<5mm) and nanoplastics (<1μm), which can persist for centuries in the environment.',
      stats: [
        { label: 'Degradation Time (PET)', value: '450+ years' },
        { label: 'Surface Area Increase', value: 'Up to 30x as fragmentation occurs' },
        { label: 'Toxin Concentration', value: 'Up to 1,000,000x surrounding water' }
      ]
    },
    color: 'bg-green-50 border-green-200'
  },
  {
    id: 'transport',
    title: 'Environmental Transport',
    icon: <Droplets className="w-6 h-6 text-blue-600" />,
    content: {
      description: 'Microplastics are transported through environmental systems via water currents, wind, precipitation, and biological vectors. They can travel thousands of kilometers from their source.',
      chemistry: 'During transport, microplastics interact with environmental pollutants:\nMicroplastic-CH₂ + Persistent Organic Pollutants (POPs) → Microplastic-CH₂···POPs\nHydrophobic attraction leads to strong adsorption of contaminants.',
      impact: 'Transport mechanisms have distributed microplastics globally, with particles found from deep sea trenches to mountain tops, remote wilderness areas, and Arctic ice. The small size allows them to enter food webs and eventually human bodies.',
      stats: [
        { label: 'Oceanic Distribution', value: 'Present in all major oceans' },
        { label: 'Atmospheric Transport', value: 'Up to 100km from source' },
        { label: 'Concentration in Snow', value: 'Up to 154,000 particles/liter' }
      ]
    },
    color: 'bg-blue-50 border-blue-200'
  },
  {
    id: 'biological',
    title: 'Biological Interactions',
    icon: <Fish className="w-6 h-6 text-teal-600" />,
    content: {
      description: 'As microplastics enter ecosystems, they interact with organisms through ingestion, adhesion to tissue surfaces, cellular uptake, and even transfer across biological barriers.',
      chemistry: 'Cellular interactions involve:\nPhysical damage to cell membranes\nOxidative stress: Plastic particles → ROS generation → Lipid peroxidation\nInflammatory response: Particles → Cytokine release (IL-6, TNF-α)',
      impact: 'Microplastics have been found in over 800 marine and freshwater species. They can cause physical damage like intestinal blockage, pseudo-satiation, and deliver adsorbed toxins. Effects include reduced growth, reproductive impairment, altered behavior, and tissue inflammation.',
      stats: [
        { label: 'Affected Marine Species', value: '800+' },
        { label: 'Bioaccumulation Factor', value: 'Up to 200x in predatory fish' },
        { label: 'Human Consumption', value: '~5g plastic weekly (credit card)' }
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
            and impacts at each stage of the lifecycle.
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
