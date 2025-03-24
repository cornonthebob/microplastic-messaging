
import React from 'react';
import AboutMicroplastics from './microplastics/AboutMicroplastics';
import PlasticTypesDetail from './microplastics/PlasticTypesDetail';
import HealthImpacts from './microplastics/HealthImpacts';
import MicroplasticIllustration from './microplastics/MicroplasticIllustration';

const PlasticInfo = () => {
  return (
    <>
      <section className="bg-blue-50/50 relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-bubbles opacity-30"></div>
        <div className="section-container relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              The Microplastic Crisis
            </h1>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Microscopic plastic particles are infiltrating every corner of our planet and our bodies.
              Discover the science behind this growing environmental and health challenge.
            </p>
          </div>
          
          <MicroplasticIllustration />
        </div>
      </section>
      
      <AboutMicroplastics />
      <PlasticTypesDetail />
      <HealthImpacts />
    </>
  );
};

export default PlasticInfo;
