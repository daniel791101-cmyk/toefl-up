const ListeningPracticeScreen = () => {
  const Layout = window.Layout;
  const LISTENING_QUESTIONS = window.LISTENING_QUESTIONS;
  const RoutePath = window.RoutePath;


  return (
    <Layout>
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">TPO 54 - Listening Section 1</h1>
          <p className="text-gray-500">Listen to the conversation. Then answer the questions.</p>
        </div>

        {/* Audio Player Card */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div 
              className="w-16 h-16 rounded-lg bg-cover bg-center flex-shrink-0"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdbPzMmwevn-o5seg4IqPIJ_UiwmnYAPYy3iB2mruV4T-A65thBgsKJr5Xb60LVsdZMhO_KUpNFWNWXyN8csrUFqsF8dykyiqRc-iHNhV6p9QW0JAc0OOO6DvcQKXofTlxlPHN5TxsGQxJ5TmPUtjhCc_A3qk28E8FzzxRVVwoUZ9asIFNZ2AkJQQf05jjRB_CFc27qOvBbib6JYaLZEKLphW19BN0HOg6PKMu3wRdFqGqc9t4XLSSHKtwaHtALWdamNJUMr3suto")' }}
            ></div>
            <div className="flex-1 min-w-0">
               <h3 className="font-bold text-gray-900 truncate">Conversation: Student and Professor</h3>
               <p className="text-sm text-gray-500 truncate">TOEFL Practice Audio</p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
               <span className="material-symbols-outlined text-gray-400">volume_up</span>
               <div className="w-20 h-1 bg-gray-200 rounded-full">
                  <div className="w-3/4 h-full bg-primary rounded-full"></div>
               </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
             <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors flex-shrink-0">
                <span className="material-symbols-outlined fill-icon">pause</span>
             </button>
             <span className="text-xs font-medium text-gray-500 w-8">1:17</span>
             
             {/* Progress Bar */}
             <div className="flex-1 h-1.5 bg-gray-200 rounded-full relative cursor-pointer group">
                <div className="absolute top-0 left-0 h-full bg-primary rounded-full w-[54%]"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[54%] w-3.5 h-3.5 bg-primary rounded-full border-2 border-white shadow-sm scale-0 group-hover:scale-100 transition-transform"></div>
             </div>
             
             <span className="text-xs font-medium text-gray-500 w-8">2:23</span>
             <button className="px-2 py-1 bg-gray-100 rounded text-xs font-bold text-gray-700 flex items-center gap-1 hover:bg-gray-200">
                1x <span className="material-symbols-outlined text-sm">unfold_more</span>
             </button>
          </div>
        </div>

        {/* Questions List */}
        <div className="flex flex-col gap-6">
           {/* Question 1 - Correct State */}
           <div className="bg-green-50/50 rounded-xl border border-success/30 p-5">
              <div className="flex justify-between items-start gap-4 mb-4">
                 <h3 className="font-medium text-gray-900"><span className="font-bold">1.</span> {LISTENING_QUESTIONS[0].text}</h3>
                 <span className="flex items-center gap-1 bg-success text-white px-2 py-0.5 rounded text-xs font-bold flex-shrink-0">
                    <span className="material-symbols-outlined text-sm">check_circle</span> Correct
                 </span>
              </div>
              <div className="space-y-3 pl-4">
                 {LISTENING_QUESTIONS[0].options.map((opt, idx) => (
                    <label key={idx} className={`flex items-start gap-3 p-3 rounded-lg border transition-all ${
                       idx === 1 
                         ? "bg-white border-success ring-1 ring-success" 
                         : "bg-white border-gray-200"
                    }`}>
                       <input type="radio" checked={idx === 1} readOnly className="mt-0.5 text-primary focus:ring-primary text-success" />
                       <span className={`text-sm ${idx === 1 ? "font-semibold text-gray-900" : "text-gray-600"}`}>{opt}</span>
                    </label>
                 ))}
              </div>
              <div className="mt-4 bg-white/60 p-3 rounded-lg border border-success/10">
                 <p className="text-sm font-bold text-gray-900">Explanation:</p>
                 <p className="text-sm text-gray-600 mt-1">{LISTENING_QUESTIONS[0].explanation}</p>
              </div>
           </div>

           {/* Question 2 - Incorrect State */}
           <div className="bg-red-50/50 rounded-xl border border-danger/30 p-5">
              <div className="flex justify-between items-start gap-4 mb-4">
                 <h3 className="font-medium text-gray-900"><span className="font-bold">2.</span> {LISTENING_QUESTIONS[1].text}</h3>
                 <span className="flex items-center gap-1 bg-danger text-white px-2 py-0.5 rounded text-xs font-bold flex-shrink-0">
                    <span className="material-symbols-outlined text-sm">cancel</span> Incorrect
                 </span>
              </div>
              <div className="space-y-3 pl-4">
                 {LISTENING_QUESTIONS[1].options.map((opt, idx) => {
                    let style = "bg-white border-gray-200";
                    if (idx === 0) style = "bg-white border-danger ring-1 ring-danger"; // User selection
                    if (idx === 2) style = "bg-white border-success ring-1 ring-success"; // Correct answer

                    return (
                        <label key={idx} className={`flex items-start gap-3 p-3 rounded-lg border transition-all ${style}`}>
                           <input type="radio" checked={idx === 0} readOnly className="mt-0.5 text-primary focus:ring-primary" />
                           <span className="text-sm text-gray-600">{opt}</span>
                           {idx === 2 && <span className="ml-auto text-xs font-bold text-success flex items-center gap-1"><span className="material-symbols-outlined text-sm">check</span> Correct Answer</span>}
                           {idx === 0 && <span className="ml-auto text-xs font-bold text-danger flex items-center gap-1"><span className="material-symbols-outlined text-sm">close</span> Your Answer</span>}
                        </label>
                    );
                 })}
              </div>
           </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-gray-200">
          <button 
            onClick={() => window.location.href = RoutePath.REPORT}
            className="px-6 py-2.5 bg-gray-100 text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
            Next <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

      </div>
    </Layout>
  );
};

window.ListeningPracticeScreen = ListeningPracticeScreen;
