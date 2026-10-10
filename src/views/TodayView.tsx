import React, { useState } from 'react';
import { AppState, DayPlan, ReadinessScore } from '../types';
import { generateDayPlan, getLightDayPlan } from '../data/program';
import { EXERCISE_MAP } from '../data/exercises';
import { getTodayDateString, saveHabits, saveReadiness } from '../utils/storage';
import { 
  Play, Flame, Droplets, Moon, Footprints, FileText, CheckCircle2, 
  Sparkles, ShieldCheck, ChevronRight 
} from 'lucide-react';

interface TodayViewProps {
  state: AppState;
  onUpdateState: (newState: AppState) => void;
  onStartWorkout: (plan: DayPlan) => void;
  onSelectDay: (day: number) => void;
}

export const TodayView: React.FC<TodayViewProps> = ({
  state,
  onUpdateState,
  onStartWorkout,
  onSelectDay
}) => {
  const todayDateStr = getTodayDateString();
  const currentDayNum = state.currentDay;

  // Determine standard day plan
  const standardPlan = generateDayPlan(currentDayNum, state.settings.pushUpLevel);

  // Daily readiness evaluation
  const todayReadiness = state.readinessHistory[todayDateStr] || {
    sleep: 4,
    energy: 4,
    soreness: 4,
    total: 12,
    mode: 'normal',
    date: todayDateStr
  };

  const [sleepScore, setSleepScore] = useState(todayReadiness.sleep);
  const [energyScore, setEnergyScore] = useState(todayReadiness.energy);
  const [sorenessScore, setSorenessScore] = useState(todayReadiness.soreness);
  const [isReadinessSaved, setIsReadinessSaved] = useState(!!state.readinessHistory[todayDateStr]);
  const [readinessMode, setReadinessMode] = useState<'normal' | 'light'>(todayReadiness.mode);

  // Daily Habits
  const todayHabits = state.habitsHistory[todayDateStr] || {
    waterGlasses: 0,
    sleepHours: 7.5,
    walkMinutes: 15,
    notes: ''
  };

  const [waterCups, setWaterCups] = useState(todayHabits.waterGlasses);
  const [sleepHours, setSleepHours] = useState(todayHabits.sleepHours);
  const [walkMins, setWalkMins] = useState(todayHabits.walkMinutes);
  const [dailyNote, setDailyNote] = useState(todayHabits.notes);

  const isTodayWorkoutDone = !!state.completedDays[currentDayNum];

  // Calculate readiness score
  const totalScore = sleepScore + energyScore + sorenessScore;
  const suggestedMode: 'normal' | 'light' = totalScore <= 7 ? 'light' : 'normal';

  const handleSaveReadiness = () => {
    const updated: ReadinessScore = {
      sleep: sleepScore,
      energy: energyScore,
      soreness: sorenessScore,
      total: totalScore,
      mode: readinessMode,
      date: todayDateStr
    };
    const nextState = saveReadiness(state, updated);
    onUpdateState(nextState);
    setIsReadinessSaved(true);
  };

  const handleUpdateHabits = (water: number, sleep: number, walk: number, notes: string) => {
    const updated = {
      waterGlasses: water,
      sleepHours: sleep,
      walkMinutes: walk,
      notes
    };
    const next = saveHabits(state, todayDateStr, updated);
    onUpdateState(next);
  };

  // Compute Active Plan based on readiness mode
  const activePlan = readinessMode === 'light' ? getLightDayPlan(standardPlan) : standardPlan;

  // Streak Ring calculation (e.g. days completed this week)
  const currentWeek = Math.ceil(currentDayNum / 7);
  const weekStartDay = (currentWeek - 1) * 7 + 1;
  let weekCompletedCount = 0;
  for (let d = weekStartDay; d < weekStartDay + 7; d++) {
    if (state.completedDays[d]) weekCompletedCount++;
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-4 space-y-4 pb-24">
      {/* Top Banner: Day X of 182 & Phase Info */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/90 border border-slate-800 shadow-md">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
          <span className="font-semibold text-amber-400 uppercase tracking-wider text-[11px]">
            {activePlan.phaseName}
          </span>
          <span className="font-mono">Week {activePlan.week} of 26</span>
        </div>

        <div className="flex items-baseline justify-between mt-1">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Day {currentDayNum} <span className="text-sm font-normal text-slate-500">/ 182</span>
          </h1>

          {/* Current streak badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>{state.streakCurrent} Day Streak</span>
          </div>
        </div>

        {/* Deload / Test Badge */}
        {activePlan.isDeload && (
          <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-950/60 border border-sky-800/60 text-sky-300 text-[11px] font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            Deload Recovery Week — Prioritizing joint restoration
          </div>
        )}

        {/* Weekly Completion Progress Ring & Mini Stats */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Week {currentWeek} Progress: {weekCompletedCount} of 7 sessions</span>
          <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${(weekCompletedCount / 7) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* DAILY READINESS CHECK-IN CARD */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-semibold text-slate-100">Daily Readiness Check-In</h3>
          </div>
          {isReadinessSaved && (
            <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Checked in
            </span>
          )}
        </div>

        <p className="text-xs text-slate-400 mb-3">
          Rate 1 (Low/Poor) to 5 (Peak/Fresh). We calibrate workout intensity to prevent injury and burnout.
        </p>

        <div className="space-y-2.5 text-xs">
          {/* Sleep Quality */}
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Sleep Restfulness:</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map(val => (
                <button
                  key={val}
                  onClick={() => {
                    setSleepScore(val);
                    setIsReadinessSaved(false);
                  }}
                  className={`w-7 h-7 rounded-lg text-xs font-semibold transition-colors ${
                    sleepScore === val ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          {/* Energy Level */}
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Energy & Vitality:</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map(val => (
                <button
                  key={val}
                  onClick={() => {
                    setEnergyScore(val);
                    setIsReadinessSaved(false);
                  }}
                  className={`w-7 h-7 rounded-lg text-xs font-semibold transition-colors ${
                    energyScore === val ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          {/* Muscle Soreness (5 = completely fresh, 1 = severely sore) */}
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Muscle Recovery:</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map(val => (
                <button
                  key={val}
                  onClick={() => {
                    setSorenessScore(val);
                    setIsReadinessSaved(false);
                  }}
                  className={`w-7 h-7 rounded-lg text-xs font-semibold transition-colors ${
                    sorenessScore === val ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Readiness suggestion banner */}
        <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs">
            <span className="text-slate-400">Score: </span>
            <strong className="text-amber-400 font-mono">{totalScore}/15</strong>
            <span className="text-slate-400"> · Recommended: </span>
            <span className={`font-semibold ${suggestedMode === 'light' ? 'text-amber-300' : 'text-emerald-400'}`}>
              {suggestedMode === 'light' ? 'Light Active Mode' : 'Standard 30-Min'}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                const nextMode = readinessMode === 'normal' ? 'light' : 'normal';
                setReadinessMode(nextMode);
                handleSaveReadiness();
              }}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              Mode: {readinessMode === 'light' ? 'Light' : 'Normal'}
            </button>
            {!isReadinessSaved && (
              <button
                onClick={handleSaveReadiness}
                className="px-3 py-1 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors"
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>

      {/* TODAY'S WORKOUT PLAN CARD */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">
              {activePlan.focusTitle}
            </h3>
            <p className="text-xs text-slate-400">
              Estimated ~{activePlan.estimatedMinutes} minutes · No equipment needed
            </p>
          </div>
          {isTodayWorkoutDone && (
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
              ✓ Completed
            </span>
          )}
        </div>

        {/* 3 Workout Blocks Preview */}
        <div className="space-y-2 pt-1 text-xs">
          {/* Block 1 */}
          <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="font-semibold text-slate-200">Warm-up (5 min)</span>
            </div>
            <span className="text-slate-400">{activePlan.warmup.length} exercises</span>
          </div>

          {/* Block 2 */}
          <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="font-semibold text-slate-200">Main Strength (20 min)</span>
            </div>
            <span className="text-slate-400">{activePlan.main.length} exercises</span>
          </div>

          {/* Block 3 */}
          <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-semibold text-slate-200">Cool-down & Wellness (5 min)</span>
            </div>
            <span className="text-slate-400">{activePlan.cooldown.length} exercises</span>
          </div>
        </div>

        {/* Start Workout Primary CTA */}
        <button
          onClick={() => onStartWorkout(activePlan)}
          className="w-full mt-2 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-transform active:scale-98"
        >
          <Play className="w-5 h-5 fill-slate-950" />
          {isTodayWorkoutDone ? 'Replay Workout Session' : 'Start 30-Min Guided Session'}
        </button>
      </div>

      {/* DAILY WELLNESS & RECOVERY CHECKLIST */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
          <Droplets className="w-4 h-4 text-sky-400" />
          Daily Wellness & Hydration Tracker
        </h3>

        {/* Water Tracker: 8 Glasses */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-slate-300">Hydration Target (8 Glasses):</span>
            <span className="font-mono text-sky-400 font-semibold">{waterCups} / 8 cups</span>
          </div>
          <div className="grid grid-cols-8 gap-1.5">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(cup => (
              <button
                key={cup}
                onClick={() => {
                  const newCount = cup === waterCups ? cup - 1 : cup;
                  setWaterCups(newCount);
                  handleUpdateHabits(newCount, sleepHours, walkMins, dailyNote);
                }}
                className={`py-2 rounded-lg text-xs font-bold border transition-colors ${
                  cup <= waterCups
                    ? 'bg-sky-500 border-sky-400 text-slate-950 shadow-sm'
                    : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
                }`}
                title={`Cup ${cup}`}
              >
                {cup}
              </button>
            ))}
          </div>
        </div>

        {/* Sleep & Walking Inputs */}
        <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
          {/* Sleep */}
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex items-center gap-1.5 text-slate-400 mb-1">
              <Moon className="w-3.5 h-3.5 text-indigo-400" />
              <span>Sleep Hours:</span>
            </div>
            <input
              type="number"
              step="0.5"
              min="3"
              max="14"
              value={sleepHours}
              onChange={(e) => {
                const val = parseFloat(e.target.value) || 0;
                setSleepHours(val);
                handleUpdateHabits(waterCups, val, walkMins, dailyNote);
              }}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-sm font-mono text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Daily Walk */}
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex items-center gap-1.5 text-slate-400 mb-1">
              <Footprints className="w-3.5 h-3.5 text-emerald-400" />
              <span>Daily Walk (min):</span>
            </div>
            <input
              type="number"
              step="5"
              min="0"
              max="180"
              value={walkMins}
              onChange={(e) => {
                const val = parseInt(e.target.value) || 0;
                setWalkMins(val);
                handleUpdateHabits(waterCups, sleepHours, val, dailyNote);
              }}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-sm font-mono text-white focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Daily Note */}
        <div className="pt-1">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Daily Training Reflection / Notes:</span>
          </div>
          <textarea
            rows={2}
            value={dailyNote}
            placeholder="How did your shoulders and joints feel today? Any personal breakthroughs?"
            onChange={(e) => {
              setDailyNote(e.target.value);
              handleUpdateHabits(waterCups, sleepHours, walkMins, e.target.value);
            }}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>
    </div>
  );
};
