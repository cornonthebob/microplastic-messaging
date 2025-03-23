
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-blue-400">Micro</span>
              <span className="text-white">Plastic</span>
              <span className="text-blue-400">Awareness</span>
            </h3>
            <p className="text-gray-300 max-w-md">
              This educational website aims to raise awareness about microplastics, their environmental impact, and potential solutions to plastic pollution.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-white">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About Microplastics</a>
                </li>
                <li>
                  <a href="#types" className="text-gray-300 hover:text-blue-400 transition-colors">Plastic Types</a>
                </li>
                <li>
                  <a href="#health" className="text-gray-300 hover:text-blue-400 transition-colors">Health Impact</a>
                </li>
                <li>
                  <a href="#interactive" className="text-gray-300 hover:text-blue-400 transition-colors">Interactive</a>
                </li>
                <li>
                  <a href="#solutions" className="text-gray-300 hover:text-blue-400 transition-colors">Solutions</a>
                </li>
                <li>
                  <a href="#citations" className="text-gray-300 hover:text-blue-400 transition-colors">Citations</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-white">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.epa.gov/plastics" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">EPA Plastics</a>
                </li>
                <li>
                  <a href="https://oceanservice.noaa.gov/facts/microplastics.html" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">NOAA Microplastics</a>
                </li>
                <li>
                  <a href="https://www.unep.org/explore-topics/chemicals-waste/what-we-do/marine-litter" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">UN Marine Pollution</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Microplastic Awareness. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Created for educational purposes. Information is based on scientific research.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
