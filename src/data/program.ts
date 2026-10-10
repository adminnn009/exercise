import { DayPlan, WorkoutStep } from '../types';
import { EXERCISE_MAP } from './exercises';

export const PUSH_UP_LEVELS = [
  { level: 0, id: 'wall_pushups', name: 'Wall Push-ups', targetReps: 15, targetSets: 3 },
  { level: 1, id: 'incline_pushups', name: 'Incline Push-ups', targetReps: 12, targetSets: 3 },
  { level: 2, id: 'knee_pushups', name: 'Knee Push-ups', targetReps: 10, targetSets: 3 },
  { level: 3, id: 'negative_pushups', name: 'Negative Push-ups', targetReps: 8, targetSets: 3 },
  { level: 4, id: 'full_pushups', name: 'Full Push-ups', targetReps: 8, targetSets: 3 },
  { level: 5, id: 'decline_pushups', name: 'Decline Push-ups', targetReps: 10, targetSets: 3 }
];

export function getPushUpIdForLevel(level: number): string {
  const bounded = Math.max(0, Math.min(level, PUSH_UP_LEVELS.length - 1));
  return PUSH_UP_LEVELS[bounded].id;
}

/**
 * Generates the DayPlan for any day from 1 to 182, adjusting for phase, deloads, test days, and user push-up level.
 */
