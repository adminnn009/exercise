import React, { useState } from 'react';
import { AppState, TestResult } from '../types';
import { HeatmapCalendar } from '../components/HeatmapCalendar';
import { ProgressCharts } from '../components/ProgressCharts';
import { getTodayDateString, recordTestResult } from '../utils/storage';
import { PUSH_UP_LEVELS } from '../data/program';
import { 
  Trophy, Flame, Clock, Award, CheckCircle2, 
  TrendingUp, Plus, ShieldCheck 
} from 'lucide-react';

interface ProgressViewProps {
  state: AppState;
  onUpdateState: (newState: AppState) => void;
  onSelectDay: (day: number) => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  state,
  onUpdateState,
  onSelectDay
}) => {
  const [showTestLogger, setShowTestLogger] = useState(false);

  // Form states for test logging
  const [testPushUpReps, setTestPushUpReps] = useState(12);
  const [testPlankSec, setTestPlankSec] = useState(45);
  const [testWallSitSec, setTestWallSitSec] = useState(45);
  const [testToeTouchCm, setTestToeTouchCm] = useState(0);
  const [testChinTuckSec, setTestChinTuckSec] = useState(30);

  const completedCount = Object.keys(state.completedDays).length;
  const totalMinutes = Object.values(state.completedDays).reduce(
    (acc, session) => acc + (session.durationMinutes || 25),
    0
  );

  const handleSaveTest = (e: React.FormEvent) => {
    e.preventDefault();
    const result: TestResult = {
      dayNumber: state.currentDay,
      date: getTodayDateString(),
      pushUpLevel: state.settings.pushUpLevel,
      pushUpReps: Number(testPushUpReps),
      plankSeconds: Number(testPlankSec),
      wallSitSeconds: Number(testWallSitSec),
      toeTouchCm: Number(testToeTouchCm),
      chinTuckSeconds: Number(testChinTuckSec)
    };

    const next = recordTestResult(state, result);
    onUpdateState(next);
    setShowTestLogger(false);
  };

  // Achievement Badges
  const badges = [
    { id: 'first_workout', title: 'First Step', desc: 'Completed Day 1', earned: completedCount >= 1 },
    { id: 'streak_7', title: '7-Day Streak', desc: 'Built a 7-day training habit', earned: state.streakBest >= 7 },
    { id: 'streak_14', title: '2-Week Master', desc: 'Consistent for 14 continuous days', earned: state.streakBest >= 14 },
    { id: 'day_30', title: 'Phase 1 Complete', desc: 'Reached 30 workouts completed', earned: completedCount >= 30 },
    { id: 'day_60', title: 'Halfway Hero', desc: '60 workouts logged', earned: completedCount >= 60 },
    { id: 'day_100', title: 'Century Club', desc: '100 workouts completed', earned: completedCount >= 100 },
    { id: 'first_pushup', title: 'Floor Master', desc: 'Unlocked Knee or Full Push-ups', earned: state.settings.pushUpLevel >= 2 },
    { id: 'full_finisher', title: '182-Day Finisher', desc: 'Completed all 182 program days', earned: completedCount >= 182 }
  ];

  const earnedBadgeCount = badges.filter(b => b.earned).length;

  return (
    <div className="max-w-xl mx-auto px-4 py-4 space-y-4 pb-24">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-amber-400" />
          Progress & Analytics
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Track streaks, test metrics, and calendar completion over your 182-day journey.
        </p>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Streak Card */}
        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
            <Flame className="w-4 h-4 fill-amber-500" />
            <span>Active Streak</span>
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            {state.streakCurrent} <span className="text-xs font-normal text-slate-400">days</span>
          </div>
          <span className="text-[11px] text-slate-500 mt-0.5 block">
            Best streak: {state.streakBest} days
          </span>
        </div>

        {/* Total Workouts Card */}
        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
            <CheckCircle2 className="w-4 h-4" />
            <span>Completed</span>
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            {completedCount} <span className="text-xs font-normal text-slate-400">/ 182</span>
          </div>
          <span className="text-[11px] text-slate-500 mt-0.5 block">
            {Math.round((completedCount / 182) * 100)}% of full curriculum
          </span>
        </div>

        {/* Total Minutes */}
        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold mb-1">
            <Clock className="w-4 h-4" />
            <span>Total Time</span>
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            {totalMinutes} <span className="text-xs font-normal text-slate-400">min</span>
          </div>
          <span className="text-[11px] text-slate-500 mt-0.5 block">
            ~{Math.round(totalMinutes / 60)} hours invested
          </span>
        </div>

        {/* Push-Up Ladder Status */}
        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
            <Trophy className="w-4 h-4" />
            <span>Push-up Level</span>
          </div>
          <div className="text-sm font-bold text-white truncate">
            {PUSH_UP_LEVELS[state.settings.pushUpLevel]?.name || 'Wall Push-ups'}
          </div>
          <span className="text-[11px] text-slate-500 mt-0.5 block">
            Tier {state.settings.pushUpLevel + 1} of 6
          </span>
        </div>
      </div>

      {/* 182-Day Heatmap Calendar */}
      <HeatmapCalendar
        currentDay={state.currentDay}
        completedDays={state.completedDays}
        onSelectDay={onSelectDay}
      />

      {/* BENCHMARK TESTS & CHARTS */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">4-Week Benchmark Tests</h3>
            <p className="text-xs text-slate-400">Standardized tests every 4 weeks</p>
          </div>
          <button
            onClick={() => setShowTestLogger(!showTestLogger)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-sm active:scale-95"
          >
            <Plus className="w-3.5 h-3.5" />
            Log Test Result
          </button>
        </div>

        {/* Test Logger Form Modal / Dropdown */}
        {showTestLogger && (
          <form
            onSubmit={handleSaveTest}
            className="p-4 rounded-2xl bg-slate-900 border border-amber-500/40 space-y-3 animate-in fade-in text-xs"
          >
            <h4 className="font-bold text-amber-400 text-sm">
              Log Progress Test (Day {state.currentDay})
            </h4>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-300 block mb-1">Max Push-ups (reps):</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={testPushUpReps}
                  onChange={e => setTestPushUpReps(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-mono focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1">Plank Hold (seconds):</label>
                <input
                  type="number"
                  min="0"
                  max="600"
                  value={testPlankSec}
                  onChange={e => setTestPlankSec(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-mono focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1">Wall Sit (seconds):</label>
                <input
                  type="number"
                  min="0"
                  max="600"
                  value={testWallSitSec}
                  onChange={e => setTestWallSitSec(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-mono focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1">Toe-Touch Reach (cm):</label>
                <input
                  type="number"
                  min="-30"
                  max="40"
                  value={testToeTouchCm}
                  onChange={e => setTestToeTouchCm(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-mono focus:border-amber-500"
                  required
                />
              </div>

              <div className="col-span-2">
                <label className="text-slate-300 block mb-1">Chin-Tuck Retraction Hold (seconds):</label>
                <input
                  type="number"
                  min="0"
                  max="120"
                  value={testChinTuckSec}
                  onChange={e => setTestChinTuckSec(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-mono focus:border-amber-500"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowTestLogger(false)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold"
              >
                Save Record
              </button>
            </div>
          </form>
        )}

        {/* Interactive Pure SVG Charts */}
        <ProgressCharts testHistory={state.testHistory} />
      </div>

      {/* MILESTONE BADGES */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            Milestone Badges ({earnedBadgeCount} / {badges.length})
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`p-3 rounded-xl border transition-all ${
                b.earned
                  ? 'bg-amber-500/10 border-amber-500/40 text-slate-100'
                  : 'bg-slate-950/60 border-slate-800 text-slate-500 opacity-60'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Award className={`w-4 h-4 ${b.earned ? 'text-amber-400' : 'text-slate-600'}`} />
                <span className={`font-bold ${b.earned ? 'text-amber-300' : 'text-slate-400'}`}>
                  {b.title}
                </span>
              </div>
              <p className="text-[11px] leading-tight text-slate-400">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
