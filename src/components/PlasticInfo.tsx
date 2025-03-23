
import React from 'react';
import AboutMicroplastics from './microplastics/AboutMicroplastics';
import PlasticTypesDetail from './microplastics/PlasticTypesDetail';
import HealthImpacts from './microplastics/HealthImpacts';

const PlasticInfo = () => {
  return (
    <>
      <AboutMicroplastics />
      <PlasticTypesDetail />
      <HealthImpacts />
    </>
  );
};

export default PlasticInfo;
