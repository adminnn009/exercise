import React, { useEffect, useState } from 'react';
import { Exercise } from '../types';

interface StickFigureProps {
  exercise: Exercise;
  size?: number | string;
  isPaused?: boolean;
}

export const StickFigure: React.FC<StickFigureProps> = ({
  exercise,
  size = 280,
  isPaused = false
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    let animId: number;
    let startTime = performance.now();

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setProgress(0.5);
      return;
    }

    const duration = exercise.type === 'hold' ? 3500 : 2200; // Smoother rhythm

    const animate = (time: number) => {
      const elapsed = (time - startTime) % duration;
      const t = elapsed / duration;
      // Smooth sinusoidal bounce: 0 -> 1 -> 0 with pause at ends
      const smoothProgress = 0.5 - 0.5 * Math.cos(2 * Math.PI * t);
      setProgress(smoothProgress);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [exercise.id, exercise.type, isPaused]);

  const { start, peak, environment = 'standing' } = exercise.poses;

  // Linear interpolation helper
  const lerp = (a: number, b: number, factor: number) => a + (b - a) * factor;
  const lerpPoint = (p1: [number, number], p2: [number, number], factor: number): [number, number] => [
    lerp(p1[0], p2[0], factor),
    lerp(p1[1], p2[1], factor)
  ];

  const currentHead = lerpPoint(start.head, peak.head, progress);
  const currentNeck = lerpPoint(start.neck, peak.neck, progress);
  const currentLShoulder = lerpPoint(start.leftShoulder, peak.leftShoulder, progress);
  const currentRShoulder = lerpPoint(start.rightShoulder, peak.rightShoulder, progress);
  const currentLElbow = lerpPoint(start.leftElbow, peak.leftElbow, progress);
  const currentRElbow = lerpPoint(start.rightElbow, peak.rightElbow, progress);
  const currentLHand = lerpPoint(start.leftHand, peak.leftHand, progress);
  const currentRHand = lerpPoint(start.rightHand, peak.rightHand, progress);
  const currentPelvis = lerpPoint(start.pelvis, peak.pelvis, progress);
  const currentLKnee = lerpPoint(start.leftKnee, peak.leftKnee, progress);
  const currentRKnee = lerpPoint(start.rightKnee, peak.rightKnee, progress);
  const currentLFoot = lerpPoint(start.leftFoot, peak.leftFoot, progress);
  const currentRFoot = lerpPoint(start.rightFoot, peak.rightFoot, progress);

  // Determine muscle highlight zone
  const hasChestFocus = exercise.muscles.some(m => /pectoral|chest/i.test(m));
  const hasCoreFocus = exercise.muscles.some(m => /abdom|core|oblique/i.test(m));
  const hasBackFocus = exercise.muscles.some(m => /trapez|rhomb|latiss|erector|back/i.test(m));
  const hasLegFocus = exercise.muscles.some(m => /quad|glute|hamstr|calf/i.test(m));

  return (
    <div className="relative flex items-center justify-center p-2 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-inner select-none overflow-hidden">
      <svg
        viewBox="0 0 100 100"
        style={{ width: size, height: size }}
        className="w-full max-h-[300px] overflow-visible"
        aria-label={`Stick figure demonstration of ${exercise.name}`}
      >
        <defs>
          <linearGradient id="boneAmber" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fbbf24" />
            <stop offset="100%" stop-color="#f59e0b" />
          </linearGradient>
          <radialGradient id="glowGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35" />
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
          </radialGradient>
          <filter id="jointGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Grid lines for spatial depth */}
        <line x1="10" y1="94" x2="90" y2="94" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="2 2" />

        {/* Environment Guidelines */}
        {environment === 'floor' && (
          <g>
            <line x1="8" y1="84" x2="92" y2="84" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="87" x2="88" y2="87" stroke="#334155" strokeWidth="0.8" strokeDasharray="3 3" />
          </g>
        )}
        {environment === 'wall' && (
          <g>
            <line x1="16" y1="12" x2="16" y2="94" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
            <line x1="12" y1="16" x2="12" y2="90" stroke="#334155" strokeWidth="1" strokeDasharray="2 3" />
            <line x1="8" y1="94" x2="92" y2="94" stroke="#334155" strokeWidth="1.5" />
          </g>
        )}
        {environment === 'elevated' && (
          <g>
            {/* Ledge or couch block */}
            <rect x="74" y="32" width="20" height="62" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
            <line x1="8" y1="84" x2="74" y2="84" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}
        {environment === 'standing' && (
          <line x1="20" y1="95" x2="80" y2="95" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
        )}

        {/* Target Muscle Aura Highlights */}
        {hasChestFocus && (
          <ellipse
            cx={(currentNeck[0] + currentPelvis[0]) / 2 - 2}
            cy={(currentNeck[1] + currentPelvis[1]) / 2 - 4}
            rx="8"
            ry="6"
            fill="url(#glowGlow)"
          />
        )}
        {hasCoreFocus && (
          <ellipse
            cx={(currentNeck[0] + currentPelvis[0]) / 2}
            cy={(currentNeck[1] + currentPelvis[1]) / 2 + 3}
            rx="9"
            ry="7"
            fill="url(#glowGlow)"
          />
        )}
        {hasBackFocus && (
          <ellipse
            cx={(currentNeck[0] + currentPelvis[0]) / 2 + 2}
            cy={(currentNeck[1] + currentPelvis[1]) / 2}
            rx="8"
            ry="7"
            fill="url(#glowGlow)"
          />
        )}
        {hasLegFocus && (
          <ellipse
            cx={(currentPelvis[0] + currentLKnee[0]) / 2}
            cy={(currentPelvis[1] + currentLKnee[1]) / 2}
            rx="7"
            ry="9"
            fill="url(#glowGlow)"
          />
        )}

        {/* Torso / Spine */}
        <line
          x1={currentNeck[0]}
          y1={currentNeck[1]}
          x2={currentPelvis[0]}
          y2={currentPelvis[1]}
          stroke="url(#boneAmber)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Left Leg (Hip -> Knee -> Foot) */}
        <polyline
          points={`${currentPelvis[0]},${currentPelvis[1]} ${currentLKnee[0]},${currentLKnee[1]} ${currentLFoot[0]},${currentLFoot[1]}`}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Leg (Hip -> Knee -> Foot) */}
        <polyline
          points={`${currentPelvis[0]},${currentPelvis[1]} ${currentRKnee[0]},${currentRKnee[1]} ${currentRFoot[0]},${currentRFoot[1]}`}
          fill="none"
          stroke="#94a3b8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Left Arm (Shoulder -> Elbow -> Hand) */}
        <polyline
          points={`${currentNeck[0]},${currentNeck[1]} ${currentLElbow[0]},${currentLElbow[1]} ${currentLHand[0]},${currentLHand[1]}`}
          fill="none"
          stroke="#f8fafc"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Arm (Shoulder -> Elbow -> Hand) */}
        <polyline
          points={`${currentNeck[0]},${currentNeck[1]} ${currentRElbow[0]},${currentRElbow[1]} ${currentRHand[0]},${currentRHand[1]}`}
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Joints (Pelvis, Knees, Feet, Elbows, Hands) */}
        <circle cx={currentPelvis[0]} cy={currentPelvis[1]} r="2.4" fill="#fbbf24" />
        <circle cx={currentLKnee[0]} cy={currentLKnee[1]} r="2.2" fill="#f8fafc" />
        <circle cx={currentRKnee[0]} cy={currentRKnee[1]} r="2" fill="#94a3b8" />
        <circle cx={currentLElbow[0]} cy={currentLElbow[1]} r="2.2" fill="#fbbf24" />
        <circle cx={currentRElbow[0]} cy={currentRElbow[1]} r="2" fill="#cbd5e1" />
        <circle cx={currentLHand[0]} cy={currentLHand[1]} r="2.4" fill="#f8fafc" />
        <circle cx={currentRHand[0]} cy={currentRHand[1]} r="2.2" fill="#cbd5e1" />

        {/* Head */}
        <circle
          cx={currentHead[0]}
          cy={currentHead[1]}
          r="5.5"
          fill="url(#boneAmber)"
          filter="url(#jointGlow)"
        />
        {/* Subtle face profile indicator */}
        <circle
          cx={currentHead[0] - 2}
          cy={currentHead[1] - 0.5}
          r="1"
          fill="#090d16"
        />

        {/* Real-time loop indicator badge in corner */}
        <text x="8" y="16" fill="#64748b" fontSize="5.5" fontFamily="monospace">
          {exercise.type === 'hold' ? 'HOLD FORM' : 'TEMPO FORM'}
        </text>
      </svg>
    </div>
  );
};
