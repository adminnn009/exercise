import React, { useState } from 'react';
import { AppState, DayPlan } from '../types';
import { generateDayPlan } from '../data/program';
import { EXERCISE_MAP } from '../data/exercises';
import { Calendar, Shield, Dumbbell, Award, ChevronRight, CheckCircle2 } from 'lucide-react';

interface PlanViewProps {
  state: AppState;
  onSelectDay: (day: number) => void;
  onStartWorkout: (plan: DayPlan) => void;
}

export const PlanView: React.FC<PlanViewProps> = ({ state, onSelectDay, onStartWorkout }) => {
  const currentWeek = Math.ceil(state.currentDay / 7);
  const [selectedWeek, setSelectedWeek] = useState<number>(currentWeek);
  const [inspectedDay, setInspectedDay] = useState<number>(state.currentDay);

  const inspectedPlan = generateDayPlan(inspectedDay, state.settings.pushUpLevel);

  // Phase breakdown info
  const phases = [
    {
      phase: 1,
      name: 'Phase 1: Foundation',
      weeks: 'Weeks 1 – 8',
      desc: 'Master push-up mechanics (Wall → Incline), build core integrity, and restore joint mobility.',
      deloads: 'Weeks 4 & 8'
    },
    {
      phase: 2,
      name: 'Phase 2: Build & Capacity',
      weeks: 'Weeks 9 – 17',
      desc: 'Progress toward floor (Knee → Negatives), introduce tempo holds, Bulgarian split squats, and higher volume.',
      deloads: 'Weeks 12 & 16'
    },
    {
      phase: 3,
      name: 'Phase 3: Strength & Power',
      weeks: 'Weeks 18 – 26',
      desc: 'Full floor push-ups, decline progressions, pike shoulder vertical press, and explosive soft-landing power.',
      deloads: 'Weeks 20 & 24'
    }
  ];

  const daysInSelectedWeek = Array.from({ length: 7 }, (_, i) => (selectedWeek - 1) * 7 + i + 1);

  return (
    <div className="max-w-xl mx-auto px-4 py-4 space-y-4 pb-24">
      {/* Overview Header */}
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <Calendar className="w-6 h-6 text-amber-400" />
          26-Week Master Curriculum
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          182 structured days calibrated for zero-equipment progression, tendon conditioning, and programmed deloads.
        </p>
      </div>

      {/* 3 Phases Cards */}
      <div className="grid grid-cols-1 gap-2.5">
        {phases.map((p) => {
          const isActive = (p.phase === 1 && selectedWeek <= 8) || 
                           (p.phase === 2 && selectedWeek >= 9 && selectedWeek <= 17) || 
                           (p.phase === 3 && selectedWeek >= 18);

          return (
            <div
              key={p.phase}
              className={`p-3.5 rounded-2xl border transition-all ${
                isActive
                  ? 'bg-slate-900 border-amber-500/50 shadow-md ring-1 ring-amber-500/20'
                  : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
                  {p.name}
                </span>
                <span className="font-mono text-slate-400">{p.weeks}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mt-1">
                {p.desc}
              </p>
              <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
                <span>Deload Cadence: {p.deloads}</span>
                {isActive && <span className="text-amber-400 font-semibold">Active Phase</span>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Week Selector Carousel */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-slate-100">Browse Week</h3>
          <span className="text-xs font-mono text-amber-400 font-semibold">
            Week {selectedWeek} of 26
          </span>
        </div>

        {/* Scrollable horizontal week chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
          {Array.from({ length: 26 }, (_, i) => i + 1).map((wk) => {
            const isCurrentWk = wk === currentWeek;
            const isSelected = wk === selectedWeek;
            const isDeload = wk % 4 === 0;

            return (
              <button
                key={wk}
                onClick={() => {
                  setSelectedWeek(wk);
                  setInspectedDay((wk - 1) * 7 + 1);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap border transition-colors ${
                  isSelected
                    ? 'bg-amber-500 border-amber-400 text-slate-950 font-bold shadow-sm'
                    : isCurrentWk
                    ? 'bg-slate-800 border-amber-400/60 text-amber-400'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                W{wk} {isDeload ? '★' : ''}
              </button>
            );
          })}
        </div>

        {/* 7 Days of the selected week */}
        <div className="mt-3 space-y-1.5">
          {daysInSelectedWeek.map((dayNum) => {
            const dayPlan = generateDayPlan(dayNum, state.settings.pushUpLevel);
            const isCompleted = !!state.completedDays[dayNum];
            const isToday = dayNum === state.currentDay;
            const isInspected = dayNum === inspectedDay;

            const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            const dayName = dayNames[(dayNum - 1) % 7];

            return (
              <button
                key={dayNum}
                onClick={() => setInspectedDay(dayNum)}
                className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-colors ${
                  isInspected
                    ? 'bg-slate-800 border-amber-500/80 shadow-sm'
                    : 'bg-slate-950/80 border-slate-800 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-8 text-[11px] font-mono font-bold text-slate-400">
                    {dayName}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-white">
                        Day {dayNum}: {dayPlan.focusTitle}
                      </span>
                      {isToday && (
                        <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 text-[10px] font-bold">
                          Today
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400">
                      ~{dayPlan.estimatedMinutes} min · {dayPlan.warmup.length + dayPlan.main.length + dayPlan.cooldown.length} movements
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {isCompleted && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  )}
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Inspected Day Details Card */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block">
              Inspecting Day {inspectedPlan.dayNumber}
            </span>
            <h3 className="text-base font-bold text-white">
              {inspectedPlan.focusTitle}
            </h3>
          </div>
          <button
            onClick={() => onStartWorkout(inspectedPlan)}
            className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-colors active:scale-95"
          >
            Train Day {inspectedPlan.dayNumber}
          </button>
        </div>

        {/* Exercises Breakdown */}
        <div className="space-y-2 pt-1">
          <span className="text-xs font-semibold text-slate-300 block">Exercise Lineup:</span>
          <div className="space-y-1.5">
            {[...inspectedPlan.warmup, ...inspectedPlan.main, ...inspectedPlan.cooldown].map((step, idx) => {
              const ex = EXERCISE_MAP[step.exerciseId];
              if (!ex) return null;
              return (
                <div
                  key={idx}
                  className="p-2 rounded-lg bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs"
                >
                  <span className="font-medium text-slate-200">
                    {idx + 1}. {ex.name}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">
                    {step.prescribedSets}x{step.prescribedReps ? `${step.prescribedReps}r` : `${step.prescribedHoldSec}s`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
