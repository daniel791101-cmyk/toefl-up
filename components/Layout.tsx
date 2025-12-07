import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MOCK_USER } from '../constants';
import { RoutePath } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', icon: 'home', path: RoutePath.DASHBOARD },
    { label: 'Reading', icon: 'menu_book', path: RoutePath.READING_LIB },
    { label: 'Listening', icon: 'headphones', path: RoutePath.LISTENING_LIB },
    { label: 'Practice History', icon: 'history', path: RoutePath.HISTORY },
    { label: 'Report', icon: 'analytics', path: RoutePath.REPORT },
  ];

  return (
    <div className="flex h-screen w-full bg-background-light overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-white border-r border-gray-200 h-full flex-shrink-0">
        <div className="p-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">school</span>
          <h1 className="text-xl font-bold text-gray-900">TOEFL Prep</h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex w-full items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className={`material-symbols-outlined ${isActive ? 'fill-icon' : ''}`}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button 
             onClick={() => navigate(RoutePath.LOGIN)}
             className="flex w-full items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            <span className="material-symbols-outlined">logout</span>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
          <div className="md:hidden flex items-center gap-2 text-primary font-bold">
            <span className="material-symbols-outlined">school</span>
            TOEFL Prep
          </div>
          <div className="flex-1"></div> {/* Spacer */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
               <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
               <div className="text-right hidden sm:block">
                 <p className="text-sm font-medium text-gray-900">{MOCK_USER.name}</p>
                 <p className="text-xs text-gray-500">Learner</p>
               </div>
               <img src={MOCK_USER.avatar} alt="User" className="w-9 h-9 rounded-full bg-gray-200 object-cover" />
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
