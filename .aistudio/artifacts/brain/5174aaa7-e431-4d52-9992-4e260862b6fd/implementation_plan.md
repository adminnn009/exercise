# 182-Day Zero-to-Hero Beginner Fitness PWA (CalisStart)

A polished, mobile-first Progressive Web App designed as a complete 182-day (26-week) progressive home bodyweight program for beginners who cannot do a push-up. Operates 100% offline with zero equipment, equipment-free adaptations, dynamic readiness adjustments, procedural SVG animations for every exercise, real-time audio and voice coaching, and complete data persistence with backups.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following core user preferences have been established:
> - **Visual Theme**: Clean slate dark mode with amber energy accents (`#f59e0b` / `#fbbf24`), dark slate backgrounds (`#0f172a`, `#1e293b`), and high-contrast typography for optimal readability.
> - **Audio & Voice Coaching**: Dual-engine audio using Web Audio API synthesis (crisp countdown beeps and phase chimes) paired with Web Speech API (`speechSynthesis`) for clear spoken exercise announcements, countdowns, and rest cues.
> - **Adaptive Readiness**: Daily check-in evaluating sleep, energy, and muscle soreness on a 1–5 scale, recommending either a tailored "Light Active Recovery" version or the standard full 30-minute progression.

- **Confirmed Decision 1: Self-Contained Offline PWA Architecture**: While deployed in modern Vite/React/TS, the application compiles into an installable PWA with full offline precaching (`sw.js`), Web App Manifest (`manifest.webmanifest`), and complete local storage so that no external network requests are needed for core workout functionality.
- **Confirmed Decision 2: Procedural Multi-Pose SVG Stick-Figure Engine**: Every single exercise in the library (50+ movements across Push, Pull, Legs, Core, Mobility, Posture, and Wellness) is powered by a joint-coordinate interpolation engine (`requestAnimationFrame`) defining anatomically accurate start, peak, and hold keyframes with directional movement indicators.
- **Confirmed Decision 3: Safety-First Progression & Deload Cadence**: Deload weeks every 4th week (Weeks 4, 8, 12, 16, 20, 24). Progression on the push-up ladder (Wall → Incline → Knee → Negative → Full → Decline) is governed by controlled rep completions over 2 consecutive sessions without pain, with instant manual regression controls and a prominent "Stop – This Hurts" emergency alternative workflow.

---

## 1. Overview & Core Concept

- **What It Does**: Guides an absolute beginner from 0 push-ups to mastery of foundational bodyweight strength over 26 structured weeks (182 days). Each day is mathematically calibrated to ~30 minutes across three distinct phases: Warm-up (5 min) → Main Block (20 min) → Cool-down & Wellness (5 min).
- **Target Audience**: Beginners with zero fitness background or equipment, individuals working from home, and anyone needing gentle, safe joint and postural strengthening.
- **Key Value**: Eliminates intimidation, prevents injury, guarantees progressive overload at a safe pace, functions entirely offline on any smartphone, and keeps data private on the device.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Daily Arrival**: User launches app. Top header displays Day X / 182, Phase Name, and Week Number. If yesterday was missed, the app presents two calm choices: *"Continue where I left off (Day X)"* or *"Sync to today's calendar date"*.
2. **Readiness Check-In**: User taps 1–5 for Sleep, Energy, and Soreness. If total score indicates high fatigue, the app suggests a 15-minute Light version or active mobility session.
3. **Workout Player Experience**:
   - Screen Wake Lock activates automatically (preventing screen dimming).
   - Dynamic SVG stick-figure loops smoothly showing the movement form with highlighted muscle groups.
   - Form cues, common mistakes, easier regression, and harder progression are expandable with one touch.
   - Big, high-contrast timer counts down active work or reps.
   - Beeps and spoken cues trigger at Start, 3-2-1, and End.
   - Rest periods trigger automatically with rest timers and next-up previews.
   - Immediate "Stop – This Hurts" button offers a joint-safe regression or skips to cool-down.
4. **Session Finish & Celebration**: Logs completion to localStorage, increments streak, updates the 182-day calendar heatmap, checks off daily habits, and triggers milestone badges.
5. **Periodic Progress Tests**: Every 4 weeks (Weeks 4, 8, 12, 16, 20, 24), a dedicated test day prompts max efforts for Wall/Incline/Knee/Full push-ups, Plank hold, Wall sit hold, and Toe-touch reach. Results are visualized in interactive SVG progress charts.

### Visual Identity & Theme
- **Color Palette**:
  - Dominant Canvas (60%): `#090d16` (Deep Obsidian Slate) and `#111827` (Charcoal Surface).
  - Structural Surfaces (30%): `#1e293b` (Slate 800 cards), `#334155` (Slate 700 hairline borders), `#94a3b8` (Slate 400 muted text).
  - Accent Energy (10%): `#f59e0b` (Amber 500) and `#fbbf24` (Amber 400), with `#10b981` (Emerald 500) reserved exclusively for completed sessions and checkmarks.
