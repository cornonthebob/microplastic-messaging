
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { plasticTypes } from '@/data/plasticTypes';

const PlasticTypesDetail = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [activePlastic, setActivePlastic] = useState(plasticTypes[0]);

  return (
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
  );
};

export default PlasticTypesDetail;
