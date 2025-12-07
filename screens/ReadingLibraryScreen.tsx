import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { RoutePath } from '../types';

const ReadingLibraryScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Reading Passages</h1>
            <p className="text-gray-500 mt-1">Select a TPO passage to begin your practice session.</p>
          </div>
          
          <div className="flex items-center gap-2 bg-white rounded-lg p-1 border border-gray-200">
            <button className="p-2 bg-gray-100 rounded text-gray-900"><span className="material-symbols-outlined text-xl">grid_view</span></button>
            <button className="p-2 hover:bg-gray-50 rounded text-gray-500"><span className="material-symbols-outlined text-xl">list</span></button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters */}
          <div className="w-full lg:w-72 flex-shrink-0 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900 mb-4">Filters</h3>
              
              <div className="space-y-4">
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Search</label>
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">search</span>
                        <input type="text" className="w-full pl-9 pr-3 py-2 rounded-lg border-gray-300 text-sm focus:border-primary focus:ring-primary/50" placeholder="Search passages..." />
                    </div>
                 </div>

                 <details className="group" open>
                    <summary className="flex justify-between items-center cursor-pointer list-none py-2 text-sm font-medium text-gray-900">
                        Filter by TPO Set
                        <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-gray-500">expand_more</span>
                    </summary>
                    <div className="pt-2 text-sm text-gray-500">
                        <p>Select TPO numbers...</p>
                    </div>
                 </details>
                 
                 <div className="pt-4 space-y-2">
                    <button className="w-full py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors">Apply Filters</button>
                    <button className="w-full py-2 bg-transparent text-gray-500 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">Reset</button>
                 </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
             {/* AI Card */}
             <div className="flex flex-col items-center justify-center text-center p-6 rounded-xl border border-dashed border-primary/50 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                   <span className="material-symbols-outlined fill-icon">auto_awesome</span>
                </div>
                <h3 className="text-lg font-bold text-primary">AI Generate</h3>
                <p className="text-sm text-gray-500 mt-1">Customize your own reading passage.</p>
             </div>

             {/* Passage Card 1 */}
             <div className="flex flex-col bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-all">
                <p className="text-sm font-medium text-gray-500 mb-1">TPO 54, Passage 1</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">The Origins of Cetaceans</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">This passage discusses the evolutionary transition of cetaceans (whales, dolphins, and porpoises) from land-dwelling mammals.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                   <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Biology</span>
                   <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Evolution</span>
                </div>
                <button 
                  onClick={() => navigate(RoutePath.READING_PRACTICE)}
                  className="mt-auto w-full py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors">
                  Start Practice
                </button>
             </div>

             {/* Passage Card 2 */}
             <div className="flex flex-col bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-all">
                <p className="text-sm font-medium text-gray-500 mb-1">TPO 53, Passage 2</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">The Printing Press</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">Examines the invention of the printing press by Johannes Gutenberg and its profound impact on European society.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                   <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">History</span>
                   <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Technology</span>
                </div>
                <button className="mt-auto w-full py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors">
                  Start Practice
                </button>
             </div>

             {/* Passage Card 3 */}
             <div className="flex flex-col bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-all">
                <p className="text-sm font-medium text-gray-500 mb-1">TPO 51, Passage 1</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">The Surface of Mars</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">Explores the geological features of Mars, including its volcanoes, canyons, and evidence of past water activity.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                   <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Astronomy</span>
                   <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Geology</span>
                </div>
                <button className="mt-auto w-full py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors">
                  Start Practice
                </button>
             </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
           <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50"><span className="material-symbols-outlined">chevron_left</span></button>
           <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">1</button>
           <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm font-medium">2</button>
           <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50"><span className="material-symbols-outlined">chevron_right</span></button>
        </div>
      </div>
    </Layout>
  );
};

export default ReadingLibraryScreen;
