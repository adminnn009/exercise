import React, { useState } from 'react';
import { TestResult } from '../types';

interface ProgressChartsProps {
  testHistory: TestResult[];
}

type MetricKey = 'pushUpReps' | 'plankSeconds' | 'wallSitSeconds' | 'toeTouchCm' | 'chinTuckSeconds';

const METRIC_CONFIGS: Record<MetricKey, { label: string; unit: string; color: string; desc: string }> = {
  pushUpReps: { label: 'Push-up Max Reps', unit: 'reps', color: '#f59e0b', desc: 'Maximum clean reps logged at current progression level' },
  plankSeconds: { label: 'Plank Hold', unit: 's', color: '#10b981', desc: 'Strict forearm plank duration with zero lumbar sagging' },
  wallSitSeconds: { label: 'Wall Sit Hold', unit: 's', color: '#38bdf8', desc: 'Max duration hold with thighs strictly parallel to ground' },
  toeTouchCm: { label: 'Toe-Touch Reach', unit: 'cm', color: '#a855f7', desc: 'Distance reached standing or seated (0 = touching toes, + = past toes)' },
  chinTuckSeconds: { label: 'Chin-Tuck Hold', unit: 's', color: '#ec4899', desc: 'Deep cervical flexor isometric endurance test' }
};

export const ProgressCharts: React.FC<ProgressChartsProps> = ({ testHistory }) => {
  const [selectedMetric, setSelectedMetric] = useState<MetricKey>('pushUpReps');

  if (testHistory.length === 0) {
    return (
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
        <p className="text-sm font-semibold text-slate-300">No Benchmark Tests Logged Yet</p>
        <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
          Benchmark test days occur every 4 weeks (Weeks 4, 8, 12, 16, 20, 24). Complete a test to unlock interactive progression charts.
        </p>
      </div>
    );
  }

  const metric = METRIC_CONFIGS[selectedMetric];
  const dataPoints = testHistory.map(entry => ({
    day: entry.dayNumber,
    date: entry.date,
    val: entry[selectedMetric]
  }));

  // SVG Chart Dimensions
  const width = 360;
  const height = 180;
  const padLeft = 36;
  const padRight = 20;
  const padTop = 24;
  const padBottom = 30;

  const chartWidth = width - padLeft - padRight;
  const chartHeight = height - padTop - padBottom;

  const values = dataPoints.map(d => d.val);
  const minVal = Math.min(0, ...values);
  const maxVal = Math.max(10, ...values) * 1.15;

  const getX = (index: number) => {
    if (dataPoints.length === 1) return padLeft + chartWidth / 2;
    return padLeft + (index / (dataPoints.length - 1)) * chartWidth;
  };

  const getY = (val: number) => {
    const range = maxVal - minVal || 1;
    return padTop + chartHeight - ((val - minVal) / range) * chartHeight;
  };

  const pathPoints = dataPoints.map((d, i) => `${getX(i)},${getY(d.val)}`).join(' ');
  const areaPoints = `${getX(0)},${padTop + chartHeight} ${pathPoints} ${getX(dataPoints.length - 1)},${padTop + chartHeight}`;

  return (
    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-100">Benchmark Progress Charts</h3>
          <p className="text-[11px] text-slate-400">{metric.desc}</p>
        </div>
      </div>

      {/* Metric Selector Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 no-scrollbar">
        {(Object.keys(METRIC_CONFIGS) as MetricKey[]).map(key => {
          const cfg = METRIC_CONFIGS[key];
          const isSelected = selectedMetric === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedMetric(key)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                isSelected
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cfg.label}
            </button>
          );
        })}
      </div>

      {/* SVG Line Chart */}
      <div className="w-full flex justify-center overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full max-w-[420px] select-none overflow-visible"
        >
          <defs>
            <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={metric.color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={metric.color} stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1={padLeft} y1={padTop} x2={width - padRight} y2={padTop} stroke="#1e293b" strokeDasharray="3 3" />
          <line x1={padLeft} y1={padTop + chartHeight / 2} x2={width - padRight} y2={padTop + chartHeight / 2} stroke="#1e293b" strokeDasharray="3 3" />
          <line x1={padLeft} y1={padTop + chartHeight} x2={width - padRight} y2={padTop + chartHeight} stroke="#334155" strokeWidth="1" />

          {/* Y Axis Values */}
          <text x={padLeft - 6} y={padTop + 4} fill="#64748b" fontSize="8" textAnchor="end" fontFamily="monospace">
            {Math.round(maxVal)}
          </text>
          <text x={padLeft - 6} y={padTop + chartHeight / 2 + 3} fill="#64748b" fontSize="8" textAnchor="end" fontFamily="monospace">
            {Math.round(maxVal / 2)}
          </text>
          <text x={padLeft - 6} y={padTop + chartHeight + 3} fill="#64748b" fontSize="8" textAnchor="end" fontFamily="monospace">
            0
          </text>

          {/* Area fill */}
          {dataPoints.length > 1 && (
            <polygon points={areaPoints} fill="url(#areaGrad)" />
          )}

          {/* Stroke Line */}
          {dataPoints.length > 1 ? (
            <polyline
              points={pathPoints}
              fill="none"
              stroke={metric.color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : null}

          {/* Data Points */}
          {dataPoints.map((d, i) => {
            const cx = getX(i);
            const cy = getY(d.val);
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r="4.5" fill={metric.color} stroke="#0f172a" strokeWidth="2" />
                {/* Value text above dot */}
                <text
                  x={cx}
                  y={cy - 8}
                  fill="#f8fafc"
                  fontSize="9"
                  fontWeight="bold"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  {d.val}{metric.unit}
                </text>
                {/* Day label below */}
                <text
                  x={cx}
                  y={padTop + chartHeight + 14}
                  fill="#94a3b8"
                  fontSize="8"
                  textAnchor="middle"
                >
                  Day {d.day}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