export function generateDayPlan(dayNumber: number, pushUpLevel: number = 0): DayPlan {
  const boundedDay = Math.max(1, Math.min(dayNumber, 182));
  const week = Math.ceil(boundedDay / 7);
  const dayOfWeekIndex = (boundedDay - 1) % 7; // 0 = Mon, 1 = Tue, ... 6 = Sun

  let phase: 1 | 2 | 3 = 1;
  let phaseName = 'Phase 1: Foundation';
  if (week > 8 && week <= 17) {
    phase = 2;
    phaseName = 'Phase 2: Build & Capacity';
  } else if (week > 17) {
    phase = 3;
    phaseName = 'Phase 3: Strength & Power';
  }

  // Deload every 4th week (Weeks 4, 8, 12, 16, 20, 24)
  const isDeload = week % 4 === 0;
  // Test day is the 7th day of deload weeks (Sunday of week 4, 8, 12, 16, 20, 24) or Saturday
  const isTestDay = isDeload && dayOfWeekIndex === 5; // Saturday of deload week

  const currentPushUpId = getPushUpIdForLevel(pushUpLevel);

  // Set multipliers based on Phase & Deload
  const setsMultiplier = isDeload ? 0.6 : phase === 1 ? 1 : phase === 2 ? 1.2 : 1.3;

  const warmup: WorkoutStep[] = [];
  const main: WorkoutStep[] = [];
  const cooldown: WorkoutStep[] = [];
  let focusTitle = '';

  // Warmup routines
  const warmupA: WorkoutStep[] = [
    { exerciseId: 'arm_waves', block: 'warmup', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 },
    { exerciseId: 'golf_arm_swings', block: 'warmup', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 },
    { exerciseId: 'knee_raises', block: 'warmup', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 },
    { exerciseId: 'spine_waves', block: 'warmup', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 },
    { exerciseId: 'single_leg_side_swings', block: 'warmup', prescribedSets: 1, prescribedHoldSec: 40, restSeconds: 15 }
  ];

  const warmupB: WorkoutStep[] = [
    { exerciseId: 'zen_swing', block: 'warmup', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 },
    { exerciseId: 'arm_waves', block: 'warmup', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 },
    { exerciseId: 'lymphatic_hops', block: 'warmup', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 },
    { exerciseId: 'shoulder_blade_squeezes', block: 'warmup', prescribedSets: 1, prescribedReps: 10, restSeconds: 15 },
    { exerciseId: 'spine_waves', block: 'warmup', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 }
  ];

  switch (dayOfWeekIndex) {
    // MON: Push + Core
    case 0:
      focusTitle = 'Push Strength & Anterior Core';
      warmup.push(...warmupA);
      main.push(
        {
          exerciseId: currentPushUpId,
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedReps: phase === 1 ? 10 : phase === 2 ? 12 : 14,
          restSeconds: isDeload ? 60 : 60
        },
        {
          exerciseId: 'doorframe_presses',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedReps: 5,
          restSeconds: 45
        },
        {
          exerciseId: 'plank',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedHoldSec: isDeload ? 20 : phase === 1 ? 25 : phase === 2 ? 35 : 45,
          restSeconds: 45
        },
        {
          exerciseId: 'dead_bug',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedReps: 12,
          restSeconds: 45
        },
        {
          exerciseId: 'crunches',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(2 * setsMultiplier)),
          prescribedReps: 12,
          restSeconds: 30
        }
      );
      cooldown.push(
        { exerciseId: 'chest_stretch', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 30, restSeconds: 15 },
        { exerciseId: 'triceps_stretch', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 30, restSeconds: 15 },
        { exerciseId: 'shoulder_stretch', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 30, restSeconds: 15 },
        { exerciseId: 'neck_side_stretch', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 30, restSeconds: 15 }
      );
      break;

    // TUE: Pull + Posture
    case 1:
      focusTitle = 'Pull Mechanics & Postural Spine';
      warmup.push(...warmupB);
      main.push(
        {
          exerciseId: 'inverted_rows',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedReps: isDeload ? 6 : phase === 1 ? 8 : 10,
          restSeconds: 75
        },
        {
          exerciseId: 'superman_holds',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedHoldSec: isDeload ? 20 : phase === 1 ? 25 : 35,
          restSeconds: 45
        },
        {
          exerciseId: 'prone_reverse_flys',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedReps: 12,
          restSeconds: 45
        },
        {
          exerciseId: 'doorframe_facepull',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedReps: 6,
          restSeconds: 45
        },
        {
          exerciseId: 'neck_retraction',
          block: 'main',
          prescribedSets: 2,
          prescribedReps: 10,
          restSeconds: 30
        }
      );
      cooldown.push(
        { exerciseId: 'lat_stretch', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 35, restSeconds: 15 },
        { exerciseId: 'upper_back_stretch', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 30, restSeconds: 15 },
        { exerciseId: 'biceps_stretch', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 30, restSeconds: 15 },
        { exerciseId: 'scalp_massage', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 60, restSeconds: 15 }
      );
      break;

    // WED: Legs + Hips
    case 2:
      focusTitle = 'Lower Body Strength & Hip Mobility';
      warmup.push(...warmupA);
      main.push(
        {
          exerciseId: 'bodyweight_squats',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedReps: isDeload ? 10 : phase === 1 ? 12 : phase === 2 ? 15 : 18,
          restSeconds: 60
        },
        {
          exerciseId: phase === 1 ? 'lunges' : 'bulgarian_split_squats',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedReps: isDeload ? 6 : phase === 1 ? 8 : 10,
          restSeconds: 60
        },
        {
          exerciseId: 'wall_sit',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedHoldSec: isDeload ? 25 : phase === 1 ? 30 : phase === 2 ? 40 : 50,
          restSeconds: 60
        },
        {
          exerciseId: phase === 3 ? 'single_leg_glute_bridge' : 'glute_bridge',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedReps: 12,
          restSeconds: 45
        },
        {
          exerciseId: 'calf_raises',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(2 * setsMultiplier)),
          prescribedReps: 15,
          restSeconds: 30
        }
      );
      cooldown.push(
        { exerciseId: 'hip_flexor_stretch', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 35, restSeconds: 15 },
        { exerciseId: 'hamstring_stretch', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 35, restSeconds: 15 },
        { exerciseId: 'quadriceps_stretch', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 35, restSeconds: 15 },
        { exerciseId: 'calf_stretch', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 35, restSeconds: 15 }
      );
      break;

    // THU: Push + Core (Volume)
    case 3:
      focusTitle = 'Push Endurance & Rotational Core';
      warmup.push(...warmupA);
      main.push(
        {
          exerciseId: currentPushUpId,
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedReps: phase === 1 ? 8 : phase === 2 ? 10 : 12,
          restSeconds: 60
        },
        {
          exerciseId: 'plank_shoulder_tap',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedReps: 12,
          restSeconds: 45
        },
        {
          exerciseId: 'pike_pushups',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(2 * setsMultiplier)),
          prescribedReps: phase === 1 ? 6 : 8,
          restSeconds: 60
        },
        {
          exerciseId: 'russian_twists',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedReps: 16,
          restSeconds: 45
        },
        {
          exerciseId: 'reverse_crunch',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(2 * setsMultiplier)),
          prescribedReps: 10,
          restSeconds: 45
        }
      );
      cooldown.push(
        { exerciseId: 'chest_opener', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 30, restSeconds: 15 },
        { exerciseId: 'forearm_stretch', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 35, restSeconds: 15 },
        { exerciseId: 'neck_flexor_stretch', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 30, restSeconds: 15 },
        { exerciseId: 'neck_extensor_stretch', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 30, restSeconds: 15 }
      );
      break;

    // FRI: Pull + Legs (Circuit)
    case 4:
      focusTitle = 'Full-Body Integration Circuit';
      warmup.push(...warmupB);
      main.push(
        {
          exerciseId: 'inverted_rows',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedReps: 8,
          restSeconds: 60
        },
        {
          exerciseId: phase === 3 && !isDeload ? 'jump_squats' : 'bodyweight_squats',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedReps: 12,
          restSeconds: 60
        },
        {
          exerciseId: 'reverse_snow_angels',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(2 * setsMultiplier)),
          prescribedReps: 10,
          restSeconds: 45
        },
        {
          exerciseId: 'glute_bridge',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(3 * setsMultiplier)),
          prescribedReps: 12,
          restSeconds: 45
        },
        {
          exerciseId: 'bird_dog',
          block: 'main',
          prescribedSets: Math.max(2, Math.round(2 * setsMultiplier)),
          prescribedReps: 10,
          restSeconds: 30
        }
      );
      cooldown.push(
        { exerciseId: 'cat_cow', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 },
        { exerciseId: 'knee_to_chest', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 35, restSeconds: 15 },
        { exerciseId: 'lower_back_rotational_lying', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 40, restSeconds: 15 }
      );
      break;

    // SAT: Flexibility & Mobility Day (or Benchmark Test Day on Deload Weeks)
    case 5:
      if (isTestDay) {
        focusTitle = `Week ${week} Benchmark Progress Test`;
        warmup.push(...warmupA);
        // Specialized test day exercises
        main.push(
          {
            exerciseId: currentPushUpId,
            block: 'main',
            prescribedSets: 2,
            prescribedReps: 15,
            restSeconds: 90,
            notes: 'Test: Complete maximum clean reps to fatigue.'
          },
          {
            exerciseId: 'plank',
            block: 'main',
            prescribedSets: 1,
            prescribedHoldSec: 90,
            restSeconds: 90,
            notes: 'Test: Max duration hold with strict form.'
          },
          {
            exerciseId: 'wall_sit',
            block: 'main',
            prescribedSets: 1,
            prescribedHoldSec: 90,
            restSeconds: 90,
            notes: 'Test: Max duration hold at 90 degrees.'
          },
          {
            exerciseId: 'neck_retraction',
            block: 'main',
            prescribedSets: 1,
            prescribedHoldSec: 45,
            restSeconds: 60,
            notes: 'Test: Gentle chin-tuck endurance hold.'
          }
        );
        cooldown.push(
          { exerciseId: 'lower_back_flexibility', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 },
          { exerciseId: 'chest_opener', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 35, restSeconds: 15 }
        );
      } else {
        focusTitle = 'Full-Body Mobility & Joint Decompression';
        warmup.push(
          { exerciseId: 'spine_waves', block: 'warmup', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 },
          { exerciseId: 'zen_swing', block: 'warmup', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 },
          { exerciseId: 'single_leg_side_swings', block: 'warmup', prescribedSets: 1, prescribedHoldSec: 40, restSeconds: 15 }
        );
        main.push(
          { exerciseId: 'thoracic_extension', block: 'main', prescribedSets: 2, prescribedHoldSec: 35, restSeconds: 20 },
          { exerciseId: 'deep_squat_hold', block: 'main', prescribedSets: 2, prescribedHoldSec: 30, restSeconds: 30 },
          { exerciseId: 'adductor_stretch', block: 'main', prescribedSets: 1, prescribedHoldSec: 40, restSeconds: 20 },
          { exerciseId: 'figure_4_stretch', block: 'main', prescribedSets: 1, prescribedHoldSec: 40, restSeconds: 20 },
          { exerciseId: 'inner_thigh_stretch', block: 'main', prescribedSets: 1, prescribedHoldSec: 35, restSeconds: 20 },
          { exerciseId: 'shoulder_blade_stretch', block: 'main', prescribedSets: 1, prescribedHoldSec: 35, restSeconds: 20 },
          { exerciseId: 'seated_lower_back_rotation', block: 'main', prescribedSets: 1, prescribedHoldSec: 40, restSeconds: 20 }
        );
        cooldown.push(
          { exerciseId: 'neck_presses', block: 'cooldown', prescribedSets: 1, prescribedReps: 4, restSeconds: 20 },
          { exerciseId: 'lower_back_flexibility', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 60, restSeconds: 15 }
        );
      }
      break;

    // SUN: Active Recovery & Lymphatic Wellness
    case 6:
    default:
      focusTitle = 'Active Recovery, Facial & Lymphatic Flow';
      warmup.push(
        { exerciseId: 'lymph_tapping', block: 'warmup', prescribedSets: 1, prescribedHoldSec: 60, restSeconds: 15 },
        { exerciseId: 'lymphatic_hops', block: 'warmup', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 },
        { exerciseId: 'arm_waves', block: 'warmup', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 }
      );
      main.push(
        { exerciseId: 'jaw_stretch', block: 'main', prescribedSets: 1, prescribedHoldSec: 30, restSeconds: 15 },
        { exerciseId: 'mouth_stretch', block: 'main', prescribedSets: 1, prescribedHoldSec: 30, restSeconds: 15 },
        { exerciseId: 'masseter_release', block: 'main', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 },
        { exerciseId: 'cheek_stretch', block: 'main', prescribedSets: 1, prescribedHoldSec: 30, restSeconds: 15 },
        { exerciseId: 'eye_relaxation', block: 'main', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 },
        { exerciseId: 'forehead_smoothing', block: 'main', prescribedSets: 1, prescribedHoldSec: 30, restSeconds: 15 },
        { exerciseId: 'neck_acupressure', block: 'main', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 },
        { exerciseId: 'scalp_massage', block: 'main', prescribedSets: 1, prescribedHoldSec: 90, restSeconds: 15 }
      );
      cooldown.push(
        { exerciseId: 'cat_cow', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 45, restSeconds: 15 },
        { exerciseId: 'lower_back_flexibility', block: 'cooldown', prescribedSets: 1, prescribedHoldSec: 60, restSeconds: 15 }
      );
      break;
  }

  // Calculate realistic estimated duration
  const allSteps = [...warmup, ...main, ...cooldown];
  let totalSeconds = 0;
  for (const step of allSteps) {
    const ex = EXERCISE_MAP[step.exerciseId];
    if (!ex) continue;
    const sets = step.prescribedSets;
    if (step.prescribedHoldSec) {
      totalSeconds += (step.prescribedHoldSec + step.restSeconds) * sets;
    } else if (step.prescribedReps) {
      // Average 3 seconds per controlled rep
      const workSec = step.prescribedReps * 3;
      totalSeconds += (workSec + step.restSeconds) * sets;
    } else {
      totalSeconds += (40 + step.restSeconds) * sets;
    }
  }

  const estimatedMinutes = Math.min(30, Math.round(totalSeconds / 60));

  return {
    dayNumber: boundedDay,
    week,
    phase,
    phaseName,
    focusTitle,
    isDeload,
    isTestDay,
    warmup,
    main,
    cooldown,
    estimatedMinutes: Math.max(20, estimatedMinutes)
  };
}

/**
 * Returns a "Light" recovery version of a day plan (halved sets, gentler pace)
 */
export function getLightDayPlan(standardPlan: DayPlan): DayPlan {
  const lightMain = standardPlan.main.map(step => ({
    ...step,
    prescribedSets: Math.max(1, Math.floor(step.prescribedSets * 0.6)),
    prescribedReps: step.prescribedReps ? Math.max(4, Math.floor(step.prescribedReps * 0.8)) : undefined,
    restSeconds: step.restSeconds + 15
  }));

  return {
    ...standardPlan,
    focusTitle: `${standardPlan.focusTitle} (Light Readiness Mode)`,
    main: lightMain,
    estimatedMinutes: Math.round(standardPlan.estimatedMinutes * 0.6)
  };
}
