
import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Fish, Trash2, AlertTriangle, Anchor, BarChart3 } from 'lucide-react';

interface ChartData {
  year: number;
  value: number;
}

interface OceanRegion {
  name: string;
  pollution: number;
  microplasticCount: string;
  impactScore: number;
  dominantTypes: string[];
}

const microplasticProduction: ChartData[] = [
  { year: 1950, value: 2 },
  { year: 1970, value: 50 },
  { year: 1990, value: 150 },
  { year: 2000, value: 213 },
  { year: 2010, value: 313 },
  { year: 2020, value: 460 },
];

const oceanRegions: OceanRegion[] = [
  {
    name: "North Pacific Gyre",
    pollution: 0.88,
    microplasticCount: "1.8 million pieces/km²",
    impactScore: 9.2,
    dominantTypes: ["Polyethylene", "Polypropylene", "Expanded Polystyrene"]
  },
  {
    name: "Mediterranean Sea",
    pollution: 0.72,
    microplasticCount: "1.25 million pieces/km²",
    impactScore: 8.7,
    dominantTypes: ["PET", "Polyethylene", "Polypropylene"]
  },
  {
    name: "South Pacific",
    pollution: 0.67,
    microplasticCount: "0.5 million pieces/km²",
    impactScore: 7.4,
    dominantTypes: ["HDPE", "LDPE", "Microfibers"]
  },
  {
    name: "Arctic Ocean",
    pollution: 0.45,
    microplasticCount: "0.3 million pieces/km²",
    impactScore: 8.9,
    dominantTypes: ["Microfibers", "PET", "Polyethylene"]
  }
];

const impactCategories = [
  {
    title: "Marine Life",
    icon: <Fish className="h-6 w-6 text-blue-500" />,
    description: "Marine organisms across all trophic levels are now known to ingest microplastics. Over 800 marine species have been documented with plastic in or around their bodies.",
    stats: [
      { label: "Affected Species", value: "800+" },
      { label: "Mortality Rate", value: "Up to 30%" }
    ]
  },
  {
    title: "Food Chain",
    icon: <Anchor className="h-6 w-6 text-blue-500" />,
    description: "Microplastics bioaccumulate in food chains, with concentrations increasing at higher trophic levels. Studies have found microplastics in 25% of fish sold in markets.",
    stats: [
      { label: "Human Consumption", value: "5g weekly" },
      { label: "Bioaccumulation Factor", value: "5-10x" }
    ]
  },
  {
    title: "Toxic Effects",
    icon: <AlertTriangle className="h-6 w-6 text-amber-500" />,
    description: "Plastics contain and absorb toxic chemicals such as PCBs, DDT, and BPA. These toxins can leach into organisms, disrupting hormone systems and causing developmental issues.",
    stats: [
      { label: "Toxin Concentration", value: "Up to 1M× higher" },
      { label: "Persistence", value: "Decades" }
    ]
  },
  {
    title: "Global Spread",
    icon: <BarChart3 className="h-6 w-6 text-green-500" />,
    description: "Microplastics have been found in the most remote locations on Earth, including the Mariana Trench (deepest ocean point) and high mountain glaciers.",
    stats: [
      { label: "Global Distribution", value: "100%" },
      { label: "Annual Increase", value: "4-8%" }
    ]
  }
];

const ChartBar = ({ value, max, year, isLast }: { value: number; max: number; year: number; isLast: boolean }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-64 flex flex-col justify-end relative group">
        <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-900 text-white px-2 py-1 rounded text-xs">
          {value} million tons
        </div>
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: `${(value / max) * 100}%` }}
          transition={{ duration: 1, delay: year/10000 }}
          className={`w-8 rounded-t ${isLast ? 'bg-red-500' : 'bg-blue-500'} relative group`}
        ></motion.div>
      </div>
      <span className="text-sm mt-2">{year}</span>
    </div>
  );
};

