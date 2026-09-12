export default function Profile() {
  const achievements = [
    { name: 'First Blood', desc: 'Eliminate your first zombie', icon: '🧟', unlocked: true },
    { name: 'Survivor', desc: 'Survive for 24 hours', icon: '⏰', unlocked: true },
    { name: 'Base Builder', desc: 'Build your first base', icon: '🏠', unlocked: true },
    { name: 'Trader', desc: 'Complete 50 trades', icon: '💰', unlocked: true },
    { name: 'Explorer', desc: 'Visit all major locations', icon: '🗺️', unlocked: false },
    { name: 'Sharpshooter', desc: 'Kill 100 zombies with headshots', icon: '🎯', unlocked: true },
    { name: 'Lone Wolf', desc: 'Survive 7 days solo', icon: '🐺', unlocked: true },
    { name: 'Warlord', desc: 'Win 10 PVP encounters', icon: '⚔️', unlocked: false },
    { name: 'Collector', desc: 'Collect 50 unique items', icon: '🎒', unlocked: true },
    { name: 'Medic', desc: 'Heal 100 wounds', icon: '💊', unlocked: true },
    { name: 'Ghost', desc: 'Avoid detection for 1 hour', icon: '👻', unlocked: false },
    { name: 'Legend', desc: 'Reach max level', icon: '👑', unlocked: false },
  ];

  const characters = [
    { name: 'Shadow_Walker', server: 'Nova Survival', playtime: '127h', status: 'alive', health: 85 },
    { name: 'IronFist_99', server: 'Vanilla+ Experience', playtime: '89h', status: 'dead', health: 0 },
    { name: 'NightOwl', server: 'Namalsk Island', playtime: '64h', status: 'alive', health: 62 },
    { name: 'SurvivalKing', server: 'Trader Server', playtime: '62h', status: 'alive', health: 100 },
  ];

  return (
    <div className="p-6 space-y-6 fade-in">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-white">Player Profile</h2>
        <p className="text-sm text-slate-400">Your DayZ journey and statistics</p>
      </div>

      {/* Profile Card */}
      <div className="gradient-border rounded-xl p-6">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <i className="fa-solid fa-user text-3xl text-white/80"></i>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-bold text-white">NovaSurvivor</h3>
              <span className="text-[10px] px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full">Level 42</span>
            </div>
            <p className="text-sm text-slate-400 mt-1">Member since March 2023 • Steam ID: 76561198012345678</p>
            <div className="flex items-center gap-6 mt-4">
              <div>
                <p className="text-lg font-bold text-white">342h</p>
                <p className="text-[10px] text-slate-500">Total Playtime</p>
              </div>
              <div>
                <p className="text-lg font-bold text-white">1,247</p>
                <p className="text-[10px] text-slate-500">Zombies Killed</p>
              </div>
              <div>
                <p className="text-lg font-bold text-white">89</p>
                <p className="text-[10px] text-slate-500">Players Eliminated</p>
              </div>
              <div>
                <p className="text-lg font-bold text-white">28</p>
                <p className="text-[10px] text-slate-500">Servers Played</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Characters */}
        <div className="gradient-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <i className="fa-solid fa-users text-blue-400 text-xs"></i>
            Characters
          </h3>
          <div className="space-y-2">
            {characters.map((char, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${char.status === 'alive' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                    <i className={`fa-solid fa-${char.status === 'alive' ? 'heart' : 'skull'} text-xs ${char.status === 'alive' ? 'text-green-400' : 'text-red-400'}`}></i>
                  </div>
                  <div>
                    <p className="text-sm text-slate-200">{char.name}</p>
                    <p className="text-[10px] text-slate-500">{char.server} • {char.playtime}</p>
                  </div>
                </div>
                {char.status === 'alive' && (
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${char.health > 70 ? 'bg-green-500' : char.health > 40 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${char.health}%` }}></div>
                    </div>
                    <span className="text-[10px] text-slate-400">{char.health}%</span>
                  </div>
                )}
                {char.status === 'dead' && (
                  <span className="text-[10px] text-red-400">DEAD</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="gradient-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <i className="fa-solid fa-trophy text-yellow-400 text-xs"></i>
              Achievements
            </h3>
            <span className="text-xs text-slate-400">{achievements.filter(a => a.unlocked).length}/{achievements.length}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-auto">
            {achievements.map((ach, i) => (
              <div key={i} className={`p-2.5 rounded-lg border transition-colors ${ach.unlocked ? 'bg-slate-800/30 border-slate-700/30' : 'bg-slate-800/10 border-slate-800/30 opacity-50'}`}>
                <div className="flex items-center gap-2">
                  <span className="text-lg">{ach.icon}</span>
                  <div>
                    <p className={`text-xs font-medium ${ach.unlocked ? 'text-slate-200' : 'text-slate-500'}`}>{ach.name}</p>
                    <p className="text-[10px] text-slate-500">{ach.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
