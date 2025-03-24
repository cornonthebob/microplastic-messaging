
import React from "react";
import Hero from "@/components/Hero";
import PageLayout from "@/components/PageLayout";
import PlasticInfo from "@/components/PlasticInfo";
import OceanHealth from "@/components/OceanHealth";

const Index = () => {
  return (
    <PageLayout>
      <Hero />
      <PlasticInfo />
      <OceanHealth />
    </PageLayout>
  );
};

export default Index;
