
import React from 'react';
import { cn } from '@/lib/utils';

interface Solution {
  id: string;
  group: string;
  approach: string;
  description: string;
  advantages: string[];
  limitations: string[];
}

const solutions: Solution[] = [
  {
    id: 'reduction',
    group: 'Government',
    approach: 'Plastic Bans & Regulations',
    description: 'Many countries and localities have enacted bans on specific plastic items like bags, straws, and microbeads. The EU Single-Use Plastics Directive aims to reduce consumption of specific single-use items and implement Extended Producer Responsibility.',
    advantages: [
      'Direct and immediate reduction in plastic waste generation',
      'Creates regulatory framework to incentivize alternatives',
      'Drives market innovation for sustainable materials'
    ],
    limitations: [
      'Implementation and enforcement challenges',
      'Economic impacts on industries dependent on plastic',
      'May shift to alternatives with different environmental impacts',
      'Varies greatly between regions, creating inconsistent global policy'
    ]
  },
  {
    id: 'recycling',
    group: 'Industry',
    approach: 'Advanced Recycling Technologies',
    description: 'Development of chemical recycling methods that break down plastics into their chemical components for reuse. Companies like PureCycle Technologies and Loop Industries are developing processes to depolymerize and repolymerize plastics.',
    advantages: [
      'Can process mixed and contaminated plastics unlike mechanical recycling',
      'Creates virgin-quality recycled materials',
      'Potential for closed-loop plastic systems'
    ],
    limitations: [
      'Currently energy-intensive and expensive',
      'Still in scaling phase with limited capacity',
      'May produce hazardous byproducts if not properly managed',
      'Doesn't address microplastics already in the environment'
    ]
  },
  {
    id: 'biodegradable',
    group: 'Research',
    approach: 'Biodegradable Alternatives',
    description: 'Development of truly biodegradable plastics from renewable resources. Research includes PHA (polyhydroxyalkanoates) produced by bacteria and cellulose-based materials that safely degrade in natural environments.',
    advantages: [
      'Potential for complete biodegradation in natural environments',
      'Can be produced from renewable feedstocks',
      'Reduced persistence in environment if properly designed'
    ],
    limitations: [
      'Currently more expensive than conventional plastics',
      'Many require specific industrial composting conditions',
      'May not perform as well for all applications',
      'Confusion about terms "biodegradable" vs "compostable"'
    ]
  },
  {
    id: 'cleanup',
    group: 'NGOs',
    approach: 'Cleanup Technologies',
    description: 'Organizations like The Ocean Cleanup are developing technologies to remove plastic from oceans and rivers. New innovations include microplastic filters for wastewater treatment plants and household appliances.',
    advantages: [
      'Addresses existing pollution already in environment',
      'Can prevent further fragmentation into microplastics',
      'Raises awareness about plastic pollution'
    ],
    limitations: [
      'Catching microplastics is extremely difficult once dispersed',
      'High energy and resource costs for relatively low capture rates',
      'Treats symptoms rather than root causes',
      'Scale of pollution vastly exceeds current cleanup capabilities'
    ]
  },
  {
    id: 'enzymes',
    group: 'Research',
    approach: 'Plastic-Degrading Enzymes',
    description: 'Scientists have discovered and engineered enzymes capable of breaking down PET and other plastics. In 2020, researchers at the University of Portsmouth and NREL created an improved version called PETase that accelerates plastic degradation.',
    advantages: [
      'Specific to plastic polymer types without harming other materials',
      'Operates at ambient conditions with low energy requirements',
      'Potential for complete depolymerization to monomers for recycling'
    ],
    limitations: [
      'Currently works mainly on PET, not all plastic types',
      'Slow degradation rates for practical applications',
      'Challenges in enzyme delivery and recovery',
      'Environmental impacts of released enzymes not fully understood'
    ]
  },
  {
    id: 'circular',
    group: 'Combined',
    approach: 'Circular Economy Models',
    description: 'Holistic approach focusing on redesigning products and systems to eliminate waste and pollution. Organizations like the Ellen MacArthur Foundation promote circular economy principles: eliminate, innovate, and circulate.',
    advantages: [
      'Addresses entire lifecycle from design to end-of-life',
      'Creates economic incentives for sustainable practices',
      'Reduces resource extraction and waste simultaneously',
      'Encourages system-level innovation'
    ],
    limitations: [
      'Requires coordination across multiple stakeholders',
      'Significant transition costs and infrastructure changes',
      'Cultural and behavioral shifts needed',
      'Complex implementation requiring policy, technology, and business model changes'
    ]
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4">
            Addressing The Crisis
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Approaches to Solving Plastic Pollution</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Various stakeholders are developing solutions to address the microplastic crisis from different angles. Here we evaluate approaches being taken around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 opacity-0 animate-slide-up">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id}
              className={cn(
                "glass-card p-6 opacity-0 animate-slide-up",
                `animation-delay-${(index + 2) * 100}`
              )}
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-800">
                  {solution.group}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{solution.approach}</h3>
              <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Advantages</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {solution.advantages.map((advantage, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500 flex-shrink-0">✓</span>
                        <span>{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Limitations</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {solution.limitations.map((limitation, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-500 flex-shrink-0">•</span>
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-6 md:p-8 border border-blue-100 opacity-0 animate-slide-up animation-delay-800">
          <h3 className="text-2xl font-bold mb-6 text-center">Recommended Approach: The Circular Economy</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-blue-800">Why It's Most Effective</h4>
              <p className="text-gray-700 mb-4">
                After analyzing the various approaches, the circular economy model represents the most comprehensive and sustainable solution to the microplastics crisis. Unlike other approaches that tackle only one aspect of the problem, a circular economy addresses the entire lifecycle of plastics.
              </p>
              <p className="text-gray-700">
                By redesigning how products are made and used, we can prevent plastic waste from being created in the first place, while still maintaining the useful functions that plastics serve in our society. This systems-level approach combines the strengths of other solutions while addressing their limitations.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-blue-800">Implementation Challenges</h4>
              <p className="text-gray-700 mb-4">
                Despite its promise, implementing a circular economy for plastics faces significant challenges:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 flex-shrink-0">•</span>
                  <span><strong>Economic barriers</strong>: Current economic incentives favor virgin plastic production over recycled materials.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 flex-shrink-0">•</span>
                  <span><strong>Technical limitations</strong>: Many plastic products are designed without consideration for end-of-life recycling or reuse.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 flex-shrink-0">•</span>
                  <span><strong>Infrastructure gaps</strong>: Waste management systems in many regions lack the capability to implement circular principles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 flex-shrink-0">•</span>
                  <span><strong>Global coordination</strong>: Requires international cooperation across supply chains and between nations.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-white p-5 rounded-xl border border-blue-100">
            <h4 className="text-lg font-semibold mb-3 text-blue-800">Chemistry's Role in the Solution</h4>
            <p className="text-gray-700 mb-4">
              Chemistry is central to developing circular solutions for plastics. Advances in polymer science are enabling:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 flex-shrink-0">•</span>
                <span><strong>Depolymerization catalysts</strong>: Breaking down polymers into their original monomers (C₁₀H₈O₄)n → nC₁₀H₈O₄</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 flex-shrink-0">•</span>
                <span><strong>Bio-based feedstocks</strong>: Creating polymers from renewable rather than fossil resources</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 flex-shrink-0">•</span>
                <span><strong>Designed degradability</strong>: Engineering polymers that maintain performance during use but can be triggered to degrade under specific conditions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 flex-shrink-0">•</span>
                <span><strong>Safer additives</strong>: Developing non-toxic alternatives to conventional plasticizers, stabilizers, and colorants</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
