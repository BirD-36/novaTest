const newsItems = [
  {
    id: 1,
    title: 'DayZ 1.24 Update - New Frostline DLC',
    date: 'December 15, 2024',
    category: 'Update',
    excerpt: 'The highly anticipated Frostline DLC brings a new arctic map with unique survival mechanics, cold weather systems, and new wildlife encounters.',
    image: '🏔️',
    tag: 'Major Update',
    tagColor: 'bg-blue-500/20 text-blue-400',
  },
  {
    id: 2,
    title: 'Server Maintenance - December 20th',
    date: 'December 14, 2024',
    category: 'Maintenance',
    excerpt: 'Scheduled maintenance will be performed on official servers from 06:00 to 10:00 UTC. Community servers may be affected.',
    image: '🔧',
    tag: 'Maintenance',
    tagColor: 'bg-yellow-500/20 text-yellow-400',
  },
  {
    id: 3,
    title: 'Community Spotlight: Best Builds of the Month',
    date: 'December 12, 2024',
    category: 'Community',
    excerpt: 'Check out the most impressive base builds from our community this month. From underground bunkers to fortified castles.',
    image: '🏰',
    tag: 'Community',
    tagColor: 'bg-green-500/20 text-green-400',
  },
  {
    id: 4,
    title: 'Anti-Cheat Update v3.2 Released',
    date: 'December 10, 2024',
    category: 'Security',
    excerpt: 'New anti-cheat measures have been deployed to combat speed hacking and wall-hack exploits. Server admins should update immediately.',
    image: '🛡️',
    tag: 'Security',
    tagColor: 'bg-red-500/20 text-red-400',
  },
  {
    id: 5,
    title: 'New Modding API Documentation',
    date: 'December 8, 2024',
    category: 'Development',
    excerpt: 'Comprehensive documentation for the new DayZ modding API is now available. Create custom weapons, vehicles, and game mechanics.',
    image: '📚',
    tag: 'Dev',
    tagColor: 'bg-purple-500/20 text-purple-400',
  },
  {
    id: 6,
    title: 'Winter Event: Holiday Survival Challenge',
    date: 'December 5, 2024',
    category: 'Event',
    excerpt: 'Join the holiday survival challenge! Special winter loot spawns, festive decorations on official servers, and exclusive rewards.',
    image: '🎄',
    tag: 'Event',
    tagColor: 'bg-emerald-500/20 text-emerald-400',
  },
];

const changelog = [
  { version: '2.4.1', date: 'Dec 14, 2024', changes: ['Fixed mod sync issues with large mods', 'Improved server browser performance', 'Added new keyboard shortcuts'] },
  { version: '2.4.0', date: 'Dec 10, 2024', changes: ['New mod manager UI', 'Server favorites sync across devices', 'Dark mode improvements', 'Bug fixes and stability improvements'] },
  { version: '2.3.5', date: 'Dec 1, 2024', changes: ['Added Frostline DLC support', 'Updated mod download manager', 'Fixed crash on startup with certain mods'] },
];

export default function News() {
  return (
    <div className="p-6 space-y-6 fade-in">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-white">News & Updates</h2>
        <p className="text-sm text-slate-400">Latest DayZ news and launcher changelog</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* News Feed */}
        <div className="lg:col-span-2 space-y-4">
          {newsItems.map((item) => (
            <article key={item.id} className="gradient-border rounded-xl p-5 hover:border-blue-500/30 transition-colors cursor-pointer group">
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-lg bg-slate-800/50 flex items-center justify-center text-2xl shrink-0">
                  {item.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${item.tagColor}`}>{item.tag}</span>
                    <span className="text-[10px] text-slate-500">{item.date}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{item.excerpt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Changelog */}
        <div className="space-y-4">
          <div className="gradient-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <i className="fa-solid fa-code-branch text-blue-400 text-xs"></i>
              Launcher Changelog
            </h3>
            <div className="space-y-4">
              {changelog.map((entry) => (
                <div key={entry.version} className="border-l-2 border-slate-700 pl-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-blue-400">v{entry.version}</span>
                    <span className="text-[10px] text-slate-500">{entry.date}</span>
                  </div>
                  <ul className="space-y-1">
                    {entry.changes.map((change, i) => (
                      <li key={i} className="text-xs text-slate-400 flex items-start gap-1.5">
                        <span className="text-slate-600 mt-0.5">•</span>
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Server Status */}
          <div className="gradient-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <i className="fa-solid fa-signal text-green-400 text-xs"></i>
              Server Status
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Official Servers</span>
                <span className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Mod Workshop</span>
                <span className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Authentication</span>
                <span className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Matchmaking</span>
                <span className="text-xs text-yellow-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                  Degraded
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
