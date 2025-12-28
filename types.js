
window.RoutePath = {
  LOGIN: '/',
  DASHBOARD: '/dashboard/',
  READING_LIB: '/reading/',
  READING_PRACTICE: '/reading-practice/',
  LISTENING_LIB: '/listening/',
  LISTENING_PRACTICE: '/listening-practice/',
  HISTORY: '/history/',
  REPORT: '/report/',
  PROFILE: '/profile/',
};

(function (global) {
  const API_URL = 'http://localhost:8001';
  const TOKEN_KEY = 'toefl_auth_token';
  const USER_KEY = 'toefl_user';

  function setToken(token) {
    global.localStorage.setItem(TOKEN_KEY, token);
  }

  function getToken() {
    return global.localStorage.getItem(TOKEN_KEY);
  }

  function setUser(user) {
    global.localStorage.setItem(USER_KEY, JSON.stringify(user));
    // Also update the global MOCK_USER for legacy compatibility
    if (user) {
        global.MOCK_USER = {
            name: user.username,
            email: user.email,
            avatar: user.avatar_url || 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFgGsKMgMsoJjKxI0GqxLArhwhRShqTscOycT3OFe8TGjVLHfZqyG9GYz7PGkLDdVkBp-42-JVLLW9_aMdx5ZI1qRuJiyvmPyKoBQfyEOyXowT1px7dyVY2KL9RIcYFHUrhBHwE0gwXaJvX9FnVA1wYvnGvrVNG9LfeIJ9XOBAERTcEpHzRJvT9CEosop1H8fX47NaO_5cQ0F22hLCekcd12eEL9sqt9JAdr6H_iLu7V2Cs3AkBHNAa6YsdpfMU38zI_Td7OP7tew'
        };
    }
  }

  function getCurrentUser() {
    try {
      const raw = global.localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  }

  function isAuthenticated() {
    return !!getToken();
  }

  async function fetchWithAuth(endpoint, options = {}) {
    const token = getToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...options.headers,
    };

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ detail: 'An error occurred' }));
      let errorMessage = 'An error occurred';
      
      if (typeof errorData.detail === 'string') {
        errorMessage = errorData.detail;
      } else if (Array.isArray(errorData.detail)) {
        // Handle FastAPI validation errors
        errorMessage = errorData.detail.map(err => `${err.loc.join('.')}: ${err.msg}`).join(', ');
      } else if (errorData.message) {
        errorMessage = errorData.message;
      }
      
      throw new Error(errorMessage);
    }

    return response.json();
  }

  async function signUp({ username, email, password }) {
    const user = await fetchWithAuth('/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, avatar_url: null }),
    });
    // After signup, we need to login to get token
    return signIn({ username, password });
  }

  async function signIn({ username, password }) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const response = await fetch(`${API_URL}/token`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ detail: 'Invalid username or password' }));
      let errorMessage = 'Invalid username or password';
      
      if (typeof errorData.detail === 'string') {
        errorMessage = errorData.detail;
      } else if (Array.isArray(errorData.detail)) {
        errorMessage = errorData.detail.map(err => `${err.loc.join('.')}: ${err.msg}`).join(', ');
      }
      
      throw new Error(errorMessage);
    }

    const { access_token } = await response.json();
    setToken(access_token);
    
    // Fetch user profile
    const user = await fetchWithAuth('/users/me');
    setUser(user);
    return user;
  }

  function signOut() {
    global.localStorage.removeItem(TOKEN_KEY);
    global.localStorage.removeItem(USER_KEY);
  }

  async function updateProfile({ username, avatar_url }) {
    const user = await fetchWithAuth('/users/me', {
      method: 'PATCH',
      body: JSON.stringify({ username, avatar_url }),
    });
    setUser(user);
    return user;
  }

  async function updatePassword({ old_password, new_password }) {
    return fetchWithAuth('/users/me/password', {
      method: 'PATCH',
      body: JSON.stringify({ old_password, new_password }),
    });
  }

  global.Auth = { 
    getCurrentUser, 
    isAuthenticated, 
    signUp, 
    signIn, 
    signOut,
    updateProfile,
    updatePassword
  };

  // Initialize MOCK_USER if user is already logged in
  const user = getCurrentUser();
  if (user) {
    setUser(user);
  }
})(window);
