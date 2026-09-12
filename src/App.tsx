import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ServerBrowser from './components/ServerBrowser';
import ModManager from './components/ModManager';
import News from './components/News';
import Settings from './components/Settings';
import Profile from './components/Profile';

export type Page = 'dashboard' | 'servers' | 'mods' | 'news' | 'profile' | 'settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'servers':
        return <ServerBrowser />;
      case 'mods':
        return <ModManager />;
      case 'news':
        return <News />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0a0e17]">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1 overflow-hidden flex flex-col">
        {/* Top Bar */}
        <header className="h-12 border-b border-slate-800/60 flex items-center justify-between px-6 bg-[#0d1220]/80 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-400">NovaDayZ Launcher</span>
            <span className="text-slate-600">|</span>
            <span className="text-sm text-slate-500 capitalize">{currentPage}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot"></div>
              <span className="text-xs text-green-400">Online</span>
            </div>
            <span className="text-xs text-slate-500">v2.4.1</span>
          </div>
        </header>
        {/* Page Content */}
        <div className="flex-1 overflow-auto fade-in">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}
