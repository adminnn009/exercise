import React from 'react';
import { CompletedSession } from '../types';

interface HeatmapCalendarProps {
  currentDay: number;
  completedDays: Record<number, CompletedSession>;
  onSelectDay?: (dayNumber: number) => void;
  selectedDay?: number;
}

export const HeatmapCalendar: React.FC<HeatmapCalendarProps> = ({
  currentDay,
  completedDays,
  onSelectDay,
  selectedDay
}) => {
  // 182 days = 26 weeks
  const totalDays = 182;
  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-100">182-Day Program Heatmap</h3>
          <p className="text-[11px] text-slate-400">26 structured weeks · 7 days per row</p>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block" /> Done
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-amber-500 inline-block" /> Current
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-800 inline-block border border-slate-700" /> Upcoming
          </span>
        </div>
      </div>

      {/* Grid: 26 rows (or 7 columns x 26 rows) */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[320px]">
          {/* Day of week column headers */}
          <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-semibold text-slate-500 mb-1">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>

          <div className="grid grid-cols-7 gap-1.5">
            {daysArray.map((day) => {
              const isCompleted = !!completedDays[day];
              const isCurrent = day === currentDay;
              const isSelected = day === selectedDay;
              const week = Math.ceil(day / 7);
              const isDeloadWeek = week % 4 === 0;
              const isTestDay = isDeloadWeek && (day - 1) % 7 === 5;

              let bgClass = 'bg-slate-800/60 border-slate-700/40 text-slate-400 hover:border-slate-500';
              if (isCompleted) {
                bgClass = 'bg-emerald-500 border-emerald-400 text-slate-950 font-bold';
              } else if (isCurrent) {
                bgClass = 'bg-amber-500 border-amber-300 text-slate-950 font-bold shadow-sm shadow-amber-500/40 ring-2 ring-amber-400/40';
              } else if (isSelected) {
                bgClass = 'bg-slate-700 border-amber-400 text-white font-semibold ring-1 ring-amber-400';
              } else if (isDeloadWeek) {
                bgClass = 'bg-sky-950/40 border-sky-800/40 text-sky-300';
              }

              return (
                <button
                  key={day}
                  onClick={() => onSelectDay && onSelectDay(day)}
                  className={`relative aspect-square flex items-center justify-center text-[10px] rounded-md border transition-all ${bgClass}`}
                  title={`Day ${day} (Week ${week}${isDeloadWeek ? ' Deload' : ''}${isTestDay ? ' Test Day' : ''})`}
                >
                  <span>{day}</span>
                  {isTestDay && !isCompleted && !isCurrent && (
                    <span className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-amber-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