const OceanHealth = () => {
  const maxValue = Math.max(...microplasticProduction.map(d => d.value));

  return (
    <section id="ocean-health" className="py-24 relative bg-blue-50 wave-bottom">
      {/* Animated water surface effect */}
      <div className="absolute top-0 left-0 w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-transparent"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 animate-wave">
          <path fill="rgba(59, 130, 246, 0.05)" fillOpacity="1" d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,181.3C672,171,768,181,864,192C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 animate-wave" style={{ animationDelay: '0.5s' }}>
          <path fill="rgba(59, 130, 246, 0.1)" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,170.7C672,181,768,171,864,160C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="section-container">
        <div className="text-center mb-16 relative z-10 opacity-0 animate-fade-in">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-blue-100 text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4">
            Ocean Pollution Crisis
          </span>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
            Ocean Health & Plastic Impact
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            The world's oceans have become the ultimate sink for microplastics, with devastating consequences for marine ecosystems and potentially human health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white rounded-xl shadow-ocean p-6 opacity-0 animate-slide-up">
            <h3 className="text-xl font-bold mb-6 flex items-center text-blue-700">
              <Trash2 className="mr-2 h-5 w-5" />
              Global Plastic Production Trends
            </h3>
            <div className="flex justify-around items-end h-80 mt-10">
              {microplasticProduction.map((data, index) => (
                <ChartBar 
                  key={data.year}
                  value={data.value} 
                  max={maxValue} 
                  year={data.year}
                  isLast={index === microplasticProduction.length - 1}
                />
              ))}
            </div>
            <div className="mt-8 text-center text-gray-500 text-sm">
              Global annual plastic production (million metric tons)
            </div>
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 text-sm leading-relaxed">
                Plastic production has grown exponentially since the 1950s. Of all plastic ever produced, approximately 60% has become waste, with only 9% recycled, 12% incinerated, and the remaining 79% accumulating in landfills and the natural environment.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-ocean p-6 opacity-0 animate-slide-up animation-delay-200">
            <h3 className="text-xl font-bold mb-6 flex items-center text-blue-700">
              <Droplets className="mr-2 h-5 w-5" />
              Microplastic Concentration by Region
            </h3>
            <div className="space-y-6">
              {oceanRegions.map((region) => (
                <div key={region.name} className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-blue-800">{region.name}</h4>
                    <span className="text-sm text-gray-500">{region.microplasticCount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${region.pollution * 100}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="bg-blue-600 h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <div>
                      <span className="font-medium">Dominant Types: </span>
                      {region.dominantTypes.join(", ")}
                    </div>
                    <div>
                      <span className="font-medium">Impact Score: </span>
                      <span className={region.impactScore > 8 ? "text-red-500 font-bold" : "text-amber-500"}>
                        {region.impactScore}/10
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 border border-blue-100 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> Impact scores consider marine life affected, toxin concentration, ecosystem disruption, and bioaccumulation factors.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-6 text-center text-blue-700 opacity-0 animate-fade-in animation-delay-400">
          Key Impact Categories
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (index * 0.1) }}
              className="bg-white rounded-xl shadow-ocean p-6 droplet"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-blue-50">
                  {category.icon}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-center mb-3 text-blue-700">
                {category.title}
              </h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {category.description}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {category.stats.map((stat, i) => (
                  <div key={i} className="bg-blue-50 p-2 rounded text-center">
                    <div className="text-xs text-gray-500">{stat.label}</div>
                    <div className="font-bold text-blue-700">{stat.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl shadow-sm opacity-0 animate-fade-in animation-delay-800">
          <h3 className="text-xl font-bold mb-3 text-blue-800">Did You Know?</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <div className="min-w-6 mr-2 text-blue-500">•</div>
              <p>An estimated 8 million metric tons of plastic waste enters our oceans every year – equivalent to dumping a garbage truck of plastic into the ocean every minute.</p>
            </li>
            <li className="flex items-start">
              <div className="min-w-6 mr-2 text-blue-500">•</div>
              <p>Microplastics have been found in human blood, placenta, and lungs, raising concerns about potential health impacts beyond ocean ecosystems.</p>
            </li>
            <li className="flex items-start">
              <div className="min-w-6 mr-2 text-blue-500">•</div>
              <p>A single washing machine load of polyester clothes can release up to 700,000 microplastic fibers into wastewater systems.</p>
            </li>
            <li className="flex items-start">
              <div className="min-w-6 mr-2 text-blue-500">•</div>
              <p>Microplastics in the ocean are found at all depths, from surface to seafloor, with some of the highest concentrations found in deep-sea sediments.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OceanHealth;
