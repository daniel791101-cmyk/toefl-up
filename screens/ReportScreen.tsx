import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { RoutePath } from '../types';

const ReportScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col gap-6 max-w-6xl mx-auto">
         <div className="flex flex-col gap-2">
            <button onClick={() => navigate(RoutePath.HISTORY)} className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary w-fit">
               <span className="material-symbols-outlined text-base">arrow_back</span> Back to Practice History
            </button>
            <h1 className="text-3xl font-black text-gray-900">TPO 54 - Reading Section 1 Report</h1>
         </div>

         {/* Stats Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
               <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <span className="material-symbols-outlined">event</span>
                  <span className="text-sm font-medium">Practice Date</span>
               </div>
               <p className="text-lg font-bold text-gray-900">October 24, 2023</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
               <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <span className="material-symbols-outlined">timer</span>
                  <span className="text-sm font-medium">Total Time</span>
               </div>
               <p className="text-lg font-bold text-gray-900">18m 32s</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
               <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <span className="material-symbols-outlined">task_alt</span>
                  <span className="text-sm font-medium">Accuracy</span>
               </div>
               <p className="text-3xl font-bold text-warning">75%</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
               <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <span className="material-symbols-outlined">checklist</span>
                  <span className="text-sm font-medium">Correct / Total</span>
               </div>
               <p className="text-lg font-bold text-gray-900">9 / 12</p>
            </div>
         </div>

         {/* Tabs */}
         <div className="border-b border-gray-200 mt-4">
            <nav className="flex gap-8">
               <button className="border-b-2 border-primary text-primary px-1 pb-4 text-sm font-bold">Question Details</button>
               <button className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 px-1 pb-4 text-sm font-medium">Knowledge Points</button>
               <button className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 px-1 pb-4 text-sm font-medium">Trends</button>
            </nav>
         </div>

         {/* Question Details List */}
         <div className="flex flex-col gap-6 mt-2">
            
            {/* Question 1 - Correct */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
               <div className="flex justify-between items-start mb-4">
                  <div>
                     <h3 className="font-bold text-lg text-gray-900">Question 1</h3>
                     <p className="text-sm text-gray-500 mt-1">According to paragraph 1, what is the main characteristic of ...</p>
                  </div>
                  <div className="flex items-center gap-1 text-success font-bold">
                     <span className="material-symbols-outlined fill-icon">check_circle</span> Correct
                  </div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
                  <div className="flex gap-2">
                     <span className="font-medium text-gray-500 min-w-[100px]">Correct Answer:</span>
                     <span className="text-gray-900">A. The first option is the correct one.</span>
                  </div>
                  <div className="flex gap-2">
                     <span className="font-medium text-gray-500 min-w-[100px]">Your Answer:</span>
                     <span className="text-gray-900">A. The first option is the correct one.</span>
                  </div>
               </div>

               <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">Analysis:</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">The passage explicitly states in the second sentence that... This directly supports option A. Options B and C are contradicted by the information provided later in the paragraph.</p>
               </div>
            </div>

            {/* Question 2 - Incorrect */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
               <div className="flex justify-between items-start mb-4">
                  <div>
                     <h3 className="font-bold text-lg text-gray-900">Question 2</h3>
                     <p className="text-sm text-gray-500 mt-1">The word "ephemeral" in the passage is closest in meaning to...</p>
                  </div>
                  <div className="flex items-center gap-1 text-danger font-bold">
                     <span className="material-symbols-outlined fill-icon">cancel</span> Incorrect
                  </div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
                  <div className="flex gap-2 items-center">
                     <span className="font-medium text-gray-500 min-w-[100px]">Correct Answer:</span>
                     <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded font-semibold">C. short-lived</span>
                  </div>
                  <div className="flex gap-2 items-center">
                     <span className="font-medium text-gray-500 min-w-[100px]">Your Answer:</span>
                     <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded font-semibold line-through">B. beautiful</span>
                  </div>
               </div>

               <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">Analysis:</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">The context of the sentence "the insect's ephemeral life" suggests a short duration. "Ephemeral" is a vocabulary word meaning lasting for a very short time. It is recommended to strengthen your vocabulary.</p>
               </div>
            </div>

         </div>
      </div>
    </Layout>
  );
};

export default ReportScreen;
