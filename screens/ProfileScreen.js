const ProfileScreen = () => {
  const { useState } = window.React;
  const Layout = window.Layout;
  const Auth = window.Auth;
  const RoutePath = window.RoutePath;

  const user = Auth.getCurrentUser();
  const [username, setUsername] = useState(user?.username || '');
  const [avatarUrl, setAvatarUrl] = useState(user?.avatar_url || '');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [profileMessage, setProfileMessage] = useState({ type: '', text: '' });
  const [passwordMessage, setPasswordMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    setProfileMessage({ type: '', text: '' });
    try {
      await Auth.updateProfile({ username, avatar_url: avatarUrl });
      setProfileMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (err) {
      setProfileMessage({ type: 'error', text: err.message || 'Update failed' });
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordMessage({ type: 'error', text: 'New passwords do not match' });
      return;
    }
    setLoading(true);
    setPasswordMessage({ type: '', text: '' });
    try {
      await Auth.updatePassword({ old_password: oldPassword, new_password: newPassword });
      setPasswordMessage({ type: 'success', text: 'Password changed successfully!' });
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setPasswordMessage({ type: 'error', text: err.message || 'Password change failed' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Profile Settings</h1>
          <p className="text-gray-500 mt-1">Manage your account information and security.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
              </div>
              <form onSubmit={handleUpdateProfile} className="p-6 space-y-4">
                {profileMessage.text && (
                  <div className={`p-3 rounded-lg text-sm ${profileMessage.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                    {profileMessage.text}
                  </div>
                )}
                
                <div className="grid grid-cols-1 gap-4">
                  <label className="block">
                    <span className="text-sm font-medium text-gray-700 mb-1 block">Username</span>
                    <input
                      type="text"
                      className="w-full h-11 px-3 rounded-lg border-gray-300 focus:border-primary focus:ring-primary/50 text-sm"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </label>
                  
                  <label className="block">
                    <span className="text-sm font-medium text-gray-700 mb-1 block">Email (Cannot be changed)</span>
                    <input
                      type="email"
                      disabled
                      className="w-full h-11 px-3 rounded-lg border-gray-200 bg-gray-50 text-gray-500 text-sm cursor-not-allowed"
                      value={user?.email || ''}
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-gray-700 mb-1 block">Avatar URL</span>
                    <input
                      type="text"
                      className="w-full h-11 px-3 rounded-lg border-gray-300 focus:border-primary focus:ring-primary/50 text-sm"
                      placeholder="https://example.com/avatar.jpg"
                      value={avatarUrl}
                      onChange={(e) => setAvatarUrl(e.target.value)}
                    />
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors ${loading ? 'opacity-50' : ''}`}
                  >
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>

            {/* Password Section */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Security</h2>
              </div>
              <form onSubmit={handleChangePassword} className="p-6 space-y-4">
                {passwordMessage.text && (
                  <div className={`p-3 rounded-lg text-sm ${passwordMessage.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                    {passwordMessage.text}
                  </div>
                )}

                <div className="space-y-4">
                  <label className="block">
                    <span className="text-sm font-medium text-gray-700 mb-1 block">Current Password</span>
                    <input
                      type="password"
                      required
                      className="w-full h-11 px-3 rounded-lg border-gray-300 focus:border-primary focus:ring-primary/50 text-sm"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-gray-700 mb-1 block">New Password</span>
                    <input
                      type="password"
                      required
                      className="w-full h-11 px-3 rounded-lg border-gray-300 focus:border-primary focus:ring-primary/50 text-sm"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-gray-700 mb-1 block">Confirm New Password</span>
                    <input
                      type="password"
                      required
                      className="w-full h-11 px-3 rounded-lg border-gray-300 focus:border-primary focus:ring-primary/50 text-sm"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`px-6 py-2.5 bg-gray-900 text-white font-semibold rounded-lg hover:bg-black transition-colors ${loading ? 'opacity-50' : ''}`}
                  >
                    {loading ? 'Updating...' : 'Change Password'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Avatar Preview Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center">
              <h3 className="text-sm font-bold text-gray-900 mb-6 w-full">Avatar Preview</h3>
              <div className="relative">
                <img
                  src={avatarUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFgGsKMgMsoJjKxI0GqxLArhwhRShqTscOycT3OFe8TGjVLHfZqyG9GYz7PGkLDdVkBp-42-JVLLW9_aMdx5ZI1qRuJiyvmPyKoBQfyEOyXowT1px7dyVY2KL9RIcYFHUrhBHwE0gwXaJvX9FnVA1wYvnGvrVNG9LfeIJ9XOBAERTcEpHzRJvT9CEosop1H8fX47NaO_5cQ0F22hLCekcd12eEL9sqt9JAdr6H_iLu7V2Cs3AkBHNAa6YsdpfMU38zI_Td7OP7tew'}
                  alt="Profile Preview"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md bg-gray-100"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-lg font-bold text-gray-900">{username}</p>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
              <div className="flex gap-3 text-blue-700">
                <span className="material-symbols-outlined text-xl">info</span>
                <div>
                  <p className="text-sm font-bold">Profile Visibility</p>
                  <p className="text-xs mt-1 leading-relaxed">Your username and avatar are visible to other learners in practice leaderboards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

window.ProfileScreen = ProfileScreen;
