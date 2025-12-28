const DashboardScreen = () => {
  const Layout = window.Layout;
  const MOCK_USER = window.MOCK_USER;
  const Auth = window.Auth;
  const user = (Auth && Auth.getCurrentUser && Auth.getCurrentUser()) || MOCK_USER;
  const RoutePath = window.RoutePath;

  return (
    <Layout>
      <h1 className="text-3xl font-black text-gray-900 mb-8">Welcome back, {user.name}!</h1>

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
