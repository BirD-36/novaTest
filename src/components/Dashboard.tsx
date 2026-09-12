import type { Page } from '../App';

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

const recentServers = [
  { name: 'Nova Survival | Chernarus', players: '47/60', ping: 23, map: 'Chernarus' },
  { name: 'Vanilla+ | No Cheats', players: '32/50', ping: 45, map: 'Livonia' },
  { name: 'Namalsk | Hardcore', players: '18/40', ping: 67, map: 'Namalsk' },
];

const quickStats = [
  { label: 'Total Playtime', value: '342h', icon: 'fa-clock', color: 'text-blue-400' },
  { label: 'Servers Joined', value: '28', icon: 'fa-server', color: 'text-green-400' },
  { label: 'Mods Installed', value: '14', icon: 'fa-puzzle-piece', color: 'text-purple-400' },
  { label: 'Achievements', value: '67', icon: 'fa-trophy', color: 'text-yellow-400' },
];

export default function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="p-6 space-y-6 fade-in">
      {/* Hero Section */}
      <div className="hero-gradient rounded-xl p-8 border border-slate-800/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Welcome back, Survivor</h2>
            <p className="text-slate-400 mb-4">Your DayZ adventure awaits. Last played 2 hours ago.</p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-200 glow-blue flex items-center gap-2">
              <i className="fa-solid fa-play text-sm"></i>
              <span>Launch DayZ</span>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center">
              <i className="fa-solid fa-skull text-5xl text-blue-400/60"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickStats.map((stat) => (
          <div key={stat.label} className="gradient-border rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center ${stat.color}`}>
                <i className={`fa-solid ${stat.icon} text-sm`}></i>
              </div>
              <div>
                <p className="text-lg font-bold text-white">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Servers & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Servers */}
        <div className="lg:col-span-2 gradient-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-white">Recent Servers</h3>
            <button
              onClick={() => onNavigate('servers')}
              className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              View All →
            </button>
          </div>
          <div className="space-y-2">
            {recentServers.map((server, i) => (
              <div key={i} className="server-row flex items-center justify-between p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-slate-700/50 flex items-center justify-center">
                    <i className="fa-solid fa-server text-xs text-slate-400"></i>
                  </div>
                  <div>
                    <p className="text-sm text-slate-200">{server.name}</p>
                    <p className="text-xs text-slate-500">{server.map}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-slate-300">{server.players}</p>
                    <p className="text-[10px] text-slate-500">players</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs ${server.ping < 50 ? 'text-green-400' : 'text-yellow-400'}`}>{server.ping}ms</p>
                    <p className="text-[10px] text-slate-500">ping</p>
                  </div>
                  <button className="px-3 py-1.5 bg-blue-600/20 text-blue-400 text-xs rounded hover:bg-blue-600/30 transition-colors">
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="gradient-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-white mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button
              onClick={() => onNavigate('servers')}
              className="w-full flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors text-left"
            >
              <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                <i className="fa-solid fa-search text-xs text-blue-400"></i>
              </div>
              <div>
                <p className="text-sm text-slate-200">Find Server</p>
                <p className="text-[10px] text-slate-500">Browse available servers</p>
              </div>
            </button>
            <button
              onClick={() => onNavigate('mods')}
              className="w-full flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors text-left"
            >
              <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center">
                <i className="fa-solid fa-download text-xs text-purple-400"></i>
              </div>
              <div>
                <p className="text-sm text-slate-200">Install Mods</p>
                <p className="text-[10px] text-slate-500">Manage your mod collection</p>
              </div>
            </button>
            <button
              onClick={() => onNavigate('news')}
              className="w-full flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors text-left"
            >
              <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
                <i className="fa-solid fa-newspaper text-xs text-green-400"></i>
              </div>
              <div>
                <p className="text-sm text-slate-200">Latest News</p>
                <p className="text-[10px] text-slate-500">Check DayZ updates</p>
              </div>
            </button>
            <button
              onClick={() => onNavigate('settings')}
              className="w-full flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors text-left"
            >
              <div className="w-8 h-8 rounded bg-yellow-500/20 flex items-center justify-center">
                <i className="fa-solid fa-wrench text-xs text-yellow-400"></i>
              </div>
              <div>
                <p className="text-sm text-slate-200">Configure</p>
                <p className="text-[10px] text-slate-500">Launcher settings</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
