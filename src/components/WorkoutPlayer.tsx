import React, { useEffect, useState, useRef } from 'react';
import { DayPlan, WorkoutStep } from '../types';
import { EXERCISE_MAP } from '../data/exercises';
import { StickFigure } from './StickFigure';
import { soundCtrl } from '../utils/audio';
import { 
  Play, Pause, SkipForward, SkipBack, X, AlertTriangle, 
  CheckCircle2, Volume2, VolumeX, Mic, MicOff, ExternalLink, ChevronDown, ChevronUp 
} from 'lucide-react';

interface WorkoutPlayerProps {
  dayPlan: DayPlan;
  soundEnabled: boolean;
  speechEnabled: boolean;
  wakeLockEnabled: boolean;
  onFinish: (durationMinutes: number, exercisesCompleted: number) => void;
  onClose: () => void;
}

export const WorkoutPlayer: React.FC<WorkoutPlayerProps> = ({
  dayPlan,
  soundEnabled,
  speechEnabled,
  wakeLockEnabled,
  onFinish,
  onClose
}) => {
  // Flatten all workout steps into a single ordered timeline
  const steps: WorkoutStep[] = [
    ...dayPlan.warmup,
    ...dayPlan.main,
    ...dayPlan.cooldown
  ];

  const [stepIndex, setStepIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [isResting, setIsResting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showPainModal, setShowPainModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [soundOn, setSoundOn] = useState(soundEnabled);
  const [speechOn, setSpeechOn] = useState(speechEnabled);
  const [completedExercisesCount, setCompletedExercisesCount] = useState(0);

  // Timers
  const currentStep = steps[stepIndex] || steps[0];
  const currentExercise = EXERCISE_MAP[currentStep.exerciseId] || Object.values(EXERCISE_MAP)[0];
  const isHold = currentExercise.type === 'hold' || currentExercise.type === 'timed';
  const targetHoldSec = currentStep.prescribedHoldSec || currentExercise.defaultHoldSeconds || 30;

  const [timeRemaining, setTimeRemaining] = useState(isHold ? targetHoldSec : 0);
  const [totalSecondsElapsed, setTotalSecondsElapsed] = useState(0);

  // Wake Lock Sentinel ref
  const wakeLockRef = useRef<any>(null);

  // Sync sound settings
  useEffect(() => {
    soundCtrl.setSoundEnabled(soundOn);
  }, [soundOn]);

  useEffect(() => {
    soundCtrl.setSpeechEnabled(speechOn);
  }, [speechOn]);

  // Screen Wake Lock API
  useEffect(() => {
    let released = false;

    async function requestWakeLock() {
      if (wakeLockEnabled && 'wakeLock' in navigator && !wakeLockRef.current) {
        try {
          const sentinel = await (navigator as any).wakeLock.request('screen');
          if (!released) {
            wakeLockRef.current = sentinel;
          } else {
            sentinel.release();
          }
        } catch {
          // Wake lock may fail if tab not visible or unsupported
        }
      }
    }

    requestWakeLock();

    return () => {
      released = true;
      if (wakeLockRef.current) {
        wakeLockRef.current.release().catch(() => {});
        wakeLockRef.current = null;
      }
    };
  }, [wakeLockEnabled]);

  // Voice announcement on new exercise
  useEffect(() => {
    if (!isResting) {
      const blockTitle = currentStep.block === 'warmup' ? 'Warm up' : currentStep.block === 'main' ? 'Main work' : 'Cool down';
      soundCtrl.speak(`${blockTitle}: ${currentExercise.name}. Set ${currentSet} of ${currentStep.prescribedSets}.`);
      soundCtrl.playStart();
      if (isHold) {
        setTimeRemaining(targetHoldSec);
      }
    } else {
      soundCtrl.playRestChime();
      soundCtrl.speak(`Rest for ${currentStep.restSeconds} seconds. Next set coming up.`);
      setTimeRemaining(currentStep.restSeconds);
    }
  }, [stepIndex, currentSet, isResting]);

  // Active Timer Tick
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setTotalSecondsElapsed(prev => prev + 1);

      if (isResting || isHold) {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleTimerComplete();
            return 0;
          }

          // Audio countdown for final 3 seconds
          if (prev <= 4 && prev > 1) {
            soundCtrl.playTick();
          }

          // Spoken halfway alert for holds
          if (!isResting && isHold && prev === Math.floor(targetHoldSec / 2)) {
            soundCtrl.speak('Halfway there.');
          }

          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, isResting, isHold, targetHoldSec, stepIndex, currentSet]);

  const handleTimerComplete = () => {
    if (isResting) {
      // Finished resting -> proceed to next set
      setIsResting(false);
    } else if (isHold) {
      // Finished hold set
      handleSetFinished();
    }
  };

  const handleSetFinished = () => {
    if (currentSet < currentStep.prescribedSets) {
      // Trigger rest period before next set
      setIsResting(true);
      setCurrentSet(prev => prev + 1);
    } else {
      // Completed all sets for this exercise
      setCompletedExercisesCount(prev => prev + 1);
      advanceToNextExercise();
    }
  };

  const advanceToNextExercise = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(prev => prev + 1);
      setCurrentSet(1);
      setIsResting(false);
    } else {
      // Completed all steps!
      finishWorkout();
    }
  };

  const goToPreviousStep = () => {
    if (isResting) {
      setIsResting(false);
    } else if (currentSet > 1) {
      setCurrentSet(prev => prev - 1);
    } else if (stepIndex > 0) {
      setStepIndex(prev => prev - 1);
      setCurrentSet(1);
      setIsResting(false);
    }
  };

  const skipCurrentStep = () => {
    advanceToNextExercise();
  };

  const finishWorkout = () => {
    soundCtrl.playCompleteFanfare();
    soundCtrl.speak('Outstanding work! Workout complete.');
    const durationMins = Math.max(1, Math.round(totalSecondsElapsed / 60));
    onFinish(durationMins, completedExercisesCount + 1);
  };

  // Safe regression recommendation for pain modal
  const handlePainAlternative = () => {
    setShowPainModal(false);
    // Find an easier alternative or advance safely
    soundCtrl.speak('Regression selected. Remember: mild tension is good, sharp pain is a hard stop.');
    advanceToNextExercise();
  };

  // Progress metrics
  const totalWorkoutSecondsEstimate = dayPlan.estimatedMinutes * 60;
  const progressPercent = Math.min(100, Math.round((totalSecondsElapsed / totalWorkoutSecondsEstimate) * 100));

  const blockColor = 
    currentStep.block === 'warmup' ? 'text-sky-400 bg-sky-950/40 border-sky-800/40' :
    currentStep.block === 'main' ? 'text-amber-400 bg-amber-950/40 border-amber-800/40' :
    'text-emerald-400 bg-emerald-950/40 border-emerald-800/40';

  const blockLabel = 
    currentStep.block === 'warmup' ? 'Block 1: Warm-up' :
    currentStep.block === 'main' ? 'Block 2: Main Work' :
    'Block 3: Cool-down & Wellness';

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#090d16] text-slate-100 overflow-y-auto">
      {/* Top Bar with Exit and Toggles */}
      <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800/80">
        <button
          onClick={onClose}
          className="p-2 -ml-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          title="Exit Workout"
          aria-label="Exit Workout"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-medium text-slate-400">
            Day {dayPlan.dayNumber} · Step {stepIndex + 1} of {steps.length}
          </span>
          <span className="text-[11px] font-mono text-amber-400/90 tabular-nums">
            {Math.floor(totalSecondsElapsed / 60)}:{String(totalSecondsElapsed % 60).padStart(2, '0')} elapsed
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setSoundOn(!soundOn)}
            className={`p-2 rounded-xl transition-colors ${soundOn ? 'text-amber-400 hover:bg-slate-800' : 'text-slate-500 hover:bg-slate-800'}`}
            title="Audio Tones"
            aria-label="Toggle Audio"
          >
            {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setSpeechOn(!speechOn)}
            className={`p-2 rounded-xl transition-colors ${speechOn ? 'text-amber-400 hover:bg-slate-800' : 'text-slate-500 hover:bg-slate-800'}`}
            title="Voice Coaching"
            aria-label="Toggle Voice Coaching"
          >
            {speechOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Cumulative Session Progress Bar */}
      <div className="w-full h-1 bg-slate-800">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Player Content Container */}
      <div className="flex-1 flex flex-col max-w-lg mx-auto w-full px-4 py-4 pb-28">
        
        {/* Block Badge & Step Title */}
        <div className="flex items-center justify-between mb-2">
          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${blockColor}`}>
            {blockLabel}
          </span>
          <span className="text-xs font-mono text-slate-400">
            Set {currentSet} of {currentStep.prescribedSets}
          </span>
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-white mb-3">
          {currentExercise.name}
        </h2>

        {/* REST STATE OVERLAY OR ACTIVE EXERCISE STICK FIGURE */}
        {isResting ? (
          <div className="flex flex-col items-center justify-center p-8 my-2 rounded-2xl bg-slate-900/90 border border-amber-500/30 text-center shadow-lg">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
              REST & RECOVER
            </span>
            <div className="relative my-4 flex items-center justify-center">
              <span className="text-6xl font-mono font-bold text-white tabular-nums">
                {timeRemaining}s
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2 max-w-xs">
              Deep nasal breaths. Next: Set {currentSet} of {currentStep.prescribedSets} ({currentExercise.name})
            </p>
            <button
              onClick={() => setIsResting(false)}
              className="mt-6 px-5 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 font-semibold text-xs border border-amber-500/40 transition-colors active:scale-95"
            >
              Skip Rest & Begin Set
            </button>
          </div>
        ) : (
          <div className="relative">
            <StickFigure exercise={currentExercise} isPaused={isPaused} />
            
            {/* YouTube Search Video Link */}
            <a
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(currentExercise.ytQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-md text-[11px] font-medium text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
            >
              <span>Watch Video</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}

        {/* METRICS & WORK / REP CONTROLS */}
        {!isResting && (
          <div className="mt-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            {isHold ? (
              <div className="flex flex-col items-center">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  HOLD TIMER
                </span>
                <span className="text-5xl font-mono font-bold text-amber-400 tabular-nums my-1">
                  {timeRemaining}s
                </span>
                <span className="text-xs text-slate-500">
                  Target: {targetHoldSec} seconds
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  TARGET REPS
                </span>
                <span className="text-5xl font-mono font-bold text-amber-400 tabular-nums my-1">
                  {currentStep.prescribedReps || currentExercise.defaultReps || 10}
                </span>
                <span className="text-xs text-slate-500">
                  Controlled tempo · 2s down, 1s up
                </span>
                <button
                  onClick={handleSetFinished}
                  className="mt-4 w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-amber-500/20 active:scale-98 flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Complete Set {currentSet}
                </button>
              </div>
            )}
          </div>
        )}

        {/* FORM CUES & SAFETY ACCORDION */}
        <div className="mt-4 rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full flex items-center justify-between p-3.5 text-left text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <span>Form Cues, Muscles & Alternatives</span>
            {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showDetails && (
            <div className="p-4 pt-1 space-y-3 text-xs border-t border-slate-800/80">
              {/* Form Cues */}
              <div>
                <span className="font-semibold text-amber-400 block mb-1">Key Form Cues:</span>
                <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1">
                  {currentExercise.cues.map((cue, i) => (
                    <li key={i}>{cue}</li>
                  ))}
                </ul>
              </div>

              {/* Common Mistake */}
              <div>
                <span className="font-semibold text-rose-400 block mb-0.5">Common Mistake:</span>
                <p className="text-slate-300">{currentExercise.mistake}</p>
              </div>

              {/* Easier / Harder */}
              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800">
                <div>
                  <span className="font-semibold text-sky-400 block">Easier:</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">{currentExercise.easier}</p>
                </div>
                <div>
                  <span className="font-semibold text-emerald-400 block">Harder:</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">{currentExercise.harder}</p>
                </div>
              </div>

              {/* Muscles worked */}
              <div className="pt-1 border-t border-slate-800 text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">Muscles: </span>
                {currentExercise.muscles.join(', ')}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FLOATING THUMB ZONE CONTROLS */}
      <div className="fixed bottom-0 left-0 right-0 z-30 p-4 bg-gradient-to-t from-[#090d16] via-[#090d16]/95 to-transparent border-t border-slate-800/60 backdrop-blur-md">
        <div className="max-w-lg mx-auto flex items-center justify-between gap-3">
          {/* Back Step */}
          <button
            onClick={goToPreviousStep}
            className="min-h-[48px] min-w-[48px] rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors active:scale-95"
            title="Previous"
            aria-label="Previous step"
          >
            <SkipBack className="w-5 h-5" />
          </button>

          {/* Pause / Resume */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="flex-1 min-h-[48px] rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm flex items-center justify-center gap-2 transition-colors active:scale-95"
          >
            {isPaused ? <Play className="w-4 h-4 text-amber-400" /> : <Pause className="w-4 h-4 text-amber-400" />}
            {isPaused ? 'Resume' : 'Pause'}
          </button>

          {/* Emergency "Stop - This Hurts" Safety Button */}
          <button
            onClick={() => setShowPainModal(true)}
            className="min-h-[48px] px-3.5 rounded-xl bg-rose-950/60 hover:bg-rose-900/60 border border-rose-800/60 text-rose-300 font-semibold text-xs flex items-center gap-1.5 transition-colors active:scale-95"
            title="Stop - This hurts"
          >
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            <span className="hidden sm:inline">Hurts?</span>
          </button>

          {/* Skip / Next */}
          <button
            onClick={skipCurrentStep}
            className="min-h-[48px] min-w-[48px] rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors active:scale-95"
            title="Skip Exercise"
            aria-label="Skip to next exercise"
          >
            <SkipForward className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* PAIN & SAFETY INTERVENTION MODAL */}
      {showPainModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-rose-800/80 p-5 shadow-2xl">
            <div className="flex items-center gap-2 text-rose-400 mb-2">
              <AlertTriangle className="w-6 h-6" />
              <h3 className="text-lg font-bold">Safety First: Stop Discomfort</h3>
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              Exercise must never produce sharp joint pain, pinching, clicking with discomfort, numbness, or dizziness. Mild muscular fatigue is normal; joint pain is a hard stop.
            </p>

            <div className="mt-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-semibold text-amber-400 block mb-1">
                Immediate Safe Regression:
              </span>
              <p className="text-xs text-slate-300">
                {currentExercise.easier}
              </p>
            </div>

            <div className="mt-3 p-2.5 rounded-xl bg-rose-950/40 border border-rose-900/60 text-[11px] text-rose-200">
              Note: If pain persists beyond the workout, rests, or feels sharp/radiating, do not train through it. Consult a physician or physical therapist.
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <button
                onClick={handlePainAlternative}
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
              >
                Switch to Safe Alternative / Skip Exercise
              </button>
              <button
                onClick={() => {
                  setShowPainModal(false);
                  finishWorkout();
                }}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors"
              >
                End Workout Now & Jump to Cool-down
              </button>
              <button
                onClick={() => setShowPainModal(false)}
                className="w-full py-2 rounded-xl text-slate-400 hover:text-slate-200 text-xs transition-colors"
              >
                Dismiss & Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