- **Typography**: Clean athletic sans (`Plus Jakarta Sans` or modern system sans fallback) paired with tabular numerals (`tabular-nums font-mono`) for precision timers and rep counters.
- **Mobile Thumb Zone Ergonomics**: Bottom navigation bar with 5 destinations (Today · Plan · Library · Progress · Settings). Primary workout controls (Pause, Next, Pain Relief) sit in the lower 40% thumb zone with $\ge 48\text{px}$ touch targets.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Stick-Figure Vector Animation vs. Static GIFs/Videos**:
  - *Chosen Approach*: Lightweight procedural SVG stick figures calculated via joint kinematics (head, neck, spine, shoulders, elbows, wrists, hips, knees, ankles) and animated via smooth CSS keyframes or requestAnimationFrame lerping.
  - *Why*: Weighs less than 25KB total, renders crisply at any DPI, works completely offline without downloading gigabytes of video, and loads instantly on low-end mobile devices.
  - *YouTube Fallback*: A clean external link opens a pre-composed YouTube search query for users wanting cinematic demonstrations.
- **Decision 2: Strict Beginner Safety & Exclusion of Risky Movements**:
  - *Chosen Approach*: Completely excludes dangerous furniture dips, unstable table rows, jump squats in early phases, and hazardous appearance or neck-loading trends.
  - *Why*: Beginners lack shoulder joint stability and wrist conditioning; safe progressions (isometric wall presses, prone Y-T-W raises, doorway rows, controlled negatives) build safe tendon strength first.
- **Decision 3: Offline-First Client Storage with Dual Sync Options**:
  - *Chosen Approach*: 100% localStorage with export/import JSON, calendar date tracking, and program day pointers.
  - *Why*: No accounts, no paywalls, zero login latency, and complete user privacy.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CalisStart PWA Container                        │
│                                                                        │
│  ┌────────────────────────┐  ┌──────────────────────────────────────┐  │
│  │     Service Worker     │  │          Audio & Speech Bus          │  │
│  │ (sw.js - CacheFirst)   │  │ Web Audio Synth + speechSynthesis    │  │
│  └───────────┬────────────┘  └──────────────────┬───────────────────┘  │
│              │                                  │                      │
│  ┌───────────▼──────────────────────────────────▼───────────────────┐  │
│  │                       Application State Store                    │  │
│  │  - Program Day (1-182)       - Daily Readiness (1-5)             │  │
│  │  - Workout History Map       - Push-up Level (0-5)               │  │
│  │  - Habit Checklist           - Progress Test Benchmark Records   │  │
│  │  - Settings (Voice/Sound)    - Streaks & Badges                  │  │
│  └───────────────────────────┬──────────────────────────────────────┘  │
│                              │                                         │
│  ┌───────────────────────────┼──────────────────────────────────────┐  │
│  │                           │ View Layer                           │  │
│  │  ┌──────────────┐ ┌───────▼──────┐ ┌──────────────┐ ┌─────────┐  │  │
│  │  │ Today (Home) │ │ Active Player│ │ Library (50+)│ │Progress │  │  │
│  │  │ - Readiness  │ │ - SVG Engine │ │ - Filters    │ │ - Tests │  │  │
│  │  │ - 30m Plan   │ │ - Step Timers│ │ - Cues/Alt   │ │ - Charts│  │  │
│  │  │ - Habits     │ │ - Voice/Beeps│ │ - YT Search  │ │ - Heat  │  │  │
│  │  └──────────────┘ └──────────────┘ └──────────────┘ └─────────┘  │  │
│  │                           Plan / Settings                        │  │
│  │  - 26-Week Calendar / Deloads    - Export/Import JSON & Reset    │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                              │                                         │
│  ┌───────────────────────────▼──────────────────────────────────────┐  │
│  │                   localStorage Persist Engine                    │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### Data Structures & State Model
- `Exercise`: `id`, `name`, `category`, `type` (reps/hold/timed), `defaultSets`, `defaultReps`, `holdSec`, `cues[]`, `mistake`, `easier`, `harder`, `muscles[]`, `ytQuery`, `poseKeyframes` (joint coordinates).
- `DailyWorkout`: `dayNumber` (1-182), `phase` (1-3), `week` (1-26), `focusTitle`, `isDeload`, `isTestDay`, `warmup[]`, `main[]`, `cooldown[]`, `estimatedMinutes`.
- `UserData`: `currentDay`, `streakCurrent`, `streakBest`, `completedDays` (record of date -> stats), `pushUpLevel`, `testResults[]`, `habits` (water, sleep, steps, notes), `settings` (sound, speech, textScale).

---

## 5. Verification & Testing Plan

1. **Compilation & Syntax**: Build with Vite to verify zero TypeScript errors, package imports, and valid PWA asset linking.
2. **Offline & Service Worker Inspection**: Verify `sw.js` cache manifest and installability criteria.
3. **Workout Player Lifecycle**: Step through exercise start, countdown ticks, 3-2-1 audio beeps, voice cues, rest interval transition, and completion logging.
4. **Data Integrity & Edge Cases**:
   - Test missed day workflows (continue vs. skip to today).
   - Test data export and re-import with schema validation.
   - Test destructive reset with the required "RESET" typing confirmation.
   - Verify SVG stick figure joint rendering for all exercise categories without layout overflow.
