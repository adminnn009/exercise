export type ExerciseCategory = 
  | 'push' 
  | 'pull' 
  | 'legs' 
  | 'core' 
  | 'stretches-posture' 
  | 'stretches-lower' 
  | 'stretches-upper' 
  | 'stretches-back' 
  | 'morning-lymph' 
  | 'face-neck-wellness';

export type ExerciseType = 'reps' | 'hold' | 'timed';

export interface JointPoses {
  // Start keyframe (coordinates 0-100 normalized)
  start: {
    head: [number, number];
    neck: [number, number];
    leftShoulder: [number, number];
    rightShoulder: [number, number];
    leftElbow: [number, number];
    rightElbow: [number, number];
    leftHand: [number, number];
    rightHand: [number, number];
    pelvis: [number, number];
    leftKnee: [number, number];
    rightKnee: [number, number];
    leftFoot: [number, number];
    rightFoot: [number, number];
  };
  // Peak contraction / hold keyframe
  peak: {
    head: [number, number];
    neck: [number, number];
    leftShoulder: [number, number];
    rightShoulder: [number, number];
    leftElbow: [number, number];
    rightElbow: [number, number];
    leftHand: [number, number];
    rightHand: [number, number];
    pelvis: [number, number];
    leftKnee: [number, number];
    rightKnee: [number, number];
    leftFoot: [number, number];
    rightFoot: [number, number];
  };
  // Environment guide lines (e.g. wall, floor, chair)
  environment?: 'floor' | 'wall' | 'elevated' | 'standing';
}

export interface Exercise {
  id: string;
  name: string;
  category: ExerciseCategory;
  type: ExerciseType;
  defaultSets: number;
  defaultReps?: number;
  defaultHoldSeconds?: number;
  restSeconds: number;
  cues: string[];
  mistake: string;
  easier: string;
  harder: string;
  muscles: string[];
  ytQuery: string;
  poses: JointPoses;
}

export interface WorkoutStep {
  exerciseId: string;
  block: 'warmup' | 'main' | 'cooldown';
  prescribedSets: number;
  prescribedReps?: number;
  prescribedHoldSec?: number;
  restSeconds: number;
  notes?: string;
}

export interface DayPlan {
  dayNumber: number; // 1 to 182
  week: number; // 1 to 26
  phase: 1 | 2 | 3;
  phaseName: string;
  focusTitle: string;
  isDeload: boolean;
  isTestDay: boolean;
  warmup: WorkoutStep[];
  main: WorkoutStep[];
  cooldown: WorkoutStep[];
  estimatedMinutes: number;
}

export interface ReadinessScore {
  sleep: number; // 1-5
  energy: number; // 1-5
  soreness: number; // 1-5 (1 = very sore, 5 = no soreness)
  total: number;
  mode: 'normal' | 'light';
  date: string;
}

export interface DailyHabits {
  waterGlasses: number; // 0-8
  sleepHours: number; // e.g. 7.5
  walkMinutes: number; // e.g. 20
  notes: string;
}

export interface TestResult {
  dayNumber: number;
  date: string;
  pushUpLevel: number;
  pushUpReps: number;
  plankSeconds: number;
  wallSitSeconds: number;
  toeTouchCm: number;
  chinTuckSeconds: number;
}

export interface CompletedSession {
  dayNumber: number;
  date: string; // YYYY-MM-DD
  durationMinutes: number;
  mode: 'normal' | 'light';
  exercisesCompleted: number;
}

export interface UserSettings {
  soundEnabled: boolean;
  speechEnabled: boolean;
  speechVolume: number;
  textScale: 'normal' | 'large';
  wakeLockEnabled: boolean;
  autoAdvance: boolean;
  hasAcceptedDisclaimer: boolean;
  pushUpLevel: number; // 0: Wall, 1: Incline, 2: Knee, 3: Negative, 4: Full, 5: Decline
}

export interface AppState {
  currentDay: number;
  streakCurrent: number;
  streakBest: number;
  lastActiveDate: string; // YYYY-MM-DD
  completedDays: Record<number, CompletedSession>;
  readinessHistory: Record<string, ReadinessScore>;
  habitsHistory: Record<string, DailyHabits>;
  testHistory: TestResult[];
  settings: UserSettings;
}
