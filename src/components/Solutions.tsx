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
            Here are some key strategies to mitigate the impact of microplastics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6 opacity-0 animate-slide-up">
            <h3 className="text-2xl font-semibold">Reduce, Reuse, Recycle</h3>
            <p className="text-gray-600">
              The cornerstone of addressing plastic pollution is reducing our reliance on single-use plastics.
              This involves making conscious choices to reuse items and recycle plastics properly.
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li>
                <strong>Reduce:</strong> Minimize consumption of single-use plastics like bags, bottles, and packaging.
              </li>
              <li>
                <strong>Reuse:</strong> Opt for reusable alternatives such as water bottles, shopping bags, and food containers.
              </li>
              <li>
                <strong>Recycle:</strong> Properly dispose of recyclable plastics to ensure they are processed into new products.
              </li>
            </ul>

            <div className="glass-card p-6">
              <h4 className="text-xl font-semibold mb-4">Extended Producer Responsibility (EPR)</h4>
              <p className="text-gray-600">
                EPR schemes hold producers responsible for the end-of-life management of their products, incentivizing them
                to design for recyclability and reduce waste.
              </p>
            </div>
          </div>

          <div className="space-y-6 opacity-0 animate-slide-up animation-delay-200">
            <h3 className="text-2xl font-semibold">Technological Innovations</h3>
            <p className="text-gray-600">
              Advancements in technology offer promising solutions for capturing, breaking down, and preventing plastic pollution.
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li>
                <strong>Advanced Recycling:</strong> Chemical recycling technologies can break down plastics into their original
                building blocks, allowing for the creation of virgin-quality plastics from waste.
              </li>
              <li>
                <strong>Biodegradable Plastics:</strong> Development and adoption of biodegradable and compostable plastics made
                from renewable resources can reduce the persistence of plastics in the environment.
              </li>
              <li>
                <strong>Microplastic Filtration:</strong> Innovative filtration systems can capture microplastics from wastewater
                treatment plants, preventing them from entering waterways.
              </li>
            </ul>

            <div className="glass-card p-6">
              <h4 className="text-xl font-semibold mb-4">Ocean Cleanup Technologies</h4>
              <p className="text-gray-600">
                Initiatives like The Ocean Cleanup are developing technologies to remove existing plastic debris from the oceans,
                targeting both macroplastics and microplastics.
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
              <h4 className="font-semibold mb-2">Plastic Bag Bans</h4>
              <p className="text-gray-600 text-sm">Implementing bans on single-use plastic bags to reduce their consumption and environmental impact.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Taxation on Plastics</h4>
              <p className="text-gray-600 text-sm">Imposing taxes on the production and use of virgin plastics to incentivize the use of recycled materials.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4v-3a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Standardization</h4>
              <p className="text-gray-600 text-sm">Establishing standards for plastic recyclability and biodegradability to ensure consistent and effective waste management.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
