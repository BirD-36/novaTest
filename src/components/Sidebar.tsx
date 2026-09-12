import type { Page } from '../App';

interface SidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { id: Page; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'fa-home' },
  { id: 'servers', label: 'Servers', icon: 'fa-server' },
  { id: 'mods', label: 'Mods', icon: 'fa-puzzle-piece' },
  { id: 'news', label: 'News', icon: 'fa-newspaper' },
  { id: 'profile', label: 'Profile', icon: 'fa-user' },
  { id: 'settings', label: 'Settings', icon: 'fa-cog' },
];

export default function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  return (
    <aside className="w-56 bg-[#0d1220] border-r border-slate-800/60 flex flex-col shrink-0">
      {/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-slate-800/60">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <i className="fa-solid fa-bolt text-white text-sm"></i>
          </div>
          <div>
            <h1 className="text-sm font-bold text-white tracking-wide">NOVA</h1>
            <p className="text-[10px] text-slate-400 -mt-0.5 tracking-wider">DAYZ LAUNCHER</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`nav-item w-full flex items-center gap-3 px-5 py-2.5 text-sm transition-all duration-200 ${
              currentPage === item.id
                ? 'active text-blue-400'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <i className={`fa-solid ${item.icon} w-4 text-center text-xs`}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-slate-800/60">
        <div className="gradient-border rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs text-slate-300">System Status</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px]">
              <span className="text-slate-500">CPU</span>
              <span className="text-slate-400">23%</span>
            </div>
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-[23%] bg-blue-500 rounded-full"></div>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-slate-500">RAM</span>
              <span className="text-slate-400">61%</span>
            </div>
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-[61%] bg-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
