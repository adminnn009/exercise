// CalisStart Web Audio Synth & Speech Synthesis Coaching Engine

class SoundController {
  private audioCtx: AudioContext | null = null;
  private soundEnabled: boolean = true;
  private speechEnabled: boolean = true;
  private volume: number = 0.8;

  constructor() {
    // AudioContext will be initialized on first user interaction
  }

  private initAudio() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  public setSoundEnabled(val: boolean) {
    this.soundEnabled = val;
  }

  public setSpeechEnabled(val: boolean) {
    this.speechEnabled = val;
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
  }

  /**
   * Play a clean tone with precise attack/decay
   */
  public playTone(freq: number, durationSec: number = 0.15, type: OscillatorType = 'sine') {
    if (!this.soundEnabled) return;
    try {
      this.initAudio();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.35 * this.volume, this.audioCtx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + durationSec);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(this.audioCtx.currentTime);
      osc.stop(this.audioCtx.currentTime + durationSec);
    } catch {
      // Audio not supported or blocked
    }
  }

  /**
   * Countdown tick beep (3, 2, 1)
   */
  public playTick() {
    this.playTone(660, 0.12, 'sine');
  }

  /**
   * Start / Begin high tone
   */
  public playStart() {
    this.playTone(880, 0.25, 'triangle');
  }

  /**
   * Rest interval transition chime
   */
  public playRestChime() {
    if (!this.soundEnabled) return;
    try {
      this.initAudio();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = this.audioCtx!.createOscillator();
        const gain = this.audioCtx!.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.001, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.25 * this.volume, now + idx * 0.1 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.1 + 0.3);
        osc.connect(gain);
        gain.connect(this.audioCtx!.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.35);
      });
    } catch {
      // Audio fallback
    }
  }

  /**
   * Workout completed fanfare chord
   */
  public playCompleteFanfare() {
    if (!this.soundEnabled) return;
    try {
      this.initAudio();
      if (!this.audioCtx) return;

      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      const now = this.audioCtx.currentTime;
      notes.forEach((freq, i) => {
        const osc = this.audioCtx!.createOscillator();
        const gain = this.audioCtx!.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.12);
        gain.gain.setValueAtTime(0.001, now + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.3 * this.volume, now + i * 0.12 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.12 + 0.6);
        osc.connect(gain);
        gain.connect(this.audioCtx!.destination);
        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 0.7);
      });
    } catch {
      // Audio fallback
    }
  }

  /**
   * Speak spoken voice guidance via speechSynthesis
   */
  public speak(text: string) {
    if (!this.speechEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }
    try {
      window.speechSynthesis.cancel(); // Stop any pending utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.05;
      utterance.pitch = 1.0;
      utterance.volume = this.volume;
      window.speechSynthesis.speak(utterance);
    } catch {
      // SpeechSynthesis error ignored
    }
  }
}

export const soundCtrl = new SoundController();
