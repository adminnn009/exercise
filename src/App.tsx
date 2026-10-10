import React, { useState, useEffect } from 'react';
import { AppState, DayPlan } from './types';
import { 
  getDefaultState, loadAppState, recordCompletedWorkout, 
  saveAppState, updateUserSettings, getTodayDateString 
} from './utils/storage';
import { TodayView } from './views/TodayView';
import { PlanView } from './views/PlanView';
import { LibraryView } from './views/LibraryView';
import { ProgressView } from './views/ProgressView';
import { SettingsView } from './views/SettingsView';
import { GuideView } from './views/GuideView';
import { WorkoutPlayer } from './components/WorkoutPlayer';
import { DisclaimerModal } from './components/DisclaimerModal';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { 
  CalendarDays, Dumbbell, TrendingUp, Settings, 
  Flame, BookOpen, WifiOff, Sparkles, CheckCircle2 
} from 'lucide-react';

export default function App() {
  const [state, setState] = useState<AppState>(getDefaultState());
  const [activeTab, setActiveTab] = useState<'today' | 'plan' | 'library' | 'progress' | 'settings' | 'guide'>('today');
  const [activeWorkoutPlan, setActiveWorkoutPlan] = useState<DayPlan | null>(null);
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [missedDayNotice, setMissedDayNotice] = useState<number | null>(null);

  // Load state on mount
  useEffect(() => {
    const loaded = loadAppState();
    setState(loaded);

    // Online / Offline listeners
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check for missed days
    if (loaded.lastActiveDate) {
      const today = getTodayDateString();
      const last = new Date(loaded.lastActiveDate);
      const curr = new Date(today);
      const diffDays = Math.ceil(Math.abs(curr.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
      if (diffDays > 1 && loaded.currentDay < 182) {
        setMissedDayNotice(diffDays);
      }
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleUpdateState = (newState: AppState) => {
    setState(newState);
    saveAppState(newState);
  };

  const handleAcceptDisclaimer = () => {
    const updated = updateUserSettings(state, { hasAcceptedDisclaimer: true });
    handleUpdateState(updated);
  };

  const handleStartWorkout = (plan: DayPlan) => {
    setActiveWorkoutPlan(plan);
  };

  const handleFinishWorkout = (durationMinutes: number, exercisesCompleted: number) => {
    if (!activeWorkoutPlan) return;
    const nextState = recordCompletedWorkout(
      state,
      activeWorkoutPlan.dayNumber,
      durationMinutes,
      activeWorkoutPlan.focusTitle.includes('Light') ? 'light' : 'normal',
      exercisesCompleted
    );
    handleUpdateState(nextState);
    setActiveWorkoutPlan(null);
  };

  const handleSelectDay = (dayNum: number) => {
    const nextState: AppState = { ...state, currentDay: dayNum };
    handleUpdateState(nextState);
    setActiveTab('today');
  };

  return (
    <div className={`min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950 ${state.settings.textScale === 'large' ? 'text-[17px]' : 'text-[15px]'}`}>
      
      {/* Offline Toast Banner */}
      {!isOnline && (
        <div className="sticky top-0 z-40 bg-amber-600/95 text-slate-950 px-4 py-1.5 text-xs font-semibold flex items-center justify-center gap-2 backdrop-blur-md">
          <WifiOff className="w-3.5 h-3.5" />
          <span>Offline Mode Active — App operates 100% locally with zero internet.</span>
        </div>
      )}

      {/* Top App Bar Header */}
      <header className="sticky top-0 z-30 bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800/80 px-4 py-3">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <button
            onClick={() => setActiveTab('today')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/20">
              <Flame className="w-5 h-5 text-slate-950 fill-slate-950" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white group-hover:text-amber-400 transition-colors">
                CalisStart
              </span>
              <span className="text-[10px] text-slate-400 block -mt-0.5">
                Zero-to-Pushup · Day {state.currentDay}
              </span>
            </div>
          </button>

          {/* Quick Guide / Handbook link */}
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors border ${
              activeTab === 'guide'
                ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Guide</span>
          </button>
        </div>
      </header>

      {/* PWA Install Banner */}
      <div className="max-w-xl mx-auto w-full">
        <PWAInstallBanner />
      </div>

      {/* Missed Day Calm Catch-up Prompt */}
      {missedDayNotice && (
        <div className="max-w-xl mx-auto w-full px-4 mb-2">
          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-amber-500/30 flex items-center justify-between gap-3 text-xs">
            <div>
              <strong className="text-amber-300 block">Welcome Back!</strong>
              <span className="text-slate-400 text-[11px]">
                Life happens. You paused on Day {state.currentDay}. Choose your rhythm:
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setMissedDayNotice(null)}
                className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
              >
                Continue Day {state.currentDay}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main View Router */}
      <main className="flex-1 w-full">
        {activeTab === 'today' && (
          <TodayView
            state={state}
            onUpdateState={handleUpdateState}
            onStartWorkout={handleStartWorkout}
            onSelectDay={handleSelectDay}
          />
        )}

        {activeTab === 'plan' && (
          <PlanView
            state={state}
            onSelectDay={handleSelectDay}
            onStartWorkout={handleStartWorkout}
          />
        )}

        {activeTab === 'library' && (
          <LibraryView />
        )}

        {activeTab === 'progress' && (
          <ProgressView
            state={state}
            onUpdateState={handleUpdateState}
            onSelectDay={handleSelectDay}
          />
        )}

        {activeTab === 'settings' && (
          <SettingsView
            state={state}
            onUpdateState={handleUpdateState}
          />
        )}

        {activeTab === 'guide' && (
          <GuideView />
        )}
      </main>

      {/* Active Workout Player Fullscreen Modal */}
      {activeWorkoutPlan && (
        <WorkoutPlayer
          dayPlan={activeWorkoutPlan}
          soundEnabled={state.settings.soundEnabled}
          speechEnabled={state.settings.speechEnabled}
          wakeLockEnabled={state.settings.wakeLockEnabled}
          onFinish={handleFinishWorkout}
          onClose={() => setActiveWorkoutPlan(null)}
        />
      )}

      {/* First-Launch Safety Disclaimer Modal */}
      {!state.settings.hasAcceptedDisclaimer && (
        <DisclaimerModal onAccept={handleAcceptDisclaimer} />
      )}

      {/* Fixed Ergonomic Bottom Tab Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 bg-[#090d16]/95 backdrop-blur-md border-t border-slate-800/80 pb-safe">
        <div className="max-w-xl mx-auto grid grid-cols-5 h-16">
          <button
            onClick={() => setActiveTab('today')}
            className={`flex flex-col items-center justify-center transition-colors min-h-[44px] ${
              activeTab === 'today' ? 'text-amber-400' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Flame className={`w-5 h-5 ${activeTab === 'today' ? 'fill-amber-400' : ''}`} />
            <span className="text-[10px] font-medium tracking-tight mt-1">Today</span>
          </button>

          <button
            onClick={() => setActiveTab('plan')}
            className={`flex flex-col items-center justify-center transition-colors min-h-[44px] ${
              activeTab === 'plan' ? 'text-amber-400' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <CalendarDays className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight mt-1">Plan</span>
          </button>

          <button
            onClick={() => setActiveTab('library')}
            className={`flex flex-col items-center justify-center transition-colors min-h-[44px] ${
              activeTab === 'library' ? 'text-amber-400' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Dumbbell className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight mt-1">Library</span>
          </button>

          <button
            onClick={() => setActiveTab('progress')}
            className={`flex flex-col items-center justify-center transition-colors min-h-[44px] ${
              activeTab === 'progress' ? 'text-amber-400' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight mt-1">Progress</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex flex-col items-center justify-center transition-colors min-h-[44px] ${
              activeTab === 'settings' ? 'text-amber-400' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight mt-1">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
