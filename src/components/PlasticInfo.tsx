
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
    structure: 'Linear thermoplastic polymer created through polycondensation of terephthalic acid and ethylene glycol. Contains benzene rings connected by ester linkages (-COO-). The aromatic structure provides rigidity and strength while the ester bonds contribute to its degradability under certain conditions. PET has a semi-crystalline structure with amorphous and crystalline regions, typically 30-40% crystallinity in commercial products. Molecular weight ranges from 15,000-30,000 g/mol. Glass transition temperature is approximately 76°C and melting point around 250°C.',
    formation: 'Formed through esterification: HO–C₆H₄–COOH + HOCH₂CH₂OH → HO–C₆H₄–COO–CH₂CH₂OH + H₂O\nFollowed by polycondensation under high temperature (250-280°C) and vacuum.\nCatalysts include antimony trioxide (Sb₂O₃), titanium-based compounds or germanium oxide.\n\nIndustrial synthesis often uses dimethyl terephthalate route:\nCH₃OOC–C₆H₄–COOCH₃ + 2HOCH₂CH₂OH → HOCH₂CH₂OOC–C₆H₄–COOCH₂CH₂OH + 2CH₃OH\n\nPolycondensation proceeds with continuous removal of ethylene glycol to drive reaction forward:\nn(HOCH₂CH₂OOC–C₆H₄–COOCH₂CH₂OH) → (–OCH₂CH₂OOC–C₆H₄–CO–)n + nHOCH₂CH₂OH',
    concerns: 'May leach antimony trioxide catalyst and acetaldehyde when exposed to heat. Studies have found antimony migration up to 100 times faster at 60°C versus 20°C, with migration rates of 0.1-0.3 ng/cm² per day under normal conditions. Antimony is classified as a possible human carcinogen by IARC. Acetaldehyde migration (from thermal degradation) typically ranges from 20-200 μg/kg, below regulatory limits but potentially contributing to total chemical exposure. PET can leach several other compounds including phthalates, formaldehyde, and 2,4-di-tert-butylphenol, especially after repeated use and washing. Studies suggest potential endocrine disruption effects when microplastics form, with in vitro studies showing estrogenic activity in human cell lines. When degraded into microplastics, PET absorbs and concentrates contaminants from environment including persistent organic pollutants (POPs), with partition coefficients (Kp) up to 10⁶ for some compounds.',
    processing: 'Recyclable (Code #1). Often collected, cleaned, melted and reformed. Mechanical recycling degrades polymer chains through hydrolytic and thermal processes, decreasing molecular weight by 10-25% per cycle. Virgin and recycled PET are often blended to maintain properties. Chemical recycling methods include methanolysis, glycolysis, and hydrolysis which break down PET into monomers or oligomers for repolymerization. However, approximately 70% ends up in landfills or environment where it slowly fragments into microplastics over 450+ years. Global PET recycling rates vary significantly: 31% in US, 48% in Europe, 84% in Japan. In landfills, PET contributes to leachate with detectable levels of antimony and organic compounds. When incinerated, PET produces carbon dioxide, water, and trace amounts of aromatic compounds and antimony oxide.',
    biodegradability: 'Not readily biodegradable under normal environmental conditions. Takes hundreds of years to degrade in natural environments. Theoretical complete biodegradation would follow: (C₁₀H₈O₄)n + 10nO₂ → 10nCO₂ + 4nH₂O, but actual processes are much slower with half-lives of 450+ years in marine environments. Enzymatic degradation has been demonstrated with certain microorganisms like Ideonella sakaiensis that produce PETase enzymes, which hydrolyze ester bonds but at very slow rates. These enzymes are being studied for potential bioremediation applications and accelerated PET recycling. Photodegradation and mechanical abrasion cause fragmentation into smaller microplastics rather than complete breakdown, with studies showing approximately 0.08% weight loss per year in marine environments. Under industrial composting conditions (58°C, high humidity, microbial activity), minimal degradation occurs, typically less than 5% after 180 days.',
    commonItems: ['Water bottles', 'Soda bottles', 'Food containers', 'Polyester clothing', 'Carpet fibers', 'Medical packaging', 'Blister packs', 'Microwavable trays']
  },
  {
    id: 'hdpe',
    name: 'High-Density Polyethylene',
    abbreviation: 'HDPE',
    fullName: 'High-Density Polyethylene',
    structure: 'Linear polymer with minimal branching, consisting of repeating ethylene (–CH₂–CH₂–) units with high crystallinity. HDPE typically has 70-80% crystallinity with a density of 0.941-0.965 g/cm³. The linear structure allows polymer chains to pack closely together, resulting in high tensile strength (20-40 MPa), stiffness, and chemical resistance. HDPE has a molecular weight ranging from 200,000-500,000 g/mol. Melting point is approximately 130-135°C with a glass transition temperature below -100°C. The polymer contains predominantly C-C and C-H bonds, which are highly resistant to chemical attack but susceptible to oxidation under certain conditions. Commercial HDPE typically includes additives such as antioxidants, UV stabilizers, and sometimes colorants.',
    formation: 'Produced via Ziegler-Natta polymerization: nCH₂=CH₂ → –(CH₂–CH₂)n–\nUses catalysts (typically titanium and aluminum compounds) under low pressure (2-4 MPa) and moderate temperature (70-300°C).\n\nAlternatively produced using Phillips catalysts (chromium oxides on silica):\nCr²⁺/SiO₂ + nCH₂=CH₂ → Cr complex → –(CH₂–CH₂)n–\n\nModern processes often use metallocene catalysts for better control:\nCp₂ZrCl₂ + methylaluminoxane + nCH₂=CH₂ → –(CH₂–CH₂)n–\n\nPolymerization follows chain-growth mechanism:\nCatalyst-M + CH₂=CH₂ → Catalyst-M-CH₂-CH₂• (initiation)\nCatalyst-M-(CH₂-CH₂)n• + CH₂=CH₂ → Catalyst-M-(CH₂-CH₂)n+1• (propagation)',
    concerns: 'Generally considered one of the safer plastics but can release estrogenic chemicals when degrading. Studies have detected compounds like nonylphenol (1-20 μg/L) and bisphenol A (0.1-10 μg/L) in water exposed to HDPE, particularly after UV exposure or mechanical stress. These compounds have demonstrated endocrine-disrupting effects in aquatic organisms at concentrations as low as 1 μg/L. Additives including antioxidants (e.g., Irganox 1010), UV stabilizers (e.g., benzotriazoles), and colorants can leach from HDPE, especially when exposed to acidic or fatty substances. Microplastics from HDPE interact with persistent organic pollutants, potentially transferring these toxins into organisms. HDPE has been shown to adsorb polychlorinated biphenyls (PCBs) at concentrations up to 100,000 times higher than surrounding water. The manufacturing process for HDPE releases volatile organic compounds, particulate matter, and greenhouse gases, with approximately 1.8 kg CO₂ equivalent emitted per kg HDPE produced. Workers in production facilities may be exposed to ethylene, catalysts, and various additives with potential health effects.',
    processing: 'Recyclable (Code #2). Can be processed into lumber-like products, drainage pipes, and other durable goods. Mechanical recycling involves sorting, washing, grinding, and remelting, with each cycle typically reducing molecular weight by 5-10% through thermo-oxidative degradation. Virgin and recycled materials are often blended at ratios of 60:40 to 80:20 to maintain performance properties. HDPE recycling is fairly efficient with relatively high purity streams and good mechanical property retention. Global recycling rates vary considerably: approximately 30% in US, 42% in Europe, and higher in some Asian markets. Non-recycled HDPE persists in landfills or environment, fragmenting into microplastics through mechanical weathering and UV exposure. Under landfill conditions, virtually no biodegradation occurs, though some additives may leach out. When incinerated, HDPE produces approximately 43 MJ/kg of energy with primary combustion products being carbon dioxide and water, though incomplete combustion can generate various hydrocarbons.',
    biodegradability: 'Not biodegradable under normal environmental conditions. Takes 100+ years to degrade. Theoretical complete mineralization follows: –(CH₂–CH₂)n– + 3nO₂ → 2nCO₂ + 2nH₂O, but actual degradation is predominantly abiotic. Degrades primarily through photodegradation, creating smaller and smaller plastic fragments. UV radiation generates free radicals: RH + hν → R• + H•, followed by oxidation reactions introducing carbonyl groups that weaken the polymer. Studies in marine environments show weight loss of approximately 0.05% per year. Under standard composting conditions, HDPE shows no significant biodegradation (<2% after one year). Some researchers have identified specific microbial strains (including Brevibacillus borstelensis and Rhodococcus ruber) that can partially degrade pre-oxidized HDPE under laboratory conditions, but rates remain extremely slow with biodegradation measured at 2.5-11% over 30-60 days under optimized conditions. Most "biodegradable" HDPE products rely on additive packages that promote fragmentation rather than true biodegradation.',
    commonItems: ['Milk jugs', 'Detergent bottles', 'Toys', 'Pipe systems', 'Grocery bags', 'Food storage containers', 'Fuel tanks', 'Cutting boards', 'Outdoor furniture']
  },
  {
    id: 'pvc',
    name: 'Polyvinyl Chloride',
    abbreviation: 'PVC',
    fullName: 'Polyvinyl Chloride',
    structure: 'Vinyl polymer with chlorine atoms attached to carbon backbone: –(CH₂–CHCl)n–. Requires plasticizers to be flexible. PVC has an atactic structure with randomly oriented chlorine atoms, resulting in a primarily amorphous polymer with low crystallinity (5-10%). The presence of chlorine (57% by weight) contributes to PVC's flame resistance, chemical stability, and high specific gravity (1.3-1.7 g/cm³). Rigid PVC has a glass transition temperature of approximately 85°C. Flexible PVC properties vary widely based on plasticizer content (typically 15-60% by weight), with common plasticizers including phthalates (DEHP, DINP, DIDP), adipates, and more recently non-phthalate alternatives like DOTP. Commercial formulations contain numerous additives including heat stabilizers (lead, calcium-zinc, or organotin compounds), lubricants, impact modifiers, fillers, and processing aids. The molecular weight typically ranges from 50,000-120,000 g/mol, with higher values for rigid applications.',
    formation: 'Free radical polymerization: nCH₂=CHCl → –(CH₂–CHCl)n–\nInitiated by peroxides at 40-70°C. Suspension polymerization is common industrial method.\n\nDetailed mechanism:\nInitiation: R-O-O-R → 2RO• (peroxide decomposition)\nRO• + CH₂=CHCl → RO-CH₂-CHCl• (radical formation)\n\nPropagation: RO-CH₂-CHCl• + nCH₂=CHCl → RO-(CH₂-CHCl)n-CH₂-CHCl•\n\nTermination: 2RO-(CH₂-CHCl)n-CH₂-CHCl• → RO-(CH₂-CHCl)n+m-RO (combination)\nOr: RO-(CH₂-CHCl)n-CH₂-CHCl• + RO-(CH₂-CHCl)m-CH₂-CHCl• →\nRO-(CH₂-CHCl)n-CH=CHCl + RO-(CH₂-CHCl)m-CH₂-CH₂Cl (disproportionation)\n\nIndustrial production methods include suspension (80%), emulsion (10%), and bulk polymerization (10%).',
    concerns: 'Contains chlorine (57% by weight). Releases toxic compounds including dioxins when burned. Phthalate plasticizers are endocrine disruptors that can leach out over time. Manufacturing process uses carcinogenic vinyl chloride monomer. Rigid PVC is relatively stable, but flexible PVC can leach significant amounts of plasticizers, with migration rates of 1-500 μg/cm²/day depending on conditions. DEHP (di-2-ethylhexyl phthalate), a common plasticizer until recently, is classified as a probable human carcinogen and reproductive toxicant. Studies have shown plasticizer concentrations in indoor air (100-1000 ng/m³) and dust (100-1000 μg/g) from PVC products. Medical PVC has been associated with DEHP exposure in patients, with premature infants potentially receiving doses up to 20 mg/kg/day during intensive medical procedures. When incinerated, PVC produces hydrogen chloride gas and potentially chlorinated dioxins and furans, among the most toxic substances known. Dioxin concentration in incinerator emissions ranges from 0.5-10 ng TEQ/m³ without proper controls. The vinyl chloride monomer used in production is a known human carcinogen associated with angiosarcoma of the liver and other cancers. Worker exposure in production facilities has been linked to increased cancer risk, with historical exposures sometimes exceeding 1000 ppm (current limits are 1 ppm).',
    processing: 'Rarely recycled (Code #3) due to chlorine content and additives. Mostly sent to landfills where plasticizers can leach into groundwater. Incineration produces hydrochloric acid and dioxins. Post-consumer recycling rates are extremely low (less than 3% globally) due to contamination concerns, additive variability, and degradation during processing. Mechanical recycling is primarily limited to pre-consumer waste and specific applications like window profiles or pipes. Chemical recycling methods include VinyLoop process (selective dissolution and reprecipitation) and pyrolysis to recover hydrochloric acid and hydrocarbon oils. In landfills, flexible PVC loses plasticizers over time, with leachate concentrations of DEHP typically 10-100 μg/L. Under optimal conditions using modern air pollution control, PVC incineration can capture 99.9% of hydrogen chloride and reduce dioxin emissions to 0.1 ng TEQ/m³, though these standards aren't universally achieved. Specialized recycling technologies include the Vinyloop process, which selectively dissolves and reprecipitates PVC, recovering both the polymer and some additives. Some European countries have implemented PVC collection systems for specific applications (pipes, profiles, flooring) with recycling rates reaching 25-30% for these streams.',
    biodegradability: 'Extremely resistant to biodegradation, with estimated degradation times of 1000+ years. Plasticizers may biodegrade but the polymer backbone remains intact, shedding microplastics into the environment. Under laboratory conditions using selected microbial strains, minimal biodegradation (<1%) has been observed over extended periods. Theoretical complete mineralization would follow: (CH₂CHCl)n + 2.25nO₂ → 2nCO₂ + nH₂O + nHCl, but in practice, minimal mineralization occurs in environmental settings. Photodegradation occurs primarily through dehydrochlorination: –(CH₂–CHCl)n– + heat/UV → –(CH=CH)n– + nHCl, creating conjugated polyenes that cause yellowing and embrittlement. This process is autocatalytic, as released HCl accelerates further degradation. Weathered PVC releases microplastics at rates of approximately 0.02-0.1% per year in marine environments. In landfills, flexible PVC may lose up to 50% of plasticizer content over decades through leaching, while the polymer chain remains essentially intact. Some fungi species (Aspergillus, Penicillium, and Phanerochaete) have shown limited ability to degrade plasticized PVC under controlled conditions, primarily attacking the plasticizers rather than the polymer.',
    commonItems: ['Pipes', 'Vinyl flooring', 'Window frames', 'Medical tubing', 'Wire insulation', 'Vinyl siding', 'Credit cards', 'Synthetic leather', 'Shower curtains', 'Inflatable pools']
  }
];

