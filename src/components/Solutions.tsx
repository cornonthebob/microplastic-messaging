
import React from 'react';
import { cn } from '@/lib/utils';

const Solutions = () => {
  return (
    <section className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-700/10 mb-4">
            Taking Action
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Solutions to Plastic Pollution</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Addressing plastic pollution requires a multifaceted approach involving individuals, industries, and governments.
            Here are comprehensive strategies to mitigate the impact of microplastics across the entire life cycle from
            production to environmental remediation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6 opacity-0 animate-slide-up">
            <h3 className="text-2xl font-semibold">Reduce, Reuse, Recycle</h3>
            <p className="text-gray-600">
              The cornerstone of addressing plastic pollution is reducing our reliance on single-use plastics.
              This involves making conscious choices to reuse items and recycle plastics properly, following the waste
              hierarchy that prioritizes prevention over management.
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li>
                <strong>Reduce:</strong> Minimize consumption of single-use plastics like bags, bottles, and packaging.
                Implement "plastic-free" initiatives in households, businesses, and communities. Redesign products for
                longevity and sustainability, reducing unnecessary packaging through innovative materials and minimalist
                design principles.
              </li>
              <li>
                <strong>Reuse:</strong> Opt for reusable alternatives such as water bottles, shopping bags, and food containers.
                Design products with reuse systems in mind, like refillable packaging and deposit return schemes that have
                shown 70-95% return rates in successful implementations. Establish comprehensive reuse infrastructure
                including cleaning facilities and standardized packaging.
              </li>
              <li>
                <strong>Recycle:</strong> Properly dispose of recyclable plastics to ensure they are processed into new products.
                Improve collection systems with harmonized labeling and sorting technologies. Enhance mechanical recycling
                through contamination reduction and market development. Implement chemical recycling for currently non-recyclable
                materials through processes like pyrolysis, gasification, and solvolysis that break polymers down to their
                chemical building blocks.
              </li>
            </ul>

            <div className="glass-card p-6">
              <h4 className="text-xl font-semibold mb-4">Extended Producer Responsibility (EPR)</h4>
              <p className="text-gray-600">
                EPR schemes hold producers responsible for the end-of-life management of their products, incentivizing them
                to design for recyclability and reduce waste. Comprehensive EPR policies include:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-gray-600">
                <li>Modulated fees based on product recyclability and recycled content</li>
                <li>Collection and recycling targets with enforcement mechanisms</li>
                <li>Mandatory product design requirements that facilitate recycling</li>
                <li>Producer funding for cleanup activities and waste management infrastructure</li>
                <li>Data reporting requirements to track progress and ensure accountability</li>
              </ul>
              <p className="mt-3 text-gray-600">
                Successful implementations include Germany's packaging ordinance, which achieved 90% collection rates,
                and South Korea's EPR system, which increased recycling rates from 54% to 84% over 10 years.
              </p>
            </div>
          </div>

          <div className="space-y-6 opacity-0 animate-slide-up animation-delay-200">
            <h3 className="text-2xl font-semibold">Technological Innovations</h3>
            <p className="text-gray-600">
              Advancements in technology offer promising solutions for capturing, breaking down, and preventing plastic pollution.
              These innovations target different stages of the plastic lifecycle, from production alternatives to environmental remediation.
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li>
                <strong>Advanced Recycling:</strong> Chemical recycling technologies can break down plastics into their original
                building blocks, allowing for the creation of virgin-quality plastics from waste. Processes include:
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
                  <li>Pyrolysis: Thermal decomposition in oxygen-free environment (450-700°C)</li>
                  <li>Gasification: Partial oxidation at high temperatures (800-1500°C)</li>
                  <li>Solvolysis: Using solvents to depolymerize plastics under controlled conditions</li>
                  <li>Enzymatic depolymerization: Using engineered enzymes to break down polymers</li>
                </ul>
              </li>
              <li>
                <strong>Biodegradable Plastics:</strong> Development and adoption of biodegradable and compostable plastics made
                from renewable resources can reduce the persistence of plastics in the environment. Current materials include:
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
                  <li>PHA (polyhydroxyalkanoates): Produced by bacterial fermentation, marine biodegradable</li>
                  <li>PLA (polylactic acid): Derived from cornstarch or sugarcane, industrially compostable</li>
                  <li>Cellulose-based polymers: Derived from wood pulp or cotton, biodegradable under specific conditions</li>
                </ul>
              </li>
              <li>
                <strong>Microplastic Filtration:</strong> Innovative filtration systems can capture microplastics from wastewater
                treatment plants, preventing them from entering waterways. Technologies include:
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
                  <li>Membrane bioreactors with pore sizes below 0.1μm</li>
                  <li>Electrocoagulation processes achieving 90%+ microplastic removal</li>
                  <li>Advanced oxidation processes that break down microplastics</li>
                  <li>Magnetic separation using functionalized iron oxide nanoparticles</li>
                </ul>
              </li>
            </ul>

            <div className="glass-card p-6">
              <h4 className="text-xl font-semibold mb-4">Ocean Cleanup Technologies</h4>
              <p className="text-gray-600">
                Initiatives like The Ocean Cleanup are developing technologies to remove existing plastic debris from the oceans,
                targeting both macroplastics and microplastics. These technologies include:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-gray-600">
                <li>Passive collection systems using ocean currents (e.g., The Ocean Cleanup's System 002)</li>
                <li>Autonomous drone vessels with collection mechanisms (e.g., WasteShark)</li>
                <li>Beach cleanup robots that sort and collect plastic fragments</li>
                <li>River interception technologies that prevent plastics from reaching oceans</li>
                <li>Novel materials that selectively adsorb microplastics from water</li>
              </ul>
              <p className="mt-3 text-gray-600">
                While promising, these remediation efforts face significant challenges including the vast scale of pollution,
                potential ecosystem impacts, and the continuous influx of new plastics. They are most effective as part of
                comprehensive strategies that also address upstream sources.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 glass-card p-8 opacity-0 animate-slide-up animation-delay-400">
          <h3 className="text-2xl font-semibold mb-6 text-center">Policy and Regulation</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Prohibitions and Restrictions</h4>
              <p className="text-gray-600 text-sm">
                Implementing bans on problematic plastics including single-use bags, straws, and microbeads. 
                The EU Single-Use Plastics Directive prohibits 10 single-use items and has achieved 70% reduction in 
                plastic bag use in member states. Similar bans now cover 170+ countries. Microbeads are banned in 
                16 countries, eliminating trillions of plastic particles.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Economic Instruments</h4>
              <p className="text-gray-600 text-sm">
                Implementing market-based tools including plastic taxes, deposit-return schemes, and landfill levies. 
                The UK Plastic Packaging Tax (£200/ton on packaging with less than 30% recycled content) has driven 
                significant industry innovation. Norway's deposit system achieves 92% PET bottle return rates. 
                The EU's proposed €0.80/kg levy on non-recycled plastic packaging waste incentivizes national action.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4v-3a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Standards and Certification</h4>
              <p className="text-gray-600 text-sm">
                Establishing standards for plastic recyclability, biodegradability, and compostability ensures consistent 
                and effective waste management. ISO 14021 defines recycled content claims. ASTM D6400 and EN 13432 specify 
                industrial compostability requirements. TÜV Austria's "OK Biodegradable MARINE" certification verifies marine 
                biodegradability. These standards prevent greenwashing and provide clarity for consumers and manufacturers.
              </p>
            </div>
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 bg-white">
              <h4 className="text-xl font-semibold mb-4">International Cooperation</h4>
              <p className="text-gray-600">
                Global plastic pollution requires coordinated international action:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-gray-600">
                <li>UN Treaty on Plastic Pollution (in negotiation): Aiming to address the full lifecycle of plastics</li>
                <li>Basel Convention Plastic Waste Amendments: Regulating transboundary movements of plastic waste</li>
                <li>G7 Ocean Plastics Charter: Commitment to 100% reusable, recyclable, or recoverable plastics by 2030</li>
                <li>Regional action plans like the EU's Circular Economy Action Plan and ASEAN Framework of Action on Marine Debris</li>
              </ul>
            </div>
            
            <div className="glass-card p-6 bg-white">
              <h4 className="text-xl font-semibold mb-4">Community and Education Initiatives</h4>
              <p className="text-gray-600">
                Raising awareness and changing behaviors through:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-gray-600">
                <li>Citizen science projects like the International Coastal Cleanup, which has engaged over 17 million volunteers</li>
                <li>School curriculum integration teaching plastic literacy from early education</li>
                <li>Community-based programs that develop local solutions tailored to specific contexts</li>
                <li>Behavior change campaigns using social marketing principles and nudge approaches</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <h4 className="text-xl font-semibold mb-4">A Circular Economy Approach</h4>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The most comprehensive solution integrates all these measures within a circular economy framework that:
            </p>
            <div className="mt-4 grid grid-cols-4 gap-2 max-w-3xl mx-auto">
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-medium text-green-700">Designs out waste</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-medium text-green-700">Keeps materials in use</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-medium text-green-700">Regenerates natural systems</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-medium text-green-700">Creates new economic opportunities</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              The Ellen MacArthur Foundation estimates that applying circular economy principles to plastics could reduce their 
              lifecycle greenhouse gas emissions by 25% and generate annual savings of $200 billion in the packaging sector alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
