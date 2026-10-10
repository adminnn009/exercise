import { AppState, CompletedSession, DailyHabits, ReadinessScore, TestResult, UserSettings } from '../types';

const STORAGE_KEY = 'calisstart_state_v1';

export const DEFAULT_SETTINGS: UserSettings = {
  soundEnabled: true,
  speechEnabled: true,
  speechVolume: 0.8,
  textScale: 'normal',
  wakeLockEnabled: true,
  autoAdvance: true,
  hasAcceptedDisclaimer: false,
  pushUpLevel: 0 // Starts at Level 0: Wall Push-ups
};

export function getTodayDateString(): string {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getDefaultState(): AppState {
  return {
    currentDay: 1,
    streakCurrent: 0,
    streakBest: 0,
    lastActiveDate: '',
    completedDays: {},
    readinessHistory: {},
    habitsHistory: {},
    testHistory: [],
    settings: DEFAULT_SETTINGS
  };
}

export function loadAppState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    const parsed = JSON.parse(raw);
    return {
      ...getDefaultState(),
      ...parsed,
      settings: {
        ...DEFAULT_SETTINGS,
        ...(parsed.settings || {})
      }
    };
  } catch (err) {
    console.error('Failed to parse state from localStorage, using default:', err);
    return getDefaultState();
  }
}

export function saveAppState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save state to localStorage:', err);
  }
}

/**
 * Checks if the user completed a workout yesterday or today to calculate streak
 */
export function recordCompletedWorkout(
  prevState: AppState,
  dayNumber: number,
  durationMinutes: number,
  mode: 'normal' | 'light',
  exercisesCompleted: number
): AppState {
  const today = getTodayDateString();
  const newCompletedDays = { ...prevState.completedDays };

  // Calculate streak based on date
  let newCurrentStreak = prevState.streakCurrent;
  const lastActive = prevState.lastActiveDate;

  if (!lastActive) {
    newCurrentStreak = 1;
  } else if (lastActive === today) {
    // Already worked out today, keep streak
    newCurrentStreak = Math.max(1, newCurrentStreak);
  } else {
    // Check difference in calendar days
    const lastDate = new Date(lastActive);
    const currentDate = new Date(today);
    const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      newCurrentStreak += 1;
    } else {
      // Missed more than 1 day
      newCurrentStreak = 1;
    }
  }

  const newBestStreak = Math.max(prevState.streakBest, newCurrentStreak);

  newCompletedDays[dayNumber] = {
    dayNumber,
    date: today,
    durationMinutes,
    mode,
    exercisesCompleted
  };

  // Advance currentDay if completing the current day
  const nextDay = dayNumber === prevState.currentDay && dayNumber < 182
    ? dayNumber + 1
    : prevState.currentDay;

  const nextState: AppState = {
    ...prevState,
    currentDay: nextDay,
    streakCurrent: newCurrentStreak,
    streakBest: newBestStreak,
    lastActiveDate: today,
    completedDays: newCompletedDays
  };

  saveAppState(nextState);
  return nextState;
}

export function saveReadiness(prevState: AppState, readiness: ReadinessScore): AppState {
  const next: AppState = {
    ...prevState,
    readinessHistory: {
      ...prevState.readinessHistory,
      [readiness.date]: readiness
    }
  };
  saveAppState(next);
  return next;
}

export function saveHabits(prevState: AppState, date: string, habits: DailyHabits): AppState {
  const next: AppState = {
    ...prevState,
    habitsHistory: {
      ...prevState.habitsHistory,
      [date]: habits
    }
  };
  saveAppState(next);
  return next;
}

export function recordTestResult(prevState: AppState, result: TestResult): AppState {
  const next: AppState = {
    ...prevState,
    testHistory: [...prevState.testHistory, result]
  };
  saveAppState(next);
  return next;
}

export function updateUserSettings(prevState: AppState, partial: Partial<UserSettings>): AppState {
  const next: AppState = {
    ...prevState,
    settings: {
      ...prevState.settings,
      ...partial
    }
  };
  saveAppState(next);
  return next;
}

/**
 * Export state as downloadable JSON file
 */
export function exportStateAsJSON(state: AppState): void {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `calisstart-backup-${getTodayDateString()}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

/**
 * Validate and import backup JSON
 */
export function validateAndImportJSON(jsonString: string): AppState | null {
  try {
    const parsed = JSON.parse(jsonString);
    if (typeof parsed !== 'object' || parsed === null) return null;
    if (typeof parsed.currentDay !== 'number' || !parsed.settings) return null;

    const validatedState: AppState = {
      ...getDefaultState(),
      ...parsed,
      settings: {
        ...DEFAULT_SETTINGS,
        ...(parsed.settings || {})
      }
    };
    saveAppState(validatedState);
    return validatedState;
  } catch (err) {
    console.error('Import validation failed:', err);
    return null;
  }
}
