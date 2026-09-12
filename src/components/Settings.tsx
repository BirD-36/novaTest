import { useState } from 'react';

export default function Settings() {
  const [settings, setSettings] = useState({
    autoUpdateMods: true,
    autoJoinQueue: false,
    minimizeToTray: true,
    startWithWindows: false,
    hardwareAcceleration: true,
    notifications: true,
    darkMode: true,
    soundEffects: true,
    gamePath: 'C:\\Program Files (x86)\\Steam\\steamapps\\common\\DayZ',
    modPath: 'C:\\Users\\User\\AppData\\Local\\DayZ\\Mods',
    maxDownloadSpeed: '0',
    resolution: '1920x1080',
    windowMode: 'Fullscreen',
    graphicsPreset: 'High',
    viewDistance: '1500',
    textureQuality: 'High',
    shadowQuality: 'Medium',
  });

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-6 space-y-6 fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Settings</h2>
          <p className="text-sm text-slate-400">Configure your launcher and game settings</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-colors">
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Launcher Settings */}
        <div className="gradient-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <i className="fa-solid fa-sliders text-blue-400 text-xs"></i>
            Launcher Settings
          </h3>
          <div className="space-y-4">
            <ToggleSetting label="Auto-update mods" desc="Automatically download mod updates" value={settings.autoUpdateMods} onChange={(v) => updateSetting('autoUpdateMods', v)} />
            <ToggleSetting label="Auto-join queue" desc="Automatically join server queue when full" value={settings.autoJoinQueue} onChange={(v) => updateSetting('autoJoinQueue', v)} />
            <ToggleSetting label="Minimize to tray" desc="Keep launcher running in system tray" value={settings.minimizeToTray} onChange={(v) => updateSetting('minimizeToTray', v)} />
            <ToggleSetting label="Start with Windows" desc="Launch NovaDayZ on system startup" value={settings.startWithWindows} onChange={(v) => updateSetting('startWithWindows', v)} />
            <ToggleSetting label="Hardware acceleration" desc="Use GPU for launcher rendering" value={settings.hardwareAcceleration} onChange={(v) => updateSetting('hardwareAcceleration', v)} />
            <ToggleSetting label="Notifications" desc="Show desktop notifications" value={settings.notifications} onChange={(v) => updateSetting('notifications', v)} />
            <ToggleSetting label="Sound effects" desc="Play UI sounds" value={settings.soundEffects} onChange={(v) => updateSetting('soundEffects', v)} />
          </div>
        </div>

        {/* Game Settings */}
        <div className="gradient-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <i className="fa-solid fa-gamepad text-purple-400 text-xs"></i>
            Game Settings
          </h3>
          <div className="space-y-4">
            <SelectSetting label="Resolution" value={settings.resolution} options={['1920x1080', '2560x1440', '3840x2160', '1600x900']} onChange={(v) => updateSetting('resolution', v)} />
            <SelectSetting label="Window Mode" value={settings.windowMode} options={['Fullscreen', 'Borderless', 'Windowed']} onChange={(v) => updateSetting('windowMode', v)} />
            <SelectSetting label="Graphics Preset" value={settings.graphicsPreset} options={['Low', 'Medium', 'High', 'Ultra', 'Custom']} onChange={(v) => updateSetting('graphicsPreset', v)} />
            <SelectSetting label="Texture Quality" value={settings.textureQuality} options={['Low', 'Medium', 'High', 'Ultra']} onChange={(v) => updateSetting('textureQuality', v)} />
            <SelectSetting label="Shadow Quality" value={settings.shadowQuality} options={['Low', 'Medium', 'High', 'Ultra']} onChange={(v) => updateSetting('shadowQuality', v)} />
            <div>
              <label className="text-xs text-slate-400 mb-1 block">View Distance: {settings.viewDistance}m</label>
              <input
                type="range"
                min="500"
                max="3000"
                step="100"
                value={settings.viewDistance}
                onChange={(e) => updateSetting('viewDistance', e.target.value)}
                className="w-full h-1.5 bg-slate-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Paths */}
        <div className="gradient-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <i className="fa-solid fa-folder text-green-400 text-xs"></i>
            File Paths
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Game Installation</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={settings.gamePath}
                  readOnly
                  className="flex-1 px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-xs text-slate-300 font-mono"
                />
                <button className="px-3 py-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 text-xs rounded-lg transition-colors">
                  Browse
                </button>
              </div>
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Mod Storage</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={settings.modPath}
                  readOnly
                  className="flex-1 px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-xs text-slate-300 font-mono"
                />
                <button className="px-3 py-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 text-xs rounded-lg transition-colors">
                  Browse
                </button>
              </div>
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Max Download Speed (0 = unlimited)</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={settings.maxDownloadSpeed}
                  onChange={(e) => updateSetting('maxDownloadSpeed', e.target.value)}
                  className="flex-1 px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-xs text-slate-300 font-mono"
                />
                <span className="text-xs text-slate-500">MB/s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="gradient-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <i className="fa-solid fa-wrench text-yellow-400 text-xs"></i>
            Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors text-left">
              <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                <i className="fa-solid fa-rotate text-xs text-blue-400"></i>
              </div>
              <div>
                <p className="text-sm text-slate-200">Verify Game Files</p>
                <p className="text-[10px] text-slate-500">Check and repair game installation</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors text-left">
              <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center">
                <i className="fa-solid fa-broom text-xs text-purple-400"></i>
              </div>
              <div>
                <p className="text-sm text-slate-200">Clear Cache</p>
                <p className="text-[10px] text-slate-500">Remove temporary files and cache</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors text-left">
              <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
                <i className="fa-solid fa-file-export text-xs text-green-400"></i>
              </div>
              <div>
                <p className="text-sm text-slate-200">Export Configuration</p>
                <p className="text-[10px] text-slate-500">Backup your launcher settings</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 transition-colors text-left border border-red-500/10">
              <div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center">
                <i className="fa-solid fa-trash text-xs text-red-400"></i>
              </div>
              <div>
                <p className="text-sm text-red-300">Reset to Defaults</p>
                <p className="text-[10px] text-red-400/60">Reset all settings to default values</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleSetting({ label, desc, value, onChange }: { label: string; desc: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-200">{label}</p>
        <p className="text-[10px] text-slate-500">{desc}</p>
      </div>
      <button
        onClick={() => onChange(!value)}
        className={`w-10 h-5 rounded-full transition-colors relative ${value ? 'bg-blue-600' : 'bg-slate-700'}`}
      >
        <div className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-transform ${value ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
      </button>
    </div>
  );
}

function SelectSetting({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="text-xs text-slate-400 mb-1 block">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-xs text-slate-300 focus:outline-none focus:border-blue-500/50"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
