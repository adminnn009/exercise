import React, { useEffect, useState } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export const BreathingGuide: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'exhale'>('inhale');
  const [secondsLeft, setSecondsLeft] = useState(4); // 4s in, 6s out

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          if (phase === 'inhale') {
            setPhase('exhale');
            return 6;
          } else {
            setPhase('inhale');
            return 4;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase]);

  const reset = () => {
    setIsActive(false);
    setPhase('inhale');
    setSecondsLeft(4);
  };

  const scale = phase === 'inhale' ? 1.25 : 0.85;

  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
      <h3 className="text-base font-semibold text-slate-100">4-6 Calming Diaphragmatic Breathing</h3>
      <p className="text-xs text-slate-400 mt-1 max-w-xs">
        4 seconds gentle nasal inhale, 6 seconds relaxed mouth exhale. Calms heart rate and down-regulates nervous system.
      </p>

      {/* Expanding / contracting breathing orb */}
      <div className="relative my-8 flex items-center justify-center w-40 h-40">
        <div
          className="absolute inset-0 rounded-full bg-amber-500/10 transition-transform ease-in-out"
          style={{
            transform: `scale(${scale * 1.2})`,
            transitionDuration: phase === 'inhale' ? '4000ms' : '6000ms'
          }}
        />
        <div
          className="w-28 h-28 rounded-full border-2 border-amber-400 flex flex-col items-center justify-center bg-slate-950/80 shadow-lg shadow-amber-500/10 transition-transform ease-in-out"
          style={{
            transform: `scale(${scale})`,
            transitionDuration: phase === 'inhale' ? '4000ms' : '6000ms'
          }}
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            {phase}
          </span>
          <span className="text-3xl font-mono font-bold text-white tabular-nums">
            {secondsLeft}s
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsActive(!isActive)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-colors shadow-md shadow-amber-500/20 active:scale-95"
        >
          {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isActive ? 'Pause' : 'Start Flow'}
        </button>
        <button
          onClick={reset}
          className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors active:scale-95"
          title="Reset"
          aria-label="Reset Breathing"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
