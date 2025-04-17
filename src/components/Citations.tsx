import React from 'react';

interface Citation {
  id: string;
  authors: string;
  year: string;
  title: string;
  source: string;
  type: 'academic' | 'book' | 'references';
  url?: string;
}

const citations: Citation[] = [
  {
    id: 'geyer2017',
    authors: 'Geyer, R., Jambeck, J. R., & Law, K. L.',
    year: '2017',
    title: 'Production, use, and fate of all plastics ever made',
    source: 'Science Advances, 3(7), e1700782',
    type: 'references',
    url: 'https://doi.org/10.1126/sciadv.1700782'
  },
  {
    id: 'wright2020',
    authors: 'Wright, S. L., & Kelly, F. J.',
    year: '2017',
    title: 'Plastic and human health: A micro issue?',
    source: 'Environmental Science & Technology, 51(12), 6634-6647',
    type: 'references',
    url: 'https://doi.org/10.1021/acs.est.7b00423'
  },
  {
    id: 'enyoh2019',
    authors: 'Enyoh, C. E., Verla, A. W., Verla, E. N., Ibe, F. C., & Amaobi, C. E.',
    year: '2019',
    title: 'Airborne microplastics: a review study on method for analysis, occurrence, movement and risks',
    source: 'Environmental Monitoring and Assessment, 191, 668',
    type: 'references',
    url: 'https://doi.org/10.1007/s10661-019-7842-0'
  },
  {
    id: 'thompson2009',
    authors: 'Thompson, R. C., Swan, S. H., Moore, C. J., & vom Saal, F. S.',
    year: '2009',
    title: 'Plastics, the environment and human health: current consensus and future trends',
    source: 'Philosophical Transactions of the Royal Society B: Biological Sciences, 364(1526), 2153-2166',
    type: 'references',
    url: 'https://doi.org/10.1098/rstb.2009.0053'
  },
  {
    id: 'eriksen2014',
    authors: 'Eriksen, M., Lebreton, L. C. M., Carson, H. S., Thiel, M., Moore, C. J., Borerro, J. C., Galgani, F., Ryan, P. G., & Reisser, J.',
    year: '2014',
    title: "Plastic pollution in the world's oceans: More than 5 trillion plastic pieces weighing over 250,000 tons afloat at sea",
    source: 'PLoS ONE, 9(12), e111913',
    type: 'references',
    url: 'https://doi.org/10.1371/journal.pone.0111913'
  },
  {
    id: 'ragusa2021',
    authors: 'Ragusa, A., Svelato, A., Santacroce, C., Catalano, P., Notarstefano, V., Carnevali, O., Papa, F., Rongioletti, M. C. A., Baiocco, F., Draghi, S., D\'Amore, E., Rinaldo, D., Matta, M., & Giorgini, E.',
    year: '2021',
    title: 'Plasticenta: First evidence of microplastics in human placenta',
    source: 'Environment International, 146, 106274',
    type: 'references',
    url: 'https://doi.org/10.1016/j.envint.2020.106274'
  },
  {
    id: 'andrady2011',
    authors: 'Andrady, A. L.',
    year: '2011',
    title: 'Microplastics in the marine environment',
    source: 'Marine Pollution Bulletin, 62(8), 1596-1605',
    type: 'references',
    url: 'https://doi.org/10.1016/j.marpolbul.2011.05.030'
  },
  {
    id: 'stevens2020',
    authors: 'Stevens, E. S.',
    year: '2020',
    title: 'Green plastics: An introduction to the new science of biodegradable plastics',
    source: 'Princeton University Press',
    type: 'references'
  },
  {
    id: 'andrady2015',
    authors: 'Andrady, A. L.',
    year: '2015',
    title: 'Plastics and environmental sustainability',
    source: 'Wiley',
    type: 'references'
  },
  {
    id: 'epa2023',
    authors: 'U.S. Environmental Protection Agency',
    year: '2023',
    title: 'Plastics',
    source: 'EPA.gov',
    type: 'references',
    url: 'https://www.epa.gov/plastics'
  },
  {
    id: 'noaa2023',
    authors: 'National Oceanic and Atmospheric Administration',
    year: '2023',
    title: 'What are microplastics?',
    source: 'oceanservice.noaa.gov',
    type: 'references',
    url: 'https://oceanservice.noaa.gov/facts/microplastics.html'
  }
];

const Citations = () => {
  const academicPapers = citations.filter(citation => citation.type === 'academic');
  const books = citations.filter(citation => citation.type === 'book');
  const websites = citations.filter(citation => citation.type === 'references');

  return (
    <section className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4">
            Sources & References
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Citations</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            This website draws information from peer-reviewed academic research, books, and government sources.
          </p>
        </div>
        <div className="space-y-12 opacity-0 animate-slide-up">
          
        

          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              References
            </h3>
            <div className="bg-white rounded-xl shadow-soft p-6">
              <div className="space-y-4">
                {websites.map(citation => (
                  <div key={citation.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <p className="text-gray-800">
                      {citation.authors} ({citation.year}). {citation.title}. <em>{citation.source}</em>.
                      {citation.url && (
                        <a href={citation.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                          {citation.url}
                        </a>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Citations;
