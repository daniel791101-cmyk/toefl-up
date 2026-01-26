const DashboardScreen = () => {
  const { useState } = window.React;
  const Layout = window.Layout;
  const Auth = window.Auth;
  const user = (Auth && Auth.getCurrentUser && Auth.getCurrentUser());
  const RoutePath = window.RoutePath;

  const [isGenerating, setIsGenerating] = useState(false);
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [practiceType, setPracticeType] = useState('reading');
  const [topic, setTopic] = useState('science');
  const [subtype, setSubtype] = useState('lecture');

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const data = await window.fetchWithAuth('/generate-practice', {
        method: 'POST',
        body: JSON.stringify({
          type: practiceType,
          topic,
          subtype: practiceType === 'listening' ? subtype : null
        })
      });
      
      // Store the generated practice in sessionStorage to pass it to the practice screen
      sessionStorage.setItem('current_ai_practice', JSON.stringify(data));
      
      // Redirect based on type
      if (practiceType === 'reading') {
        window.location.href = RoutePath.READING_PRACTICE + '?source=ai';
      } else {
        window.location.href = RoutePath.LISTENING_PRACTICE + '?source=ai';
      }
    } catch (error) {
      alert('Failed to generate practice: ' + error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  if (!user) {
    window.location.href = RoutePath.LOGIN;
    return null;
  }

  return (
    <Layout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black text-gray-900">Welcome back, {user.username}!</h1>
        <button 
          onClick={() => setShowAIPanel(!showAIPanel)}
          className="px-6 py-2 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center gap-2"
        >
          <span className="text-lg">✨</span> Generate AI Practice
        </button>
      </div>

      {showAIPanel && (
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl border-2 border-dashed border-gray-300 p-6 mb-12 animate-in fade-in slide-in-from-top-4">
          <h2 className="text-xl font-bold mb-4">Generate Custom Practice Set</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Practice Type</label>
              <select 
                value={practiceType} 
                onChange={(e) => setPracticeType(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              >
                <option value="reading">Reading</option>
                <option value="listening">Listening</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
              <select 
                value={topic} 
                onChange={(e) => setTopic(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              >
                <option value="science">Science</option>
                <option value="history">History</option>
                <option value="art">Art</option>
                <option value="social_science">Social Science</option>
                <option value="business">Business</option>
              </select>
            </div>
            {practiceType === 'listening' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Listening Type</label>
                <select 
                  value={subtype} 
                  onChange={(e) => setSubtype(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                >
                  <option value="lecture">Lecture</option>
                  <option value="conversation">Conversation</option>
                </select>
              </div>
            )}
            <div className={practiceType === 'reading' ? 'md:col-span-2' : ''}>
              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full py-2 bg-primary text-white rounded-md font-bold hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Generating...
                  </>
                ) : 'Generate Now'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Start Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        <div 
          onClick={() => window.location.href = RoutePath.READING_LIB}
          className="group cursor-pointer bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all hover:-translate-y-1"
        >
          <div 
            className="w-full aspect-video rounded-lg bg-cover bg-center mb-4"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwNRsgfTB4XEapjk781aOOlmC7s6CUpLml-S8tMcyx84cXox7g59Gg5mhxVSHzbpv_-2NA_jIMKsjeqLsRnFLMuVI8lWqJLYLudp7PGeTl6RuJOFXMYmN5ewtgewwkbEuJ7SoeU_ZaXHcF1Q1jtWb1dxcNaLRGBukVilWKvWYT78x-82yyLagkXXFkcAr8G_d7TGwsMF1oE3linNKjYUD5njvqsNvJVN3aQnBo_CD9me0l-oRiaGX_NBRp3Y6bNR22rRHs4opAPXk")' }}
          ></div>
          <h3 className="text-lg font-bold text-gray-900">Reading Practice</h3>
          <p className="text-sm text-gray-500">Start a new reading simulation.</p>
        </div>

        <div 
           onClick={() => window.location.href = RoutePath.LISTENING_LIB}
           className="group cursor-pointer bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all hover:-translate-y-1"
        >
          <div 
            className="w-full aspect-video rounded-lg bg-cover bg-center mb-4"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxQ63FZi0QEn_EJksWZSvxAbDrf6t5MvFApgQIvbt-IExow0p42q_iVFyuMWINxt9-hRGUts6ifjdDulQAUvTtzVJR5fmIRGNtXAQaAFsJDywpV816ym0Plv5rovqpuH3YOt-zfHEzEWbd6wUNDlkf5urP6Q4gmSoiFHk_4ySoc6nVuSwreurlZPdLDUq6OVFI8Jo8IUrcDPbjtpJ5QbeJy9P95c0i3hGU6zUiXOF9u56w4Wrm42WMhq2qYxJD8g48wCRURea8Z9A")' }}
          ></div>
          <h3 className="text-lg font-bold text-gray-900">Listening Practice</h3>
          <p className="text-sm text-gray-500">Start a new listening simulation.</p>
        </div>

        <div 
           onClick={() => window.location.href = RoutePath.HISTORY}
           className="group cursor-pointer bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all hover:-translate-y-1"
        >
          <div 
            className="w-full aspect-video rounded-lg bg-cover bg-center mb-4"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMkEKIs8AtmY9lc76qYYEALGGYGPdp6jFSkC8B7atmywmU8YMFqeFFGZkFJsitkCrEJuWGvnoVTdqxMyPqs3J-HXwWz_p8-t46V8oSAJFNEScn5vHq33OnXk_bNPeuwUzbCe9LNP_C66_GYRc4YDE63jsqJJOBfk5o7nEH-R7TDScOoSIwqbIwofUF44GK5Wi5xIHBzH6PO3INYu8s9H6ZOi7-KkFkRO9mIr0aAw9i9U1XT3EDFTZapVRZ8xPfcGmcwINirR_PD9g")' }}
          ></div>
          <h3 className="text-lg font-bold text-gray-900">Practice History</h3>
          <p className="text-sm text-gray-500">View past performance.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Study Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <p className="text-gray-900 font-medium mb-2">Total Study Time</p>
          <p className="text-3xl font-bold text-gray-900">28 Hours</p>
          <p className="text-success text-sm font-medium mt-1">+5% from last week</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <p className="text-gray-900 font-medium mb-2">Completed Sets</p>
          <p className="text-3xl font-bold text-gray-900">15 Sets</p>
          <p className="text-success text-sm font-medium mt-1">+2% from last week</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <p className="text-gray-900 font-medium mb-2">Average Accuracy</p>
          <p className="text-3xl font-bold text-gray-900">85%</p>
          <p className="text-danger text-sm font-medium mt-1">-1% from last week</p>
        </div>
      </div>

    </Layout>
  );
};

window.DashboardScreen = DashboardScreen;
