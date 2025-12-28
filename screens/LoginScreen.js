const LoginScreen = () => {
  const { useState, useEffect } = window.React;
  const RoutePath = window.RoutePath;
  const Auth = window.Auth;

  const [tab, setTab] = useState('login');
  const [username, setUsername] = useState('student');
  const [email, setEmail] = useState('student@example.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Auth && Auth.isAuthenticated()) {
      window.location.href = RoutePath.DASHBOARD;
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await Auth.signIn({ username, password });
      window.location.href = RoutePath.DASHBOARD;
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await Auth.signUp({ username, email, password });
      window.location.href = RoutePath.DASHBOARD;
    } catch (err) {
      setError(err.message || 'Sign up failed');
    } finally {
      setLoading(false);
    }
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
              <h1 className="text-2xl font-bold text-gray-900">{tab === 'login' ? 'Welcome Back' : 'Create Your Account'}</h1>
              <p className="text-gray-500 mt-2">{tab === 'login' ? 'Login to continue your journey.' : 'Sign up to start practicing.'}</p>
            </div>

            <div className="flex mb-6 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setTab('login')}
                className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${tab === 'login' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Login
              </button>
              <button
                onClick={() => setTab('signup')}
                className={`flex-1 py-1.5 text-sm font-medium transition-all ${tab === 'signup' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Sign Up
              </button>
            </div>

            {error && <div className="mb-4 p-3 bg-red-50 text-sm text-red-600 rounded-lg border border-red-100">{error}</div>}

            <form onSubmit={tab === 'login' ? handleLogin : handleSignUp} className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-gray-700 mb-1 block">Username</span>
                <input
                  type="text"
                  required
                  className="w-full h-12 px-3 rounded-lg border-gray-300 focus:border-primary focus:ring-primary/50 text-sm"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>

              {tab === 'signup' && (
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 mb-1 block">Email</span>
                  <input
                    type="email"
                    required
                    className="w-full h-12 px-3 rounded-lg border-gray-300 focus:border-primary focus:ring-primary/50 text-sm"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              )}
              
              <label className="block">
                <span className="text-sm font-medium text-gray-700 mb-1 block">Password</span>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    className="w-full h-12 px-3 pr-10 rounded-lg border-gray-300 focus:border-primary focus:ring-primary/50 text-sm"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <span className="material-symbols-outlined text-xl">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </label>

              {tab === 'login' && (
                <div className="flex justify-end">
                  <a href="#" className="text-sm font-medium text-primary hover:underline">Forgot password?</a>
                </div>
              )}

              <button 
                type="submit"
                disabled={loading}
                className={`w-full h-12 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Processing...' : (tab === 'login' ? 'Login' : 'Create Account')}
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
              {tab === 'login' ? (
                <>
                  Don't have an account?{' '}
                  <button onClick={() => setTab('signup')} className="font-medium text-primary hover:underline">Sign up now</button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button onClick={() => setTab('login')} className="font-medium text-primary hover:underline">Login</button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

window.LoginScreen = LoginScreen;