const PlasticInfo = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [activePlastic, setActivePlastic] = useState(plasticTypes[0]);

  return (
    <>
      <section className="bg-white">
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
                Microplastics are tiny plastic particles less than 5mm in diameter, barely visible to the naked eye. They come in various forms including fragments, fibers, beads, films, and foams. These minuscule particles are created either intentionally for products (primary microplastics) or through the breakdown of larger plastic items (secondary microplastics). The smallest microplastics, called nanoplastics (less than 1μm), can be particularly problematic as they can penetrate cells and tissues.
              </p>
              <p className="text-gray-600">
                As plastics break down into microplastics, their surface area increases dramatically, enhancing their ability to absorb and concentrate environmental toxins up to a million times their levels in surrounding water. A 1cm³ plastic fragment that degrades into 1μm³ particles increases its surface area by a factor of 10,000, creating vastly more area for chemical interactions. This surface chemistry is crucial to understanding their environmental impact, as it allows them to act as vectors for pollutants including persistent organic pollutants (POPs), heavy metals, and pathogens.
              </p>
              <p className="text-gray-600">
                Microplastics have been documented in every environment studied—from the deepest ocean trenches to mountaintops, from Arctic ice to remote wilderness. Scientists estimate that 14 million tons of microplastics currently reside on the ocean floor alone. These particles have been found in drinking water (global average of 94 particles/L in tap water), air (0.4-60 particles/m³), soil (up to 300,000 particles/kg), and food (0-100 particles/g in seafood). The abundance and persistence of these particles have led some researchers to propose using them as geological markers for the Anthropocene epoch.
              </p>
            </div>

            <div className="glass-card p-6 opacity-0 animate-slide-up animation-delay-400">
              <h4 className="text-xl font-semibold mb-4">How Do Microplastics Form?</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">1</div>
                  <div>
                    <span className="font-medium">Physical Breakdown</span>: Larger plastics fragment due to UV radiation (photodegradation), mechanical abrasion, and weathering. This process accelerates in marine environments where wave action and sand particles create a "plastic sand" effect. Freeze-thaw cycles and thermal stress further contribute to fragmentation by creating microcracks that propagate through the material.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">2</div>
                  <div>
                    <span className="font-medium">Chemical Degradation</span>: Oxidation and hydrolysis weaken polymer chains, causing structural breakdown. Oxidative degradation introduces carbonyl groups (-C=O) into the polymer backbone, making it more brittle. Hydrolysis attacks ester linkages in polymers like polyethylene terephthalate (PET) and polyurethane, cleaving the polymer chain. These processes are catalyzed by environmental factors including pH extremes, elevated temperatures, and the presence of certain metal ions.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">3</div>
                  <div>
                    <span className="font-medium">Direct Manufacturing</span>: Some microplastics (microbeads) are purposely manufactured for products like exfoliants and cosmetics. These primary microplastics are typically 10μm to 1mm in size and made from polyethylene, polypropylene, or polystyrene. Though banned in rinse-off cosmetics in many countries since 2015-2018, they remain legal in leave-on products and industrial applications. An estimated 15-51 trillion microbeads enter aquatic environments annually from cosmetic sources alone.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">4</div>
                  <div>
                    <span className="font-medium">Synthetic Fibers</span>: Washing synthetic textiles releases microfibers into wastewater systems. A single wash of polyester garments can release 700,000 to 6 million microfibers. These fibers (typically 100μm-5mm in length and 10-20μm in diameter) are particularly concerning as their high surface-to-volume ratio enhances contaminant adsorption. Studies have found synthetic fibers in 83% of tap water samples globally and in the digestive tracts of numerous marine organisms.
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
                <p className="text-gray-600 text-sm">
                  Through contaminated food (especially seafood), drinking water, and food packaging. Seafood is a major source, with shellfish containing 0.2-4 particles/g and fish 1-7 particles/individual. Drinking water contains 0-61 particles/L (tap) and 2-241 particles/L (bottled). Food packaging contributes through migration, with studies showing 100-700 particles/kg in packaged foods. Dietary intake is estimated at 39,000-52,000 particles annually for adults, with individuals who consume primarily bottled water ingesting an additional 90,000 particles yearly compared to those drinking tap water. Salt, honey, beer, and other foods also contain detectable levels. Recent studies suggest consumption of organic produce and freshly prepared meals can reduce ingestion by 30-40%.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Inhalation</h4>
                <p className="text-gray-600 text-sm">
                  Breathing in airborne microplastic particles and fibers suspended in air. Indoor air typically contains higher concentrations (1.7-16.2 particles/m³) than outdoor air (0.3-1.5 particles/m³), with synthetic textiles being a major source. Measurements in household dust show 1,000-60,000 microplastic particles per gram, dominated by PET and nylon fibers. Respiratory deposition models indicate that adults inhale 26-130 microplastic particles daily, with 8-60% depositing in lung tissue depending on particle characteristics. Occupational exposure in textile factories, plastic manufacturing, and waste processing facilities can be significantly higher (20-5,000 particles/m³). Inhalation exposure is associated with respiratory irritation, asthma exacerbation, and potentially more serious conditions including interstitial lung disease. Nanoparticles under 0.1μm can cross from the lungs into the circulatory system.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Dermal Contact</h4>
                <p className="text-gray-600 text-sm">
                  Absorption through skin from cosmetics, cleaning products, and synthetic clothing. The skin presents a significant barrier, but nanoparticles below 100nm may penetrate, particularly through hair follicles or damaged skin. Cosmetics are a significant source, with leave-on products (lotions, makeup) containing up to 24% microplastic content by weight. These include both solid particles and soluble synthetic polymers like polyacrylamides. Studies have demonstrated that plastic nanoparticles can penetrate the stratum corneum and migrate to deeper skin layers. Microplastic particles have been found to remain in hair follicles for up to 10 days, potentially allowing for prolonged release of adsorbed chemicals. People with skin conditions including eczema and psoriasis may have higher absorption rates due to compromised skin barrier function. Dermal exposure is associated with skin irritation, sensitization, and potentially systemic toxicity from absorbed chemicals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4">
              Chemical Composition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Common Plastic Types</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-8 rounded-full"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Different types of plastic have unique chemical structures, properties, and environmental impacts. Here we examine three of the most common plastics found in everyday items, analyzing their composition, production methods, and environmental fate in detail to understand their contribution to microplastic pollution.
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
    </>
  );
};

export default PlasticInfo;
