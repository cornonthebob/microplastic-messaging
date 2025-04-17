
import React, { useState } from 'react';
import PageLayout from "@/components/PageLayout";
import DetailedVisualization from '@/components/DetailedVisualization';

const PlasticLifecycle = () => {
  return (
    <PageLayout>
      <div className="pt-16">
        <DetailedVisualization />
      </div>
    </PageLayout>
  );
};

export default PlasticLifecycle;
