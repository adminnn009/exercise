import React from 'react';
import { BreathingGuide } from '../components/BreathingGuide';
import { BookOpen, ShieldCheck, Heart, Wind, Flame, Sun, Sparkles } from 'lucide-react';

export const GuideView: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto px-4 py-4 space-y-4 pb-24 text-xs">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-amber-400" />
          The Beginner's Calisthenics Guide
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Foundational principles of joint longevity, progressive overload, breathing, and posture.
        </p>
      </div>

      {/* Interactive 4-6 Calming Breathing Tool */}
      <BreathingGuide />

      {/* Section 1: The Zero-to-Pushup Philosophy */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <Flame className="w-4 h-4" />
          <span>Why Beginners Fail at Push-ups (And How We Fix It)</span>
        </div>
        <p className="text-slate-300 leading-relaxed">
          Most beginners attempt floor push-ups on Day 1, which requires pressing approximately 64% of total bodyweight immediately. For an untrained shoulder girdle and wrist tendon system, this leads directly to wrist impingement, neck tension, and discouragement.
        </p>
        <p className="text-slate-300 leading-relaxed">
          CalisStart utilizes <strong>lever mechanical scaling</strong>:
        </p>
        <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px]">
          <div><strong className="text-amber-300">Tier 1: Wall Push-ups</strong> — Only ~30% bodyweight. Teaches shoulder retraction without wrist strain.</div>
          <div><strong className="text-amber-300">Tier 2: Incline Push-ups</strong> — ~45% bodyweight on sturdy counters. Builds serratus stability.</div>
          <div><strong className="text-amber-300">Tier 3: Knee Push-ups</strong> — ~50% bodyweight. Teaches hip and pelvic bracing.</div>
          <div><strong className="text-amber-300">Tier 4: Negative Push-ups</strong> — Slow 4-second descent overload to condition eccentric muscle fibers.</div>
          <div><strong className="text-amber-300">Tier 5: Full Push-ups</strong> — Floor mastery with locked core and 45° elbow arrow path.</div>
        </div>
      </div>

      {/* Section 2: Warm-up & Lymphatic Circulation */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
        <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
          <Sun className="w-4 h-4" />
          <span>Warm-Up Science & Morning Circulation</span>
        </div>
        <p className="text-slate-300 leading-relaxed">
          The lymphatic system does not have a central pump like the heart; it relies entirely on muscular contraction, deep diaphragm breathing, and gravity. Our 5-minute warm-up uses low-amplitude rhythmic movement (arm waves, soft hops, gentle tapping) to warm synovial joint fluid before any resistance work begins.
        </p>
      </div>

      {/* Section 3: Breathing Mechanics */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
          <Wind className="w-4 h-4" />
          <span>Breathing: The Natural Core Brace</span>
        </div>
        <ul className="list-disc list-inside space-y-1.5 text-slate-300 pl-1 leading-relaxed">
          <li><strong>On the Lowering (Eccentric) Phase:</strong> Inhale smoothly through the nose. Allow the ribcage to expand 360 degrees.</li>
          <li><strong>On the Pushing (Concentric) Phase:</strong> Exhale forcefully through pursed lips. This naturally activates the transverse abdominis, protecting the lumbar spine.</li>
          <li><strong>Never Hold Your Breath (Valsalva):</strong> Beginners should avoid holding breath to avoid unnecessary spikes in blood pressure.</li>
        </ul>
      </div>

      {/* Section 4: Daily Posture & Desk Habits */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
          <Sparkles className="w-4 h-4" />
          <span>Desk Worker Posture Habits</span>
        </div>
        <p className="text-slate-300 leading-relaxed">
          Thirty minutes of daily exercise cannot fully undo 10 hours of slouching. Supplement your daily session with these micro-habits:
        </p>
        <div className="space-y-1.5 text-slate-300 pl-1">
          <p>• <strong>The 30-Minute Chin Tuck:</strong> Every 30 minutes at your desk, pull your ears back over your shoulders for 3 seconds.</p>
          <p>• <strong>Eye Horizon Break:</strong> Look at an object 20+ feet away every 20 minutes to relax ciliary eye muscles.</p>
          <p>• <strong>Unclench the Jaw:</strong> Notice when you are biting teeth together. Rest tongue gently on roof of mouth behind front teeth.</p>
        </div>
      </div>

      {/* Section 5: Strict Safety Principles */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-rose-900/40 space-y-2.5">
        <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
          <ShieldCheck className="w-4 h-4" />
          <span>Strict Safety Principles & Red Flags</span>
        </div>
        <p className="text-slate-300 leading-relaxed">
          CalisStart is built on evidence-based physical conditioning:
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1">
          <li>No neck-hanging, heavy neck weights, or extreme neck manipulation.</li>
          <li>No hard hitting or aggressive pressing on face bones (bonesmashing or forceful jaw pushing).</li>
          <li>No violent ballistic bouncing stretches.</li>
          <li>If you feel sharp joint pain, clicking accompanied by discomfort, numbness, or dizziness: stop immediately.</li>
        </ul>
      </div>
    </div>
  );
};
