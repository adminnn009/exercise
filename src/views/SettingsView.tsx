import React, { useState } from 'react';
import { AppState } from '../types';
import { PUSH_UP_LEVELS } from '../data/program';
import { 
  exportStateAsJSON, getDefaultState, saveAppState, 
  updateUserSettings, validateAndImportJSON 
} from '../utils/storage';
import { 
  Settings, Volume2, Mic, Eye, ShieldAlert, Download, 
  Upload, RotateCcw, AlertTriangle, Check, Award 
} from 'lucide-react';

interface SettingsViewProps {
  state: AppState;
  onUpdateState: (newState: AppState) => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({ state, onUpdateState }) => {
  const [resetConfirmation, setResetConfirmation] = useState('');
  const [showFullResetModal, setShowFullResetModal] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const { settings } = state;

  const handleToggleSound = () => {
    const next = updateUserSettings(state, { soundEnabled: !settings.soundEnabled });
    onUpdateState(next);
  };

  const handleToggleSpeech = () => {
    const next = updateUserSettings(state, { speechEnabled: !settings.speechEnabled });
    onUpdateState(next);
  };

  const handleToggleWakeLock = () => {
    const next = updateUserSettings(state, { wakeLockEnabled: !settings.wakeLockEnabled });
    onUpdateState(next);
  };

  const handleChangeTextScale = (scale: 'normal' | 'large') => {
    const next = updateUserSettings(state, { textScale: scale });
    onUpdateState(next);
  };

  const handleChangePushUpLevel = (lvl: number) => {
    const next = updateUserSettings(state, { pushUpLevel: lvl });
    onUpdateState(next);
  };

  const handleResetStreak = () => {
    if (window.confirm('Are you sure you want to reset your streak counter? Completed workouts will remain saved.')) {
      const next: AppState = { ...state, streakCurrent: 0 };
      saveAppState(next);
      onUpdateState(next);
    }
  };

  const handleRestartDayOne = () => {
    if (window.confirm('Restart program from Day 1? Your streak and test logs will be kept.')) {
      const next: AppState = { ...state, currentDay: 1 };
      saveAppState(next);
      onUpdateState(next);
    }
  };

  const handleFullReset = () => {
    if (resetConfirmation === 'RESET') {
      const fresh = getDefaultState();
      saveAppState(fresh);
      onUpdateState(fresh);
      setShowFullResetModal(false);
      setResetConfirmation('');
      alert('All application data has been completely erased.');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const imported = validateAndImportJSON(content);
      if (imported) {
        onUpdateState(imported);
        setImportStatus('Backup restored successfully!');
        setTimeout(() => setImportStatus(null), 4000);
      } else {
        setImportStatus('Failed: Invalid backup JSON format.');
        setTimeout(() => setImportStatus(null), 4000);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-4 space-y-4 pb-24 text-xs">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <Settings className="w-6 h-6 text-amber-400" />
          Settings & Customization
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Audio coaching, wake lock, progression overrides, backups, and reset controls.
        </p>
      </div>

      {/* AUDIO & COACHING SETTINGS */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-amber-400" />
          Workout Guidance & Sound
        </h3>

        {/* Audio Beeps Toggle */}
        <div className="flex items-center justify-between py-1">
          <div>
            <span className="font-semibold text-slate-200 block">Timer Countdown Beeps</span>
            <span className="text-[11px] text-slate-400">Audio oscillator ticks at 3-2-1 and start bells</span>
          </div>
          <button
            onClick={handleToggleSound}
            className={`w-11 h-6 rounded-full transition-colors relative ${settings.soundEnabled ? 'bg-amber-500' : 'bg-slate-700'}`}
          >
            <span className={`block w-4 h-4 rounded-full bg-white transition-transform ${settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
          </button>
        </div>

        {/* Voice Coaching Toggle */}
        <div className="flex items-center justify-between py-1 border-t border-slate-800">
          <div>
            <span className="font-semibold text-slate-200 block">Spoken Voice Coaching</span>
            <span className="text-[11px] text-slate-400">Speech synthesis announces exercises, halfway cues, and rests</span>
          </div>
          <button
            onClick={handleToggleSpeech}
            className={`w-11 h-6 rounded-full transition-colors relative ${settings.speechEnabled ? 'bg-amber-500' : 'bg-slate-700'}`}
          >
            <span className={`block w-4 h-4 rounded-full bg-white transition-transform ${settings.speechEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
          </button>
        </div>

        {/* Screen Wake Lock */}
        <div className="flex items-center justify-between py-1 border-t border-slate-800">
          <div>
            <span className="font-semibold text-slate-200 block">Screen Wake Lock</span>
            <span className="text-[11px] text-slate-400">Prevents phone display from sleeping during sessions</span>
          </div>
          <button
            onClick={handleToggleWakeLock}
            className={`w-11 h-6 rounded-full transition-colors relative ${settings.wakeLockEnabled ? 'bg-amber-500' : 'bg-slate-700'}`}
          >
            <span className={`block w-4 h-4 rounded-full bg-white transition-transform ${settings.wakeLockEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
          </button>
        </div>
      </div>

      {/* PUSH-UP PROGRESSION LADDER OVERRIDE */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-400" />
          Push-Up Progression Ladder
        </h3>
        <p className="text-[11px] text-slate-400">
          Workouts prescribe your selected level. The program suggests advancing when you comfortably complete target sets for 2 consecutive push sessions.
        </p>

        <div className="space-y-2 pt-1">
          {PUSH_UP_LEVELS.map((item) => {
            const isSelected = settings.pushUpLevel === item.level;
            return (
              <button
                key={item.level}
                onClick={() => handleChangePushUpLevel(item.level)}
                className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-colors ${
                  isSelected
                    ? 'bg-amber-500/10 border-amber-500 text-amber-300 font-bold shadow-sm'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <div>
                  <span className="text-xs block">
                    Tier {item.level + 1}: {item.name}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Graduation target: {item.targetSets} sets of {item.targetReps} clean reps
                  </span>
                </div>
                {isSelected && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* BACKUP & RESTORE DATA */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
          <Download className="w-4 h-4 text-amber-400" />
          Data Backup & Transfer
        </h3>
        <p className="text-[11px] text-slate-400">
          All data is stored private on your device. Export a backup JSON file anytime or restore to another phone.
        </p>

        {importStatus && (
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            {importStatus}
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 pt-1">
          <button
            onClick={() => exportStateAsJSON(state)}
            className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold flex items-center justify-center gap-1.5 transition-colors active:scale-95"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            Export Backup
          </button>

          <label className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors active:scale-95">
            <Upload className="w-3.5 h-3.5 text-sky-400" />
            <span>Import Backup</span>
            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* RESET & DANGER ZONE */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-rose-900/50 space-y-3">
        <h3 className="text-sm font-semibold text-rose-400 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          Reset Options
        </h3>

        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800">
            <div>
              <span className="font-semibold text-slate-200 block">Reset Streak Only</span>
              <span className="text-[11px] text-slate-400">Sets active streak to 0; keeps workout log</span>
            </div>
            <button
              onClick={handleResetStreak}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
            >
              Reset Streak
            </button>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800">
            <div>
              <span className="font-semibold text-slate-200 block">Restart From Day 1</span>
              <span className="text-[11px] text-slate-400">Resets day counter; preserves test results</span>
            </div>
            <button
              onClick={handleRestartDayOne}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
            >
              Restart Day 1
            </button>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-rose-950/20 border border-rose-900/40">
            <div>
              <span className="font-semibold text-rose-300 block">Erase All Data</span>
              <span className="text-[11px] text-slate-400">Destructive factory reset (requires typing RESET)</span>
            </div>
            <button
              onClick={() => setShowFullResetModal(true)}
              className="px-3 py-1.5 rounded-lg bg-rose-900/40 hover:bg-rose-900/60 border border-rose-800 text-rose-200 text-xs font-bold"
            >
              Erase Everything
            </button>
          </div>
        </div>
      </div>

      {/* Two-step RESET Confirmation Modal */}
      {showFullResetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-sm rounded-2xl bg-slate-900 border border-rose-700 p-5 shadow-2xl text-left">
            <h3 className="text-base font-bold text-rose-400 flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Confirm Factory Reset
            </h3>
            <p className="text-xs text-slate-300 mb-3">
              This will permanently delete all completed workouts, streaks, test history, and settings from localStorage. This action cannot be undone.
            </p>
            <p className="text-xs text-amber-300 font-semibold mb-2">
              Type <span className="font-mono text-white">RESET</span> below to confirm:
            </p>
            <input
              type="text"
              value={resetConfirmation}
              onChange={(e) => setResetConfirmation(e.target.value)}
              placeholder="RESET"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-center font-mono text-sm text-white focus:outline-none focus:border-rose-500 mb-4"
            />
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setShowFullResetModal(false);
                  setResetConfirmation('');
                }}
                className="w-1/2 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs"
              >
                Cancel
              </button>
              <button
                disabled={resetConfirmation !== 'RESET'}
                onClick={handleFullReset}
                className="w-1/2 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-40 text-white font-bold text-xs transition-colors"
              >
                Permanently Erase
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
