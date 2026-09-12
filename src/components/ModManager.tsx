import { useState } from 'react';

interface Mod {
  id: number;
  name: string;
  author: string;
  size: string;
  version: string;
  enabled: boolean;
  category: string;
  updated: string;
}

const modsData: Mod[] = [
  { id: 1, name: 'VPP Admin Tools', author: 'VPP Team', size: '45.2 MB', version: '1.7.3', enabled: true, category: 'Admin', updated: '2 days ago' },
  { id: 2, name: 'CF (Community Framework)', author: 'DaemonForge', size: '12.8 MB', version: '1.0.0', enabled: true, category: 'Framework', updated: '1 week ago' },
  { id: 3, name: 'Dabs Framework', author: 'Dabs', size: '8.4 MB', version: '2.1.0', enabled: true, category: 'Framework', updated: '3 days ago' },
  { id: 4, name: 'Trader Mod', author: 'BigStas', size: '22.1 MB', version: '4.5.2', enabled: true, category: 'Gameplay', updated: '5 days ago' },
  { id: 5, name: 'Code Lock', author: 'Myst', size: '3.2 MB', version: '1.2.0', enabled: true, category: 'Gameplay', updated: '2 weeks ago' },
  { id: 6, name: 'Expansion Mod', author: 'DayZ-Expansion', size: '156.7 MB', version: '3.4.1', enabled: true, category: 'Overhaul', updated: '1 day ago' },
  { id: 7, name: 'Vehicle Parts Redone', author: 'DankPanic', size: '18.3 MB', version: '1.0.5', enabled: false, category: 'Gameplay', updated: '1 month ago' },
  { id: 8, name: 'Base Building Plus', author: 'CrSky', size: '34.6 MB', version: '2.0.1', enabled: true, category: 'Gameplay', updated: '4 days ago' },
  { id: 9, name: 'CrSky Skins', author: 'CrSky', size: '67.2 MB', version: '1.3.0', enabled: false, category: 'Cosmetic', updated: '2 weeks ago' },
  { id: 10, name: 'Zombie Sound Overhaul', author: 'AudioMod', size: '89.4 MB', version: '2.0.0', enabled: true, category: 'Audio', updated: '3 days ago' },
  { id: 11, name: 'Map Enhancements', author: 'MapTeam', size: '5.1 MB', version: '1.1.2', enabled: true, category: 'UI', updated: '1 week ago' },
  { id: 12, name: 'DayZ Radio', author: 'RadioTeam', size: '2.8 MB', version: '1.0.0', enabled: false, category: 'Gameplay', updated: '3 weeks ago' },
];

const categories = ['All', 'Framework', 'Gameplay', 'Admin', 'Overhaul', 'Cosmetic', 'Audio', 'UI'];

export default function ModManager() {
  const [mods, setMods] = useState(modsData);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showEnabledOnly, setShowEnabledOnly] = useState(false);

  const toggleMod = (id: number) => {
    setMods(prev => prev.map(mod => mod.id === id ? { ...mod, enabled: !mod.enabled } : mod));
  };

  const filteredMods = mods.filter(mod => {
    if (search && !mod.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (selectedCategory !== 'All' && mod.category !== selectedCategory) return false;
    if (showEnabledOnly && !mod.enabled) return false;
    return true;
  });

  const enabledCount = mods.filter(m => m.enabled).length;
  const totalSize = mods.filter(m => m.enabled).reduce((acc, m) => acc + parseFloat(m.size), 0).toFixed(1);

  return (
    <div className="p-6 space-y-4 fade-in h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Mod Manager</h2>
          <p className="text-sm text-slate-400">{enabledCount} active mods • {totalSize} MB total</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 text-slate-300 text-sm rounded-lg transition-colors flex items-center gap-2">
            <i className="fa-solid fa-download text-xs"></i>
            Subscribe All
          </button>
          <button className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white text-sm rounded-lg transition-colors flex items-center gap-2">
            <i className="fa-solid fa-sync text-xs"></i>
            Update Mods
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
          <input
            type="text"
            placeholder="Search mods..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>
        <div className="flex items-center gap-1 bg-slate-800/50 rounded-lg p-1 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === cat ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showEnabledOnly}
            onChange={(e) => setShowEnabledOnly(e.target.checked)}
            className="w-3.5 h-3.5 rounded border-slate-600 bg-slate-800 text-blue-600 focus:ring-0"
          />
          <span className="text-xs text-slate-400">Enabled only</span>
        </label>
      </div>

      {/* Mod List */}
      <div className="flex-1 overflow-auto">
        <div className="grid gap-2">
          {filteredMods.map((mod) => (
            <div key={mod.id} className="gradient-border rounded-lg p-4 flex items-center gap-4 hover:border-blue-500/30 transition-colors">
              {/* Toggle */}
              <button
                onClick={() => toggleMod(mod.id)}
                className={`w-10 h-5 rounded-full transition-colors relative ${mod.enabled ? 'bg-blue-600' : 'bg-slate-700'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-transform ${mod.enabled ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
              </button>

              {/* Mod Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className={`text-sm font-medium ${mod.enabled ? 'text-white' : 'text-slate-500'}`}>{mod.name}</p>
                  <span className="text-[10px] px-1.5 py-0.5 bg-slate-800/80 text-slate-400 rounded">{mod.category}</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">by {mod.author} • v{mod.version} • {mod.size} • Updated {mod.updated}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-500 hover:text-slate-300 transition-colors">
                  <i className="fa-solid fa-arrow-up text-xs"></i>
                </button>
                <button className="p-2 text-slate-500 hover:text-slate-300 transition-colors">
                  <i className="fa-solid fa-arrow-down text-xs"></i>
                </button>
                <button className="p-2 text-red-500/50 hover:text-red-400 transition-colors">
                  <i className="fa-solid fa-trash text-xs"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
