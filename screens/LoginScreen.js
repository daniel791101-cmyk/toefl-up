const LoginScreen = () => {
  const RoutePath = window.RoutePath;

  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = RoutePath.DASHBOARD;
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background-light p-4 font-body">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center pb-8">
          <span className="material-symbols-outlined text-primary text-5xl">school</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-2">TOEFL Prep</h2>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
              <p className="text-gray-500 mt-2">Login to continue your journey.</p>
            </div>

            <div className="flex mb-6 bg-gray-100 p-1 rounded-lg">
              <button className="flex-1 py-1.5 text-sm font-medium rounded-md bg-white text-primary shadow-sm transition-all">
                Login
              </button>
              <button className="flex-1 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition-all">
                Sign Up
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-gray-700 mb-1 block">Username/Email</span>
                <input 
                  type="text" 
                  className="w-full h-12 px-3 rounded-lg border-gray-300 focus:border-primary focus:ring-primary/50 text-sm"
                  placeholder="Enter username or email"
                  defaultValue="student@example.com"
                />
              </label>
              
              <label className="block">
                <span className="text-sm font-medium text-gray-700 mb-1 block">Password</span>
                <div className="relative">
                  <input 
                    type="password" 
                    className="w-full h-12 px-3 pr-10 rounded-lg border-gray-300 focus:border-primary focus:ring-primary/50 text-sm"
                    placeholder="Enter password"
                    defaultValue="password123"
                  />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <span className="material-symbols-outlined text-xl">visibility</span>
                  </button>
                </div>
              </label>

              <div className="flex justify-end">
                <a href="#" className="text-sm font-medium text-primary hover:underline">Forgot password?</a>
              </div>

              <button 
                type="submit"
                className="w-full h-12 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Login
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400">Or continue with</span></div>
            </div>

            <div className="flex gap-4 justify-center">
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkfcP2U8KgdQPd1uxB2ZdNaz4vfBhDPSM3xGGDskfFFEGmBGq5tEDtTbYL-SzbwCf-I9-fxSheHuq2PNeL9gYGHr66EF9aZaAVriqJuY1cRIBtfbBQX3Pq_MNOll4E17N3XV1rPQYZxCiABiHvChpsB9ktOqzsEl1ld0Fs18dGA1cY_qyiZA-fUB8dKWCawUFtQ_M_pkEsL8tWbtgy_KkIEiKdF_X2Ou7RqaobpHnYJEiKDNiCjra00pCr1MOLpuSDD0EQrdb9bkc" alt="Google" className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxAx5BpfonXTbovsRaNm54U_HBIj-1svZGWnFENwI_zqBMP9hyjkzexGYPP2GIp-4YY4N-27StSzfrgyLGRwAi6-FPDe2DH0Q2sMYuC7bzXGdiGeFetaDRz3ifwNgvOdDmSimqDhb3vrmB3RyIDGMY90tY163w0Fh6SMB-puUWk5gC4GX63z4-CzkJi4IA37LFKrSSrU7rOjknDClurjDeWhvdLMsHfS6GDrH5MPLT5mNwQTG833aAvEnSqlVK8JdBrxHlotnwR3k" alt="Apple" className="w-6 h-6" />
              </button>
            </div>
            
            <p className="mt-8 text-center text-sm text-gray-500">
              Don't have an account? <a href="#" className="font-medium text-primary hover:underline">Sign up now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

window.LoginScreen = LoginScreen;
