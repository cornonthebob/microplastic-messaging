
import React from "react";
import Hero from "@/components/Hero";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <PageLayout>
      <Hero />
      
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-center gap-4 flex-wrap">
          <Link 
            to="/about" 
            className="px-6 py-3 bg-blue-100 text-blue-700 rounded-lg flex items-center gap-2 hover:bg-blue-200 transition-colors"
          >
            About Microplastics <ArrowRight size={16} />
          </Link>
          
          <Link 
            to="/lifecycle" 
            className="px-6 py-3 bg-teal-100 text-teal-700 rounded-lg flex items-center gap-2 hover:bg-teal-200 transition-colors"
          >
            Plastic Lifecycle <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
