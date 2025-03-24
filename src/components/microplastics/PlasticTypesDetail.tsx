
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { plasticTypes } from '@/data/plasticTypes';
import { FlaskConical, TestTube, Waves } from 'lucide-react';

const PlasticTypesDetail = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [activePlastic, setActivePlastic] = useState(plasticTypes[0]);

  return (
    <section className="bg-gray-50 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      
      {/* Floating microplastic particles */}
      <div className="absolute w-12 h-3 rounded-sm bg-blue-200/30 top-1/4 left-1/5 transform rotate-12 floating-plastic"></div>
      <div className="absolute w-4 h-4 rounded-full bg-teal-200/30 bottom-1/3 right-1/4 transform -rotate-6 floating-plastic animation-delay-500"></div>
      <div className="absolute w-8 h-8 rounded-sm bg-white/20 top-2/3 left-1/3 transform rotate-45 floating-plastic animation-delay-700"></div>

      <div className="section-container relative z-10">
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
        
        <div className="relative mb-16 opacity-0 animate-fade-in animation-delay-300">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 transform -translate-y-1/2"></div>
          <div className="relative z-10 flex justify-around">
            {plasticTypes.map((plastic, index) => (
              <div key={plastic.id} className="flex flex-col items-center">
                <div className="relative">
                  <div className={cn(
                    "w-24 h-24 rounded-full flex items-center justify-center mb-3 transition-all duration-300 relative",
                    activePlastic.id === plastic.id 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "bg-white text-gray-700 hover:bg-blue-50"
                  )}>
                    <button
                      onClick={() => setActivePlastic(plastic)}
                      className="absolute inset-0 rounded-full"
                      aria-label={`Select ${plastic.abbreviation}`}
                    ></button>
                    <span className="text-2xl font-bold">{plastic.abbreviation}</span>
                    
                    {/* Decorative ripple effect */}
                    {activePlastic.id === plastic.id && (
                      <>
                        <span className="absolute inset-0 rounded-full border border-blue-400 animate-ripple"></span>
                        <span className="absolute inset-0 rounded-full border border-blue-400 animate-ripple animation-delay-500"></span>
                      </>
                    )}
                  </div>
                  
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800">
                      Type #{index + 1}
                    </span>
                  </div>
                </div>
                
                <span className="text-sm text-gray-600 text-center max-w-[100px]">{plastic.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10 opacity-0 animate-fade-in animation-delay-200 md:hidden">
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

        <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 opacity-0 animate-fade-in animation-delay-400 relative overflow-hidden">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <FlaskConical className="h-6 w-6 mr-2 text-blue-500" />
                {activePlastic.name} <span className="text-blue-600 ml-2">({activePlastic.abbreviation})</span>
              </h3>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Type #{plasticTypes.findIndex(p => p.id === activePlastic.id) + 1}</span>
            </div>
            <p className="text-gray-500 mt-2">{activePlastic.fullName}</p>
          </div>

          <div className="relative mb-10">
            <div className="absolute -top-6 -right-6">
              <img 
                src={`/images/${activePlastic.id}-items.jpg`} 
                alt={`${activePlastic.name} products`}
                className="w-32 h-32 object-cover rounded-xl shadow-sm transform rotate-6"
              />
            </div>
            
            <div className="absolute -top-3 -left-3">
              <img 
                src={`/images/${activePlastic.id}-microplastics.jpg`}
                alt={`${activePlastic.name} microplastics`}
                className="w-24 h-24 object-cover rounded-xl shadow-sm transform -rotate-6"
              />
            </div>
          </div>

          <div className="mb-6 pt-16">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('about')}
                className={cn(
                  "px-4 py-2 font-medium text-sm transition-colors border-b-2 -mb-px flex items-center",
                  activeTab === 'about'
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                )}
              >
                <TestTube className="h-4 w-4 mr-1" />
                Chemical Structure
              </button>
              <button
                onClick={() => setActiveTab('concerns')}
                className={cn(
                  "px-4 py-2 font-medium text-sm transition-colors border-b-2 -mb-px flex items-center",
                  activeTab === 'concerns'
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                )}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Health Concerns
              </button>
              <button
                onClick={() => setActiveTab('processing')}
                className={cn(
                  "px-4 py-2 font-medium text-sm transition-colors border-b-2 -mb-px flex items-center",
                  activeTab === 'processing'
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                )}
              >
                <Waves className="h-4 w-4 mr-1" />
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
