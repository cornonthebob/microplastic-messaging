
import React from "react";
import PageLayout from "@/components/PageLayout";
import InteractiveGraphic from "@/components/InteractiveGraphic";

const InteractivePage = () => {
  return (
    <PageLayout>
      <div className="pb-16">
        <InteractiveGraphic />
      </div>
    </PageLayout>
  );
};

export default InteractivePage;
