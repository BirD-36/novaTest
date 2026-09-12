import { useState } from 'react';

interface Server {
  id: number;
  name: string;
  map: string;
  players: number;
  maxPlayers: number;
  ping: number;
  version: string;
  mods: number;
  queue: number;
  favorite: boolean;
}

const serversData: Server[] = [
  { id: 1, name: 'Nova Survival | Chernarus', map: 'Chernarus+', players: 47, maxPlayers: 60, ping: 23, version: '1.24', mods: 12, queue: 3, favorite: true },
  { id: 2, name: 'Vanilla+ Experience | No Cheats', map: 'Livonia', players: 32, maxPlayers: 50, ping: 45, version: '1.24', mods: 5, queue: 0, favorite: false },
  { id: 3, name: 'Namalsk Island | Hardcore PVP', map: 'Namalsk', players: 18, maxPlayers: 40, ping: 67, version: '1.24', mods: 8, queue: 1, favorite: true },
  { id: 4, name: 'DayZ Expansion | Roleplay', map: 'Chernarus+', players: 55, maxPlayers: 80, ping: 34, version: '1.24', mods: 24, queue: 12, favorite: false },
  { id: 5, name: 'Vanilla Official #1', map: 'Chernarus+', players: 58, maxPlayers: 60, ping: 12, version: '1.24', mods: 0, queue: 25, favorite: false },
  { id: 6, name: 'Frostline | Winter Survival', map: 'Frostline', players: 28, maxPlayers: 45, ping: 89, version: '1.24', mods: 15, queue: 0, favorite: false },
  { id: 7, name: 'Takistan | MilSim', map: 'Takistan', players: 12, maxPlayers: 30, ping: 120, version: '1.23', mods: 18, queue: 0, favorite: false },
  { id: 8, name: 'East Bootcamp | PVE Only', map: 'Chernarus+', players: 41, maxPlayers: 60, ping: 56, version: '1.24', mods: 7, queue: 2, favorite: true },
  { id: 9, name: 'Deer Isle | Custom Map', map: 'Deer Isle', players: 22, maxPlayers: 40, ping: 78, version: '1.24', mods: 10, queue: 0, favorite: false },
  { id: 10, name: 'Apocalypse | Zombie Horde', map: 'Chernarus+', players: 38, maxPlayers: 50, ping: 41, version: '1.24', mods: 20, queue: 5, favorite: false },
  { id: 11, name: 'No Respawn | One Life', map: 'Livonia', players: 15, maxPlayers: 30, ping: 33, version: '1.24', mods: 3, queue: 0, favorite: false },
  { id: 12, name: 'Trader Server | Economy', map: 'Chernarus+', players: 44, maxPlayers: 60, ping: 29, version: '1.24', mods: 16, queue: 4, favorite: true },
];

export default function ServerBrowser() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'favorites' | 'not_full'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'players' | 'ping'>('players');
  const [favorites, setFavorites] = useState<Set<number>>(new Set(serversData.filter(s => s.favorite).map(s => s.id)));

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredServers = serversData
    .filter(server => {
      if (search && !server.name.toLowerCase().includes(search.toLowerCase()) && !server.map.toLowerCase().includes(search.toLowerCase())) return false;
      if (filter === 'favorites' && !favorites.has(server.id)) return false;
      if (filter === 'not_full' && server.players >= server.maxPlayers) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'players') return b.players - a.players;
      if (sortBy === 'ping') return a.ping - b.ping;
      return 0;
    });

  return (
    <div className="p-6 space-y-4 fade-in h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Server Browser</h2>
          <p className="text-sm text-slate-400">{filteredServers.length} servers found</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-colors flex items-center gap-2">
          <i className="fa-solid fa-plus text-xs"></i>
          Add Direct IP
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
          <input
            type="text"
            placeholder="Search servers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>
        <div className="flex items-center gap-1 bg-slate-800/50 rounded-lg p-1">
          {(['all', 'favorites', 'not_full'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                filter === f ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {f === 'all' ? 'All' : f === 'favorites' ? '★ Favorites' : 'Not Full'}
            </button>
          ))}
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-xs text-slate-300 focus:outline-none focus:border-blue-500/50"
        >
          <option value="players">Sort by Players</option>
          <option value="name">Sort by Name</option>
          <option value="ping">Sort by Ping</option>
        </select>
      </div>

      {/* Server List */}
      <div className="flex-1 overflow-auto">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-2 px-4 py-2 text-[10px] uppercase tracking-wider text-slate-500 border-b border-slate-800/50 sticky top-0 bg-[#0a0e17]">
          <div className="col-span-1"></div>
          <div className="col-span-4">Server Name</div>
          <div className="col-span-2">Map</div>
          <div className="col-span-2">Players</div>
          <div className="col-span-1">Ping</div>
          <div className="col-span-1">Mods</div>
          <div className="col-span-1"></div>
        </div>

        {/* Server Rows */}
        <div className="space-y-0.5 mt-1">
          {filteredServers.map((server) => (
            <div key={server.id} className="server-row grid grid-cols-12 gap-2 px-4 py-3 rounded-lg transition-all duration-150 cursor-pointer group">
              <div className="col-span-1 flex items-center">
                <button onClick={() => toggleFavorite(server.id)} className="text-sm">
                  <i className={`fa-${favorites.has(server.id) ? 'solid' : 'regular'} fa-star ${favorites.has(server.id) ? 'text-yellow-400' : 'text-slate-600 group-hover:text-slate-400'}`}></i>
                </button>
              </div>
              <div className="col-span-4 flex items-center">
                <div>
                  <p className="text-sm text-slate-200 group-hover:text-white transition-colors">{server.name}</p>
                  <p className="text-[10px] text-slate-500">v{server.version} {server.queue > 0 && `• ${server.queue} in queue`}</p>
                </div>
              </div>
              <div className="col-span-2 flex items-center">
                <span className="text-xs text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded">{server.map}</span>
              </div>
              <div className="col-span-2 flex items-center">
                <div className="flex items-center gap-2">
                  <div className="w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        server.players / server.maxPlayers > 0.9 ? 'bg-red-500' :
                        server.players / server.maxPlayers > 0.7 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${(server.players / server.maxPlayers) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-slate-300">{server.players}/{server.maxPlayers}</span>
                </div>
              </div>
              <div className="col-span-1 flex items-center">
                <span className={`text-xs ${server.ping < 50 ? 'text-green-400' : server.ping < 100 ? 'text-yellow-400' : 'text-red-400'}`}>
                  {server.ping}ms
                </span>
              </div>
              <div className="col-span-1 flex items-center">
                <span className="text-xs text-slate-400">{server.mods}</span>
              </div>
              <div className="col-span-1 flex items-center justify-end">
                <button className="px-2 py-1 bg-blue-600/20 text-blue-400 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-600/30">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
