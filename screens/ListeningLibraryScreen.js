const ListeningLibraryScreen = () => {
  console.log('window.React in ListeningLibraryScreen:', window.React);

  const Layout = window.Layout;
  const RoutePath = window.RoutePath;


  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-2xl border border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
           <div>
              <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
                 <span className="material-symbols-outlined fill-icon">auto_awesome</span>
                 AI Generate Questions
              </h1>
              <p className="text-gray-600 text-sm mt-1">Generate customized TOEFL listening exercises based on your weak points.</p>
           </div>
           <button className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg font-bold hover:bg-primary-dark transition-all shadow-md shadow-primary/20">
              Generate Now <span className="material-symbols-outlined text-lg">arrow_forward</span>
           </button>
        </div>

        <div className="flex items-center justify-between">
           <h2 className="text-xl font-bold text-gray-900">TPO Real Practice</h2>
           <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="border-gray-200 rounded-lg text-sm font-medium focus:ring-primary focus:border-primary">
                 <option>Set Number (Asc)</option>
                 <option>Set Number (Desc)</option>
              </select>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {/* Card 1 */}
           <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all group flex flex-col">
              <div className="p-5 flex-1">
                 <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">TPO 54 - Conversation 1</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded">Completed</span>
                 </div>
                 <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">Biology</span>
                 
                 <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto">
                    <div className="flex items-center gap-1"><span className="material-symbols-outlined text-base">timer</span> 5:30</div>
                    <div className="flex items-center gap-1"><span className="material-symbols-outlined text-base">quiz</span> 5 Qs</div>
                 </div>
              </div>
              <button 
                 onClick={() => window.location.href = RoutePath.LISTENING_PRACTICE}
                 className="w-full py-3 bg-primary/5 text-primary text-sm font-bold hover:bg-primary/10 transition-colors border-t border-gray-100">
                 Practice Again
              </button>
           </div>

           {/* Card 2 */}
           <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all group flex flex-col">
              <div className="p-5 flex-1">
                 <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">TPO 53 - Lecture 2</h3>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded">In Progress</span>
                 </div>
                 <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">Art History</span>
                 
                 <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto">
                    <div className="flex items-center gap-1"><span className="material-symbols-outlined text-base">timer</span> 6:15</div>
                    <div className="flex items-center gap-1"><span className="material-symbols-outlined text-base">quiz</span> 6 Qs</div>
                 </div>
              </div>
              <button className="w-full py-3 bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-colors border-t border-primary">
                 Continue Practice
              </button>
           </div>

           {/* Card 3 */}
           <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all group flex flex-col">
              <div className="p-5 flex-1">
                 <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">TPO 52 - Conversation 2</h3>
                 </div>
                 <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">Business</span>
                 
                 <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto">
                    <div className="flex items-center gap-1"><span className="material-symbols-outlined text-base">timer</span> 4:55</div>
                    <div className="flex items-center gap-1"><span className="material-symbols-outlined text-base">quiz</span> 5 Qs</div>
                 </div>
              </div>
              <button className="w-full py-3 bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-colors border-t border-primary">
                 Start Practice
              </button>
           </div>
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-4">
           <nav className="flex gap-2">
              <button className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"><span className="material-symbols-outlined text-lg">chevron_left</span></button>
              <button className="w-9 h-9 rounded-lg bg-primary text-white font-bold text-sm">1</button>
              <button className="w-9 h-9 rounded-lg text-gray-600 hover:bg-gray-50 font-medium text-sm">2</button>
              <button className="w-9 h-9 rounded-lg text-gray-600 hover:bg-gray-50 font-medium text-sm">3</button>
           </nav>
        </div>
      </div>
    </Layout>
  );
};

window.ListeningLibraryScreen = ListeningLibraryScreen;
