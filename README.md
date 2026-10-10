# CalisStart: 182-Day Zero-to-Pushup Fitness PWA

A complete, lightweight, mobile-first Progressive Web App (PWA) delivering a 26-week (182-day) structured home bodyweight fitness program for beginners starting from zero push-ups. Operates 100% offline with zero equipment, equipment-free adaptations, dynamic daily readiness check-ins, procedural animated SVG stick-figure form guides for every exercise, real-time audio and voice coaching, and complete data backup and restore capabilities.

---

## Key Features

1. **182-Day Scientific Curriculum**:
   - **Phase 1 (Weeks 1–8) — Foundation**: Wall to Incline push-ups, joint conditioning, 2–3 sets, form mastery.
   - **Phase 2 (Weeks 9–17) — Build**: Knee push-ups, 4-second eccentric negatives, tempo holds, Bulgarian split squats.
   - **Phase 3 (Weeks 18–26) — Strength & Power**: Full floor push-ups, decline variations, pike press, and controlled soft-landing power.
   - **Programmed Deloads**: Every 4th week (Weeks 4, 8, 12, 16, 20, 24) features 40% reduced volume to prevent tendon strain and fatigue.
   - **30-Minute Daily Structure**: Calculated into Warm-up (5 min) → Main Block (20 min) → Cool-down & Wellness (5 min).

2. **Procedural SVG Stick-Figure Engine**:
   - Lightweight, scalable vector animations for all 50+ exercises in the library.
   - Smooth joint interpolation with anatomically accurate poses for push, pull, legs, core, posture, and gentle wellness movements.
   - Highlighting target muscle groups with glowing amber accents.
   - Includes form cues, common mistake tips, easier regressions, harder progressions, and YouTube search links.

3. **Guided Workout Player**:
   - Screen Wake Lock API prevents device sleep during workouts.
   - Dual-engine audio: Web Audio API synthesis (start tones, 3-2-1 countdown beeps, fanfare chords) + Web Speech API (`speechSynthesis`) for exercise announcements, rest intervals, and countdowns.
   - "Stop – This Hurts" emergency button providing immediate safe regressions or cool-down transitions.
   - Real-time pause, skip, and back controls.

4. **Progress, Streaks & Analytics**:
   - 182-day interactive calendar heatmap.
   - Active streak and best streak tracking without breaking progress on missed days (offers "Continue where I left off" or "Sync to calendar").
   - 4-week benchmark test logger with pure SVG progress line charts (Push-up Max, Plank Hold, Wall Sit, Toe-Touch Reach, Chin-Tuck Hold).
   - Milestone achievement badges.

5. **Daily Readiness & Habit Checklists**:
   - Evaluates sleep quality, energy, and muscle recovery (1–5) to automatically suggest standard 30-minute or light active recovery sessions.
   - 8-glass water tracker, sleep duration logger, walking tracker, and daily training notes.

6. **Privacy & Offline-First Storage**:
   - 100% localStorage persistence with zero server tracking or required accounts.
   - Export backup (JSON download) and Import backup.
   - Safe two-step reset requiring typing "RESET" in uppercase.

---

## How to Install & Run

### 1. Running Locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

### 2. Building for Production
```bash
npm run build
```
The compiled output in `dist/` is completely static and ready for instant deployment.

---

## Free Hosting Guide (GitHub Pages)

You can host CalisStart completely free on GitHub Pages:

1. Push your repository to GitHub.
2. In your repository, go to **Settings** → **Pages**.
3. Under **Build and deployment**:
   - Set **Source** to **GitHub Actions** (using the standard Vite/Static HTML action) or deploy from the `gh-pages` branch.
4. Once deployed, open your GitHub Pages URL (e.g., `https://<username>.github.io/<repo-name>/`) on your phone or desktop.

---

## How to Install on Your Phone (PWA)

### Android (Chrome / Edge / Brave):
1. Open the hosted web app URL in Chrome or Edge.
2. An in-app **"Install CalisStart App"** banner will appear at the top. Tap **Install**.
3. Alternatively, tap the browser's three-dot menu (⋮) and select **"Add to Home screen"** or **"Install app"**.
4. The app icon will appear on your home screen and run standalone in full-screen mode.

### iPhone / iPad (Safari):
1. Open the hosted web app in Safari.
2. Tap the **Share** button in the Safari toolbar (square with upward arrow).
3. Scroll down and tap **Add to Home Screen**.
4. Tap **Add** in the top right corner. The app will launch standalone without the Safari browser chrome.

---

## Testing Offline Mode

1. Open the app in your browser or installed PWA.
2. Load any workout or navigate between tabs to let the service worker (`sw.js`) cache the application shell.
3. Turn on **Airplane Mode** or disconnect your Wi-Fi / cellular data.
4. Refresh or launch the app: all workouts, animated stick figures, timers, audio beeps, and data storage continue to function smoothly without internet connection.

---

## Data Backup & Transfer Instructions

- **To Export**: Go to **Settings** → tap **"Export Backup"** to download `calisstart-backup-YYYY-MM-DD.json`.
- **To Restore**: On any device, go to **Settings** → tap **"Import Backup"** and select your JSON file. All streaks, completed workouts, and benchmark tests are instantly restored.
